export const site = {
  name: 'Globo Rosa',
  business: 'DECORACIONES & EVENTOS',
  phone: '51978624837',
  whatsappMessage: 'Hola, vi la página web de Globo Rosa y quisiera cotizar una decoración para mi evento.',
  location: 'Ventanilla, Callao, Perú',
} as const;

export const whatsappUrl = (message: string = site.whatsappMessage) =>
  'https://wa.me/' + site.phone + '?text=' + encodeURIComponent(message);
