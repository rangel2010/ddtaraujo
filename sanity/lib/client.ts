import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // CDN público — mais rápido, cacheia 60s. Sem token.
  perspective: 'published',
  stega: false,
});
