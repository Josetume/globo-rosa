import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/data/site';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={25} aria-hidden="true" />
    </a>
  );
}
