export interface Testimonial {
  name: string;
  occasion: string;
  comment: string;
  rating: number;
}

/**
 * Textos demostrativos para validar la presentación visual.
 * Deben reemplazarse por reseñas autorizadas antes de publicar campañas.
 */
export const testimonials: Testimonial[] = [
  {
    name: 'Cliente de cumpleaños infantil',
    occasion: 'Decoración temática',
    comment: 'Nos encantó cómo una idea sencilla puede convertirse en un ambiente tan especial.',
    rating: 5,
  },
  {
    name: 'Cliente de baby shower',
    occasion: 'Celebración familiar',
    comment: 'La combinación de colores y detalles hizo que nuestra celebración se sintiera única.',
    rating: 5,
  },
  {
    name: 'Cliente de graduación',
    occasion: 'Decoración para graduación',
    comment: 'Una propuesta delicada y cuidada para celebrar un logro importante en familia.',
    rating: 5,
  },
];
