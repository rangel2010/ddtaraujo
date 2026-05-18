# Guia de Deploy — Passo a Passo

Este guia leva o site **do seu computador → GitHub → Vercel → online em produção**.

> Você já criou o repositório no GitHub. Vamos conectar este projeto local a ele.

---

## 1. Pré-requisitos (instalar uma vez só)

Você precisa de:

1. **Node.js 18.17+** — <https://nodejs.org/pt> (escolha a versão LTS)
2. **Git** — <https://git-scm.com/download/win>
3. **Conta na Vercel** — <https://vercel.com> (faça login com o GitHub)

Para conferir se instalou tudo, abra o **PowerShell** e rode:

```bash
node --version    # deve mostrar v18.x ou superior
npm --version     # deve mostrar 9.x ou superior
git --version     # deve mostrar git version 2.x
```

---

## 2. Testar o site localmente (recomendado antes de subir)

Abra o **PowerShell** na pasta do projeto:

```powershell
cd "C:\Users\range\Documents\Claude\Projects\site dedetizadora araujo"
```

Instale as dependências (vai demorar 1-3 minutos na primeira vez):

```powershell
npm install
```

Rode o site:

```powershell
npm run dev
```

Abra <http://localhost:3000> no navegador. Navegue pelas páginas, teste o menu, o WhatsApp, etc.

Para parar o servidor: pressione `Ctrl + C` no terminal.

---

## 3. Conectar a pasta local ao seu repo do GitHub

Pegue a URL do seu repositório no GitHub. Vai ser algo como:

```
https://github.com/SEU-USUARIO/araujo-dedetizadora.git
```

No terminal, dentro da pasta do projeto, rode em sequência:

```powershell
# Inicializar o git nesta pasta
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "feat: site novo em Next.js 14"

# Definir o branch principal como main
git branch -M main

# Conectar ao seu repo no GitHub
# >>> SUBSTITUA pela URL do SEU repositório <<<
git remote add origin https://github.com/SEU-USUARIO/araujo-dedetizadora.git

# Enviar para o GitHub
git push -u origin main
```

Se for a primeira vez que você usa o git, ele vai pedir:

```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

Depois rode o `git push` novamente.

---

## 4. Conectar a Vercel ao repositório

1. Acesse <https://vercel.com/new>
2. Faça login com o GitHub (autorize se for a primeira vez)
3. Em **Import Git Repository**, encontre o repositório `araujo-dedetizadora` e clique em **Import**
4. Na tela de configuração:
   - **Framework Preset**: Vercel detecta automaticamente como **Next.js** ✓
   - **Root Directory**: deixe `.` (raiz)
   - **Build Command**: `npm run build` (já vem certo)
   - **Output Directory**: `.next` (já vem certo)
5. Em **Environment Variables**, adicione (copiando de `.env.example`):

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://www.ddtaraujo.com.br` |
   | `NEXT_PUBLIC_PHONE` | `4333391295` |
   | `NEXT_PUBLIC_PHONE_DISPLAY` | `(43) 3339-1295` |
   | `NEXT_PUBLIC_WHATSAPP` | `5543999763797` |
   | `NEXT_PUBLIC_WHATSAPP_DISPLAY` | `(43) 99976-3797` |
   | `NEXT_PUBLIC_EMAIL` | `araujocontroledepragas@outlook.com` |

6. Clique em **Deploy**

Em 1 a 2 minutos seu site estará no ar em uma URL tipo:
`https://araujo-dedetizadora.vercel.app`

---

## 5. Apontar o domínio próprio (www.ddtaraujo.com.br)

Quando estiver pronto para substituir o site atual do Wix:

1. Na Vercel, vá em **Project → Settings → Domains**
2. Adicione `ddtaraujo.com.br` e `www.ddtaraujo.com.br`
3. A Vercel vai te dar os registros DNS para configurar no painel onde o domínio está registrado (Registro.br, GoDaddy, etc.)
4. Adicione os registros DNS conforme a Vercel mostrar:
   - `A` apontando `ddtaraujo.com.br` para `76.76.21.21`
   - `CNAME` apontando `www` para `cname.vercel-dns.com`
5. Aguarde a propagação (de minutos até 24h)

> ⚠️ **Importante**: depois que o domínio apontar para a Vercel, o site atual do Wix sai do ar. Faça isso só quando o novo site estiver 100% revisado.

---

## 6. Atualizações futuras (fluxo de trabalho)

Toda vez que você editar algo:

```powershell
git add .
git commit -m "descreva o que mudou"
git push
```

A Vercel detecta o push e faz deploy automaticamente em 1-2 minutos. 🎉

---

## 7. Próximos passos sugeridos

- [ ] Adicionar o **logo** real em `public/logo.png` e atualizar `Header.tsx` e `Footer.tsx`
- [ ] Adicionar **foto da equipe e da fachada** em `public/` e usar na home/sobre
- [ ] Configurar **Google Analytics** e **Google Search Console** (verificação já configurada no `layout.tsx`)
- [ ] Submeter o sitemap `https://www.ddtaraujo.com.br/sitemap.xml` no Google Search Console
- [ ] Configurar **Google Business Profile** (Meu Negócio) com a mesma URL
- [ ] Adicionar **avaliações reais** dos clientes (substituir os exemplos da home)
- [ ] Conectar formulário de contato com Resend, Formspree ou similar se quiser receber por e-mail
- [ ] Adicionar mais artigos no `/blog`

---

## Problemas comuns

**`npm install` dá erro de permissão**
Rode o PowerShell **como administrador** ou use o **Git Bash**.

**`git push` pede senha**
GitHub não aceita mais senha. Use um **Personal Access Token** (Settings → Developer settings → Personal access tokens) ou autentique via GitHub CLI: `winget install GitHub.cli` e depois `gh auth login`.

**Build falha na Vercel**
Verifique se rodou `npm run build` localmente sem erro antes de fazer push. Se aparecer erro de variável `NEXT_PUBLIC_*` indefinida, confirme que adicionou todas no painel da Vercel.

**Site fora do ar após apontar domínio**
A propagação DNS pode levar até 24h. Use <https://dnschecker.org> para verificar.
