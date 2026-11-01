import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '@/data/services';
import { WhatsAppLink } from '@/components/shared/WhatsAppLink';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.name + ' en Ventanilla',
    description: service.name + ' en Ventanilla, Callao. Conoce la propuesta de Globo Rosa y cotiza por WhatsApp.',
    keywords: [service.name + ' en Ventanilla', service.name + ' en Callao', 'decoración con globos en Ventanilla'],
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <section className="section-pad">
      <div className="container-page"><Link href="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-[#97134F]"><ArrowLeft size={16} /> Volver a servicios</Link><div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center"><div className="relative min-h-[380px] overflow-hidden rounded-[2rem]"><Image src={service.image} alt={service.name + ' con globos'} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div><p className="eyebrow">{service.category}</p><h1 className="mt-3 font-display text-5xl text-[#97134F]">{service.name}</h1><p className="mt-6 text-lg leading-8 text-[#705d67]">{service.description}</p><ul className="mt-6 grid gap-3 text-[#604d58]"><li className="flex gap-2"><Check className="text-[#D94D83]" aria-hidden="true" /> Propuesta visual adaptada a tu ocasión</li><li className="flex gap-2"><Check className="text-[#D94D83]" aria-hidden="true" /> Orientación para definir el estilo</li><li className="flex gap-2"><Check className="text-[#D94D83]" aria-hidden="true" /> Atención en Ventanilla, Callao</li></ul><WhatsAppLink className="btn-primary mt-8" label="Cotizar este servicio" message={'Hola, quisiera cotizar una decoración de ' + service.name.toLowerCase() + '.'} /></div></div></div>
    </section>
  );
}
