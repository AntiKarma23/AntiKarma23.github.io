import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Portfolio: Oscar Racero aka TechDevAI",
  DESCRIPTION: "Bienvenido al portfolio y blog de Oscar Racero, estudiante desarrollador de aplicaciones web y ciberseguridad. Aquí podrás encontrar la experiencia educativa, profesional, proyectos realizados y articulos escritos en diferentes web y redes sociales sobre desarrollo, tecnología, IA y ciberseguridad principalmente. Welcome to the portfolio and blog of Oscar Racero, web application and cybersecurity developer student. Here you can find educational and professional experience, projects carried out and articles written on different websites and social networks mainly about development, technology, AI and cybersecurity.",
  AUTHOR: "Oscar Racero",
}

// Work Page
export const WORK: Page = {
  TITLE: "Formación",
  DESCRIPTION: "El lugar donde indico la formación reglada, cursos y certificaciones.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Artículos",
  DESCRIPTION: "El lugar donde publico artículos sobre diferentes temáticas: Programación, IA, Tecnología, Ciberseguridad, educación, etc.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Aquí puedes ver los proyectos que he ido llevando a cabo.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Búsqueda",
  DESCRIPTION: "Buscar en todas las publicaciones, trabajos y proyectos por palabra clave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Formación", 
    HREF: "/work", 
  },
  { 
    TEXT: "Artículos", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "enviar correo",
    HREF: "mailto:oscar@techdevai.es",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "TechDevAI",
    HREF: "https://github.com/TechDevAI-es/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Oscar Racero - desarrollador",
    HREF: "https://www.linkedin.com/in/oscar-racero-techdevai/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "TechDevAI",
    HREF: "https://twitter.com/productor_23",
  },
]

