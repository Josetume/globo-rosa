# Fase 1.0 — Globo Rosa

## Qué se construyó

- Navbar sticky, navegación responsive y CTA reutilizable de WhatsApp.
- Inicio con hero, celebraciones, presentación, servicios, galería provisional, beneficios y CTA final.
- Catálogo y detalle estático por slug para seis servicios.
- Galería, nosotros y contacto.
- Metadata API, Open Graph, Twitter Cards, JSON-LD, sitemap y robots.
- Consentimiento analítico opcional y evento `whatsapp_click`.
- Botón flotante de WhatsApp y bloque de testimonios preparado sin reseñas ficticias.

## Decisiones

Los datos comerciales están centralizados en `src/data/`. Esto evita duplicar mensajes y facilita sustituir placeholders por contenido real. Los detalles de servicio se generan con `generateStaticParams`, por lo que las páginas son rápidas y amigables para SEO. No se creó canonical mientras el dominio siga pendiente. El JSON-LD omite dirección y reseñas porque todavía no están verificadas.

## Comprobación

```bash
npm run build
npm run dev
```

Visita cada ruta pública y prueba los enlaces de WhatsApp. Para Analytics, define el ID real en `.env.local`, acepta el banner y verifica `whatsapp_click` en DebugView.

## Aprendizaje profesional

En una entrevista puedes explicar que separar datos de presentación permite cambiar el contenido sin reescribir componentes, y que el App Router genera rutas estáticas para mejorar rendimiento y SEO. También puedes mencionar que el consentimiento controla la carga del script y evita enviar analítica antes de la decisión del visitante.
