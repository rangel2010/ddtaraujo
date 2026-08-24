import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { PortableTextBlock } from '@portabletext/react';
import type { Image as SanityImage } from 'sanity';
import CTASection from '@/components/CTASection';
import PortableText from '@/components/PortableText';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';
import { postBySlugQuery, postSlugsQuery, relatedPostsQuery } from '@/sanity/lib/queries';
import { servicesBySlug } from '@/lib/services';
import { siteConfig, whatsappLink } from '@/lib/site-config';

type Params = { params: { slug: string } };

// ISR: publicou no Studio, aparece aqui em até 60s — sem redeploy.
export const revalidate = 60;

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  body: PortableTextBlock[];
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  relatedServices?: string[];
  coverImage?: SanityImage;
  coverImageAlt?: string;
  coverImageCredit?: string;
  coverImageCreditUrl?: string;
  category?: { title: string; slug: string; description?: string };
  author?: { name: string; role?: string };
};

type RelatedPost = {
  _id: string;
  title: string;
  slug: string;
  category?: { title: string };
  coverImage?: SanityImage;
  coverImageAlt?: string;
};

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({ query: postSlugsQuery, tags: ['post'] });
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await sanityFetch<Post | null>({
    query: postBySlugQuery,
    params: { slug: params.slug },
    tags: ['post'],
  });
  if (!post) return {};

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;

  return {
    title,
    description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: post.coverImage
        ? [urlFor(post.coverImage).width(1200).height(630).url()]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = await sanityFetch<Post | null>({
    query: postBySlugQuery,
    params: { slug: params.slug },
    tags: ['post'],
  });
  if (!post) notFound();

  const related = await sanityFetch<RelatedPost[]>({
    query: relatedPostsQuery,
    params: { slug: params.slug },
    tags: ['post'],
  });

  const description = post.metaDescription || post.excerpt;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    ...(post.coverImage ? { image: urlFor(post.coverImage).width(1200).height(630).url() } : {}),
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo-nova-color.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  // Serviços relacionados: o slug vem do Sanity, o nome vem de lib/services.
  const relatedServices = (post.relatedServices || [])
    .map((slug) => {
      const service = servicesBySlug[slug];
      return service ? { slug, label: service.title } : null;
    })
    .filter((s): s is { slug: string; label: string } => s !== null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-ink-900 py-20 text-white">
        <div className="absolute inset-0">
          {post.coverImage && (
            <Image
              src={urlFor(post.coverImage).width(1920).auto('format').url()}
              alt={post.coverImageAlt || post.title}
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/85 via-ink-800/80 to-brand-900/85" />
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl">
            <nav className="mb-6 flex items-center gap-2 text-sm text-ink-300">
              <Link href="/blog" className="hover:text-yellow-400">Blog</Link>
              <span>/</span>
              <span className="text-white">{post.category?.title}</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
              {post.category?.title}
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-300">
              <span>Por {post.author?.name || 'Araújo Dedetizadora'}</span>
              <span>·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>
              <span>·</span>
              <span>{post.readTime} min de leitura</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="mx-auto max-w-3xl">
            <PortableText value={post.body} />

            {post.coverImageCredit && (
              <p className="mt-10 text-xs italic text-ink-500 dark:text-ink-400">
                Foto: {post.coverImageCredit}
                {post.coverImageCreditUrl && (
                  <>
                    {' / '}
                    <a
                      href={post.coverImageCreditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      ver original
                    </a>
                  </>
                )}
              </p>
            )}

            {relatedServices.length > 0 && (
              <div className="mt-8 rounded-2xl border border-yellow-400/40 bg-yellow-50 p-6 text-center dark:bg-ink-700">
                <p className="text-ink-700 dark:text-ink-300">
                  Conheça nosso serviço de{' '}
                  {relatedServices.map((s, i) => (
                    <span key={s.slug}>
                      {i > 0 && (i === relatedServices.length - 1 ? ' e ' : ', ')}
                      <Link
                        href={`/servicos/${s.slug}`}
                        className="font-semibold text-yellow-600 underline-offset-2 hover:underline dark:text-yellow-400"
                      >
                        {s.label}
                      </Link>
                    </span>
                  ))}
                  .
                </p>
              </div>
            )}

            <div className="mt-8 rounded-2xl bg-ink-50 p-6 text-center dark:bg-ink-700">
              <p className="text-ink-700 dark:text-ink-300">
                Precisa de ajuda profissional?{' '}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-yellow-600 underline-offset-2 hover:underline dark:text-yellow-400"
                >
                  Fale conosco no WhatsApp
                </a>{' '}
                ou ligue {siteConfig.phoneDisplay}.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 dark:text-yellow-400"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar para todos os artigos
              </Link>
            </div>
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-ink-50 dark:bg-ink-800">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white md:text-3xl">
                Continue lendo
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p._id}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-2xl border border-ink-200 bg-white overflow-hidden hover:border-brand-300 hover:shadow-md transition dark:border-ink-600 dark:bg-ink-700"
                  >
                    <div className="relative h-32 overflow-hidden bg-ink-200 dark:bg-ink-600">
                      {p.coverImage && (
                        <Image
                          src={urlFor(p.coverImage).width(600).height(340).auto('format').url()}
                          alt={p.coverImageAlt || p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="self-start rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:bg-yellow-400/15 dark:text-yellow-400">
                        {p.category?.title}
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold text-ink-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
