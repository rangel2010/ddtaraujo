import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Garantia Escrita | Araújo Dedetizadora',
  description:
    'A Araújo Dedetizadora oferece GAT — Garantia de Assistência Técnica — em todos os serviços. Saiba prazos, casos cobertos e como acionar.',
  alternates: { canonical: '/garantia' },
};

const prazos = [
  { servico: 'Dedetização residencial (insetos)', prazo: '3 a 6 meses', detalhe: 'Baratas, formigas, pulgas, aranhas, escorpiões' },
  { servico: 'Dedetização comercial', prazo: '1 mês', detalhe: 'Periodicidade conforme RDC 622/22 da ANVISA' },
  { servico: 'Desratização', prazo: '3 a 6 meses', detalhe: 'Com retornos para reposição de iscas' },
  { servico: 'Descupinização', prazo: '1 ano (até 5 anos em contratos preventivos)', detalhe: 'Garantia estendida em obras novas com barreira química' },
  { servico: 'Controle de morcegos', prazo: 'Até 5 anos', detalhe: 'Para a vedação estrutural após desalojamento' },
  { servico: 'Manejo de pombos', prazo: '5 a 10 anos', detalhe: 'Para espículas, redes e dispositivos instalados' },
  { servico: 'Percevejos', prazo: '30 a 45 dias após protocolo', detalhe: 'Inclui retorno obrigatório para quebrar ciclo de ovos' },
  { servico: 'Limpeza de caixa d\'água', prazo: '6 meses', detalhe: 'Periodicidade recomendada pela ANVISA' },
  { servico: 'CIPV / DAC (programas contínuos)', prazo: 'Durante toda a vigência do contrato', detalhe: 'Atendimento emergencial sem custo adicional' },
];

const cobertos = [
  'Reaparecimento da praga dentro do prazo de garantia',
  'Necessidade de reforço de aplicação por insucesso técnico',
  'Reposição de iscas e armadilhas em monitoramento',
  'Retorno para conferência da eficácia do tratamento',
  'Documentação técnica e certificados emitidos',
];

const naoCobertos = [
  'Reinfestações causadas por imóveis vizinhos sem tratamento',
  'Pragas diferentes daquela contratada inicialmente',
  'Danos materiais pré-existentes não declarados na vistoria',
  'Quebra de protocolo pelo cliente (ex: limpeza imediata após aplicação)',
  'Mudanças estruturais no imóvel após o serviço',
];

