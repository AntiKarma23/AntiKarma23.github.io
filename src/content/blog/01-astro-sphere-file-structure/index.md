---
title: "Astro Sphere: File Structure"
summary: "Aqui puedes encontrar todos los archivos de la web y qué hacen cada uno, 21/01/2025 actualizado y traducido por: Oscar Racero"
date: "2024-03-17"
draft: false
tags-:
- Tutorial
- Astro
- Astro Sphere
---

A one line summary of what each file and directory is for:
```js
/
├── public/ // Archivos disponibles públicamente para el navegador
│   ├── fonts/ // Las fuentes predeterminadas para Astro Sphere
│   │   └── atkinson-bold.woff  // Fuente predeterminada con peso 700
│   │   └── atkinson-regular.woff // Fuente predeterminada con peso 400
│   ├── js/ // Archivos Javascript que se importarán en <head>
│   │   └── animate.js // Función para animar elementos de la página
│   │   └── bg.js // Función para generar el fondo
│   │   └── scroll.js // Manejador de desplazamiento para los estilos del encabezado
│   │   └── theme.js // Controla los temas claro y oscuro
│   └── brand.svg // El ícono que se muestra en el encabezado y el pie de página
│   └── favicon.svg // El ícono que se muestra en el navegador
│   └── ui.svg // Un sprite SVG para todos los íconos de la interfaz en el sitio web
│   └── social.svg // Un sprite SVG para todos los íconos de redes sociales
│   └── open-graph.jpg // La imagen predeterminada para Open Graph
│   └── robots.txt // Para que rastreadores y bots indexen el sitio web
├── src/ // Todo lo que será compilado para el sitio web
│   ├── components/ // Todos los componentes de Astro y SolidJS
│   ├── content/ // Contiene todo el contenido estático en markdown para compilar
│   │   |  blog/ // Contiene todas las publicaciones del blog en markdown
│   │   |  projects/ // Contiene todos los proyectos en markdown
│   │   |  work/ // Contiene todo el contenido de la página "Work" en markdown
│   │   |  legal/ // Contiene todos los documentos legales en markdown
│   │   └── config.ts // Contiene la configuración de la colección para Astro
│   ├── layouts/ // Diseños reutilizables en todo el sitio web
│   └── pages/ // Todas las páginas del sitio web
│   └── styles/ // Estilos CSS y estilos globales de Tailwind
│   └── lib/ // Funciones de ayuda globales
│   └── consts.ts // Metadatos de las páginas, configuración general
│   └── types.ts // Tipos para `consts.ts`
└── .gitignore // Archivos y directorios que serán ignorados por Git
└── .eslintignore // Archivos y directorios que serán ignorados por ESLint
└── eslintrc.cjs // Configuración de ESLint
└── astro.config.mjs // Configuración de Astro
└── tailwind.config.mjs // Configuración de Tailwind
└── tsconfig.json // Configuración de TypeScript
└── package.json // Todos los paquetes instalados

```
