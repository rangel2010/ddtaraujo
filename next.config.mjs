/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  // Redirects 301 (permanent) — preserva SEO ao migrar do Wix antigo para Next.js.
  // Mapeia URLs antigas do ddtaraujo.com.br (Wix) para os novos slugs do site.
  async redirects() {
    return [
      // ───── Serviços que mudaram para /servicos/ (mesma chave) ─────
      { source: '/dedetizacao-em-londrina', destination: '/servicos/dedetizacao-em-londrina', permanent: true },
      { source: '/controle-de-pragas-em-londrina', destination: '/servicos/controle-de-pragas-em-londrina', permanent: true },
      { source: '/limpeza-de-caixas-de-agua-em-londrina', destination: '/servicos/limpeza-de-caixas-de-agua-em-londrina', permanent: true },
      { source: '/controle-de-morcegos-em-londrina', destination: '/servicos/controle-de-morcegos-em-londrina', permanent: true },
      { source: '/controle-de-pombos-em-londrina', destination: '/servicos/controle-de-pombos-em-londrina', permanent: true },
      { source: '/dedetizacao-para-escorpioes-em-londrina', destination: '/servicos/dedetizacao-para-escorpioes-em-londrina', permanent: true },
      { source: '/dedetizacao-de-percevejos-em-londrina', destination: '/servicos/dedetizacao-de-percevejos-em-londrina', permanent: true },
      { source: '/sanitizacao-de-ambientes-londrina', destination: '/servicos/sanitizacao-de-ambientes-londrina', permanent: true },

      // ───── Slugs renomeados (acentos removidos / sufixo removido) ─────
      { source: '/dedetização-desinsetização', destination: '/servicos/desinsetizacao', permanent: true },
      { source: '/dac-divisão-de-atendimento-à-condomín', destination: '/servicos/dac-divisao-de-atendimento-a-condominios', permanent: true },
      { source: '/dedetização-de-baratas', destination: '/servicos/dedetizacao-de-baratas', permanent: true },
      { source: '/dedetização-de-carrapatos', destination: '/servicos/dedetizacao-de-carrapatos', permanent: true },
      { source: '/dedetização-de-aranhas', destination: '/servicos/dedetizacao-de-aranhas', permanent: true },
      { source: '/dedetização-de-formigas', destination: '/servicos/dedetizacao-de-formigas', permanent: true },
      { source: '/descupinizacao-em-londrina', destination: '/servicos/descupinizacao', permanent: true },
      { source: '/desratizacao-em-londrina', destination: '/servicos/desratizacao', permanent: true },

      // ───── URLs históricas indexadas no Google (versões antigas do Wix) ─────
      { source: '/sanitização-de-ambientes', destination: '/servicos/sanitizacao-de-ambientes-londrina', permanent: true },
      { source: '/limpeza-de-cisternas-e-caixas-de-água', destination: '/servicos/limpeza-de-caixas-de-agua-em-londrina', permanent: true },
      { source: '/desratização-controle-de-roedores', destination: '/servicos/desratizacao', permanent: true },
      { source: '/descupinizacao-controle-de-cupins', destination: '/servicos/descupinizacao', permanent: true },
      { source: '/controle-de-morcegos', destination: '/servicos/controle-de-morcegos-em-londrina', permanent: true },

      // ───── Blog (Wix usava /blog-araujo-dedetizadora e /post/SLUG) ─────
      { source: '/blog-araujo-dedetizadora', destination: '/blog', permanent: true },
      { source: '/post/morcegos-em-londrina-riscos-leis-e-como-resolver-definitivamente', destination: '/blog/morcegos-em-londrina-riscos-leis-e-como-resolver-definitivamente', permanent: true },
      { source: '/post/problemas-com-pulgas-araujo-controle-de-pragas-resolve', destination: '/blog/problemas-com-pulgas', permanent: true },
      { source: '/post/problemas-com-formigas', destination: '/blog/problemas-com-formigas', permanent: true },
      { source: '/post/dedetizadora-londrina-controle-especializado-de-pragas', destination: '/blog/dedetizadora-londrina-controle-especializado-de-pragas', permanent: true },

      // ───── Versões percent-encoded das URLs com acento (Google às vezes indexa assim) ─────
      { source: '/dedetiza%C3%A7%C3%A3o-desinseti%C3%A7%C3%A3o', destination: '/servicos/desinsetizacao', permanent: true },
      { source: '/dedetiza%C3%A7%C3%A3o-de-baratas', destination: '/servicos/dedetizacao-de-baratas', permanent: true },
      { source: '/dedetiza%C3%A7%C3%A3o-de-carrapatos', destination: '/servicos/dedetizacao-de-carrapatos', permanent: true },
      { source: '/dedetiza%C3%A7%C3%A3o-de-aranhas', destination: '/servicos/dedetizacao-de-aranhas', permanent: true },
      { source: '/dedetiza%C3%A7%C3%A3o-de-formigas', destination: '/servicos/dedetizacao-de-formigas', permanent: true },
      { source: '/dac-divis%C3%A3o-de-atendimento-%C3%A0-condom%C3%ADn', destination: '/servicos/dac-divisao-de-atendimento-a-condominios', permanent: true },

      // ───── Padrão dinâmico — qualquer post antigo do blog Wix vai pro novo ─────
      { source: '/blog-araujo-dedetizadora/:slug', destination: '/blog/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
