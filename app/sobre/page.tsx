import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Quem Somos | Araújo Dedetizadora há 40 anos em Londrina',
  description:
    'Conheça a história da Araújo Dedetizadora: mais de 40 anos em Londrina e todo o Paraná. Credenciados ANVISA, IAP e SESA, com técnicos especializados e produtos certificados.',
  alternates: { canonical: '/sobre' },
};

export default function SobrePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-600/20 px-4 py-1.5 text-sm font-medium text-brand-300 backdrop-blur">
              Nossa história
            </div>
            <h1 className="mt-6 text-4xl font-bold font-display sm:text-5xl">
              40 anos de história protegendo Londrina
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              A Araújo Dedetizadora nasceu com um propósito simples e firme: oferecer controle de pragas profissional, seguro e com resultados duradouros para famílias e empresas do Paraná.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <div className="eyebrow">Nossa Missão</div>
            <h2 className="section-title mt-2">
              Proteger pessoas e ambientes com responsabilidade
            </h2>
            <div className="mt-6 space-y-4 text-ink-700 text-lg leading-relaxed">
              <p>
                Somos referência no controle de pragas em Londrina e em todo o estado do Paraná. Buscamos cada vez mais inovar e aperfeiçoar nossos equipamentos e técnicas de aplicação.
              </p>
              <p>
                A Araújo vai além do controle de pragas: protegemos você hoje e desenvolvemos novas soluções para a manutenção da sua proteção amanhã. Cada serviço é executado com responsabilidade técnica, ambiental e social.
              </p>
              <p>
                Somos uma empresa especializada no controle profissional de pragas há mais de 40 anos, com técnicos qualificados e comprometidos. Somos credenciados nos principais órgãos vigentes — ANVISA, IAP, SESA — atuando em conformidade com a Resolução nº 1153/2024 da SESA e nº 622/2022 da ANVISA. Todos os produtos utilizados são devidamente registrados junto ao Ministério da Saúde.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl bg-brand-50 p-8 border border-brand-100">
              <div className="font-display text-5xl font-bold text-brand-700">+40</div>
              <div className="mt-2 text-lg font-semibold text-ink-900">anos de experiência</div>
              <p className="mt-2 text-sm text-ink-700">
                Acumulando conhecimento técnico desde {siteConfig.business.foundedYear} no combate às pragas urbanas mais resistentes.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-200 p-8">
              <div className="font-display text-5xl font-bold text-brand-700">+15k</div>
              <div className="mt-2 text-lg font-semibold text-ink-900">clientes atendidos</div>
              <p className="mt-2 text-sm text-ink-700">
                Residências, comércios, indústrias e condomínios em Londrina e todo o Paraná.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-200 p-8">
              <div className="font-display text-5xl font-bold text-brand-700">100%</div>
              <div className="mt-2 text-lg font-semibold text-ink-900">credenciados</div>
              <p className="mt-2 text-sm text-ink-700">
                ANVISA, IAP, SESA e responsabilidade técnica de profissional habilitado (CRQ).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-ink-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Nossos Valores</div>
            <h2 className="section-title mt-2">O que nos move</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Segurança em primeiro lugar',
                desc: 'Todos os produtos são registrados na ANVISA. Nossos técnicos seguem rigorosamente os protocolos de NR-33 e NR-35.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Responsabilidade ambiental',
                desc: 'Usamos quantidade mínima de produto para máxima eficácia. Manejo de fauna (morcegos e pombos) sem matar os animais.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
              },
              {
                title: 'Compromisso com resultado',
                desc: 'Garantia escrita em todos os serviços. Se a praga voltar dentro do prazo, retornamos sem custo adicional.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((v) => (
              <div key={v.title} className="card text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={v.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Credenciamentos</div>
            <h2 className="section-title mt-2">Qualificações técnicas</h2>
            <p className="section-subtitle mx-auto">
              Operamos em conformidade com toda a legislação sanitária e ambiental brasileira.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: 'ANVISA', desc: 'Agência Nacional de Vigilância Sanitária' },
              { name: 'IAP', desc: 'Instituto Ambiental do Paraná' },
              { name: 'SESA', desc: 'Secretaria de Estado da Saúde' },
              { name: 'CRQ', desc: 'Conselho Regional de Química' },
              { name: 'NR-33', desc: 'Espaços Confinados' },
              { name: 'NR-35', desc: 'Trabalho em Altura' },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-ink-200 bg-white p-4 text-center">
                <div className="font-display text-xl font-bold text-brand-700">{c.name}</div>
                <div className="mt-1 text-xs text-ink-600">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
