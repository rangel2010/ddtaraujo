import type { Metadata } from 'next';
import { siteConfig, whatsappLink, phoneLink } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contato | Solicite Orçamento Grátis | Araújo Dedetizadora',
  description:
    'Entre em contato com a Araújo Dedetizadora em Londrina. WhatsApp (43) 99976-3797, telefone (43) 3339-1295. Orçamento grátis e atendimento rápido.',
  alternates: { canonical: '/contato' },
};

export default function ContatoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-600/20 px-4 py-1.5 text-sm font-medium text-brand-300 backdrop-blur">
              Fale conosco
            </div>
            <h1 className="mt-6 text-4xl font-bold font-display text-white sm:text-5xl">
              Solicite seu orçamento gratuito
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              Atendimento rápido pelo WhatsApp, telefone ou formulário. Resposta em até 1 hora útil em horário comercial.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2">
          {/* Contatos diretos */}
          <div className="space-y-6">
            <a
              href={whatsappLink('Olá! Gostaria de solicitar um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border-2 border-[#25D366] bg-white p-6 transition hover:bg-[#25D366] hover:text-white"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white group-hover:bg-white group-hover:text-[#25D366]">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium opacity-80">WhatsApp (mais rápido)</div>
                <div className="font-display text-2xl font-bold">{siteConfig.whatsappDisplay}</div>
              </div>
            </a>

            <a
              href={phoneLink}
              className="group flex items-center gap-5 rounded-2xl border-2 border-brand-600 bg-white p-6 transition hover:bg-brand-600 hover:text-white"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white group-hover:bg-white group-hover:text-brand-600">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium opacity-80">Telefone fixo</div>
                <div className="font-display text-2xl font-bold">{siteConfig.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-5 rounded-2xl border-2 border-ink-300 bg-white p-6 transition hover:bg-ink-900 hover:text-white"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-700 group-hover:bg-white">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium opacity-70">E-mail</div>
                <div className="font-display text-lg font-bold break-all">{siteConfig.email}</div>
              </div>
            </a>

            <div className="rounded-2xl bg-ink-50 p-6 dark:bg-ink-800">
              <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">Horário de atendimento</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-ink-600">Segunda a sexta</dt>
                  <dd className="font-semibold text-ink-900 dark:text-white">{siteConfig.hours.weekday}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-600">Sábado</dt>
                  <dd className="font-semibold text-ink-900 dark:text-white">{siteConfig.hours.saturday}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-600">Domingo</dt>
                  <dd className="font-semibold text-ink-900 dark:text-white">{siteConfig.hours.sunday}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Endereço + Mapa */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-ink-50 p-6 dark:bg-ink-800">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">Nosso endereço</h3>
                  <p className="mt-2 text-ink-700">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.neighborhood}<br />
                    {siteConfig.address.city} — {siteConfig.address.state}<br />
                    CEP {siteConfig.address.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800">
              <iframe
                title="Mapa Araújo Dedetizadora"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city}, ${siteConfig.address.state}`
                )}&output=embed`}
                width="100%"
                height="300"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white">
              <h3 className="font-display text-lg font-bold">Onde atendemos</h3>
              <p className="mt-2 text-brand-50">
                Sediados em Londrina, atendemos toda a região metropolitana e todo o estado do Paraná para contratos empresariais e condominiais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
