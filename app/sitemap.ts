import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { blogPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { url: siteConfig.url, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/sobre`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/servicos`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/contato`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/orcamento`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
  ].map((r) => ({ ...r, lastModified }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/servicos/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
