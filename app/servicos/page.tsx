import Link from 'next/link';
import type { Metadata } from 'next';
import { services, categoryLabels } from '@/lib/services';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Todos os Serviços | Controle de Pragas em Londrina',
  description:
    'Lista completa dos serviços da Araújo Dedetizadora em Londrina: dedetização, desratização, descupinização, controle de morcegos, pombos, limpeza de caixas e mais.',
  alternates: { canonical: '/servicos' },
};

const grouped = services.reduce<Record<string, typeof services>>(
  (acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  },
  {}
);

export default function ServicosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
              Nossos Serviços
            </div>
            <h1 className="mt-6 text-4xl font-bold font-display text-white sm:text-5xl">
              Controle profissional de qualquer praga urbana
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              Soluções completas para residências, empresas, indústrias e condomínios em Londrina e todo o Paraná. Escolha o serviço e conheça os detalhes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12">
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat}>
                <div className="mb-6 flex items-baseline gap-4">
                  <h2 className="font-display text-2xl font-bold text-ink-900 md:text-3xl">
                    {categoryLabels[cat as keyof typeof categoryLabels]}
                  </h2>
                  <div className="h-px flex-1 bg-ink-200" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicos/${s.slug}`}
                      className="card group"
                    >
                      <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                        {s.hero.subheadline}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                        Saiba mais
                        <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
