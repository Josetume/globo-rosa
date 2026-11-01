import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/shared/CookieBanner';
import { FloatingWhatsApp } from '@/components/shared/FloatingWhatsApp';
import { StructuredData } from '@/components/shared/StructuredData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } }
    : {}),
  title: {
    default: 'Globo Rosa | Decoración de fiestas en Ventanilla, Callao',
    template: '%s | Globo Rosa',
  },
  description: 'Globo Rosa: decoración de cumpleaños, graduaciones, baby showers y fiestas infantiles en Ventanilla, Callao. Cotiza tu evento por WhatsApp.',
  keywords: ['decoración de fiestas en Ventanilla', 'decoración de cumpleaños en Ventanilla', 'decoración de graduaciones en Callao', 'decoración con globos en Ventanilla', 'decoración de eventos en Callao'],
  openGraph: {
    title: 'Globo Rosa | Decoración de fiestas en Ventanilla, Callao',
    description: 'Decoraciones de cumpleaños, graduaciones, baby showers y eventos con globos en Ventanilla, Callao.',
    type: 'website',
    locale: 'es_PE',
    siteName: 'Globo Rosa',
    images: [{ url: '/branding/globo-rosa-logo.png', width: 512, height: 512, alt: 'Logo de Globo Rosa Decoraciones & Eventos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globo Rosa | Decoración de fiestas en Ventanilla, Callao',
    description: 'Decoración de eventos en Ventanilla, Callao.',
    images: ['/branding/globo-rosa-logo.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE">
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
