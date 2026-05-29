import { createContext, useContext, useState, type ReactNode } from 'react'
import type {Lang, Translations} from '../types'

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      logo: 'Julian D Silva',
      perfil: 'Perfil',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      langBtn: 'EN',
    },
    perfil: {
      name: 'Julian D Silva',
      role: 'Editor de video || Animador 2D',
      description:
          "Soy graduado de Universidad de los Andes en Narrativas Digitales, con dos especializaciones: una en Cine, Video y Animación, y otra en Computación Visual. Actualmente curso un programa anual enfocado en programación de videojuegos, desarrollo web y aplicaciones móviles en la Vancouver Film School. \n\n Llevo desde hace un par de años aprendiendo y creciendo programando; y aunque me fondo es en JavaScript, html y css, este constantemente aprendiendo y creciendo hacia nuevas areas. Actualmente he practicado con projectos peque;os y desafios, y cada vez me enfoco mas en mejorar.",
      tags: ['Photoshop - 4 años', 'Premiere - 5 años', 'Reaper - 4 años', 'Ilustrator - 1 año', 'After Effects - 1 año', 'Final cut - 2 años', 'Stop motion studio - 2 años'],
    },
    proyectos: {
      sections: [
        { id: '2025', label: '2025' },
        { id: '2024', label: '2024' },
        { id: '2023', label: '2023' },
        { id: '2022', label: '2022' },
      ],
      aclaration: 'This had been my projects from the last years.',
      projects: [
        {
          id: 'p1',
          title: 'La Familia Amarilla sin derechos de autor',
          description:
              'Este es un projecto estulo "Couche Gag" el cual combina dos intros de series de la cadena anteriormente conocida como "FOX". Estos se hicieron unicamente con proposito educativo y sin ningun tipo de remuneración. Esta fue hecha durante 2 semanas usandos los programas de Adobe Photoshop y Adobe After Effects',
        },
        {
          id: 'p2',
          title: 'Proyecto Beta',
          description: 'Dashboard de analíticas con visualizaciones interactivas. Datos en tiempo real con WebSockets y exportación a CSV.',
        },
        {
          id: 'p3',
          title: 'Proyecto Gamma',
          description:'Experimento con animaciones generativas usando Canvas API y algoritmos de ruido procedural.',
        }
      ]
    },
    contacto: {
      title: 'Infromación de contacto',
      subtitle1:
        'Las buenas ideas merecen hacerse realidad. Si tienes un proyecto o simplemente ganas de crear algo diferente, este es el momento.',
      subtitle2: " \n\n No dejes tus ideas en borrador. Escríbeme y llevemos tu idea al siguiente nivel.",
      labels: {
        email: 'Email',
        phoneCol: 'Teléfono',
        phoneCad: 'Teléfono',
        location: 'Ubicación',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
  },
  en: {
    nav: {
      logo: 'Julian D Silva',
      perfil: 'Profile',
      proyectos: 'Projects',
      contacto: 'Contact',
      langBtn: 'ES',
    },
    perfil: {
      name: 'Julian D Silva',
      role: '2D Animator || Video Editor',
      description:
            "I graduated from Universidad de los Andes with a degree in Digital Narratives, with two specializations: one in Film, Video, and Animation, and another in Visual Computing. I am currently enrolled in a one-year program focused on video game programming, web development, and mobile application development at Vancouver Film School.\n\nI have experience developing narrative and multimedia projects, combining areas such as audiovisual production, animation, programming, and digital content creation.\n\nIn the audiovisual field, I have worked on both entertainment and commercial projects, contributing to the production of animations, short films, advertisement recording and editing, among other audiovisual formats.\n\nI am a persistent, organized, and collaborative person who values teamwork and active listening. I am open to new ideas, eager to learn from others, and adaptable to different environments, always striving for both professional and creative growth. ",
        tags: ['Photoshop - 4 years', 'Premiere - 5 years', 'Reaper - 4 years', 'Ilustrator - 1 year', 'After Effects - 1 year', 'Final cut - 2 years', 'Stop motion studio - 2 years'],
    },
    proyectos: {
      sections: [
            { id: '2025', label: '2025' },
            { id: '2024', label: '2024' },
            { id: '2023', label: '2023' },
            { id: '2022', label: '2022' },
        ],
        aclaration: 'This had been my projects from the last years.',
        projects: [
            {
                id: 'p1',
                title: 'La Familia Amarilla sin derechos de autor',
                description:
                    'Este es un projecto estulo "Couche Gag" el cual combina dos intros de series de la cadena anteriormente conocida como "FOX". Estos se hicieron unicamente con proposito educativo y sin ningun tipo de remuneración. Esta fue hecha durante 2 semanas usandos los programas de Adobe Photoshop y Adobe After Effects',
            },
            {
                id: 'p2',
                title: 'Proyecto Beta',
                description: 'Dashboard de analíticas con visualizaciones interactivas. Datos en tiempo real con WebSockets y exportación a CSV.',
            },
            {
                id: 'p3',
                title: 'Proyecto Gamma',
                description:'Experimento con animaciones generativas usando Canvas API y algoritmos de ruido procedural.',
            }
        ]
    },
    contacto: {
      title: 'Contact info',
      subtitle1:
        "Insightful ideas deserve become a reallity. If you have a project in mind or simply have the impulse to make something different, this is your moment.",
      subtitle2: " \n\n Don't scrap those ideas. Send me a message and let's develop your idea's full potential!",
      labels: {
        email: 'Email',
        phoneCol: 'Phone',
        phoneCad: 'Phone',
        location: 'Location',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
  },
}

interface LangContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
