const businessInfo = {
  //TODO: Revisar el CIF/NIF correcto de la empresa
  taxId: 'REVISAR-12345678A',
  name: 'Solbot Ferros, S.L.',
  shortName: 'Solbot Ferros',
  description:
    'Empresa especializada en carpinteria metálica, ofreciendo soluciones de alta calidad para proyectos residenciales y comerciales.',
  address: 'Calle inventada, 123, 28000 Madrid, España',
  googleMapsUrl: 'https://maps.app.goo.gl/C96EQKSeDXYL3pyZ7',
  lat: 41.52232337015609,
  lng: 2.4256151966086894,
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
