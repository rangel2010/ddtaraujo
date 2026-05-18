# Araújo Dedetizadora — Site Oficial

Site institucional da Araújo Dedetizadora reescrito em **Next.js 14 (App Router)** com **TypeScript**, **Tailwind CSS** e SEO otimizado para o nicho de controle de pragas em Londrina/PR.

## Stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript** estrito
- **Tailwind CSS** com design system de marca
- **Google Fonts** (Inter + Poppins) com `display: swap`
- **Schema.org** (LocalBusiness, Service, FAQPage, BreadcrumbList)
- **Sitemap.xml** e **robots.txt** dinâmicos
- **Open Graph** e **Twitter Cards** completos

## Estrutura

```
.
├── app/
│   ├── layout.tsx              # Layout global + metadata
│   ├── page.tsx                # Home
│   ├── globals.css             # Tailwind + design system
│   ├── sitemap.ts              # Sitemap dinâmico
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # Página 404
│   ├── sobre/page.tsx
│   ├── contato/page.tsx
│   ├── blog/page.tsx
│   └── servicos/
│       ├── page.tsx            # Lista de serviços
│       └── [slug]/page.tsx     # 16 páginas dinâmicas
├── components/
│   ├── Header.tsx              # Nav responsivo + dropdown
│   ├── Footer.tsx
│   ├── WhatsAppFloat.tsx       # Botão flutuante
│   ├── FAQ.tsx                 # Accordion
│   ├── CTASection.tsx
│   └── OrganizationSchema.tsx  # JSON-LD
├── lib/
│   ├── site-config.ts          # Dados da empresa
│   └── services.ts             # 16 serviços + FAQs
└── public/                     # Imagens (adicionar logo aqui)
```

## Rodar localmente

Você precisa do **Node.js 18.17 ou superior** instalado: <https://nodejs.org>

```bash
# 1. Copie o arquivo de variáveis de ambiente
cp .env.example .env.local

# 2. Instale as dependências
npm install

# 3. Rode em modo desenvolvimento
npm run dev
```

Abra <http://localhost:3000>.

## Build de produção

```bash
npm run build
npm run start
```

## Variáveis de ambiente

Veja `.env.example`. Configure na Vercel em **Settings → Environment Variables**.

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canônica (https://www.ddtaraujo.com.br) |
| `NEXT_PUBLIC_PHONE` | Telefone fixo (somente dígitos) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Telefone formatado |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp (somente dígitos com DDI) |
| `NEXT_PUBLIC_WHATSAPP_DISPLAY` | WhatsApp formatado |
| `NEXT_PUBLIC_EMAIL` | E-mail de contato |

## Deploy na Vercel

Ver instruções completas no documento `DEPLOY.md`.

## SEO

- Metadata API do Next.js (title, description, OG, Twitter)
- Schema.org JSON-LD: LocalBusiness, Service, FAQPage, BreadcrumbList
- Sitemap dinâmico em `/sitemap.xml`
- robots.txt em `/robots.txt`
- Canonical URLs em todas as páginas
- Mobile-first responsivo
- Lighthouse-ready (sem JS desnecessário, imagens otimizadas, fontes com swap)

## Licença

© Araújo Controle de Pragas e Vetores — Todos os direitos reservados.
