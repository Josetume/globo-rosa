import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Palette, ShieldCheck, Star, WandSparkles } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { ServiceCard } from '@/components/home/ServiceCard';
import { services } from '@/data/services';
import { gallery } from '@/data/gallery';
import { WhatsAppLink } from '@/components/shared/WhatsAppLink';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  const celebrations = ['Cumpleaños infantiles', 'Cumpleaños de adultos', 'Graduaciones', 'Baby showers', 'Decoraciones temáticas'];

  return (
    <>
      <Hero />
      <section className="border-y border-pink-100 bg-white/80 py-5">
        <div className="container-page grid gap-4 text-center text-sm font-semibold text-[#705d67] sm:grid-cols-3">
          <p><span className="mr-2 text-[#B99A56]">✦</span>Atención en Ventanilla, Callao</p>
          <p><span className="mr-2 text-[#B99A56]">✦</span>Propuestas según tu ocasión</p>
          <p><span className="mr-2 text-[#B99A56]">✦</span>Cotización directa por WhatsApp</p>
        </div>
      </section>
      <section className="section-pad animate-fade-up reveal-delay-1">
        <div className="container-page">
          <div className="mb-10 max-w-2xl"><p className="eyebrow">Celebraciones que conectan</p><h2 className="mt-3 font-display text-4xl text-[#97134F] md:text-5xl">Un detalle especial cambia todo el ambiente</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{celebrations.map((item, index) => <div key={item} className="soft-card p-5"><span className="text-3xl text-[#D94D83]">0{index + 1}</span><h3 className="mt-6 font-semibold">{item}</h3><p className="mt-2 text-sm text-[#705d67]">Diseños pensados para tu ocasión.</p></div>)}</div>
        </div>
      </section>
      <section className="bg-white section-pad animate-fade-up reveal-delay-2">
        <div className="container-page grid gap-10 md:grid-cols-[.85fr_1.15fr] md:items-center">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#30252C]"><video className="absolute inset-0 h-full w-full object-cover" controls muted loop playsInline preload="metadata" poster="/images/globo-rosa/decoracion-rose-gold-sin-logo.png" aria-label="Video de presentación de Globo Rosa"><source src="/videos/globo-rosa-presentacion.mp4" type="video/mp4" />Tu navegador no puede reproducir este video.</video></div>
          <div><p className="eyebrow">Sobre Globo Rosa</p><h2 className="mt-3 font-display text-4xl text-[#97134F]">Celebramos contigo, con intención y detalle</h2><p className="mt-5 leading-8 text-[#705d67]">Somos un emprendimiento de decoraciones y eventos en Ventanilla. Escuchamos tu idea y la convertimos en una propuesta visual cálida, cuidada y especial para tu celebración.</p><Link className="btn-secondary mt-7" href="/nosotros">Conoce más sobre nosotros <ArrowRight size={18} /></Link></div>
        </div>
      </section>
      <section className="section-pad animate-fade-up reveal-delay-3">
        <div className="container-page"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Nuestros servicios</p><h2 className="mt-3 font-display text-4xl text-[#97134F]">Diseños para momentos importantes</h2></div><Link href="/servicios" className="btn-secondary">Ver catálogo completo <ArrowRight size={18} /></Link></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div>
      </section>
      <section className="bg-[#fff0f5] section-pad">
        <div className="container-page"><div className="mb-10"><p className="eyebrow">Galería provisional</p><h2 className="mt-3 font-display text-4xl text-[#97134F]">Ideas para inspirar tu celebración</h2><p className="mt-3 max-w-xl text-[#705d67]">Estas imágenes son referencias visuales provisionales. Las fotografías reales de Globo Rosa podrán incorporarse cuando estén disponibles.</p></div>
          <div className="grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.slice(0, 6).map((item, index) => <div key={item.title} className={index === 0 ? 'relative overflow-hidden rounded-2xl sm:row-span-2' : 'relative overflow-hidden rounded-2xl'}><Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#30252C]/70 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 text-white"><p className="text-xs uppercase tracking-widest text-white/80">{item.category}</p><p className="font-display text-xl">{item.title}</p></div></div>)}</div>
          <Link href="/galeria" className="btn-secondary mt-8">Ver galería completa <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="section-pad"><div className="container-page"><div className="mb-10 text-center"><p className="eyebrow">Por qué elegir Globo Rosa</p><h2 className="mt-3 font-display text-4xl text-[#97134F]">Un proceso cercano y bien cuidado</h2></div><div className="grid gap-5 md:grid-cols-3">{[[Heart, 'Escuchamos tu idea', 'Cada propuesta parte de la ocasión que quieres celebrar.'], [Palette, 'Diseñamos con intención', 'Cuidamos la paleta, los detalles y la armonía del espacio.'], [ShieldCheck, 'Acompañamos el proceso', 'Te orientamos para que cotizar sea claro y sencillo.']].map(([Icon, title, text]) => { const CurrentIcon = Icon as typeof Heart; return <div className="soft-card p-7 text-center" key={title as string}><CurrentIcon className="mx-auto text-[#D94D83]" size={30} /><h3 className="mt-5 font-display text-2xl text-[#97134F]">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#705d67]">{text as string}</p></div>; })}</div></div></section>
      <section className="bg-white section-pad" aria-labelledby="testimonios-title">
        <div className="container-page">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="eyebrow">Experiencias que inspiran</p>
            <h2 id="testimonios-title" className="mt-3 font-display text-4xl text-[#97134F]">Así queremos hacerte sentir</h2>
            <p className="mt-4 text-sm leading-7 text-[#705d67]">Cada celebración merece una atención cercana, detalles cuidados y una propuesta pensada para hacerla memorable.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="soft-card flex h-full flex-col p-7">
                <div className="flex gap-1" aria-label={`${testimonial.rating} de 5 estrellas`}>
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={18} fill={index < testimonial.rating ? 'currentColor' : 'none'} className={index < testimonial.rating ? 'text-[#B99A56]' : 'text-[#e6c5d2]'} aria-hidden="true" />)}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-xl leading-8 text-[#503b46]">“{testimonial.comment}”</blockquote>
                <footer className="mt-6 border-t border-pink-100 pt-4">
                  <p className="font-semibold text-[#97134F]">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[#705d67]">{testimonial.occasion}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#97134F] py-16 text-center text-white"><div className="container-page"><WandSparkles className="mx-auto text-[#F5B6CC]" /><h2 className="mt-4 font-display text-4xl">¿Lista para hacer especial tu próxima celebración?</h2><p className="mx-auto mt-4 max-w-xl text-pink-100">Cuéntanos qué estás imaginando y conversemos sobre tu evento.</p><WhatsAppLink label="Cotizar por WhatsApp" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-bold text-[#97134F]" /></div></section>
    </>
  );
}


