import { servicesHeroTranslations } from './hero';
import { servicesSeoTranslations } from './seo';
import { workProcessTranslations } from './workProcess';

export const servicesTranslations = {
  es: {
    services: {
      primaryCta: 'Pide tu presupuesto',
      secondaryCta: 'Ver proyectos relacionados',
      relatedProjects: 'Trabajos de este tipo realizados',
      allProjects: 'Ver todos los proyectos',
      meta: {
        title: 'Servicios de carpintería metálica y soldadura en Barcelona',
        description:
          'Servicios de carpintería metálica, soldadura, estructuras metálicas y trabajos en hierro a medida en Barcelona, Maresme y Vallès.',
      },
      commonJobsTitle: 'Trabajos habituales',
      commonJobsTitleSpecific: 'Trabajos habituales de {workType}',
      faqsTitle: 'Preguntas frecuentes',
      seo: servicesSeoTranslations.es.seo,
      hero: servicesHeroTranslations.es,
      workProcess: workProcessTranslations.es,
    },
  },
  ca: {
    services: {
      primaryCta: 'Demana el teu pressupost',
      secondaryCta: 'Veure projectes relacionats',
      relatedProjects: "Projectes d'aquest tipus realitzats",
      allProjects: 'Veure tots els projectes',
      meta: {
        title: 'Serveis de serralleria metàl·lica i soldadura a Barcelona',
        description:
          'Serveis de serralleria metàl·lica, soldadura, estructures metàl·liques i treballs en ferro a mida a Barcelona, Maresme i Vallès.',
      },
      commonJobsTitle: 'Treballs habituals',
      commonJobsTitleSpecific: 'Treballs habituals de {workType}',
      faqsTitle: 'Preguntes freqüents',
      seo: servicesSeoTranslations.ca.seo,
      hero: servicesHeroTranslations.ca,
      workProcess: workProcessTranslations.ca,
    },
  },
  en: {
    services: {
      primaryCta: 'Request a quote',
      secondaryCta: 'View related projects',
      relatedProjects: 'Related projects we have completed',
      allProjects: 'View all projects',
      meta: {
        title: 'Metalwork and welding services in Barcelona',
        description:
          'Metalwork, welding, structural steel and custom ironwork services in Barcelona, Maresme and Vallès.',
      },
      commonJobsTitle: 'Common jobs',
      commonJobsTitleSpecific: 'Common jobs of {workType}',
      faqsTitle: 'Frequently asked questions',
      seo: servicesSeoTranslations.en.seo,
      hero: servicesHeroTranslations.en,
      workProcess: workProcessTranslations.en,
    },
  },
} as const;
