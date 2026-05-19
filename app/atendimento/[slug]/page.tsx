import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { bairros, bairrosBySlug, zoneLabels } from '@/lib/bairros';
import { servicesBySlug } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';
import CTASection from '@/components/CTASection';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return bairros.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const bairro = bairrosBySlug[params.slug];
  if (!bairro) return {};
  return {
    title: bairro.metaTitle,
    description: bairro.metaDescription,
    alternates: { canonical: `/atendimento/${bairro.slug}` },
    openGraph: {
      title: bairro.metaTitle,
      description: bairro.metaDescription,
      url: `${siteConfig.url}/atendimento/${bairro.slug}`,
      type: 'website',
    },
  };
}

export default function BairroPage({ params }: Params) {
  const bairro = bairrosBySlug[params.slug];
  if (!bairro) notFound();

  // Schema.org LocalBusiness com areaServed específico do bairro
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    name: `${siteConfig.fullName} — ${bairro.name}`,
    description: bairro.metaDescription,
    url: `${siteConfig.url}/atendimento/${bairro.slug}`,
    telephone: `+55${siteConfig.phone}`,
    image: `${siteConfig.url}/logo.png`,
    areaServed: {
      '@type': 'Place',
      name: bairro.fullName,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.fullName,
      telephone: `+55${siteConfig.phone}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Onde atendemos', item: `${siteConfig.url}/atendimento` },
      { '@type': 'ListItem', position: 3, name: bairro.name, item: `${siteConfig.url}/atendimento/${bairro.slug}` },
    ],
  };

  // Resolve os serviços destacados para pegar os títulos completos
  const highlights = bairro.serviceHighlights
    .map((h) => {
      const service = servicesBySlug[h.slug];
      if (!service) return null;
      return { ...service, reason: h.reason };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const nearbyBairros = bairro.nearbyAreas
    .map((slug) => bairrosBySlug[slug])
    .filter((b): b is NonNullable<typeof b> => b !== undefined);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumbs */}
      <nav className="border-b border-ink-100 bg-ink-50 dark:border-ink-600 dark:bg-ink-700 py-3 text-sm" aria-label="Breadcrumb">
        <div className="container">
          <ol className="flex flex-wrap items-center gap-2 text-ink-600 dark:text-ink-300">
            <li><Link href="/" className="hover:text-brand-700 dark:hover:text-yellow-400">Início</Link></li>
            <li className="text-ink-400 dark:text-ink-500">/</li>
            <li><Link href="/atendimento" className="hover:text-brand-700 dark:hover:text-yellow-400">Onde atendemos</Link></li>
            <li className="text-ink-400 dark:text-ink-500">/</li>
            <li className="text-ink-900 font-medium dark:text-white">{bairro.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 py-16 text-white md:py-20">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(245,207,74,0.4) 0%, transparent 50%)' }} />
        <div className="container relative grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
              {zoneLabels[bairro.zone]} • {bairro.profile}
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Dedetização em {bairro.name}
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              {bairro.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/orcamento" className="btn-whatsapp">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicitar orçamento
              </Link>
              <Link
                href="/garantia"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Ver garantia escrita
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/selo-garantia.png"
              alt="Selo Garantia Escrita Araújo"
              width={300}
              height={200}
              className="h-auto w-full max-w-xs drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Body — contexto específico do bairro */}
      <section className="section">
        <div className="container max-w-4xl">
          <p className="text-lg leading-relaxed text-ink-700 dark:text-ink-200">
            {bairro.body}
          </p>
        </div>
      </section>

      {/* Serviços destacados pra esse bairro */}
      <section className="section bg-ink-50 dark:bg-ink-800">
        <div className="container max-w-5xl">
          <div className="text-center">
            <div className="eyebrow">Serviços em destaque</div>
            <h2 className="section-title mt-2">Soluções recomendadas para {bairro.name}</h2>
            <p className="section-subtitle mx-auto">
              Selecionamos os serviços mais relevantes para o perfil do seu bairro. Você pode contratar qualquer um deles individualmente ou combiná-los para melhor custo-benefício.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {highlights.map((h) => (
              <Link
                key={h.slug}
                href={`/servicos/${h.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-md dark:border-ink-600 dark:bg-ink-700 dark:hover:border-yellow-500"
              >
                <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-yellow-400">
                  {h.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700 dark:text-ink-300">
                  {h.reason}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                  Ver detalhes
                  <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bairros próximos (inter-linking) */}
      {nearbyBairros.length > 0 && (
        <section className="section">
          <div className="container max-w-5xl">
            <div className="text-center">
              <div className="eyebrow">Áreas próximas</div>
              <h2 className="section-title mt-2">Também atendemos perto de {bairro.name}</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {nearbyBairros.map((nb) => (
                <Link
                  key={nb.slug}
                  href={`/atendimento/${nb.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-200 bg-ink-50 p-5 transition hover:border-brand-300 dark:border-ink-600 dark:bg-ink-700 dark:hover:border-yellow-500"
                >
                  <h3 className="font-display text-base font-bold text-ink-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-yellow-400">
                    {nb.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-600 dark:text-ink-300">{nb.profile}</p>
                  <div className="mt-3 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                    Saiba mais →
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/atendimento"
                className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 dark:text-yellow-400"
              >
                ← Ver todos os bairros que atendemos
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Pronto para resolver o problema em ${bairro.name}?`}
        subtitle="Monte seu orçamento em poucos cliques. Atendimento rápido com a equipe que já conhece a sua região."
      />
    </>
  );
}
