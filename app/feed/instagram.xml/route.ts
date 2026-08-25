import { groq } from 'next-sanity';
import type { Image as SanityImage } from 'sanity';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';
import { siteConfig } from '@/lib/site-config';

/**
 * Feed RSS que alimenta a automação de Instagram (Make).
 *
 * Por que RSS e não consulta direta ao Sanity: o módulo de RSS do Make guarda
 * qual foi o último item processado, então a deduplicação sai de graça. É o
 * mesmo esquema que já roda no GT Overlander.
 *
 * Diferenças em relação ao feed do GT, ambas propositais:
 *  - `description` traz a legenda escrita à mão (instagramCaption), não o excerpt
 *  - `enclosure` traz a arte 1080x1080 já pronta, sem precisar forçar o tamanho
 *    na URL do CDN
 *
 * Só entra post publicado (publishedAt no passado) que tenha arte E legenda.
 * Post agendado para o futuro fica de fora até a data chegar.
 */

export const revalidate = 300;

type FeedPost = {
  title: string;
  slug: string;
  publishedAt: string;
  instagramCaption: string;
  instagramImage: SanityImage;
};

const feedQuery = groq`
  *[_type == "post"
    && defined(slug.current)
    && defined(instagramImage)
    && defined(instagramCaption)
    && publishedAt <= now()
  ] | order(publishedAt desc)[0...10] {
    title,
    "slug": slug.current,
    publishedAt,
    instagramCaption,
    instagramImage
  }
`;

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const posts = await sanityFetch<FeedPost[]>({ query: feedQuery, tags: ['post'] });

  const items = posts
    .map((post) => {
      const link = `${siteConfig.url}/blog/${post.slug}`;
      // fm=jpg explícito: o Instagram não garante suporte a webp, e o auto=format
      // do Sanity entrega webp pra quem aceita.
      const image = urlFor(post.instagramImage)
        .width(1080)
        .height(1080)
        .format('jpg')
        .quality(90)
        .url();

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.instagramCaption}]]></description>
      <enclosure url="${escapeXml(image)}" type="image/jpeg" length="0" />
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} — Instagram</title>
    <link>${escapeXml(siteConfig.url)}/blog</link>
    <description>Fila de publicação do Instagram gerada a partir do blog.</description>
    <language>pt-BR</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
