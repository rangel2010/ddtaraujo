'use client';

/**
 * Rota /studio — carrega o Sanity Studio dentro do Next.js.
 * Acesso: ddtaraujo.com.br/studio (prod) ou localhost:3000/studio (dev).
 * Login com a mesma conta usada no sanity.io.
 */
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
