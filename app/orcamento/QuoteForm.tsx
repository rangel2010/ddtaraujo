'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';
import { whatsappLink, siteConfig } from '@/lib/site-config';

// ─── Opções dos passos ──────────────────────────────────────────────────────

const TIPOS = [
  { value: 'residencia', label: 'Residência', emoji: '🏠' },
  { value: 'comercio', label: 'Comércio', emoji: '🏪' },
  { value: 'industria', label: 'Indústria', emoji: '🏭' },
  { value: 'condominio', label: 'Condomínio', emoji: '🏢' },
  { value: 'sitio', label: 'Sítio ou Chácara', emoji: '🌳' },
];

const TAMANHOS = [
  { value: 'pequeno', label: 'Pequeno', sub: 'até 80m²' },
  { value: 'medio', label: 'Médio', sub: '80 a 200m²' },
  { value: 'grande', label: 'Grande', sub: '200 a 500m²' },
  { value: 'muito-grande', label: 'Muito grande', sub: 'acima de 500m²' },
];

const QUANDOS = [
  { value: 'urgente', label: 'Urgente', sub: 'hoje ou amanhã' },
  { value: 'esta-semana', label: 'Esta semana' },
  { value: 'duas-semanas', label: 'Próximas 2 semanas' },
  { value: 'sem-pressa', label: 'Sem pressa' },
];

const PERIODICIDADES = [
  { value: 'unico', label: 'Atendimento único' },
  { value: 'mensal', label: 'Contrato mensal' },
  { value: 'trimestral', label: 'Contrato trimestral / semestral' },
];

// ─── Sugestões inteligentes (pares lógicos de serviços) ─────────────────────

type Pairing = { suggest: string; reason: string };

const SMART_PAIRINGS: Record<string, Pairing> = {
  'controle-de-morcegos-em-londrina': {
    suggest: 'controle-de-pombos-em-londrina',
    reason: 'Ambos exigem vedação estrutural similar — mesmo dia, mesma equipe.',
  },
  'controle-de-pombos-em-londrina': {
    suggest: 'controle-de-morcegos-em-londrina',
    reason: 'Ambos exigem vedação estrutural similar — mesmo dia, mesma equipe.',
  },
  'limpeza-de-caixas-de-agua-em-londrina': {
    suggest: 'sanitizacao-de-ambientes-londrina',
    reason: 'Higienização completa: caixa d\'água + ambientes no mesmo dia.',
  },
  'sanitizacao-de-ambientes-londrina': {
    suggest: 'higienizacao-de-bebedouros-em-londrina',
    reason: 'Ambiente sanitizado merece água potável segura — higienize os bebedouros junto.',
  },
  'descupinizacao': {
    suggest: 'dedetizacao-em-londrina',
    reason: 'Aproveite para uma inspeção geral do imóvel na mesma visita.',
  },
};

const slugToService = Object.fromEntries(services.map((s) => [s.slug, s]));

// Serviços que são contínuos por natureza (não fazem sentido como atendimento único)
const SERVICOS_CONTINUOS = new Set([
  'controle-de-pragas-em-londrina', // CIPV
  'dac-divisao-de-atendimento-a-condominios', // DAC
]);

// Lista fixa de SERVIÇOS no formulário (ordem do docx de revisão).
const SERVICOS_FORM: { slug: string; label: string }[] = [
  { slug: 'dedetizacao-em-londrina', label: 'Dedetização' },
  { slug: 'desratizacao', label: 'Desratização' },
  { slug: 'controle-de-pragas-em-londrina', label: 'Controle Integrado de Pragas' },
  { slug: 'descupinizacao', label: 'Descupinização' },
  { slug: 'controle-de-morcegos-em-londrina', label: 'Controle de Morcegos' },
  { slug: 'controle-de-pombos-em-londrina', label: 'Manejo de Pombos' },
  { slug: 'limpeza-de-caixas-de-agua-em-londrina', label: 'Limpeza de Caixas de água' },
  { slug: 'sanitizacao-de-ambientes-londrina', label: 'Sanitização' },
  { slug: 'higienizacao-de-bebedouros-em-londrina', label: 'Higienização de Bebedouros' },
];

