import type { Metadata } from 'next';
import Image from 'next/image';
import { gallery } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Galería de decoraciones',
  description: 'Galería de decoraciones de Globo Rosa en Ventanilla, Callao.',
};

export default function GalleryPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <p className="eyebrow">Inspiración</p>
        <h1 className="mt-3 font-display text-5xl text-[#97134F]">Galería de decoraciones</h1>
        <p className="mt-5 max-w-2xl leading-8 text-[#705d67]">
          Estas imágenes son referencias visuales provisionales y podrán reemplazarse fácilmente por fotografías reales de Globo Rosa.
        </p>
        <div className="mt-12 grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <article className={`relative overflow-hidden rounded-3xl ${index === 0 ? 'lg:row-span-2' : ''}`} key={item.title}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#30252C]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-xs uppercase tracking-widest text-white/80">{item.category}</p>
                <h2 className="font-display text-2xl">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
