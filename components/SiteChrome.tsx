'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/**
 * Decide se a página recebe a moldura do site (header, footer, botão do WhatsApp)
 * ou se renderiza limpa.
 *
 * O Sanity Studio em /studio precisa da viewport inteira e tem UI própria. Como
 * no App Router todo layout aninhado renderiza DENTRO do layout raiz, sem esse
 * filtro o Studio abria com o header do site em cima, o footer embaixo e o botão
 * flutuante do WhatsApp cobrindo o botão "Publicar".
 *
 * Header, footer e float chegam como props (já renderizados no servidor) em vez
 * de import direto, pra não arrastar esses componentes pro bundle do cliente.
 */
export default function SiteChrome({
  header,
  footer,
  float,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  float: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname() || '';

  if (pathname.startsWith('/studio')) {
    return <div className="flex-1">{children}</div>;
  }

  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
      {float}
    </>
  );
}
