import Link from 'next/link';
import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { BrandMark } from '@/components/shared/BrandMark';

export function Footer() {
  const navigation = [['Inicio', '/'], ['Servicios', '/servicios'], ['Galería', '/galeria'], ['Nosotros', '/nosotros'], ['Contacto', '/contacto']] as const;
  return (
    <footer className="bg-[#30252C] py-12 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><div className="mb-4 flex items-center gap-3"><BrandMark footer /><div><p className="font-display text-xl">Globo Rosa</p><p className="text-xs tracking-[.18em] text-pink-200">DECORACIONES &amp; EVENTOS</p></div></div><p className="max-w-xs text-sm leading-6 text-pink-100">Decoraciones especiales para celebrar en Ventanilla, Callao.</p></div>
        <div><h2 className="mb-4 font-semibold">Navegación</h2><nav className="grid gap-2 text-sm text-pink-100" aria-label="Navegación del pie de página">{navigation.map(([label, href]) => <Link className="transition hover:text-white hover:underline" key={href} href={href}>{label}</Link>)}</nav></div>
        <div><h2 className="mb-4 font-semibold">Servicios</h2><nav className="grid gap-2 text-sm text-pink-100" aria-label="Servicios">{services.slice(0, 5).map((service) => <Link className="transition hover:text-white hover:underline" key={service.slug} href={'/servicios/' + service.slug}>{service.name}</Link>)}</nav></div>
        <div><h2 className="mb-4 font-semibold">Contacto</h2><div className="grid gap-3 text-sm text-pink-100"><p className="flex gap-2"><MapPin size={18} aria-hidden="true" />{site.location}</p><a className="flex gap-2 transition hover:text-white hover:underline" href={'https://wa.me/' + site.phone} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" />+51 978 624 837</a><p className="flex gap-2"><Instagram size={18} aria-hidden="true" />Redes sociales próximamente</p></div></div>
      </div>
      <div className="container-page mt-10 border-t border-white/15 pt-5 text-xs text-pink-200">© {new Date().getFullYear()} Globo Rosa. Todos los derechos reservados.</div>
    </footer>
  );
}



