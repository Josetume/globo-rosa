'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { WhatsAppLink } from '@/components/shared/WhatsAppLink';
import { BrandMark } from '@/components/shared/BrandMark';

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Inicio', '/'], ['Servicios', '/servicios'], ['Galería', '/galeria'], ['Nosotros', '/nosotros'], ['Contacto', '/contacto']] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-[#fff9fb]/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between"><Link href="/" className="flex items-center gap-3" aria-label="Globo Rosa, inicio"><BrandMark /><span className="hidden text-sm font-bold tracking-[.18em] text-[#97134F] sm:block">GLOBO ROSA</span></Link><nav className="hidden items-center gap-7 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="nav-link text-sm font-semibold">{label}</Link>)}<WhatsAppLink label="WhatsApp" className="btn-primary text-sm" /></nav><button type="button" className="p-2 md:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      {open && <nav className="border-t border-pink-100 bg-white px-6 pb-6 pt-3 md:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} className="block py-3 font-semibold" key={href} href={href}>{label}</Link>)}<WhatsAppLink label="Escribir por WhatsApp" className="btn-primary mt-2 w-full" /></nav>}
    </header>
  );
}
