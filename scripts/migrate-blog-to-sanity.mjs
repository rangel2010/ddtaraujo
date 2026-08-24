/**
 * Migração ÚNICA: lib/blog.ts  ->  Sanity (projeto Araújo Dedetizadora).
 *
 * O que faz:
 *  1. Lê os posts de lib/blog.ts (sem precisar compilar TypeScript).
 *  2. Sobe as 9 capas de public/blog como assets do Sanity.
 *  3. Cria autor, categorias e os 9 posts JÁ PUBLICADOS, preservando
 *     slug, data, meta tags, crédito da foto e o post fixado (featured).
 *
 * É idempotente: usa createOrReplace com _id estável (post-<slug>).
 * Rodar de novo só regrava por cima — mas sobe as imagens outra vez,
 * então não rode à toa.
 *
 * Como rodar (PowerShell, na raiz do projeto):
 *   $env:SANITY_WRITE_TOKEN="<token de escrita>"
 *   node scripts/migrate-blog-to-sanity.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PROJECT = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ylq90kn9';
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const TOKEN = process.env.SANITY_WRITE_TOKEN;
const API = `https://${PROJECT}.api.sanity.io/v2021-06-07`;

if (!TOKEN) {
  console.error('\nFalta o token de escrita. No PowerShell, antes de rodar:\n');
  console.error('  $env:SANITY_WRITE_TOKEN="sk..."\n');
  process.exit(1);
}

// ---------- 1. lê lib/blog.ts sem compilador ----------
async function loadPosts() {
  const src = fs.readFileSync(path.join(ROOT, 'lib', 'blog.ts'), 'utf8');
  const start = src.indexOf('export const blogPosts');
  if (start === -1) throw new Error('não achei "export const blogPosts" em lib/blog.ts');
  let body = src.slice(start).replace('export const blogPosts: BlogPost[] =', 'export const blogPosts =');
  body = body.slice(0, body.indexOf('\n];') + 3);
  const tmp = path.join(ROOT, 'scripts', '.blog-tmp.mjs');
  fs.writeFileSync(tmp, body, 'utf8');
  try {
    const mod = await import(pathToFileURL(tmp).href);
    return mod.blogPosts;
  } finally {
    fs.unlinkSync(tmp);
  }
}

const slugify = (s) =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '')
   .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const CATEGORY_DESCRIPTIONS = {
  'Cupins': 'Identificação, tratamento e prevenção de cupins de madeira seca e subterrâneos em Londrina.',
  'Roedores': 'Sinais de infestação, riscos à saúde e controle de ratos, ratazanas e camundongos.',
  'Programa Empresarial': 'Controle integrado de pragas, documentação e conformidade sanitária para empresas.',
  'Escorpiões': 'Por que aparecem, como agir em caso de avistamento e como prevenir acidentes.',
  'Higienização': 'Limpeza de caixas de água, sanitização de ambientes e higienização de bebedouros.',
  'Manejo de Fauna': 'Manejo legal e ecológico de morcegos e pombos, dentro da legislação ambiental.',
  'Insetos': 'Baratas, formigas, pulgas, aranhas e demais insetos urbanos: controle e prevenção.',
  'Dedetização': 'Como funciona a dedetização profissional, garantias, segurança e periodicidade.',
};

// metaTitle deste post tem 61 chars e estoura o limite de 60 do schema.
// Encurtado em 3 chars mantendo a palavra-chave.
const META_TITLE_FIX = {
  'morcegos-em-londrina-riscos-leis-e-como-resolver-definitivamente':
    'Controle de Morcegos Londrina | Riscos e Soluções | Araújo',
};

// ---------- 2. converte os blocos pra Portable Text ----------
function toPortableText(content) {
  const out = [];
  let n = 0;
  for (const block of content) {
    n += 1;
    if (block.type === 'h2') {
      out.push({ _type: 'block', _key: `b${n}`, style: 'h2', markDefs: [],
        children: [{ _type: 'span', _key: `b${n}s1`, text: block.text, marks: [] }] });
    } else if (block.type === 'ul') {
      block.items.forEach((item, i) => {
        out.push({ _type: 'block', _key: `b${n}i${i + 1}`, style: 'normal',
          listItem: 'bullet', level: 1, markDefs: [],
          children: [{ _type: 'span', _key: `b${n}i${i + 1}s1`, text: item, marks: [] }] });
      });
    } else if (block.type === 'strong') {
      out.push({ _type: 'block', _key: `b${n}`, style: 'normal', markDefs: [],
        children: [{ _type: 'span', _key: `b${n}s1`, text: block.text, marks: ['strong'] }] });
    } else {
      out.push({ _type: 'block', _key: `b${n}`, style: 'normal', markDefs: [],
        children: [{ _type: 'span', _key: `b${n}s1`, text: block.text, marks: [] }] });
    }
  }
  return out;
}

async function uploadImage(file, filename) {
  const buf = fs.readFileSync(file);
  const r = await fetch(`${API}/assets/images/${DATASET}?filename=${encodeURIComponent(filename)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'image/jpeg' },
    body: buf,
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

// ---------- 3. executa ----------
const blogPosts = await loadPosts();
console.log(`Lidos ${blogPosts.length} posts de lib/blog.ts\n`);

const muts = [];

muts.push({ createOrReplace: {
  _id: 'author-equipe-araujo', _type: 'author',
  name: 'Equipe Araújo',
  slug: { _type: 'slug', current: 'equipe-araujo' },
  role: 'Araújo Dedetizadora — Londrina/PR',
  bio: 'Equipe técnica da Araújo Dedetizadora, com mais de 40 anos de atuação em controle de pragas em Londrina e todo o Paraná.',
}});

for (const c of [...new Set(blogPosts.map((p) => p.category))]) {
  muts.push({ createOrReplace: {
    _id: `category-${slugify(c)}`, _type: 'category',
    title: c,
    slug: { _type: 'slug', current: slugify(c) },
    description: CATEGORY_DESCRIPTIONS[c] || '',
  }});
  console.log(`categoria  ${c}  ->  category-${slugify(c)}`);
}

for (const p of blogPosts) {
  const filename = p.coverImage.replace('/blog/', '');
  const assetId = await uploadImage(path.join(ROOT, 'public', 'blog', filename), filename);
  console.log(`capa       ${filename}  ->  ${assetId}`);

  const creditUrl = p.coverCredit?.url && p.coverCredit.url !== '#' ? p.coverCredit.url : undefined;

  muts.push({ createOrReplace: {
    _id: `post-${p.slug}`, _type: 'post',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    excerpt: p.excerpt,
    coverImage: { _type: 'image', asset: { _type: 'reference', _ref: assetId } },
    coverImageAlt: p.coverAlt,
    coverImageCredit: p.coverCredit?.name || '',
    ...(creditUrl ? { coverImageCreditUrl: creditUrl } : {}),
    body: toPortableText(p.content),
    category: { _type: 'reference', _ref: `category-${slugify(p.category)}` },
    author: { _type: 'reference', _ref: 'author-equipe-araujo' },
    publishedAt: `${p.date}T12:00:00Z`,
    readTime: p.readingMinutes,
    featured: !!p.featured,
    relatedServices: p.relatedService ? [p.relatedService.slug] : [],
    metaTitle: META_TITLE_FIX[p.slug] || p.metaTitle,
    metaDescription: p.metaDescription,
  }});
}

const res = await mutate(muts);
console.log(`\nOK — ${res.results.length} documentos gravados e publicados no Sanity.`);
console.log('Confira em: https://www.ddtaraujo.com.br/studio  (ou localhost:3000/studio)');
