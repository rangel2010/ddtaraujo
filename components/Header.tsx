'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig, whatsappLink, phoneLink } from '@/lib/site-config';
import { services, categoryLabels } from '@/lib/services';

const groupedServices = services.reduce<Record<string, typeof services>>((acc, service) => {
  if (!acc[service.category]) acc[service.category] = [];
  acc[service.category].push(service);
  return acc;
}, {});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-white/90 backdrop-blur-md">
      <div className="hidden bg-brand-700 text-white md:block">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={phoneLink} className="flex items-center gap-2 hover:text-brand-100">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              {siteConfig.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-100">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              {siteConfig.whatsappDisplay}
            </a>
          </div>
          <div className="text-xs">✓ Atendimento em Londrina e todo o Paraná</div>
        </div>
      </div>

      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Araújo Dedetizadora">
          <Image src="/logo.svg" alt="Araújo Dedetizadora" width={210} height={70} priority className="h-12 w-auto md:h-14" />
          <span className="hidden sm:inline-flex items-center rounded-full bg-accent-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">40 anos</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-700">Início</Link>
          <Link href="/sobre" className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-700">Quem Somos</Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-700">
              Serviços
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
            </button>
            {servicesOpen && (
              <div className="absolute right-0 top-full mt-1 w-[640px] rounded-2xl border border-ink-200 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {Object.entries(groupedServices).map(([cat, items]) => (
                    <div key={cat}>
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-700">{categoryLabels[cat as keyof typeof categoryLabels]}</div>
                      <ul className="space-y-1">
                        {items.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/servicos/${s.slug}`} className="block rounded-md px-2 py-1 text-sm text-ink-700 hover:bg-brand-50 hover:text-brand-700">{s.shortTitle}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t border-ink-100 pt-4">
                  <Link href="/servicos" className="text-sm font-semibold text-brand-700 hover:underline">Ver todos os serviços →</Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/blog" className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-700">Blog</Link>
          <Link href="/contato" className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-700">Contato</Link>
          <a href={whatsappLink('Olá! Gostaria de solicitar um orçamento.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp ml-4 px-5 py-2.5 text-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Orçamento
          </a>
        </nav>

        <button className="lg:hidden p-2 text-ink-700" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-ink-200 bg-white">
          <div className="container py-4 space-y-1">
            <Link href="/" className="block py-2 text-base font-medium text-ink-800" onClick={() => setMenuOpen(false)}>Início</Link>
            <Link href="/sobre" className="block py-2 text-base font-medium text-ink-800" onClick={() => setMenuOpen(false)}>Quem Somos</Link>
            <Link href="/servicos" className="block py-2 text-base font-medium text-ink-800" onClick={() => setMenuOpen(false)}>Serviços</Link>
            <Link href="/blog" className="block py-2 text-base font-medium text-ink-800" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/contato" className="block py-2 text-base font-medium text-ink-800" onClick={() => setMenuOpen(false)}>Contato</Link>
            <a href={whatsappLink('Olá! Gostaria de solicitar um orçamento.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-4 w-full">Orçamento via WhatsApp</a>
            <a href={phoneLink} className="block py-3 text-center text-ink-700">📞 {siteConfig.phoneDisplay}</a>
          </div>
        </div>
      )}
    </header>
  );
}
