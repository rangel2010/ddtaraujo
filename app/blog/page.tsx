import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Dicas e Notícias sobre Controle de Pragas',
  description:
    'Artigos, dicas e notícias sobre controle de pragas, dedetização, prevenção e segurança. Conteúdo da Araújo Dedetizadora em Londrina.',
  alternates: { canonical: '/blog' },
};

// Ordenado do mais recente para o mais antigo
const posts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
              Blog
            </div>
            <h1 className="mt-6 text-4xl font-bold font-display text-white sm:text-5xl">
              Dicas e notícias sobre controle de pragas
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              Conteúdo escrito pela nossa equipe técnica para você prevenir, identificar e resolver problemas de pragas.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.slug} className="group flex flex-col rounded-2xl border border-ink-200 bg-ink-50 overflow-hidden hover:border-brand-300 hover:shadow-md transition dark:border-ink-600 dark:bg-ink-700">
                <div className="h-48 bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center">
                  <span className="text-white/30 font-display text-6xl font-bold">{p.category[0]}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-ink-500 dark:text-ink-400">
                    <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 font-medium text-yellow-700 dark:bg-yellow-400/15 dark:text-yellow-400">{p.category}</span>
                    <span>{new Date(p.date).toLocaleDateString('pt-BR')}</span>
                    <span>· {p.readingMinutes} min</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-ink-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                    {p.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-ink-600 dark:text-ink-300">{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                    Ler artigo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
