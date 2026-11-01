import type { MetadataRoute } from 'next';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  if (!base) return [];

  const routes = ['', 'servicios', 'galeria', 'nosotros', 'contacto', ...services.map((service) => 'servicios/' + service.slug)];
  return routes.map((path) => ({
    url: base + '/' + path,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('servicios/') ? 0.8 : 0.7,
  }));
}
