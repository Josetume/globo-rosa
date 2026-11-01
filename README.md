# Globo Rosa — Fase 1.0

Web pública para **Globo Rosa — Decoraciones & Eventos**, enfocada en captar consultas por WhatsApp en Ventanilla, Callao.

## Ejecutar

```bash
npm install
npm run dev
```

Rutas: `/`, `/servicios`, `/servicios/[slug]`, `/galeria`, `/nosotros` y `/contacto`.

## Tecnologías

Next.js App Router, React, TypeScript, Tailwind CSS v4, Lucide React y `next/image` cuando se incorporen las fotografías reales. La interfaz prioriza Server Components; el menú, WhatsApp y consentimiento usan Client Components.

## SEO y Analytics

Los metadatos están en `src/app/layout.tsx` y cada página define title/description propios. `StructuredData` agrega JSON-LD de negocio local sin inventar una dirección. `sitemap.ts` y `robots.ts` requieren `NEXT_PUBLIC_SITE_URL` cuando exista el dominio. GA4 es opcional: configura `NEXT_PUBLIC_GA_MEASUREMENT_ID`; el script se carga sólo después de aceptar cookies y registra `whatsapp_click` sin datos personales.

## Branding y fotografías

La carpeta esperada para el logo oficial es `public/branding/globo-rosa-logo.png`. En esta copia del repositorio el archivo no estaba presente, por lo que se usa un monograma temporal claramente identificado en la interfaz. Los bloques visuales actuales son placeholders y no representan trabajos de terceros.

## Próximas fases

Agregar logo y fotografías reales, dominio/canonical, testimonios verificables, fuentes `next/font` definitivas, integración con API REST de Spring Boot y formularios avanzados sólo cuando exista backend.
