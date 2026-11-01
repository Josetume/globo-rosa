'use client';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/data/site';
export function WhatsAppLink({label='Cotizar por WhatsApp', message, className='btn-primary'}:{label?:string;message?:string;className?:string}) { return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noreferrer" onClick={()=>window.dispatchEvent(new CustomEvent('whatsapp_click'))}><MessageCircle size={18}/>{label}</a>; }
