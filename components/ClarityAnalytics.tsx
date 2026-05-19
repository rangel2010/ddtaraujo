import Script from 'next/script';

/**
 * Microsoft Clarity — analytics + heatmap + session replay (gratuito).
 *
 * Lê o Project ID da variável de ambiente NEXT_PUBLIC_CLARITY_PROJECT_ID.
 * Se a variável não estiver definida, o componente não renderiza nada
 * (útil em dev ou enquanto a conta ainda não foi criada).
 *
 * Como configurar:
 * 1. Criar conta gratuita em https://clarity.microsoft.com
 * 2. Criar um projeto com a URL do site
 * 3. Copiar o Project ID que aparece no snippet (algo como "abc123xyz")
 * 4. Adicionar na Vercel: Settings → Environment Variables
 *    Nome: NEXT_PUBLIC_CLARITY_PROJECT_ID
 *    Valor: o ID copiado
 *    Aplicar em: Production, Preview, Development
 * 5. Redeploy (ou push qualquer commit)
 */
export default function ClarityAnalytics() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  if (!projectId) return null;

  return (
    <Script
      id="clarity-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  );
}
