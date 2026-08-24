import { defineType, defineField } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    { name: 'content', title: 'Conteúdo', default: true },
    { name: 'meta', title: 'Metadados' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ============ CONTEÚDO ============
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      group: 'content',
      description:
        'Vira ddtaraujo.com.br/blog/<slug>. NÃO altere o slug de um post já publicado — quebra o link indexado no Google.',
      options: { source: 'title', maxLength: 80 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Aparece nos cards do blog e como fallback pro SEO. Máx 200 chars.',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de capa',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coverImageAlt',
      title: 'Texto alternativo da capa',
      type: 'string',
      group: 'content',
      description: 'Descreva o que aparece na foto — pra acessibilidade e SEO.',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'coverImageCredit',
      title: 'Crédito da imagem',
      type: 'string',
      group: 'content',
      description:
        'Nome do autor/fonte da foto (ex.: "Erik Karits"). Deixe vazio se for foto própria da Araújo.',
    }),
    defineField({
      name: 'coverImageCreditUrl',
      title: 'Link do crédito',
      type: 'url',
      group: 'content',
      description: 'Perfil do fotógrafo ou página da foto. Só usado se o crédito estiver preenchido.',
    }),
    defineField({
      name: 'coverImageSuggestions',
      title: 'Sugestões de capa (nota interna)',
      type: 'text',
      rows: 3,
      group: 'content',
      description:
        'Nota de trabalho: onde a foto sugerida está salva ou links de fallback. Não aparece no site.',
    }),
    defineField({
      name: 'body',
      title: 'Corpo',
      type: 'blockContent',
      group: 'content',
      validation: (rule) => rule.required(),
    }),

    // ============ METADADOS ============
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      group: 'meta',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      group: 'meta',
      to: [{ type: 'author' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      group: 'meta',
      description:
        'Data futura NÃO aparece no site — a listagem filtra por publishedAt <= agora.',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Tempo de leitura (minutos)',
      type: 'number',
      group: 'meta',
      description: 'Ex.: 6 (aparece como "6 min de leitura")',
      validation: (rule) => rule.required().min(1).max(60),
    }),
    defineField({
      name: 'featured',
      title: 'Fixar no topo do blog',
      type: 'boolean',
      group: 'meta',
      description: 'Se ligado, o post fica em primeiro na listagem independente da data.',
      initialValue: false,
    }),
    defineField({
      name: 'relatedServices',
      title: 'Serviços relacionados',
      type: 'array',
      group: 'meta',
      description:
        'Slugs de /servicos/[slug] — ex.: descupinizacao, desratizacao, dedetizacao-de-baratas. O nome do serviço é puxado automático.',
      of: [{ type: 'string' }],
    }),

    // ============ SEO ============
    defineField({
      name: 'metaTitle',
      title: 'Meta title (opcional)',
      type: 'string',
      group: 'seo',
      description: 'Se vazio, usa o Título. Máx 60 chars pra não cortar no Google.',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description (opcional)',
      type: 'text',
      rows: 2,
      group: 'seo',
      description: 'Se vazio, usa o Resumo. Máx 160 chars.',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Palavras-chave',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      group: 'seo',
      description: 'Ex.: dedetização em londrina, controle de cupins londrina',
    }),
  ],
  orderings: [
    {
      title: 'Publicação — mais recente',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'coverImage',
      date: 'publishedAt',
    },
    prepare({ title, subtitle, media, date }) {
      const d = date ? new Date(date).toLocaleDateString('pt-BR') : 'Rascunho';
      return { title, subtitle: `${subtitle || '—'} · ${d}`, media };
    },
  },
});
