import { createContext, useContext, useState, type ReactNode } from 'react'
import type {Lang, Translations} from '../types'

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      logo: 'Julian D Silva',
      perfil: 'Inicio',
      github: 'Proyectos GitHub',
      gameExp: 'Experiencia en Videojuegos',
      uiExp: 'Experiencia en UI',
      contacto: 'Contacto',
      langBtn: 'EN',
    },
    perfil: {
      name: 'Julian D Silva',
      role: 'Editor de video || Animador 2D',
      description:
          "Soy graduado de Universidad de los Andes en Narrativas Digitales, con dos especializaciones: una en Cine, Video y Animación, y otra en Computación Visual. Actualmente curso un programa anual enfocado en programación de videojuegos, desarrollo web y aplicaciones móviles en la Vancouver Film School.\n\nCuento con experiencia en el desarrollo de proyectos narrativos y multimedia, integrando áreas como producción audiovisual, animación, programación y creación de contenidos digitales.\n\nEn el ámbito audiovisual, he participado tanto en proyectos de entretenimiento como comerciales, colaborando en la producción de animaciones, cortometrajes, grabación y edición de anuncios, entre otros formatos audiovisuales.\n\nMe caracterizo por ser una persona persistente, organizada y con facilidad para el trabajo en equipo. Sé escuchar, aprender de los demás y adaptarme a nuevos entornos e ideas, siempre con disposición para seguir creciendo profesional y creativamente.",
      tags: ['Photoshop - 4 años', 'Premiere - 5 años', 'Reaper - 4 años', 'Ilustrator - 1 año', 'After Effects - 1 año', 'Final cut - 2 años', 'Stop motion studio - 2 años'],
    },
    github: {
      sections: [
        { id: '2025', label: '2025' },
        { id: '2024', label: '2024' },
        { id: '2023', label: '2023' },
        { id: '2022', label: '2022' },
      ],
      aclaration: 'Estos han sido mis mejores proyectos de GitHub.',
      projects: [
        {
          id: 'p1',
          title: 'La Familia Amarilla sin derechos de autor',
          description:
              'Este es un proyecto estilo "Couche Gag" el cual combina dos intros de series de la cadena anteriormente conocida como "FOX". Estos se hicieron únicamente con propósito educativo y sin ningún tipo de remuneración.',
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
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    gameExp: {
      sections: [
        { id: '2025', label: '2025' },
        { id: '2024', label: '2024' },
        { id: '2023', label: '2023' },
        { id: '2022', label: '2022' },
      ],
      aclaration: 'Experiencia en desarrollo de videojuegos.',
      projects: [
        {
          id: 'g1',
          title: 'Juego Plataformas Alpha',
          description: 'Videojuego de plataformas desarrollado en Unity con mecánicas de movimiento fluidas y niveles procedurales.',
        },
        {
          id: 'g2',
          title: 'Puzzle Game Beta',
          description: 'Juego de puzzles con física realista desarrollado en Godot Engine.',
        },
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    uiExp: {
      sections: [
        { id: '2025', label: '2025' },
        { id: '2024', label: '2024' },
        { id: '2023', label: '2023' },
        { id: '2022', label: '2022' },
      ],
      aclaration: 'Experiencia en desarrollo de UI.',
      projects: [
        {
          id: 'u1',
          title: 'Dashboard UI Alpha',
          description: 'Interfaz de usuario para dashboard analítico con componentes reutilizables y diseño accesible.',
        },
        {
          id: 'u2',
          title: 'Design System Beta',
          description: 'Sistema de diseño completo con tokens, componentes y guías de uso documentadas.',
        },
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    contacto: {
      title: 'Información de contacto',
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
      perfil: 'Home',
      github: 'GitHub Projects',
      gameExp: 'Game Dev Experience',
      uiExp: 'UI Dev Experience',
      contacto: 'Contact',
      langBtn: 'ES',
    },
    perfil: {
      name: 'Julian D Silva',
      role: '2D Animator || Video Editor',
      description:
            "I graduated from Universidad de los Andes with a degree in Digital Narratives, with two specializations: one in Film, Video, and Animation, and another in Visual Computing. I am currently enrolled in a one-year program focused on video game programming, web development, and mobile application development at Vancouver Film School.\n\nI have experience developing narrative and multimedia projects, combining areas such as audiovisual production, animation, programming, and digital content creation.\n\nIn the audiovisual field, I have worked on both entertainment and commercial projects, contributing to the production of animations, short films, advertisement recording and editing, among other audiovisual formats.\n\nI am a persistent, organized, and collaborative person who values teamwork and active listening. I am open to new ideas, eager to learn from others, and adaptable to different environments, always striving for both professional and creative growth.",
        tags: ['Photoshop - 4 years', 'Premiere - 5 years', 'Reaper - 4 years', 'Ilustrator - 1 year', 'After Effects - 1 year', 'Final cut - 2 years', 'Stop motion studio - 2 years'],
    },
    github: {
      sections: [
            { id: '2025', label: '2025' },
            { id: '2024', label: '2024' },
            { id: '2023', label: '2023' },
            { id: '2022', label: '2022' },
        ],
        aclaration: 'These are my best GitHub projects.',
        projects: [
            {
                id: 'p1',
                title: 'La Familia Amarilla sin derechos de autor',
                description:
                    'This is a "Couch Gag" style project which combines two intros from series on the network formerly known as "FOX". These were made solely for educational purposes and without any kind of remuneration.',
            },
            {
                id: 'p2',
                title: 'Project Beta',
                description: 'Analytics dashboard with interactive visualizations. Real-time data with WebSockets and CSV export.',
            },
            {
                id: 'p3',
                title: 'Project Gamma',
                description:'Experiment with generative animations using Canvas API and procedural noise algorithms.',
            }
        ],
    showingProcessButtonTextFalse: "Show Process",
    showingProcessButtonTextTrue: "Hide Process",
    },
    gameExp: {
      sections: [
            { id: '2025', label: '2025' },
            { id: '2024', label: '2024' },
            { id: '2023', label: '2023' },
            { id: '2022', label: '2022' },
        ],
        aclaration: 'Experience in video game development.',
        projects: [
            {
                id: 'g1',
                title: 'Platformer Game Alpha',
                description: 'Platform video game developed in Unity with fluid movement mechanics and procedural levels.',
            },
            {
                id: 'g2',
                title: 'Puzzle Game Beta',
                description: 'Puzzle game with realistic physics developed in Godot Engine.',
            },
        ],
    showingProcessButtonTextFalse: "Show Process",
    showingProcessButtonTextTrue: "Hide Process",
    },
    uiExp: {
      sections: [
            { id: '2025', label: '2025' },
            { id: '2024', label: '2024' },
            { id: '2023', label: '2023' },
            { id: '2022', label: '2022' },
        ],
        aclaration: 'Experience in UI development.',
        projects: [
            {
                id: 'u1',
                title: 'Dashboard UI Alpha',
                description: 'User interface for analytics dashboard with reusable components and accessible design.',
            },
            {
                id: 'u2',
                title: 'Design System Beta',
                description: 'Complete design system with tokens, components, and documented usage guidelines.',
            },
        ],
    showingProcessButtonTextFalse: "Show Process",
    showingProcessButtonTextTrue: "Hide Process",
    },
    contacto: {
      title: 'Contact info',
      subtitle1:
        "Insightful ideas deserve become a reality. If you have a project in mind or simply have the impulse to make something different, this is your moment.",
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
