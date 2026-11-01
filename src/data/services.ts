export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  accent: string;
  category: string;
  image: string;
};

export const services: Service[] = [
  { slug: 'cumpleanos-infantiles', name: 'Cumpleaños infantiles', shortDescription: 'Escenarios llenos de color para celebrar a los más pequeños.', description: 'Diseñamos ambientaciones alegres y personalizadas para que cada cumpleaños infantil tenga un rincón especial.', accent: 'from-pink-100 to-rose-200', category: 'Cumpleaños', image: '/images/globo-rosa/decoracion-minecraft-sin-logo.png' },
  { slug: 'cumpleanos-adultos', name: 'Cumpleaños de adultos', shortDescription: 'Detalles elegantes para celebrar cada nueva vuelta al sol.', description: 'Combinamos globos, fondos y detalles decorativos con una estética moderna para celebrar tus momentos importantes.', accent: 'from-fuchsia-100 to-pink-200', category: 'Cumpleaños', image: '/images/globo-rosa/decoracion-borgona-sin-logo.png' },
  { slug: 'graduaciones', name: 'Graduaciones', shortDescription: 'Una decoración a la altura de un logro inolvidable.', description: 'Creamos espacios para fotos y celebración que acompañan el orgullo de cada graduación.', accent: 'from-amber-50 to-pink-100', category: 'Celebraciones', image: '/images/globo-rosa/decoracion-azul-sin-logo.png' },
  { slug: 'baby-showers', name: 'Baby showers', shortDescription: 'Ambientes dulces para recibir una nueva historia.', description: 'Proponemos decoraciones delicadas para compartir la ilusión de la llegada de un bebé.', accent: 'from-sky-50 to-pink-100', category: 'Celebraciones', image: '/images/globo-rosa/decoracion-verde-sin-logo.png' },
  { slug: 'decoraciones-tematicas', name: 'Decoraciones temáticas', shortDescription: 'Llevamos tu idea a un escenario que se sienta tuyo.', description: 'Trabajamos conceptos temáticos para convertir una celebración en una experiencia visual coherente.', accent: 'from-violet-100 to-pink-100', category: 'Diseño', image: '/images/globo-rosa/decoracion-rosa-sin-logo.png' },
  { slug: 'arreglos-con-globos', name: 'Arreglos con globos', shortDescription: 'Composiciones que alegran espacios y sorprenden.', description: 'Arreglos con globos para acompañar regalos, mesas principales y rincones especiales.', accent: 'from-rose-100 to-orange-100', category: 'Detalles', image: '/images/globo-rosa/decoracion-rose-gold-sin-logo.png' },
];