export default function GarantiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 py-16 text-white md:py-20">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(245,207,74,0.4) 0%, transparent 50%)' }} />
        <div className="container relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
              Nosso compromisso
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
              Garantia escrita em todos os serviços
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              A Araújo entrega GAT — Garantia de Assistência Técnica — em todo trabalho que executa. Se a praga voltar dentro do prazo combinado, a gente retorna sem custo até resolver. Documentação, prazos e responsabilidade técnica, por escrito.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/orcamento" className="btn-whatsapp">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicitar Orçamento
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Ver serviços
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/selo-garantia.png"
              alt="Selo Garantia Escrita Araújo"
              width={400}
              height={267}
              priority
              className="h-auto w-full max-w-sm drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* O que é a GAT */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="eyebrow">O que é a GAT</div>
          <h2 className="section-title mt-2">Garantia de Assistência Técnica por escrito</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700 dark:text-ink-200">
            <p>
              GAT é o nome técnico do compromisso documentado que a Araújo assume com cada cliente: <strong className="text-ink-900 dark:text-white">se a praga voltar dentro do prazo definido em contrato, retornamos sem cobrar nada até eliminar.</strong> Não é promessa verbal nem favor — é cláusula escrita, datada e assinada.
            </p>
            <p>
              Em cada serviço executado, o cliente recebe junto com o pagamento: laudo técnico com produtos utilizados (registros ANVISA), prazo de garantia definido, condições de cobertura e contatos diretos pra acionamento. Tudo em conformidade com a Resolução SESA 1153/2024 e RDC 622/2022 da ANVISA.
            </p>
          </div>
        </div>
      </section>

      {/* Prazos por serviço */}
      <section className="section bg-ink-50 dark:bg-ink-800">
        <div className="container max-w-5xl">
          <div className="text-center">
            <div className="eyebrow">Prazos de garantia</div>
            <h2 className="section-title mt-2">Quanto tempo cada serviço é coberto</h2>
            <p className="section-subtitle mx-auto">
              Os prazos abaixo são padrão — em casos específicos podem ser estendidos por contrato.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-600">
            <table className="w-full divide-y divide-ink-200 dark:divide-ink-600">
              <thead className="bg-ink-100 dark:bg-ink-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-ink-900 dark:text-white">Serviço</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-ink-900 dark:text-white">Prazo de garantia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200 bg-white dark:divide-ink-600 dark:bg-ink-700">
                {prazos.map((p) => (
                  <tr key={p.servico}>
                    <td className="px-6 py-4 align-top">
                      <div className="font-semibold text-ink-900 dark:text-white">{p.servico}</div>
                      <div className="mt-1 text-sm text-ink-600 dark:text-ink-300">{p.detalhe}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 align-top">
                      <span className="inline-flex rounded-full bg-accent-100 px-3 py-1 text-sm font-semibold text-accent-800 dark:bg-accent-500/20 dark:text-accent-300">
                        {p.prazo}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Como acionar */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="eyebrow">Acionamento</div>
            <h2 className="section-title mt-2">Como acionar a garantia, passo a passo</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { num: 1, title: 'Entre em contato', desc: 'WhatsApp ou telefone informando o serviço executado e a data.' },
              { num: 2, title: 'Confirmamos o prazo', desc: 'Verificamos no histórico se o serviço está dentro do período de garantia.' },
              { num: 3, title: 'Agendamos o retorno', desc: 'Visita técnica em até 48h úteis (24h em casos de risco como escorpiões).' },
              { num: 4, title: 'Executamos sem custo', desc: 'Aplicação adicional e novo laudo, sem cobrança extra.' },
            ].map((step) => (
              <div key={step.num} className="relative rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-600 dark:bg-ink-700">
                <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 font-display text-lg font-bold text-white">
                  {step.num}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos cobertos / não cobertos */}
      <section className="section bg-ink-50 dark:bg-ink-800">
        <div className="container max-w-5xl">
          <div className="text-center">
            <div className="eyebrow">Transparência</div>
            <h2 className="section-title mt-2">O que a garantia cobre — e o que não cobre</h2>
            <p className="section-subtitle mx-auto">
              Pra evitar mal-entendido, deixamos tudo claro logo no contrato.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-accent-300 bg-accent-50 p-6 dark:border-accent-500/40 dark:bg-accent-500/10">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink-900 dark:text-white">
                <svg className="h-6 w-6 text-accent-600 dark:text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Casos cobertos
              </h3>
              <ul className="mt-4 space-y-3">
                {cobertos.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
                    <span className="mt-1 text-accent-600 dark:text-accent-400">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-ink-300 bg-white p-6 dark:border-ink-600 dark:bg-ink-700">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink-900 dark:text-white">
                <svg className="h-6 w-6 text-ink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Casos não cobertos
              </h3>
              <ul className="mt-4 space-y-3">
                {naoCobertos.map((nc) => (
                  <li key={nc} className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
                    <span className="mt-1 text-ink-500">—</span>
                    <span>{nc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-sm italic text-ink-600 dark:text-ink-300">
            Em qualquer caso de dúvida, entre em contato — nossa equipe avalia a situação e busca a melhor solução pro cliente.
          </p>
        </div>
      </section>

      <CTASection
        title="Quer ter esse compromisso por escrito no seu próximo serviço?"
        subtitle="Monte seu orçamento agora — todos os nossos serviços incluem GAT e laudo técnico."
      />
    </>
  );
}
