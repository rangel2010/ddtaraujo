import Link from 'next/link';
import { services, categoryLabels } from '@/lib/services';
import { whatsappLink, phoneLink, siteConfig } from '@/lib/site-config';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

const heroFaqs = [
  { question: 'Quanto tempo leva para fazer uma dedetização?', answer: 'Uma dedetização residencial padrão leva entre 1 e 3 horas, dependendo do tamanho do imóvel e da praga combatida. Para empresas e condomínios, o tempo é definido conforme o cronograma do contrato.' },
  { question: 'Os produtos são seguros para crianças e pets?', answer: 'Sim. Trabalhamos exclusivamente com produtos registrados na ANVISA. Temos opções antialérgicas e inodoras, e nosso técnico orienta o tempo de reentrada após cada serviço (geralmente 2 a 4 horas).' },
  { question: 'Vocês atendem em quais cidades?', answer: 'Sediados em Londrina, atendemos toda a região metropolitana e todo o estado do Paraná para contratos empresariais e condominiais.' },
  { question: 'Como funciona a garantia?', answer: 'Todos os nossos serviços possuem garantia escrita de 3 a 6 meses, dependendo do tipo de praga e ambiente. Se a praga voltar dentro do prazo, retornamos sem custo adicional.' },
  { question: 'Preciso desocupar o imóvel?', answer: 'Na maioria dos casos, recomendamos que pessoas e pets fiquem fora do ambiente durante a aplicação e por algumas horas após. Em serviços específicos como gel para baratas, a reentrada é imediata.' },
  { question: 'Emitem nota fiscal e certificado?', answer: 'Sim. Emitimos nota fiscal e certificado válido para apresentação à vigilância sanitária, síndicos, auditorias e demais órgãos.' },
];

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: heroFaqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

const stats = [
  { value: '40+', label: 'Anos de experiência' },
  { value: '15.000+', label: 'Clientes atendidos' },
  { value: '4,8★', label: 'No Google' },
  { value: '24h', label: 'Atendimento WhatsApp' },
];

const featuredServices = services.filter((s) => [
  'dedetizacao-em-londrina','desratizacao','descupinizacao','controle-de-pragas-em-londrina',
  'controle-de-morcegos-em-londrina','dedetizacao-para-escorpioes-em-londrina',
  'dedetizacao-de-baratas','limpeza-de-caixas-de-agua-em-londrina',
].includes(s.slug));

const groupedAll = services.reduce<Record<string, typeof services>>((acc, s) => {
  if (!acc[s.category]) acc[s.category] = [];
  acc[s.category].push(s);
  return acc;
}, {});

const reviews = [
  { name: 'Lúcia', role: 'Londrichapas', date: '2 meses atrás', text: 'Somos clientes a anos e sempre fomos bem atendidos, horários flexíveis, dedetização completa e bem aplicada, equipe bem preparada e suporte pós-venda muito bom. Estão de parabéns pelos serviços prestados.' },
  { name: 'Gabriela Mendonça', role: 'Local Guide · 20 avaliações', date: '3 meses atrás', text: 'Estávamos passando por um problema delicado com cupins e morcegos, a empresa foi essencial para solucionar tudo com agilidade e profissionalismo. Além da eficácia do serviço, destaco o atendimento atencioso e transparente da equipe.' },
  { name: 'Mariana Simioni', role: 'Clínica Veterinária — Tamarana', date: '3 meses atrás', text: 'Na Clínica Veterinária em Tamarana fomos muito bem atendidos!! Suspeitávamos de alguns focos e o dedetizador não mediu esforços para encontrar, adentrou no forro e fez todo trabalho!!' },
  { name: 'Estevão Guerra', role: 'Cliente · 5 avaliações', date: '2 meses atrás', text: 'Trabalho excelente! Profissionais pontuais, educados e competentes! Super recomendo! E realmente funciona a dedetização.' },
  { name: 'Sarai Saias', role: 'Cliente', date: '2 meses atrás', text: 'Prestaram um excelente trabalho na minha empresa. Entrei em contato e fizeram o agendamento rápido, o serviço prestado e resultado foi ótimo!' },
];

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/ARAUJO+DEDETIZADORA+EM+LONDRINA,+CONTROLE+DE+PRAGAS/@-23.3023612,-51.1816474,17z/data=!4m8!3m7!1s0x94eb43362244fe61:0xba5a8a2e638cf0f0!8m2!3d-23.3023612!4d-51.1816474!9m1!1b1';
const GOOGLE_WRITE_REVIEW_URL = GOOGLE_REVIEWS_URL;

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Star = () => (
  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
);

