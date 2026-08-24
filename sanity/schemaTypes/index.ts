import type { SchemaTypeDefinition } from 'sanity';

import { blockContent } from './blockContent';
import { postType } from './postType';
import { categoryType } from './categoryType';
import { authorType } from './authorType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, categoryType, authorType, blockContent],
};
