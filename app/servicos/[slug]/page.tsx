import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { services, servicesBySlug } from '@/lib/services';
import { richContent } from '@/lib/services-extended';
import { serviceCovers, fallbackCover } from '@/lib/service-covers';
import { siteConfig, whatsappLink, phoneLink } from '@/lib/site-config';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = servicesBySlug[params.slug];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/servicos/${service.slug}`,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesBySlug[params.slug];
  if (!service) notFound();

  const cover = serviceCovers[service.slug] || fallbackCover;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'PestControlService',
      name: siteConfig.fullName,
      telephone: `+55${siteConfig.phone}`,
      url: siteConfig.url,
    },
    areaServed: { '@type': 'State', name: 'Paraná' },
    description: service.metaDescription,
    url: `${siteConfig.url}/servicos/${service.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteConfig.url}/servicos` },
      { '@type': 'ListItem', position: 3, name: service.shortTitle, item: `${siteConfig.url}/servicos/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumbs */}
      <nav className="border-b border-ink-100 bg-ink-50 dark:border-ink-600 dark:bg-ink-700 py-3 text-sm" aria-label="Breadcrumb">
        <div className="container">
          <ol className="flex flex-wrap items-center gap-2 text-ink-600 dark:text-ink-300">
            <li><Link href="/" className="hover:text-brand-700 dark:hover:text-yellow-400">Início</Link></li>
            <li className="text-ink-400 dark:text-ink-500">/</li>
            <li><Link href="/servicos" className="hover:text-brand-700 dark:hover:text-yellow-400">Serviços</Link></li>
            <li className="text-ink-400 dark:text-ink-500">/</li>
            <li className="text-ink-900 font-medium dark:text-white">{service.shortTitle}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900 py-16 text-white md:py-20">
        <div className="absolute inset-0">
          <Image
            src={cover.image}
            alt={cover.alt}
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-800/85 to-brand-900/90" />
        </div>
        <div className="container relative grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur">
              ✓ Garantia escrita • 40 anos de experiência
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight font-display text-white sm:text-5xl">
              {service.hero.headline}
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              {service.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(`Olá! Quero um orçamento de ${service.shortTitle}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Orçamento Grátis
              </a>
              <a
                href={phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur border border-white/10">
            <h3 className="font-display text-xl font-bold text-white">Por que escolher a Araújo?</h3>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink-200">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-ink-700 dark:text-ink-200">{service.intro}</p>
          </div>
        </div>
      </section>

      {/* Conteúdo expandido (apenas para serviços com richContent) */}
      {richContent[service.slug] && (
        <section className="pb-16 md:pb-24">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {richContent[service.slug].map((sec, idx) => (
                <div key={idx}>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900 dark:text-white">{sec.title}</h2>
                  {sec.paragraphs && (
                    <div className="mt-4 space-y-3 text-ink-700 dark:text-ink-200 leading-relaxed">
                      {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  )}
                  {sec.list && (
                    sec.list.ordered ? (
                      <ol className="mt-4 space-y-2 list-decimal list-inside text-ink-700 dark:text-ink-200">
                        {sec.list.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ol>
                    ) : (
                      <ul className="mt-4 space-y-2">
                        {sec.list.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-ink-700 dark:text-ink-200">
                            <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                  {sec.closingParagraphs && (
                    <div className="mt-4 space-y-3 text-ink-700 dark:text-ink-200 leading-relaxed">
                      {sec.closingParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Process */}
      <section className="section bg-ink-50 dark:bg-ink-800">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Como funciona</div>
            <h2 className="section-title mt-2">Nosso processo, passo a passo</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-700">
                <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 font-display text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={service.faqs} title={`Dúvidas sobre ${service.shortTitle}`} />

      {/* Related */}
      <section className="section bg-ink-50 dark:bg-ink-800">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Outros Serviços</div>
            <h2 className="section-title mt-2">Talvez você também precise</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}`} className="card group">
                <h3 className="font-display text-base font-bold text-ink-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-400">{s.shortTitle}</h3>
                <div className="mt-3 text-sm font-semibold text-yellow-600 dark:text-yellow-400">Saiba mais →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container pb-6 pt-2">
        <p className="text-xs italic text-ink-500 dark:text-ink-400">
          Foto de capa: {cover.credit.name} /{' '}
          <a
            href={cover.credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            Unsplash
          </a>
        </p>
      </div>

      <CTASection title={`Solicite agora seu orçamento de ${service.shortTitle}`} subtitle="Atendimento rápido pelo WhatsApp ou telefone. Orçamento sem compromisso." />
    </>
  );
}