const Check = ({ cls = 'h-5 w-5 text-accent-400' }: { cls?: string }) => (
  <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(34,197,94,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(34,197,94,0.3) 0%, transparent 50%)' }} />
        <div className="container relative grid gap-12 py-16 md:grid-cols-2 md:py-24 lg:py-32">
          <div className="text-white animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
              Dedetizadora em Londrina há mais de 40 anos
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight font-display text-white sm:text-5xl lg:text-6xl">
              Sua casa ou empresa <span className="text-yellow-400">livre de pragas</span> — com garantia.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-200 max-w-xl">
              Controle profissional de baratas, ratos, cupins, escorpiões, morcegos e mais. Atendimento residencial, comercial, industrial e condomínios em Londrina e todo o Paraná.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink('Olá! Gostaria de solicitar um orçamento.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon />
                Orçamento Grátis
              </a>
              <a href={phoneLink} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-300">
              <div className="flex items-center gap-2"><Check /> Garantia escrita</div>
              <div className="flex items-center gap-2"><Check /> Credenciados ANVISA</div>
              <div className="flex items-center gap-2"><Check /> Seguro para pets</div>
            </div>
          </div>

          <div className="relative hidden md:block animate-fade-in">
            <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm border border-white/10 shadow-2xl">
              {/* Card Avaliação Google */}
              <div className="rounded-2xl bg-white/10 p-5 border border-white/10 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <GoogleIcon />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-ink-300 font-bold">Avaliação verificada</div>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-display text-3xl font-bold text-white leading-none">4,8</span>
                      <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => <Star key={i} />)}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-sm text-ink-300"><strong className="text-white">97 avaliações</strong> reais de clientes</span>
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent-400 hover:text-accent-400">Ver →</a>
                </div>
              </div>

              {/* Stats grid com ícones grandes */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { value: '40+', label: 'Anos de experiência', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                  { value: '15.000+', label: 'Clientes atendidos', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                  { value: '100%', label: 'Garantia escrita', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                  { value: '24h', label: 'Atendimento WhatsApp', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white/10 p-5 border border-white/10 backdrop-blur transition hover:bg-white/15">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/15 ring-1 ring-accent-400/40">
                      <svg className="h-7 w-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon}/></svg>
                    </div>
                    <div className="mt-4 font-display text-3xl font-bold text-white leading-none">{s.value}</div>
                    <div className="mt-1 text-xs text-ink-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-ink-200 bg-ink-50 dark:border-ink-600 dark:bg-ink-700 py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: 'ANVISA', sub: 'Credenciados' },
              { label: 'IAP', sub: 'Inst. Ambiental' },
              { label: 'SESA', sub: 'Res. 1153/2024' },
              { label: 'CRQ', sub: 'Resp. Técnico' },
            ].map((c) => (
              <div key={c.label} className="text-center">
                <div className="text-xl font-bold text-ink-900 dark:text-white font-display">{c.label}</div>
                <div className="text-xs uppercase tracking-wider text-ink-500 dark:text-ink-300">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Nossos Serviços</div>
            <h2 className="section-title mt-2">Soluções completas em controle de pragas</h2>
            <p className="section-subtitle mx-auto">Atendimento profissional para qualquer praga urbana, com produtos registrados e garantia escrita.</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}`} className="card group flex flex-col !bg-ink-50 dark:!bg-ink-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700 transition group-hover:bg-yellow-500 group-hover:text-white dark:bg-yellow-400/15 dark:text-yellow-400">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">{s.shortTitle}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-600 dark:text-ink-300">{s.hero.subheadline}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                  Saiba mais
                  <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/servicos" className="btn-secondary">
              Ver todos os serviços
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section bg-ink-50 dark:bg-ink-800">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="eyebrow">Quem Somos</div>
            <h2 className="section-title mt-2">40 anos protegendo famílias e empresas em Londrina</h2>
            <p className="mt-6 text-lg text-ink-700 dark:text-ink-300">A Araújo Dedetizadora é referência no controle profissional de pragas em Londrina e em todo o Paraná. Investimos continuamente em tecnologia, capacitação técnica e produtos de última geração — sempre com responsabilidade ambiental e segurança para você.</p>
            <ul className="mt-8 space-y-3">
              {['Técnicos certificados e em treinamento contínuo','Produtos registrados ANVISA com NR-33 e NR-35','Conformidade total com SESA e ANVISA','Equipamentos modernos e EPIs completos','Atendimento personalizado de pequeno a grande porte'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check cls="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
                  <span className="text-ink-700 dark:text-ink-300">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/sobre" className="btn-primary mt-8">Conheça nossa história</Link>
          </div>

          <div className="grid gap-4">
            {[
              { num: '01', title: 'Solicite o orçamento', desc: 'Pelo WhatsApp ou telefone, sem compromisso.' },
              { num: '02', title: 'Recebemos sua solicitação', desc: 'Avaliamos o caso e marcamos a visita técnica.' },
              { num: '03', title: 'Executamos o serviço', desc: 'Aplicação profissional com EPIs e produtos certificados.' },
              { num: '04', title: 'Garantia e acompanhamento', desc: 'Você recebe certificado e suporte pós-serviço.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-700 dark:bg-ink-700">
                <div className="text-3xl font-bold text-accent-500 font-display">{step.num}</div>
                <div>
                  <div className="font-semibold text-ink-900 dark:text-white">{step.title}</div>
                  <div className="text-sm text-ink-600 dark:text-ink-300">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Catálogo Completo</div>
            <h2 className="section-title mt-2">Todos os serviços organizados por categoria</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(groupedAll).map(([cat, items]) => (
              <div key={cat} className="rounded-2xl border border-ink-200 bg-ink-50 p-6 dark:border-ink-700 dark:bg-ink-700">
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">{categoryLabels[cat as keyof typeof categoryLabels]}</h3>
                <ul className={`mt-4 ${items.length > 4 ? 'grid grid-cols-2 gap-x-4 gap-y-2' : 'space-y-2'}`}>
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/servicos/${s.slug}`} className="group flex items-center justify-between text-sm text-ink-700 hover:text-brand-700 dark:text-ink-200 dark:hover:text-yellow-400">
                        <span>{s.shortTitle}</span>
                        <svg className="h-4 w-4 opacity-0 transition group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-ink-50 dark:bg-ink-800">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Depoimentos reais</div>
            <h2 className="section-title mt-2">O que nossos clientes dizem</h2>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-sm border border-ink-200">
              <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => <Star key={i} />)}</div>
              <div className="text-sm"><span className="font-bold text-ink-900">4,8</span><span className="text-ink-600"> · 97 avaliações no </span><span className="font-semibold text-ink-900 dark:text-white">Google</span></div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm dark:bg-ink-700">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => <Star key={i} />)}</div>
                  <GoogleIcon />
                </div>
                <p className="mt-4 flex-1 text-ink-700 dark:text-ink-200">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 border-t border-ink-100 pt-4 dark:border-ink-600">
                  <div className="font-semibold text-ink-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-ink-500 dark:text-ink-300">{t.role} · {t.date}</div>
                </div>
              </div>
            ))}
            <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50 p-6 text-center transition hover:border-brand-600 hover:bg-brand-100 dark:border-brand-700 dark:bg-brand-900/20 dark:hover:bg-brand-900/40 dark:hover:border-brand-500">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm"><GoogleIcon /></div>
              <h3 className="mt-4 font-display text-lg font-bold text-brand-800 dark:text-brand-200">Você é nosso cliente?</h3>
              <p className="mt-2 text-sm text-ink-700 dark:text-ink-300">Conta sua experiência no Google e ajude outras pessoas a encontrarem um serviço de qualidade.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-300">
                Deixar avaliação
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          </div>
          <div className="mt-10 text-center">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Ver todas as 97 avaliações no Google
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </section>

      <FAQ items={heroFaqs} />

      <CTASection />
    </>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    shield: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>),
    'clipboard-check': (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>),
    bug: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19l3 3 3-3M12 8v13M3 12h2m14 0h2M5 7l2 2m10-2l-2 2M6 17l2-2m8 2l-2-2M12 4a4 4 0 014 4v4a4 4 0 11-8 0V8a4 4 0 014-4z"/></svg>),
    rat: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM3 21l5-5m0 0a3 3 0 104.243-4.243M8 16a3 3 0 11-2.121-5.121"/></svg>),
    tree: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0-18l-4 4m4-4l4 4M5 21h14"/></svg>),
    moon: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>),
    bird: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12c0 5 4 9 9 9s9-4 9-9-4-9-9-9c-2 0-4 .5-5.5 1.5M3 12l4-2m-4 2l4 2m-1-9l2 3m-2-3l-2 3"/></svg>),
    'alert-triangle': (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>),
    droplet: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>),
    spray: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2m12-4V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2"/></svg>),
    building: (<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>),
  };
  return icons[name] || icons.shield;
}