// Lista fixa de PRAGAS no formulário (identificadores soltos, sem link com service).
const PRAGAS_FORM: string[] = [
  'Baratas', 'Cupim', 'Aranhas', 'Escorpiões', 'Formigas',
  'Percevejos', 'Pulgas', 'Carrapatos', 'Ratos', 'Outras',
];

// Mapa reverso: serviço → praga que ele aciona automaticamente.
// Só inclui serviços ESPECÍFICOS (1 serviço = 1 praga). 'Dedetização' é
// genérico e cobre várias pragas, então não auto-marca nenhuma.
const SERVICO_PRAGA_MAP: Record<string, string> = {
  'desratizacao': 'Ratos',
  'descupinizacao': 'Cupim',
};

// Mapa de praga → slug do serviço que ela aciona automaticamente.
// Ao selecionar uma praga, o serviço correspondente é auto-marcado
// (cliente pode desmarcar depois se quiser).
const PRAGA_SERVICO_MAP: Record<string, string> = {
  'Ratos': 'desratizacao',
  'Cupim': 'descupinizacao',
  'Baratas': 'dedetizacao-em-londrina',
  'Aranhas': 'dedetizacao-em-londrina',
  'Escorpiões': 'dedetizacao-em-londrina',
  'Formigas': 'dedetizacao-em-londrina',
  'Percevejos': 'dedetizacao-em-londrina',
  'Carrapatos': 'dedetizacao-em-londrina',
  'Pulgas': 'dedetizacao-em-londrina',
  'Outras': 'dedetizacao-em-londrina',
};

// ─── Componente principal ───────────────────────────────────────────────────

