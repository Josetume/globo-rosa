import type { Metadata } from 'next';
import { MapPin, MessageCircle } from 'lucide-react';
import { site } from '@/data/site';
import { WhatsAppLink } from '@/components/shared/WhatsAppLink';

export const metadata: Metadata = {
  title: 'Contacto y cotizaciones',
  description: 'Cotiza por WhatsApp tu decoración de cumpleaños, graduación, baby shower o evento en Ventanilla, Callao.',
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-page"><p className="eyebrow">Hablemos</p><h1 className="mt-3 font-display text-5xl text-[#97134F]">Cuéntanos qué quieres celebrar</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[#705d67]">Conversemos sobre tu idea y recibe orientación para tu decoración en Ventanilla, Callao.</p><div className="mt-10 grid gap-6 md:grid-cols-2"><div className="soft-card p-8"><MessageCircle className="text-[#D94D83]" size={32} aria-hidden="true" /><h2 className="mt-5 font-display text-3xl text-[#97134F]">Cotiza por WhatsApp</h2><p className="mt-3 leading-7 text-[#705d67]">Escríbenos directamente y conversemos sobre fecha, estilo y necesidades de tu evento.</p><WhatsAppLink className="btn-primary mt-7" label="Abrir WhatsApp" /></div><div className="soft-card p-8"><MapPin className="text-[#B99A56]" size={32} aria-hidden="true" /><h2 className="mt-5 font-display text-3xl text-[#97134F]">Zona de atención</h2><p className="mt-3 leading-7 text-[#705d67]">Atendemos en {site.location}. La dirección exacta se coordina según cada evento.</p><a className="mt-5 inline-flex font-semibold text-[#97134F] underline" href={'https://wa.me/' + site.phone} target="_blank" rel="noreferrer">+51 978 624 837</a></div></div></div>
    </section>
  );
}
