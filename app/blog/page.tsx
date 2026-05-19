import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Blog | Dicas e Notícias sobre Controle de Pragas',
  description:
    'Artigos, dicas e notícias sobre controle de pragas, dedetização, prevenção e segurança. Conteúdo da Araújo Dedetizadora em Londrina.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    slug: 'como-prevenir-escorpioes',
    title: 'Como prevenir escorpiões em casa: 8 passos práticos',
    excerpt:
      'Escorpiões são atraídos por umidade e abrigos. Veja como tornar sua casa menos atrativa e reduzir o risco de acidentes.',
    date: '2026-04-12',
    category: 'Prevenção',
  },
  {
    slug: 'sinais-de-cupim-na-madeira',
    title: 'Como identificar cupim na madeira antes que seja tarde',
    excerpt:
      'Cupins agem em silêncio. Conheça os sinais que indicam infestação e o que fazer assim que perceber.',
    date: '2026-03-28',
    category: 'Cupins',
  },
  {
    slug: 'caixa-dagua-quanto-tempo-limpar',
    title: 'De quanto em quanto tempo a caixa d\'água deve ser limpa?',
    excerpt:
      'A ANVISA recomenda limpeza semestral. Entenda o porquê e como funciona o serviço profissional.',
    date: '2026-02-15',
    category: 'Higienização',
  },
];

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
              <article key={p.slug} className="group flex flex-col rounded-2xl border border-ink-200 bg-white overflow-hidden hover:border-brand-300 hover:shadow-md transition dark:border-ink-600 dark:bg-ink-700">
                <div className="h-48 bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center">
                  <span className="text-white/30 font-display text-6xl font-bold">{p.category[0]}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-ink-500 dark:text-ink-400">
                    <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 font-medium text-yellow-700 dark:bg-yellow-400/15 dark:text-yellow-400">{p.category}</span>
                    <span>{new Date(p.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-ink-900 group-hover:text-brand-700">
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
          <div className="mt-12 rounded-2xl bg-ink-50 p-8 text-center dark:bg-ink-700">
            <p className="text-ink-700 dark:text-ink-300">
              <strong className="text-ink-900 dark:text-white">Mais artigos em breve.</strong> Estamos publicando novos conteúdos sobre prevenção, identificação de pragas e legislação sanitária.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
