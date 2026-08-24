/**
 * Config do Sanity Studio embutido em /studio.
 * Executa em client-side dentro do Next.js.
 */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure';

export default defineConfig({
  basePath: '/studio',
  name: 'araujo-studio',
  title: 'Araújo Dedetizadora',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision = console GROQ pra debug/testes de query.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
