# Pasta `public/`

Tudo que você coloca aqui fica disponível direto na URL do site.
Ex: `public/logo.svg` → `https://www.ddtaraujo.com.br/logo.svg`

## Arquivos atuais

| Arquivo | Onde aparece | Substituir? |
|---|---|---|
| `logo.svg` | Header (versão colorida, azul + verde) | Pode substituir pela versão oficial |
| `logo-white.svg` | Footer (versão branca para fundo escuro) | Pode substituir pela versão oficial |
| `icon.svg` | Favicon (aba do navegador) | Pode substituir |
| `icon-white.svg` | Reservado (uso futuro) | — |

## Para usar SEUS arquivos oficiais (PNG/JPG)

Se você tem os logos originais em PNG ou JPG, é só:

1. **Salvar dentro desta pasta** com os mesmos nomes:
   - `logo.png` (versão horizontal colorida, p/ fundo claro)
   - `logo-white.png` (versão horizontal branca, p/ fundo escuro)
   - `favicon.ico` (32×32 ou 48×48, ícone da aba)

2. **Me avisar** os nomes de arquivo + extensão que você usou, que eu ajusto o código (Header.tsx, Footer.tsx, layout.tsx) para apontar para eles.

## Dimensões recomendadas

- **Logo header/footer**: largura mínima 600px, altura 200px (proporção ~3:1)
- **Favicon**: 32×32 ou 48×48 PNG (Next.js também aceita SVG e .ico)
- **OG Image** (compartilhamento WhatsApp/Facebook): 1200×630 JPG ou PNG

## Formato preferido: SVG

SVG é o melhor para logos porque:
- Vetorial — fica nítido em qualquer tamanho (4K, mobile, impressão)
- Arquivo pequeno (geralmente < 5KB)
- Não precisa gerar múltiplos tamanhos

Se você tiver acesso aos arquivos vetoriais originais (.ai, .eps, .pdf), exportar para SVG mantém a qualidade máxima.
