import { blogTranslations } from './blog';
import { heroTranslations } from './hero';
import { projectsTranslations } from './projects';
import { sectorsTranslations } from './sectors';
import { serviceAreasTranslations } from './serviceArea';
import { servicesTranslations } from './services';
import { whyUsTranslations } from './whyUs';

export const homeTranslations = {
  es: {
    home: {
      title: 'Herrería y estructuras metálicas a medida en Barcelona',
      description:
        'Fabricación e instalación de estructuras metálicas, puertas, rejas, barandillas y mobiliario a medida para viviendas, negocios e industria en Barcelona, Maresme y Vallès.',

      ...heroTranslations.es,
      ...blogTranslations.es,
      ...servicesTranslations.es,
      ...projectsTranslations.es,
      ...sectorsTranslations.es,
      ...whyUsTranslations.es,
      ...serviceAreasTranslations.es,
    },
  },

  ca: {
    home: {
      title: 'Ferreria i estructures metàl·liques a mida a Barcelona',
      description:
        "Fabricació i instal·lació d'estructures metàl·liques, portes, reixes, baranes i mobiliari a mida per a habitatges, negocis i indústria a Barcelona, Maresme i Vallès.",

      ...heroTranslations.ca,
      ...blogTranslations.ca,
      ...servicesTranslations.ca,
      ...projectsTranslations.ca,
      ...sectorsTranslations.ca,
      ...whyUsTranslations.ca,
      ...serviceAreasTranslations.ca,
    },
  },

  en: {
    home: {
      title: 'Custom metalwork and metal structures in Barcelona',
      description:
        'Design, fabrication and installation of metal structures, gates, railings and bespoke furniture for homes, businesses and industry in Barcelona, Maresme and Vallès.',

      ...heroTranslations.en,
      ...blogTranslations.en,
      ...servicesTranslations.en,
      ...projectsTranslations.en,
      ...sectorsTranslations.en,
      ...whyUsTranslations.en,
      ...serviceAreasTranslations.en,
    },
  },
} as const;
