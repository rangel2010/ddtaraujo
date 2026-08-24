import type { StructureBuilder } from 'sanity/structure';
import { DocumentTextIcon, TagIcon, UserIcon } from '@sanity/icons';

/**
 * Estrutura do Studio da Araújo — só blog por enquanto.
 */
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Conteúdo Araújo')
    .items([
      S.listItem()
        .title('Posts')
        .icon(DocumentTextIcon)
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Posts')
            // Sem isso o Studio ordena por data de CRIAÇÃO do documento. Como os
            // posts antigos foram todos criados no mesmo instante pelo script de
            // migração, a lista saía embaralhada.
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('Categorias')
        .icon(TagIcon)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categorias')),
      S.listItem()
        .title('Autores')
        .icon(UserIcon)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Autores')),
    ]);
