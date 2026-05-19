import type { Metadata } from 'next';
import Link from 'next/link';
import { bairros, zoneLabels } from '@/lib/bairros';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Onde Atendemos em Londrina | Bairros e Regiões | Araújo',
  description:
    'A Araújo Dedetizadora atende toda Londrina e região: Gleba Palhano, Centro, Cinco Conjuntos, Vila Casoni, Distrito Industrial e mais. Veja sua região.',
  alternates: { canonical: '/atendimento' },
};

const grouped = bairros.reduce<Record<string, typeof bairros>>((acc, b) => {
  if (!acc[b.zone]) acc[b.zone] = [];
  acc[b.zone].push(b);
  return acc;
}, {});

// Ordem das zonas na exibição
const zoneOrder: Array<keyof typeof zoneLabels> = ['central', 'sul', 'norte', 'leste', 'oeste', 'industrial'];

export default function AtendimentoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 py-16 text-white md:py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
            Onde atendemos
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Atendemos toda Londrina e região
          </h1>
          <p className="mt-6 text-lg text-ink-200">
            Mais de 40 anos protegendo residências, comércios, condomínios e indústrias em todos os bairros e cidades vizinhas. Encontre sua região abaixo para conhecer os detalhes do nosso atendimento na sua área.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="space-y-12">
            {zoneOrder.map((zone) => {
              const items = grouped[zone];
              if (!items || items.length === 0) return null;
              return (
                <div key={zone}>
                  <div className="mb-6 flex items-baseline gap-4">
                    <h2 className="font-display text-2xl font-bold text-ink-900 md:text-3xl dark:text-white">
                      {zoneLabels[zone]}
                    </h2>
                    <div className="h-px flex-1 bg-ink-200 dark:bg-ink-600" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((b) => (
                      <Link
                        key={b.slug}
                        href={`/atendimento/${b.slug}`}
                        className="group flex flex-col rounded-2xl border border-ink-200 bg-ink-50 p-5 transition hover:border-brand-300 hover:shadow-md dark:border-ink-600 dark:bg-ink-700 dark:hover:border-yellow-500"
                      >
                        <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-yellow-400">
                          {b.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-ink-600 dark:text-ink-300">
                          {b.profile}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                          Saiba mais
                          <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-ink-50 p-8 text-center dark:bg-ink-700">
            <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
              Não encontrou sua região?
            </h3>
            <p className="mt-3 text-ink-700 dark:text-ink-200">
              Atendemos Londrina e cidades vizinhas (Cambé, Ibiporã, Rolândia, Arapongas, entre outras) além dos bairros listados acima. Solicite seu orçamento informando sua localização — nossa equipe avalia e responde com o melhor atendimento para sua área.
            </p>
            <Link href="/orcamento" className="btn-whatsapp mt-6 inline-flex">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Pronto para resolver o problema na sua região?"
        subtitle="Monte seu pedido em poucos cliques. Atendemos em todos os bairros de Londrina e cidades vizinhas, com a mesma qualidade técnica."
      />
    </>
  );
}
