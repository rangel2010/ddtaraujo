import { defineType, defineField } from 'sanity';
import { TagIcon } from '@sanity/icons';

export const categoryType = defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 60 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição curta',
      type: 'text',
      rows: 2,
      description: 'Aparece no topo da página de categoria e ajuda no SEO.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
});
