const businessInfo = {
  //TODO: Revisar el CIF/NIF correcto de la empresa
  taxId: 'REVISAR-12345678A',

  name: 'Solbot Ferros, S.L.',
  shortName: 'Solbot Ferros',
  description:
    'Empresa especializada en carpintería metálica, estructuras metálicas y soldadura profesional para proyectos residenciales, comerciales e industriales en Barcelona, Maresme y Vallès.',

  logo: '/images/brand/logo.png',
  image: '/images/og-solbot-ferros.jpg',

  address: 'Camí del Crist, 08339 Vilassar de Mar, Barcelona, España',
  googleMapsUrl: 'https://maps.app.goo.gl/C96EQKSeDXYL3pyZ7',
  googleBusinessProfile: 'https://share.google/PvFumdu05GmasncEs',

  lat: 41.52232337015609,
  lng: 2.4256151966086894,

  priceRange: '€€',

  areaServed: ['Barcelona', 'Maresme', 'Barcelonès', 'Vallès Oriental', 'Vallès Occidental'],

  services: [
    'Estructuras metálicas',
    'Carpintería metálica',
    'Soldadura profesional',
    'Rejas metálicas',
    'Barandillas metálicas',
    'Puertas metálicas',
    'Cerramientos metálicos',
    'Pérgolas metálicas',
  ],

  languages: ['Spanish', 'Catalan', 'English'],

  phone: {
    prefix: '+34',
    number: '603211594',
  },

  email: 'solbotferros@gmail.com',

  socialMedia: {
    instagram: {
      url: 'https://www.instagram.com/solbot.ferros',
      username: 'solbot.ferros',
    },
  },

  openingHours: [
    {
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      intervals: [
        { opens: '08:00', closes: '13:30' },
        { opens: '15:00', closes: '18:00' },
      ],
    },
    {
      days: ['saturday'],
      intervals: [{ opens: '09:00', closes: '13:00' }],
    },
    {
      days: ['sunday'],
      intervals: [],
    },
  ],

  reviews: {
    google: {
      url: 'https://maps.app.goo.gl/QyQbVbHVUpwPBNkK6',
      rating: 5.0,
      totalReviews: 12,
    },
  },
};

export default businessInfo;
