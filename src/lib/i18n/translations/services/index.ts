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
      navigation: {
        eyebrow: 'Servicios relacionados',
        serviceTitle: 'Servicio disponible por zonas',
        serviceDescription:
          'Consulta las páginas específicas de este servicio según la zona donde necesites realizar el trabajo.',
        localizedTitle: 'Más opciones relacionadas',
        localizedDescription:
          'Puedes volver al servicio general, consultar otras zonas o ver servicios relacionados en esta misma ubicación.',
        availableAreas: 'Zonas disponibles',
        sameService: 'Este servicio',
        relatedInArea: 'Servicios relacionados en la zona',
      },
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
      navigation: {
        eyebrow: 'Serveis relacionats',
        serviceTitle: 'Servei disponible per zones',
        serviceDescription:
          'Consulta les pàgines específiques d’aquest servei segons la zona on necessitis realitzar el treball.',
        localizedTitle: 'Més opcions relacionades',
        localizedDescription:
          'Pots tornar al servei general, consultar altres zones o veure serveis relacionats en aquesta mateixa ubicació.',
        availableAreas: 'Zones disponibles',
        sameService: 'Aquest servei',
        relatedInArea: 'Serveis relacionats a la zona',
      },
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
      navigation: {
        eyebrow: 'Related services',
        serviceTitle: 'Service available by area',
        serviceDescription:
          'See the specific pages for this service depending on the area where you need the work carried out.',
        localizedTitle: 'More related options',
        localizedDescription:
          'You can return to the general service page, check other areas or view related services in the same location.',
        availableAreas: 'Available areas',
        sameService: 'This service',
        relatedInArea: 'Related services in this area',
      },
      seo: servicesSeoTranslations.en.seo,
      hero: servicesHeroTranslations.en,
      workProcess: workProcessTranslations.en,
    },
  },
} as const;
