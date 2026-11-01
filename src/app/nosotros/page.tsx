import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Sparkles } from 'lucide-react';
import { WhatsAppLink } from '@/components/shared/WhatsAppLink';

export const metadata: Metadata = {
  title: 'Sobre Globo Rosa',
  description: 'Conoce el enfoque de Globo Rosa, emprendimiento de decoraciones y eventos en Ventanilla, Callao.',
};

export default function AboutPage() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem]"><Image src="/images/globo-rosa/decoracion-borgona-sin-logo.png" alt="Decoración de cumpleaños en tonos borgoña y dorado" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
        <div>
          <p className="eyebrow">Sobre nosotros</p>
          <h1 className="mt-3 font-display text-5xl text-[#97134F]">Decoramos momentos que merecen quedarse en la memoria</h1>
          <p className="mt-6 leading-8 text-[#705d67]">Globo Rosa es un emprendimiento de decoraciones y eventos que atiende en Ventanilla, Callao. Nuestro trabajo parte de escuchar qué quieres celebrar y ayudarte a convertir esa idea en un ambiente especial.</p>
          <div className="mt-7 grid gap-4">
            <div className="flex gap-3"><Heart className="mt-1 shrink-0 text-[#D94D83]" aria-hidden="true" /><div><h2 className="font-semibold">Cercanía</h2><p className="text-sm text-[#705d67]">Conversamos contigo para entender la ocasión.</p></div></div>
            <div className="flex gap-3"><Sparkles className="mt-1 shrink-0 text-[#B99A56]" aria-hidden="true" /><div><h2 className="font-semibold">Cuidado visual</h2><p className="text-sm text-[#705d67]">Buscamos que cada detalle se sienta coherente y especial.</p></div></div>
          </div>
          <WhatsAppLink className="btn-primary mt-8" label="Conversemos sobre tu evento" />
        </div>
      </div>
    </section>
  );
}
