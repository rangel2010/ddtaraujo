/**
 * Sobe as imagens de blog-capas/<slug>/ pro Sanity e liga ao post correspondente.
 *
 *   capa.jpg       -> campo `coverImage`      (só quando o post ainda não tem capa)
 *   instagram.jpg  -> campo `instagramImage`  (sempre que existir o arquivo)
 *
 * Título e legenda de Instagram vêm de scripts/instagram-content.json quando o
 * slug estiver lá. Se não estiver, esses campos não são tocados (útil pra post
 * que já recebeu título e legenda direto no Sanity).
 *
 * Escreve no RASCUNHO quando existe rascunho, e no publicado quando não existe.
 * Assim um post ainda em revisão não é publicado por acidente.
 *
 * Cada execução cria asset novo no Sanity. Não rode à toa.
 *
 * Como rodar (PowerShell, na raiz do projeto):
 *   $env:SANITY_WRITE_TOKEN="<token de escrita>"
 *   node scripts/upload-instagram-covers.mjs                 # todas as pastas
 *   node scripts/upload-instagram-covers.mjs slug-a slug-b   # só esses posts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CAPAS = path.join(ROOT, 'blog-capas');
const CONTEUDO = path.join(ROOT, 'scripts', 'instagram-content.json');

const textos = fs.existsSync(CONTEUDO)
  ? JSON.parse(fs.readFileSync(CONTEUDO, 'utf8'))
  : {};

const PROJECT = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ylq90kn9';
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const TOKEN = process.env.SANITY_WRITE_TOKEN;
const API = `https://${PROJECT}.api.sanity.io/v2021-06-07`;

if (!TOKEN) {
  console.error('\nFalta o token de escrita. No PowerShell, antes de rodar:\n');
  console.error('  $env:SANITY_WRITE_TOKEN="sk..."\n');
  process.exit(1);
}
if (!fs.existsSync(CAPAS)) {
  console.error(`Pasta não encontrada: ${CAPAS}`);
  process.exit(1);
}

const filtro = process.argv.slice(2);
const slugs = fs
  .readdirSync(CAPAS, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((s) => filtro.length === 0 || filtro.includes(s));

async function uploadImage(file, filename) {
  const r = await fetch(`${API}/assets/images/${DATASET}?filename=${encodeURIComponent(filename)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'image/jpeg' },
    body: fs.readFileSync(file),
  });
  if (!r.ok) throw new Error(`upload ${filename}: ${r.status} ${await r.text()}`);
  return (await r.json()).document._id;
}

async function query(groq) {
  const r = await fetch(`${API}/data/query/${DATASET}?query=${encodeURIComponent(groq)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`query: ${JSON.stringify(j)}`);
  return j.result || [];
}

async function mutate(mutations) {
  const r = await fetch(`${API}/data/mutate/${DATASET}?returnIds=true`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations }),
  });
  const t = await r.text();
  if (!r.ok) throw new Error(`mutate: ${r.status} ${t}`);
  return JSON.parse(t);
}

// Mapa slug -> { id que deve receber o patch, já tem capa? }
// Rascunho tem prioridade: se o post está em revisão, a imagem vai pro rascunho.
const docs = await query('*[_type == "post" && defined(slug.current)]{_id, "slug": slug.current, "temCapa": defined(coverImage)}');
const alvo = new Map();
for (const d of docs) {
  const ehRascunho = d._id.startsWith('drafts.');
  const atual = alvo.get(d.slug);
  if (!atual || (ehRascunho && !atual.ehRascunho)) {
    alvo.set(d.slug, { id: d._id, temCapa: d.temCapa, ehRascunho });
  }
}

const muts = [];
const pulados = [];

for (const slug of slugs) {
  const alvoDoc = alvo.get(slug);
  if (!alvoDoc) {
    pulados.push(`${slug} (não existe post com esse slug)`);
    continue;
  }

  const set = {};
  const dirCapa = path.join(CAPAS, slug, 'capa.jpg');
  const dirInsta = path.join(CAPAS, slug, 'instagram.jpg');

  if (fs.existsSync(dirCapa)) {
    if (alvoDoc.temCapa) {
      console.log(`capa      ${slug}: post já tem capa, mantida como está`);
    } else {
      const id = await uploadImage(dirCapa, `capa-${slug}.jpg`);
      set.coverImage = { _type: 'image', asset: { _type: 'reference', _ref: id } };
      console.log(`capa ok   ${slug}  ->  ${id}`);
    }
  }

  if (fs.existsSync(dirInsta)) {
    const id = await uploadImage(dirInsta, `instagram-${slug}.jpg`);
    set.instagramImage = { _type: 'image', asset: { _type: 'reference', _ref: id } };
    console.log(`arte ok   ${slug}  ->  ${id}`);
  }

  const t = textos[slug];
  if (t?.titulo) set.instagramTitulo = t.titulo;
  if (t?.caption) set.instagramCaption = t.caption;

  if (Object.keys(set).length === 0) {
    pulados.push(`${slug} (pasta sem capa.jpg nem instagram.jpg)`);
    continue;
  }

  muts.push({ patch: { id: alvoDoc.id, set } });
  console.log(`          grava em ${alvoDoc.id}`);
}

if (pulados.length) console.log(`\nPulados:\n  ${pulados.join('\n  ')}`);
if (muts.length === 0) {
  console.log('\nNada pra gravar.');
  process.exit(0);
}

const res = await mutate(muts);
console.log(`\nOK, ${res.results.length} posts atualizados.`);
console.log('Confira em: https://www.ddtaraujo.com.br/studio');
