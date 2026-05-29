export type Lang = 'es' | 'en'

export type Page = 'perfil' | 'proyectos' | 'contacto'

export interface ProjectStatic {
    id: string
    iframeSrc: string
    section: string
}

export interface Project {
  id: string
  title: string
  description: string
  iframeSrc: string
  section: string
}

export interface ProjectTranslation {
    id: string
    title: string
    description: string
}

export interface Section {
  id: string
  label: string
}

export interface Translations {
  nav: {
    logo: string
    perfil: string
    proyectos: string
    contacto: string
    langBtn: string
  }
  perfil: {
    name: string
    role: string
    description: string
    tags: string[]
  }
  proyectos: {
      sections: Section[]
      aclaration: string,
      projects: ProjectTranslation[]
  }
  contacto: {
    title: string
    subtitle1: string
    subtitle2: string
    labels: {
      email: string
      phoneCol: string
      phoneCad: string
      location: string
      linkedin: string
      github: string
    }
  }
}
