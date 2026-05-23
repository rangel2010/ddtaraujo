import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Quem Somos | Araújo Dedetizadora há 40 anos em Londrina',
  description: 'Conheça a história da Araújo Dedetizadora: mais de 40 anos em Londrina e todo o Paraná. Credenciados ANVISA, IAP e SESA, com técnicos especializados e produtos certificados.',
  alternates: { canonical: '/sobre' },
};

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 py-20 text-white">
        <div className="absolute inset-0">
          {/* Mobile: foto vertical centralizada */}
          <Image
            src="/sobre-hero.jpeg"
            alt="Profissional Araújo aplicando dedetização em ambiente residencial"
            fill
            sizes="100vw"
            priority
            className="object-contain object-center opacity-50 md:hidden"
          />
          {/* Desktop: foto horizontal cobrindo o hero */}
          <Image
            src="/sobre-hero-desktop.avif"
            alt="Profissional Araújo aplicando dedetização em ambiente residencial"
            fill
            sizes="100vw"
            priority
            className="hidden md:block object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/75 via-ink-900/65 to-brand-900/75" />
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <img src="/badge-new.png" alt="40 anos de tradição" className="mx-auto h-32 w-32 md:h-40 md:w-40 drop-shadow-2xl opacity-90" />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600/20 px-4 py-1.5 text-sm font-medium text-brand-300 backdrop-blur">
              Nossa história
            </div>
            <h1 className="mt-4 text-4xl font-bold font-display text-white sm:text-5xl">
              40 anos de história protegendo Londrina
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              A Araújo nasceu com um propósito simples e firme: oferecer controle de pragas profissional, seguro e com resultados duradouros para famílias e empresas do Paraná.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <div className="eyebrow">Nossa Missão</div>
            <h2 className="section-title mt-2">Proteger pessoas e ambientes com responsabilidade</h2>
            <div className="mt-6 space-y-4 text-ink-700 dark:text-ink-300 text-lg leading-relaxed">
              <p>Somos referência no controle de pragas em Londrina e em todo o estado do Paraná. Buscamos cada vez mais inovar e aperfeiçoar nossos equipamentos e técnicas de aplicação.</p>
              <p>A Araújo vai além do controle de pragas: protegemos você hoje e desenvolvemos novas soluções para a manutenção da sua proteção amanhã. Cada serviço é executado com responsabilidade técnica, ambiental e social.</p>
              <p>Somos uma empresa especializada no controle profissional de pragas há mais de 40 anos, com técnicos qualificados e comprometidos. Somos credenciados nos principais órgãos vigentes — ANVISA, IAP, SESA — atuando em conformidade com a Resolução nº 1153/2024 da SESA e nº 622/2022 da ANVISA. Todos os produtos utilizados são devidamente registrados junto ao Ministério da Saúde.</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl bg-yellow-50 p-8 border border-yellow-200 dark:bg-yellow-400/10 dark:border-yellow-500/30">
              <div className="font-display text-5xl font-bold text-yellow-500">+40</div>
              <div className="mt-2 text-lg font-semibold text-ink-900 dark:text-white">anos de experiência</div>
              <p className="mt-2 text-sm text-ink-700 dark:text-ink-300">Acumulando conhecimento técnico desde {siteConfig.business.foundedYear} no combate às pragas urbanas mais resistentes.</p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-200 p-8 dark:bg-ink-700 dark:border-ink-600">
              <div className="font-display text-5xl font-bold text-yellow-500">+15k</div>
              <div className="mt-2 text-lg font-semibold text-ink-900 dark:text-white">clientes atendidos</div>
              <p className="mt-2 text-sm text-ink-700 dark:text-ink-300">Residências, comércios, indústrias e condomínios em Londrina e todo o Paraná.</p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-200 p-8 dark:bg-ink-700 dark:border-ink-600">
              <div className="font-display text-5xl font-bold text-yellow-500">100%</div>
              <div className="mt-2 text-lg font-semibold text-ink-900 dark:text-white">credenciados</div>
              <p className="mt-2 text-sm text-ink-700 dark:text-ink-300">ANVISA, IAP, SESA e responsabilidade técnica de profissional habilitado (CRQ).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink-50 dark:bg-ink-800">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Nossos Valores</div>
            <h2 className="section-title mt-2">O que nos move</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Segurança em primeiro lugar', desc: 'Todos os produtos são registrados na ANVISA. Nossos técnicos seguem rigorosamente os protocolos de NR-33 e NR-35.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Responsabilidade ambiental', desc: 'Usamos quantidade mínima de produto para máxima eficácia. Manejo de fauna (morcegos e pombos) sem matar os animais.', icon: 'M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1 .2 1.5.2C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z' },
              { title: 'Compromisso com resultado', desc: 'Garantia escrita em todos os serviços. Se a praga voltar dentro do prazo, retornamos sem custo adicional.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((v) => (
              <div key={v.title} className="card group text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700 transition group-hover:bg-yellow-500 group-hover:text-white dark:bg-yellow-400/15 dark:text-yellow-400 dark:group-hover:bg-yellow-500 dark:group-hover:text-white">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={v.icon}/></svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Credenciamentos</div>
            <h2 className="section-title mt-2">Qualificações técnicas</h2>
            <p className="section-subtitle mx-auto">Operamos em conformidade com toda a legislação sanitária e ambiental brasileira.</p>
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
              <div key={c.name} className="rounded-2xl border border-ink-200 bg-ink-50 p-4 text-center dark:border-ink-600 dark:bg-ink-700">
                <div className="font-display text-xl font-bold text-brand-700 dark:text-yellow-400">{c.name}</div>
                <div className="mt-1 text-xs text-ink-600 dark:text-ink-300">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