export default function QuoteForm() {
  const [tipo, setTipo] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [servicosSelecionados, setServicosSelecionados] = useState<string[]>([]);
  const [pragasSelecionadas, setPragasSelecionadas] = useState<string[]>([]);
  const [quando, setQuando] = useState('');
  const [periodicidade, setPeriodicidade] = useState('');
  const [nome, setNome] = useState('');
  const [bairro, setBairro] = useState('');

  // Toggle de serviço — sincroniza com pragas em ambas as direções:
  //  - ao ADICIONAR: se há praga única associada (Desratização/Descupinização), auto-marca a praga
  //  - ao REMOVER: desmarca TODAS as pragas que apontam pra esse serviço
  const toggleServico = (slug: string) => {
    const adicionando = !servicosSelecionados.includes(slug);
    if (adicionando) {
      setServicosSelecionados((prev) => [...prev, slug]);
      const praga = SERVICO_PRAGA_MAP[slug];
      if (praga && !pragasSelecionadas.includes(praga)) {
        setPragasSelecionadas((prev) => [...prev, praga]);
      }
    } else {
      setServicosSelecionados((prev) => prev.filter((s) => s !== slug));
      // Remove todas as pragas que mapeiam pra esse serviço (ex: desmarcar Dedetização
      // tira Baratas, Aranhas, Escorpiões etc. todas de uma vez)
      setPragasSelecionadas((prev) => prev.filter((p) => PRAGA_SERVICO_MAP[p] !== slug));
    }
  };

  // Toggle de praga — sincroniza com serviços em ambas as direções:
  //  - ao ADICIONAR: auto-marca o serviço associado
  //  - ao REMOVER: desmarca o serviço SE não houver outras pragas usando ele
  //    (ex: cliente tem Baratas+Aranhas marcadas, desmarca Baratas → Aranhas ainda usa
  //    Dedetização, então mantém. Desmarca Aranhas também → Dedetização sai.)
  const togglePraga = (praga: string) => {
    const adicionando = !pragasSelecionadas.includes(praga);
    const slugServico = PRAGA_SERVICO_MAP[praga];

    if (adicionando) {
      setPragasSelecionadas((prev) => [...prev, praga]);
      if (slugServico && !servicosSelecionados.includes(slugServico)) {
        setServicosSelecionados((prev) => [...prev, slugServico]);
      }
    } else {
      const novasPragas = pragasSelecionadas.filter((p) => p !== praga);
      setPragasSelecionadas(novasPragas);
      // Se o serviço associado não é mais usado por nenhuma outra praga, desmarca o serviço
      if (slugServico) {
        const aindaUsado = novasPragas.some((p) => PRAGA_SERVICO_MAP[p] === slugServico);
        if (!aindaUsado) {
          setServicosSelecionados((prev) => prev.filter((s) => s !== slugServico));
        }
      }
    }
  };

  // Total de itens selecionados (serviços + pragas)
  const totalSelecionados = servicosSelecionados.length + pragasSelecionadas.length;

  // Detecta se algum serviço contínuo (CIPV/DAC) está selecionado
  const temServicoContinuo = useMemo(
    () => servicosSelecionados.some((slug) => SERVICOS_CONTINUOS.has(slug)),
    [servicosSelecionados]
  );

  // Auto-seta periodicidade pra "mensal" quando entra um serviço contínuo
  useEffect(() => {
    if (temServicoContinuo && periodicidade === 'unico') {
      setPeriodicidade('mensal');
    }
  }, [temServicoContinuo, periodicidade]);

  // Categorias presentes na seleção atual
  const categoriasSelecionadas = useMemo(() => {
    const cats = new Set<string>();
    servicosSelecionados.forEach((slug) => {
      const s = slugToService[slug];
      if (s) cats.add(s.category);
    });
    return Array.from(cats);
  }, [servicosSelecionados]);

  // Nível do pitch dinâmico — APENAS baseado em serviços (pragas não geram desconto)
  const pitchLevel = useMemo<0 | 1 | 2 | 3>(() => {
    const n = servicosSelecionados.length;
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (categoriasSelecionadas.length === 1) return 2;
    return 3;
  }, [servicosSelecionados, categoriasSelecionadas]);

  // Sugestões inteligentes (sem duplicar serviços já selecionados)
  const sugestoes = useMemo(() => {
    const suggested = new Set<string>();
    const result: { service: typeof services[0]; reason: string }[] = [];

    servicosSelecionados.forEach((slug) => {
      const pairing = SMART_PAIRINGS[slug];
      if (
        pairing &&
        !servicosSelecionados.includes(pairing.suggest) &&
        !suggested.has(pairing.suggest)
      ) {
        const s = slugToService[pairing.suggest];
        if (s) {
          result.push({ service: s, reason: pairing.reason });
          suggested.add(pairing.suggest);
        }
      }
    });

    return result.slice(0, 3); // máximo 3 sugestões
  }, [servicosSelecionados]);

  // Texto da mensagem do WhatsApp
  const whatsappMessage = useMemo(() => {
    if (totalSelecionados === 0) return '';

    const tipoObj = TIPOS.find((t) => t.value === tipo);
    const tamObj = TAMANHOS.find((t) => t.value === tamanho);
    const quandoObj = QUANDOS.find((q) => q.value === quando);
    const perObj = PERIODICIDADES.find((p) => p.value === periodicidade);

    const linhas: string[] = [];
    const isCombo = totalSelecionados > 1;

    linhas.push(`Olá! Gostaria de um orçamento${isCombo ? ' combinado' : ''}.`);
    linhas.push('');

    if (tipoObj) linhas.push(`📍 Tipo: ${tipoObj.label}`);
    if (tamObj) linhas.push(`📐 Tamanho: ${tamObj.label} (${tamObj.sub})`);

    if (servicosSelecionados.length === 1) {
      const slug = servicosSelecionados[0];
      const label = SERVICOS_FORM.find((s) => s.slug === slug)?.label || slugToService[slug]?.shortTitle;
      if (label) linhas.push(`🛠 Serviço: ${label}`);
    } else if (servicosSelecionados.length > 1) {
      linhas.push('🛠 Serviços:');
      servicosSelecionados.forEach((slug) => {
        const label = SERVICOS_FORM.find((s) => s.slug === slug)?.label || slugToService[slug]?.shortTitle;
        if (label) linhas.push(`  • ${label}`);
      });
    }

    if (pragasSelecionadas.length === 1) {
      linhas.push(`🐛 Praga: ${pragasSelecionadas[0]}`);
    } else if (pragasSelecionadas.length > 1) {
      linhas.push('🐛 Pragas:');
      pragasSelecionadas.forEach((p) => linhas.push(`  • ${p}`));
    }

    if (quandoObj) linhas.push(`⏰ Quando: ${quandoObj.label}${quandoObj.sub ? ` (${quandoObj.sub})` : ''}`);
    if (perObj) linhas.push(`🔁 Periodicidade: ${perObj.label}`);

    const identificacao: string[] = [];
    if (nome.trim()) identificacao.push(nome.trim());
    if (bairro.trim()) identificacao.push(`bairro ${bairro.trim()}`);
    if (identificacao.length) linhas.push(`👤 Sou: ${identificacao.join(', ')}`);

    linhas.push('');
    if (isCombo) {
      linhas.push('Quero o combo com descontos!');
    } else {
      linhas.push('Aguardo o orçamento. Obrigado!');
    }

    return linhas.join('\n');
  }, [tipo, tamanho, servicosSelecionados, pragasSelecionadas, totalSelecionados, quando, periodicidade, nome, bairro]);

  const podeEnviar = totalSelecionados > 0;
  const whatsappHref = podeEnviar ? whatsappLink(whatsappMessage) : '#';

  return (
    <>
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 py-16 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
            Monte seu pedido
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Solicite seu orçamento personalizado
          </h1>
          <p className="mt-6 text-lg text-ink-200">
            Escolha os serviços que precisa e a gente monta a mensagem prontinha pro WhatsApp. Quanto mais combinar, mais condições especiais.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto max-w-4xl space-y-12">

          {/* ── Passo 1: Tipo de imóvel ──────────────────────────── */}
          <StepBlock number={1} title="Qual é o tipo do imóvel?">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {TIPOS.map((t) => (
                <OptionCard
                  key={t.value}
                  selected={tipo === t.value}
                  onClick={() => setTipo(t.value)}
                  label={t.label}
                  emoji={t.emoji}
                />
              ))}
            </div>
          </StepBlock>

          {/* ── Passo 2: Tamanho ──────────────────────────────────── */}
          <StepBlock number={2} title="Qual o tamanho aproximado?">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TAMANHOS.map((t) => (
                <OptionCard
                  key={t.value}
                  selected={tamanho === t.value}
                  onClick={() => setTamanho(t.value)}
                  label={t.label}
                  sub={t.sub}
                />
              ))}
            </div>
          </StepBlock>

          {/* ── Passo 3: Serviços ─────────────────────────────────── */}
          <StepBlock number={3} title="Quais pragas/serviços você precisa?" subtitle="Pode selecionar mais de um — combinar gera economia.">
            <div className="space-y-8">
              {/* SERVIÇOS */}
              <div>
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                  Serviços
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {SERVICOS_FORM.map((s) => (
                    <ServiceCard
                      key={s.slug}
                      selected={servicosSelecionados.includes(s.slug)}
                      onClick={() => toggleServico(s.slug)}
                      title={s.label}
                    />
                  ))}
                </div>
              </div>

              {/* PRAGAS */}
              <div>
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                  Pragas
                </div>
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                  {PRAGAS_FORM.map((praga) => (
                    <ServiceCard
                      key={praga}
                      selected={pragasSelecionadas.includes(praga)}
                      onClick={() => togglePraga(praga)}
                      title={praga}
                    />
                  ))}
                </div>
              </div>
            </div>
          </StepBlock>

          {/* ── Pitch dinâmico ────────────────────────────────────── */}
          {pitchLevel > 0 && <PitchBanner level={pitchLevel as 1 | 2 | 3} />}

          {/* ── Sugestões inteligentes ────────────────────────────── */}
          {sugestoes.length > 0 && (
            <div>
              <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                💡 Sugestões pra completar o combo
              </h3>
              <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
                Cada serviço adicional aumenta seu desconto progressivo.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sugestoes.map(({ service: s, reason }) => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => toggleServico(s.slug)}
                    className="group flex flex-col rounded-2xl border-2 border-dashed border-yellow-300 bg-yellow-50 p-5 text-left transition hover:border-yellow-500 hover:bg-yellow-100 dark:border-yellow-500/30 dark:bg-yellow-400/10 dark:hover:border-yellow-400 dark:hover:bg-yellow-400/15"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-yellow-700 dark:text-yellow-400">
                      Já considerou?
                    </div>
                    <div className="mt-2 font-display text-base font-bold text-ink-900 dark:text-white">
                      {s.shortTitle}
                    </div>
                    <p className="mt-2 text-sm text-ink-700 dark:text-ink-200">{reason}</p>
                    <div className="mt-3 text-xs italic text-yellow-700 dark:text-yellow-400">
                      Desconto progressivo ao adicionar.
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-yellow-400">
                      + Adicionar ao combo
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Passo 4: Quando ───────────────────────────────────── */}
          <StepBlock number={4} title="Quando você precisa?">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {QUANDOS.map((q) => (
                <OptionCard
                  key={q.value}
                  selected={quando === q.value}
                  onClick={() => setQuando(q.value)}
                  label={q.label}
                  sub={q.sub}
                />
              ))}
            </div>
          </StepBlock>

          {/* ── Passo 5: Periodicidade ────────────────────────────── */}
          <StepBlock
            number={5}
            title="Tipo de atendimento"
            subtitle={temServicoContinuo ? 'CIPV e DAC são programas contínuos — selecione mensal ou trimestral.' : undefined}
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {PERIODICIDADES.map((p) => {
                const disabled = p.value === 'unico' && temServicoContinuo;
                return (
                  <OptionCard
                    key={p.value}
                    selected={periodicidade === p.value}
                    onClick={() => !disabled && setPeriodicidade(p.value)}
                    label={p.label}
                    disabled={disabled}
                  />
                );
              })}
            </div>
          </StepBlock>

          {/* ── Passo 6: Informações pessoais (opcional) ──────────── */}
          <StepBlock number={6} title="Como podemos te chamar?" subtitle="Opcional — só pra personalizar o atendimento.">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-brand-500 focus:outline-none dark:border-ink-600 dark:bg-ink-700 dark:text-white dark:placeholder-ink-400"
              />
              <input
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Bairro"
                className="rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-brand-500 focus:outline-none dark:border-ink-600 dark:bg-ink-700 dark:text-white dark:placeholder-ink-400"
              />
            </div>
          </StepBlock>

          {/* ── Botão final ───────────────────────────────────────── */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-brand-50 to-yellow-50 p-8 text-center dark:from-ink-700 dark:to-ink-700">
            {podeEnviar ? (
              <>
                <p className="text-sm text-ink-700 dark:text-ink-200">
                  {totalSelecionados === 1
                    ? 'Pronto! Sua solicitação está montada.'
                    : `Combo de ${totalSelecionados} itens pronto! Clique pra enviar e garantir as condições especiais.`}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-6 inline-flex"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Enviar pelo WhatsApp
                </a>
                <p className="mt-4 text-xs text-ink-500 dark:text-ink-400">
                  Você será redirecionado pro WhatsApp com a mensagem pronta.
                </p>
              </>
            ) : (
              <p className="text-ink-700 dark:text-ink-200">
                👆 Selecione pelo menos um serviço acima pra montar seu pedido.
              </p>
            )}
          </div>

          {/* ── Preview da mensagem ───────────────────────────────── */}
          {podeEnviar && (
            <details className="mt-6 rounded-2xl border border-ink-200 bg-ink-50 p-5 text-sm dark:border-ink-600 dark:bg-ink-700">
              <summary className="cursor-pointer font-semibold text-ink-900 dark:text-white">
                Ver mensagem que será enviada
              </summary>
              <pre className="mt-4 whitespace-pre-wrap font-sans text-ink-700 dark:text-ink-200">
                {whatsappMessage}
              </pre>
            </details>
          )}

          {/* ── Voltar ────────────────────────────────────────────── */}
          <div className="mt-8 text-center">
            <Link
              href="/servicos"
              className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 dark:text-yellow-400"
            >
              ← Ver detalhes de cada serviço
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Componentes auxiliares ─────────────────────────────────────────────────

function StepBlock({
  number,
  title,
  subtitle,
  children,
}: {
  number: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 font-display text-sm font-bold text-white">
          {number}
        </span>
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white md:text-2xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 ml-11 text-sm text-ink-600 dark:text-ink-300">{subtitle}</p>
      )}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function OptionCard({
  selected,
  onClick,
  label,
  sub,
  emoji,
  disabled,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  sub?: string;
  emoji?: string;
  disabled?: boolean;
}) {
  let className = 'rounded-2xl border-2 p-4 text-left transition ';
  if (disabled) {
    className += 'cursor-not-allowed border-ink-200 bg-ink-100 opacity-50 dark:border-ink-600 dark:bg-ink-800';
  } else if (selected) {
    className += 'border-brand-600 bg-yellow-50 dark:border-yellow-400 dark:bg-yellow-400/10';
  } else {
    className += 'border-ink-200 bg-white hover:border-brand-300 dark:border-ink-600 dark:bg-ink-700 dark:hover:border-yellow-500';
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {emoji && <div className="mb-1 text-2xl">{emoji}</div>}
      <div className="font-display text-base font-bold text-ink-900 dark:text-white">
        {label}
      </div>
      {sub && (
        <div className="mt-1 text-xs text-ink-600 dark:text-ink-300">{sub}</div>
      )}
      {disabled && (
        <div className="mt-1 text-xs italic text-ink-500 dark:text-ink-400">
          Não disponível para programa contínuo
        </div>
      )}
    </button>
  );
}

function ServiceCard({
  selected,
  onClick,
  title,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        selected
          ? 'flex items-center justify-between gap-2 rounded-xl border-2 border-brand-600 bg-yellow-50 px-4 py-3 text-left transition dark:border-yellow-400 dark:bg-yellow-400/10'
          : 'flex items-center justify-between gap-2 rounded-xl border-2 border-ink-200 bg-white px-4 py-3 text-left transition hover:border-brand-300 dark:border-ink-600 dark:bg-ink-700 dark:hover:border-yellow-500'
      }
    >
      <span className="text-sm font-semibold text-ink-900 dark:text-white">{title}</span>
      {selected ? (
        <svg className="h-5 w-5 flex-shrink-0 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ) : (
        <span className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-ink-300 dark:border-ink-500" />
      )}
    </button>
  );
}

function PitchBanner({ level }: { level: 1 | 2 | 3 }) {
  if (level === 1) {
    return (
      <div className="rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-5 dark:border-yellow-500/40 dark:bg-yellow-400/10">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="font-display text-base font-bold text-ink-900 dark:text-white">
              Aproveite que a equipe já vai até você!
            </div>
            <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">
              Adicione mais serviços com até 50% de desconto nos serviços adicionais — resolva tudo na mesma visita.
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (level === 2) {
    return (
      <div className="rounded-2xl border-2 border-accent-400 bg-accent-50 p-5 dark:border-accent-500/40 dark:bg-accent-500/10">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <div className="font-display text-base font-bold text-ink-900 dark:text-white">
              Combo perfeito! Mesma família, mesmo protocolo
            </div>
            <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">
              Como são da mesma categoria, a aplicação é integrada — mesmo equipamento, mesma equipe. Desconto progressivo a cada serviço adicional.
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border-2 border-brand-400 bg-brand-50 p-5 dark:border-brand-500/40 dark:bg-brand-500/10">
      <div className="flex items-start gap-3">
        <span className="text-2xl">✨</span>
        <div>
          <div className="font-display text-base font-bold text-ink-900 dark:text-white">
            Pacote completo! Várias áreas, uma visita só
          </div>
          <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">
            Cobertura ampla com desconto progressivo nos extras. A equipe resolve tudo na mesma viagem — economia de tempo e de custo.
          </p>
        </div>
      </div>
    </div>
  );
}
