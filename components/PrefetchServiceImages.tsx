'use client';

import { useEffect } from 'react';
import { serviceCovers } from '@/lib/service-covers';

/**
 * Pré-carrega em background as fotos de capa dos serviços passados via prop.
 *
 * Roda durante o `requestIdleCallback` (quando o browser está ocioso, sem
 * atrapalhar o carregamento principal). As imagens originais ficam no cache
 * HTTP do browser — quando o cliente clicar num serviço, a foto já está
 * praticamente disponível.
 *
 * Observação: o next/image gera URLs otimizadas (/\_next/image?...) diferentes
 * do path original. Esse prefetch aquece o cache da imagem original, o que
 * acelera a primeira otimização na CDN da Vercel.
 */
export default function PrefetchServiceImages({ slugs }: { slugs: string[] }) {
  useEffect(() => {
    const prefetch = () => {
      slugs.forEach((slug) => {
        const cover = serviceCovers[slug];
        if (!cover) return;
        // Cria um <link rel="prefetch"> no head — prioridade baixa,
        // o browser baixa quando estiver ocioso.
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = cover.image;
        document.head.appendChild(link);
      });
    };

    // Espera o browser ficar ocioso pra não competir com o carregamento principal.
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    if (typeof win.requestIdleCallback === 'function') {
      win.requestIdleCallback(prefetch, { timeout: 3000 });
    } else {
      setTimeout(prefetch, 2000);
    }
  }, [slugs]);

  return null;
}
