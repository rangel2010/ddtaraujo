import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postsSitemapQuery } from '@/sanity/lib/queries';
import { bairros } from '@/lib/bairros';
import { siteConfig } from '@/lib/site-config';

type SitemapPost = { slug: string; publishedAt: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticRoutes = [
    { url: siteConfig.url, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/sobre`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/servicos`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/contato`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/orcamento`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/garantia`, priority: 0.75, changeFrequency: 'yearly' as const },
    { url: `${siteConfig.url}/atendimento`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
  ].map((r) => ({ ...r, lastModified }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/servicos/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const posts = await sanityFetch<SitemapPost[]>({
    query: postsSitemapQuery,
    tags: ['post'],
  });

  const blogRoutes = posts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const bairroRoutes = bairros.map((b) => ({
    url: `${siteConfig.url}/atendimento/${b.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...bairroRoutes];
}
