import { site } from '@/data/site';

export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': siteUrl ? siteUrl + '/#business' : undefined,
        name: site.name + ' — ' + site.business,
        description: 'Decoración de cumpleaños, graduaciones, baby showers y eventos en Ventanilla, Callao.',
        areaServed: { '@type': 'Place', name: site.location },
        telephone: '+51 978624837',
        image: siteUrl ? siteUrl + '/branding/globo-rosa-logo.png' : undefined,
        url: siteUrl,
        sameAs: ['https://wa.me/51978624837'],
        knowsAbout: [
          'Decoración de fiestas en Ventanilla',
          'Decoración de cumpleaños en Ventanilla',
          'Decoración de graduaciones en Callao',
          'Decoración con globos en Ventanilla',
          'Decoración de eventos en Callao',
        ],
      },
      {
        '@type': 'WebSite',
        name: site.name,
        url: siteUrl,
        inLanguage: 'es-PE',
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
