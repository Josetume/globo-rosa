import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WhatsAppLink } from '@/components/shared/WhatsAppLink';

export function Hero() {
  return (
    <section className="overflow-hidden bg-[#fff9fb]">
      <div className="container-page grid items-center gap-10 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
        <div className="animate-fade-up">
          <p className="eyebrow mb-5">Decoraciones &amp; eventos · Ventanilla, Callao</p>
          <h1 className="font-display text-5xl leading-[1.04] text-[#97134F] md:text-7xl">Decoración de fiestas y eventos en Ventanilla, Callao</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#604d58]">En Globo Rosa creamos decoraciones especiales para cumpleaños, graduaciones, baby showers y momentos inolvidables.</p>
          <div className="mt-8 flex flex-wrap gap-3"><WhatsAppLink label="Cotiza tu evento" /><Link className="btn-secondary" href="/servicios">Ver nuestros servicios <ArrowRight size={18} /></Link></div>
          <div className="mt-8 flex items-center gap-2 text-sm text-[#7b6570]"><Sparkles size={17} className="text-[#B99A56]" aria-hidden="true" />Diseños pensados para celebrar lo que te hace feliz</div>
        </div>
        <div className="animate-float-soft relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-2xl shadow-pink-200/50 md:min-h-[500px]">
          <Image src="/images/globo-rosa/decoracion-rosa-sin-logo.png" alt="Decoración de cumpleaños con globos rosa y blanco" fill priority sizes="(max-width: 768px) 100vw, 48vw" className="object-cover transition duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#30252C]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur"><p className="font-display text-2xl text-[#97134F]">Tu idea, hecha celebración</p><p className="mt-1 text-sm text-[#604d58]">Imágenes reales próximamente</p></div>
        </div>
      </div>
    </section>
  );
}
