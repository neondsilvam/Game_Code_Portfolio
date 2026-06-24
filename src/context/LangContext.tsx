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
          role: 'Desarrollador Game Frontend || Desarrollador Movil Gameplay',
          description:
              "Soy graduado de la Universidad de los Andes en Colombia, con un título en Narrativas Digitales y dos especializaciones: Cine, Video y Animación, y Computación Visual. Actualmente, curso un programa anual en Vancouver Film School, enfocado en programación de videojuegos, desarrollo web y aplicaciones móviles.\n" +
              "\n" +
              "Durante los últimos dos años, he orientado mi formación profesional hacia la programación, el desarrollo de aplicaciones web y el desarrollo móvil, fortaleciendo tanto mis conocimientos técnicos como mi capacidad para crear soluciones digitales escalables e innovadoras.\n" +
              "\n" +
              "Además, he trabajado con tecnologías y lenguajes como Python, C++, Kotlin y C#, así como con herramientas y frameworks complementarios como Processing, p5.js, CMD Script, HLSL y TypeScript. Actualmente, continúo ampliando mis conocimientos y experiencia, con un enfoque principal en React, React Native y Vue, tecnologías que utilizo para desarrollar aplicaciones modernas, eficientes y centradas en la experiencia del usuario.",
          tags: ['HTML - 2 años', 'CSS - 2 años', 'JavaScript - 1 año', 'C# - 1 año', 'Vue - 6 meses', 'React - 6 meses', 'React Native - 6 meses', 'C++ - 6 meses'],
      },
    github: {
        sections: [
            { id: '2025', label: '2025' },
            { id: '2026', label: '2026' },
        ],
      aclaration: 'Estos han sido mis mejores proyectos de GitHub.',
      projects: [
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    gameExp: {
        sections: [
            { id: '2025', label: '2025' },
            { id: '2026', label: '2026' },
        ],
      aclaration: 'Experiencia en desarrollo de videojuegos.',
      projects: [
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    uiExp: {
        sections: [
            { id: '2025', label: '2025' },
            { id: '2026', label: '2026' },
        ],
      aclaration: 'Experiencia en desarrollo de UI.',
      projects: [
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
              github: 'Main GitHub Link (Projectos principales)',
              //SecondaryGithub: 'Secondary Github Link (Experimentos y exploracion)'
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
          role: 'Frontend Developer || Mobile programmer',
          description:
              "I graduated from Universidad de los Andes with a degree in Digital Narratives and two specializations: Film, Video and Animation, and Visual Computing. I am currently enrolled in a one-year program at Vancouver Film School focused on video game programming, web development, and mobile application development.\n" +
              "\n" +
              "Over the past two years, I have dedicated my professional development to programming, web application development, and mobile technologies, strengthening both my technical expertise and my ability to build scalable and innovative digital solutions.\n" +
              "\n" +
              "In addition, I have worked with technologies and programming languages such as Python, C++, Kotlin, and C#, as well as complementary tools and frameworks including Processing, p5.js, CMD Script, HLSL, and TypeScript. I am continuously expanding my knowledge and experience, with a primary focus on React, React Native, and Vue, which I use to create modern, efficient, and user-centered applications.",
          tags: ['HTML - 2 years', 'CSS - 2 years', 'JavaScript - 1 year', 'C# - 1 year', 'Vue - 6 months', 'React - 6 months', 'React Native - 6 months', 'C++ - 6 months'],
      },
    github: {
        sections: [
            { id: '2025', label: '2025' },
            { id: '2026', label: '2026' },
        ],
        aclaration: 'These are my best GitHub projects.',
        projects: [
        ],
    showingProcessButtonTextFalse: "Show Process",
    showingProcessButtonTextTrue: "Hide Process",
    },
    gameExp: {
        sections: [
            { id: '2025', label: '2025' },
            { id: '2026', label: '2026' },
        ],
        aclaration: 'Experience in video game development.',
        projects: [
        ],
    showingProcessButtonTextFalse: "Show Process",
    showingProcessButtonTextTrue: "Hide Process",
    },
    uiExp: {
        sections: [
            { id: '2025', label: '2025' },
            { id: '2026', label: '2026' },
        ],
        aclaration: 'Experience in UI development.',
        projects: [
        ],
    showingProcessButtonTextFalse: "Show Process",
    showingProcessButtonTextTrue: "Hide Process",
    },
      contacto: {
          title: 'Contact info',
          subtitle1:
              "Insightful ideas deserve to become a reality. If you have a project in mind or simply have the impulse to make something different, this is your moment.",
          subtitle2: " \n\n Don't scrap those ideas. Send me a message and let's develop your idea's full potential!",
          labels: {
              email: 'Email',
              phoneCol: 'Phone',
              phoneCad: 'Phone',
              location: 'Location',
              linkedin: 'LinkedIn',
              github: 'Main GitHub Link (Main projects)',
              //SecondaryGithub: 'Secondary Github Link (Self learn and exploration)'
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
