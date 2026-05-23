import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, blogPostsBySlug } from '@/lib/blog';
import CTASection from '@/components/CTASection';
import { siteConfig, whatsappLink } from '@/lib/site-config';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = blogPostsBySlug[params.slug];
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPostsBySlug[params.slug];
  if (!post) notFound();

  // Outros posts (até 3) para "Continue lendo"
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-ink-900 py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/85 via-ink-800/80 to-brand-900/85" />
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl">
            <nav className="mb-6 flex items-center gap-2 text-sm text-ink-300">
              <Link href="/blog" className="hover:text-yellow-400">Blog</Link>
              <span>/</span>
              <span className="text-white">{post.category}</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
              {post.category}
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-300">
              <span>Por Araújo Dedetizadora</span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readingMinutes} min de leitura</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="mx-auto max-w-3xl">
            {post.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="mt-10 font-display text-2xl font-bold text-ink-900 dark:text-white md:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="mt-6 space-y-3">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-ink-700 dark:text-ink-300"
                      >
                        <svg
                          className="mt-1 h-5 w-5 flex-shrink-0 text-accent-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'strong') {
                return (
                  <p
                    key={i}
                    className="mt-6 font-semibold text-ink-900 dark:text-white"
                  >
                    {block.text}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="mt-6 text-lg leading-relaxed text-ink-700 dark:text-ink-300"
                >
                  {block.text}
                </p>
              );
            })}

            <p className="mt-10 text-xs italic text-ink-500 dark:text-ink-400">
              Foto: {post.coverCredit.name} /{' '}
              <a
                href={post.coverCredit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                Unsplash
              </a>
            </p>

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
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-2xl border border-ink-200 bg-white overflow-hidden hover:border-brand-300 hover:shadow-md transition dark:border-ink-600 dark:bg-ink-700"
                  >
                    <div className="relative h-32 overflow-hidden bg-ink-200 dark:bg-ink-600">
                      <Image
                        src={p.coverImage}
                        alt={p.coverAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="self-start rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:bg-yellow-400/15 dark:text-yellow-400">
                        {p.category}
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
