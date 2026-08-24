'use client';

import Link from 'next/link';
import { siteConfig, whatsappLink } from '@/lib/site-config';

/**
 * CTA de fim de artigo do blog.
 *
 * Manda o leitor pra calculadora de orçamento (/orcamento) em vez de jogar
 * direto no WhatsApp. Isso mantém a pessoa dentro do site e permite medir
 * quantos cliques orgânicos do blog viram lead.
 *
 * MEDIÇÃO — por que não tem UTM aqui:
 * UTM em link INTERNO faz o GA4 tratar o clique como campanha nova. A sessão
 * reinicia e a origem original (busca orgânica) é perdida, justamente o dado
 * que a gente quer. Por isso o rastreamento é por evento no dataLayer, lido
 * pelo GTM (GTM-T5F84L) e enviado ao GA4 como evento com parâmetros.
 *
 * Eventos disparados:
 *   cta_orcamento_click  -> botão principal, vai pra /orcamento
 *   cta_whatsapp_click   -> link secundário, vai pro WhatsApp
 * Parâmetros: cta_local, post_slug, post_categoria
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type Props = {
  postSlug: string;
  postCategoria?: string;
  /** Onde na página o CTA está. Útil se um dia houver mais de um por artigo. */
  local?: string;
};

export default function OrcamentoCTA({
  postSlug,
  postCategoria = '',
  local = 'blog_fim_artigo',
}: Props) {
  function track(event: 'cta_orcamento_click' | 'cta_whatsapp_click') {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      cta_local: local,
      post_slug: postSlug,
      post_categoria: postCategoria,
    });
  }

  return (
    <div className="mt-10 rounded-2xl border border-yellow-400/50 bg-yellow-50 p-6 text-center dark:border-yellow-400/30 dark:bg-ink-700 sm:p-8">
      <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white sm:text-2xl">
        Quer saber quanto custa no seu caso?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-ink-700 dark:text-ink-300">
        Monte seu orçamento em poucos cliques: escolha o serviço, o tipo de imóvel e
        o tamanho. Combinar serviços rende condições melhores.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/orcamento"
          onClick={() => track('cta_orcamento_click')}
          data-cta="orcamento"
          className="btn-primary w-full sm:w-auto"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m-6 4h6m-6 4h4M5 4a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4z"
            />
          </svg>
          Fazer meu orçamento
        </Link>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('cta_whatsapp_click')}
          data-cta="whatsapp"
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink-700 underline-offset-2 hover:underline dark:text-ink-300"
        >
          ou fale direto no WhatsApp
        </a>
      </div>

      <p className="mt-4 text-xs text-ink-500 dark:text-ink-400">
        Vistoria técnica gratuita. Ou ligue {siteConfig.phoneDisplay}.
      </p>
    </div>
  );
}
