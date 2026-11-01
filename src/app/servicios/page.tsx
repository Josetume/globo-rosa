import type { Metadata } from 'next';
import { ServiceCard } from '@/components/home/ServiceCard';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Servicios de decoración',
  description: 'Conoce los servicios de decoración de fiestas y eventos de Globo Rosa en Ventanilla, Callao.',
};

export default function ServicesPage() {
  return (
    <section className="section-pad">
      <div className="container-page"><p className="eyebrow">Catálogo</p><h1 className="mt-3 font-display text-5xl text-[#97134F]">Servicios para celebrar a tu manera</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[#705d67]">Explora nuestras opciones de decoración y escríbenos para conversar sobre tu evento en Ventanilla, Callao.</p><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div>
    </section>
  );
}
