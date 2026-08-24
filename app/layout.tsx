import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import OrganizationSchema from '@/components/OrganizationSchema';
import ClarityAnalytics from '@/components/ClarityAnalytics';
import SiteChrome from '@/components/SiteChrome';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Dedetização em Londrina há 40 anos`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'dedetização em Londrina',
    'dedetizadora Londrina',
    'controle de pragas Londrina',
    'desratização Londrina',
    'descupinização Londrina',
    'controle de morcegos Londrina',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Dedetização em Londrina há 40 anos`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Araújo Dedetizadora — Controle de Pragas Urbanas em Londrina há 40 anos',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Dedetização em Londrina`,
    description: siteConfig.shortDescription,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'vhIr3AmBn_lshaMhzOS_ktZi2CWQf2xO5nZU_q3ap8w',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T5F84L');`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5F84L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <OrganizationSchema />
        <ClarityAnalytics />
        <SiteChrome
          header={<Header />}
          footer={<Footer />}
          float={<WhatsAppFloat />}
        >
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
