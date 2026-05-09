export const formTranslations = {
  es: {
    form: {
      eyebrow: 'Solicitud de presupuesto',
      title: 'Explícanos qué necesitas',
      subtitle:
        'Cuanta más información nos envíes, más fácil será valorar el trabajo y orientarte con una solución ajustada.',

      requiredFieldsNote: 'Campos obligatorios',

      fields: {
        name: {
          label: 'Nombre',
        },
        location: {
          label: 'Localidad',
          placeholder: 'Ej. Vilassar de Mar',
        },
        phone: {
          label: 'Teléfono',
        },
        email: {
          label: 'Email',
        },
        service: {
          label: '¿Qué necesitas?',
          other: 'Otro',
          otherLabel: 'Indica qué necesitas',
          otherPlaceholder: 'Ej. soporte metálico a medida',
        },
        message: {
          label: 'Describe brevemente el proyecto',
          placeholder: 'Cuéntanos qué necesitas, si es obra nueva, reparación, sustitución, etc.',
        },
        measurements: {
          label: 'Medidas aproximadas',
          placeholder: 'Ej. 3 m de ancho x 1,5 m de alto',
        },
      },

      installationPlace: {
        label: 'Lugar de instalación',
        description: 'Esto nos ayuda a valorar el tipo de instalación y acceso al lugar.',
        options: [
          { key: 'indoor', value: 'Interior', label: 'Interior' },
          { key: 'outdoor', value: 'Exterior', label: 'Exterior' },
          {
            key: 'indoor_outdoor',
            value: 'Interior/exterior',
            label: 'Interior/exterior',
          },
          {
            key: 'not_sure',
            value: 'No estoy seguro',
            label: 'No estoy seguro',
          },
        ],
      },

      accessConditions: {
        label: 'Acceso y condiciones del lugar',
        description: 'Marca las opciones que puedan afectar a la instalación o visita técnica.',
        options: [
          {
            key: 'street_access',
            value: 'Acceso directo desde calle',
            title: 'Acceso directo desde calle',
            description: 'Se puede acceder fácilmente sin escaleras ni ascensor.',
          },
          {
            key: 'stairs',
            value: 'Hay escaleras',
            title: 'Hay escaleras',
            description: 'Es necesario subir o bajar escaleras para acceder.',
          },
          {
            key: 'elevator',
            value: 'Ascensor disponible',
            title: 'Ascensor disponible',
            description: 'Hay ascensor operativo para transportar materiales.',
          },
          {
            key: 'height_work',
            value: 'Trabajo en altura',
            title: 'Trabajo en altura',
            description: 'Es necesario trabajar a más de 2 metros de altura.',
          },
          {
            key: 'narrow_access',
            value: 'Zona estrecha o de difícil acceso',
            title: 'Zona estrecha o de difícil acceso',
            description: 'El acceso es limitado o complicado para llevar los materiales.',
          },
          {
            key: 'remove_existing_piece',
            value: 'Retirar pieza existente',
            title: 'Retirar pieza existente',
            description: 'Es necesario desmontar o retirar algo antes.',
          },
        ],
      },

      files: {
        title: 'Añade fotos o referencias',
        description: 'Arrastra imágenes aquí o haz clic para seleccionarlas.',
        maxImages: 'Puedes subir hasta {max} imágenes.',
        selectedOne: '1 imagen seleccionada de {max}',
        selectedMany: '{count} imágenes seleccionadas de {max}',
        invalidOne: '1 archivo no es una imagen válida.',
        invalidMany: '{count} archivos no son imágenes válidas.',
        maxExceeded: 'Solo puedes subir hasta {max} imágenes.',
        removeImage: 'Eliminar imagen',
      },

      submit: {
        note: 'Te responderemos lo antes posible para comentar detalles y próximos pasos.',
        label: 'Enviar solicitud',
      },
    },
  },

  ca: {
    form: {
      eyebrow: 'Sol·licitud de pressupost',
      title: "Explica'ns què necessites",
      subtitle:
        'Com més informació ens enviïs, més fàcil serà valorar la feina i orientar-te amb una solució ajustada.',

      requiredFieldsNote: 'Camps obligatoris',

      fields: {
        name: {
          label: 'Nom',
        },
        location: {
          label: 'Localitat',
          placeholder: 'Ex. Vilassar de Mar',
        },
        phone: {
          label: 'Telèfon',
        },
        email: {
          label: 'Email',
        },
        service: {
          label: 'Què necessites?',
          other: 'Altre',
          otherLabel: 'Indica què necessites',
          otherPlaceholder: 'Ex. suport metàl·lic a mida',
        },
        message: {
          label: 'Descriu breument el projecte',
          placeholder: "Explica'ns què necessites, si és obra nova, reparació, substitució, etc.",
        },
        measurements: {
          label: 'Mides aproximades',
          placeholder: "Ex. 3 m d'amplada x 1,5 m d'alçada",
        },
      },

      installationPlace: {
        label: "Lloc d'instal·lació",
        description: "Això ens ajuda a valorar el tipus d'instal·lació i l'accés al lloc.",
        options: [
          { key: 'indoor', value: 'Interior', label: 'Interior' },
          { key: 'outdoor', value: 'Exterior', label: 'Exterior' },
          {
            key: 'indoor_outdoor',
            value: 'Interior/exterior',
            label: 'Interior/exterior',
          },
          {
            key: 'not_sure',
            value: 'No estoy seguro',
            label: "No n'estic segur",
          },
        ],
      },

      accessConditions: {
        label: 'Accés i condicions del lloc',
        description: 'Marca les opcions que puguin afectar la instal·lació o la visita tècnica.',
        options: [
          {
            key: 'street_access',
            value: 'Acceso directo desde calle',
            title: 'Accés directe des del carrer',
            description: "S'hi pot accedir fàcilment sense escales ni ascensor.",
          },
          {
            key: 'stairs',
            value: 'Hay escaleras',
            title: 'Hi ha escales',
            description: 'Cal pujar o baixar escales per accedir-hi.',
          },
          {
            key: 'elevator',
            value: 'Ascensor disponible',
            title: 'Ascensor disponible',
            description: 'Hi ha un ascensor operatiu per transportar materials.',
          },
          {
            key: 'height_work',
            value: 'Trabajo en altura',
            title: 'Treball en alçada',
            description: "Cal treballar a més de 2 metres d'alçada.",
          },
          {
            key: 'narrow_access',
            value: 'Zona estrecha o de difícil acceso',
            title: 'Zona estreta o de difícil accés',
            description: "L'accés és limitat o complicat per portar els materials.",
          },
          {
            key: 'remove_existing_piece',
            value: 'Retirar pieza existente',
            title: 'Retirar peça existent',
            description: 'Cal desmuntar o retirar algun element abans.',
          },
        ],
      },

      files: {
        title: 'Afegeix fotos o referències',
        description: 'Arrossega imatges aquí o fes clic per seleccionar-les.',
        maxImages: 'Pots pujar fins a {max} imatges.',
        selectedOne: '1 imatge seleccionada de {max}',
        selectedMany: '{count} imatges seleccionades de {max}',
        invalidOne: '1 fitxer no és una imatge vàlida.',
        invalidMany: '{count} fitxers no són imatges vàlides.',
        maxExceeded: 'Només pots pujar fins a {max} imatges.',
        removeImage: 'Eliminar imatge',
      },

      submit: {
        note: 'Et respondrem al més aviat possible per comentar detalls i pròxims passos.',
        label: 'Enviar sol·licitud',
      },
    },
  },

  en: {
    form: {
      eyebrow: 'Quote request',
      title: 'Tell us what you need',
      subtitle:
        'The more information you send us, the easier it will be to assess the work and recommend the best solution.',

      requiredFieldsNote: 'Required fields',

      fields: {
        name: {
          label: 'Name',
        },
        location: {
          label: 'Location',
          placeholder: 'E.g. Vilassar de Mar',
        },
        phone: {
          label: 'Phone',
        },
        email: {
          label: 'Email',
        },
        service: {
          label: 'What do you need?',
          other: 'Other',
          otherLabel: 'Please specify what you need',
          otherPlaceholder: 'E.g. custom metal bracket',
        },
        message: {
          label: 'Briefly describe the project',
          placeholder:
            'Tell us what you need, whether it is a new installation, repair, replacement, etc.',
        },
        measurements: {
          label: 'Approximate measurements',
          placeholder: 'E.g. 3 m wide x 1.5 m high',
        },
      },

      installationPlace: {
        label: 'Installation location',
        description: 'This helps us assess the type of installation and site access.',
        options: [
          { key: 'indoor', value: 'Interior', label: 'Indoor' },
          { key: 'outdoor', value: 'Exterior', label: 'Outdoor' },
          {
            key: 'indoor_outdoor',
            value: 'Interior/exterior',
            label: 'Indoor / Outdoor',
          },
          {
            key: 'not_sure',
            value: 'No estoy seguro',
            label: 'Not sure',
          },
        ],
      },

      accessConditions: {
        label: 'Access and site conditions',
        description: 'Select any options that may affect installation or the site visit.',
        options: [
          {
            key: 'street_access',
            value: 'Acceso directo desde calle',
            title: 'Direct street access',
            description: 'The site can be accessed easily without stairs or elevator.',
          },
          {
            key: 'stairs',
            value: 'Hay escaleras',
            title: 'There are stairs',
            description: 'Stairs are required to access the site.',
          },
          {
            key: 'elevator',
            value: 'Ascensor disponible',
            title: 'Elevator available',
            description: 'A working elevator is available to transport materials.',
          },
          {
            key: 'height_work',
            value: 'Trabajo en altura',
            title: 'Work at height',
            description: 'Work must be carried out above 2 meters.',
          },
          {
            key: 'narrow_access',
            value: 'Zona estrecha o de difícil acceso',
            title: 'Narrow or difficult access',
            description: 'Access is limited or difficult for transporting materials.',
          },
          {
            key: 'remove_existing_piece',
            value: 'Retirar pieza existente',
            title: 'Remove existing item',
            description: 'An existing element must be dismantled or removed first.',
          },
        ],
      },

      files: {
        title: 'Add photos or references',
        description: 'Drag images here or click to select them.',
        maxImages: 'You can upload up to {max} images.',
        selectedOne: '1 image selected out of {max}',
        selectedMany: '{count} images selected out of {max}',
        invalidOne: '1 file is not a valid image.',
        invalidMany: '{count} files are not valid images.',
        maxExceeded: 'You can only upload up to {max} images.',
        removeImage: 'Remove image',
      },

      submit: {
        note: 'We will get back to you as soon as possible to discuss details and next steps.',
        label: 'Send request',
      },
    },
  },
} as const;
