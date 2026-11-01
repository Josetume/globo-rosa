import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '@/data/services';
import { WhatsAppLink } from '@/components/shared/WhatsAppLink';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="soft-card group overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <Image src={service.image} alt={service.name + ' con globos'} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#30252C]/45 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#97134F]">{service.category}</span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-[#97134F]">{service.name}</h3>
        <p className="mt-2 text-sm leading-6 text-[#705d67]">{service.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="btn-secondary px-4 py-2 text-sm" href={'/servicios/' + service.slug}>Ver detalles <ArrowUpRight size={16} /></Link>
          <WhatsAppLink label="Cotizar" message={'Hola, quisiera cotizar una decoración de ' + service.name.toLowerCase() + '.'} className="btn-primary px-4 py-2 text-sm" />
        </div>
      </div>
    </article>
  );
}
