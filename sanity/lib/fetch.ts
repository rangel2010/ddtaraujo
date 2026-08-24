import type { QueryParams } from 'next-sanity';
import { client } from './client';

/**
 * Wrapper de fetch com cache do Next.js.
 * ISR de 60s = você publica no Studio e o site atualiza em até 1min sem redeploy.
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: 60,
      tags,
    },
  });
}
