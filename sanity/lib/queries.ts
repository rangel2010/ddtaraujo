import { groq } from 'next-sanity';

/**
 * Todos os posts publicados, ordenados por data desc.
 * Retorna dados mínimos pra listagem.
 */
export const postsListQuery = groq`
  *[_type == "post" && defined(slug.current) && publishedAt <= now()]
    | order(featured desc, publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      readTime,
      featured,
      "category": category->{title, "slug": slug.current},
      coverImage,
      coverImageAlt
    }
`;

/**
 * Post individual pelo slug.
 * Inclui corpo completo (portable text), autor e categoria.
 */
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    body,
    metaTitle,
    metaDescription,
    keywords,
    relatedServices,
    coverImage,
    coverImageAlt,
    coverImageCredit,
    coverImageCreditUrl,
    "category": category->{title, "slug": slug.current, description},
    "author": author->{name, "slug": slug.current, role, image}
  }
`;

/**
 * Posts relacionados (exclui o atual) — usado no "Continue lendo".
 */
export const relatedPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && slug.current != $slug && publishedAt <= now()]
    | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      "category": category->{title, "slug": slug.current},
      coverImage,
      coverImageAlt
    }
`;

/**
 * Slugs de todos os posts — usado no generateStaticParams e no sitemap.
 */
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

/**
 * Slugs + data — usado no sitemap.xml (lastModified).
 */
export const postsSitemapQuery = groq`
  *[_type == "post" && defined(slug.current) && publishedAt <= now()] {
    "slug": slug.current,
    publishedAt
  }
`;

/**
 * Todas as categorias (pra menus, filtros).
 */
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;
