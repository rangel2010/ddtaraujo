/**
 * Sobe as artes de Instagram (blog-capas/<slug>/instagram.jpg) pro Sanity e
 * grava, no mesmo post: `instagramImage`, `instagramTitulo` e `instagramCaption`.
 *
 * Título e legenda vêm de scripts/instagram-content.json. Se um slug não estiver
 * nesse arquivo, só a imagem é gravada.
 *
 * Idempotente no sentido de que reescreve o campo, mas CADA execução cria um
 * asset novo no Sanity. Não rode à toa: só quando houver arte nova ou refeita.
 *
 * Como rodar (PowerShell, na raiz do projeto):
 *   $env:SANITY_WRITE_TOKEN="<token de escrita>"
 *   node scripts/upload-instagram-covers.mjs
 *
 * Para subir só alguns, passe os slugs como argumento:
 *   node scripts/upload-instagram-covers.mjs problemas-com-pulgas outro-slug
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
  .filter((s) => fs.existsSync(path.join(CAPAS, s, 'instagram.jpg')))
  .filter((s) => filtro.length === 0 || filtro.includes(s));

if (slugs.length === 0) {
  console.error('Nenhum instagram.jpg encontrado em blog-capas/.');
  process.exit(1);
}

async function uploadImage(file, filename) {
  const r = await fetch(`${API}/assets/images/${DATASET}?filename=${encodeURIComponent(filename)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'image/jpeg' },
    body: fs.readFileSync(file),
  });
  if (!r.ok) throw new Error(`upload ${filename}: ${r.status} ${await r.text()}`);
  return (await r.json()).document._id;
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

// Só liga a imagem em post que existe, pra não criar documento fantasma.
const idsExistentes = await (async () => {
  const query = encodeURIComponent('*[_type == "post"].slug.current');
  const r = await fetch(`${API}/data/query/${DATASET}?query=${query}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const j = await r.json();
  return new Set(j.result || []);
})();

const muts = [];
const pulados = [];

for (const slug of slugs) {
  if (!idsExistentes.has(slug)) {
    pulados.push(slug);
    continue;
  }
  const assetId = await uploadImage(path.join(CAPAS, slug, 'instagram.jpg'), `instagram-${slug}.jpg`);
  console.log(`arte ok   ${slug}  ->  ${assetId}`);
  const set = {
    instagramImage: { _type: 'image', asset: { _type: 'reference', _ref: assetId } },
  };
  const t = textos[slug];
  if (t?.titulo) set.instagramTitulo = t.titulo;
  if (t?.caption) set.instagramCaption = t.caption;
  if (!t) console.log(`  (sem título/legenda em instagram-content.json para ${slug})`);

  muts.push({ patch: { id: `post-${slug}`, set } });
}

if (pulados.length) {
  console.log(`\nPulados (não existe post com esse slug no Sanity): ${pulados.join(', ')}`);
}

if (muts.length === 0) {
  console.log('\nNada pra gravar.');
  process.exit(0);
}

const res = await mutate(muts);
console.log(`\nOK, ${res.results.length} posts atualizados com arte, título e legenda de Instagram.`);
console.log('Confira em: https://www.ddtaraujo.com.br/studio (aba Instagram de cada post)');
