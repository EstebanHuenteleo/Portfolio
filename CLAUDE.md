# Portfolio - Esteban Huenteleo

## Reglas generales

- **SIEMPRE** usar Context7 (MCP tools `resolve-library-id` y `query-docs`) antes de cualquier edición de código para obtener documentación actualizada de las tecnologías involucradas.
- Enfoque **mobile-first** en todo el CSS.
- Este portafolio está enfocado en **buscar trabajo estable en empresas**, NO freelance.
- Esteban se posiciona como **Desarrollador Backend con experiencia Full Stack**.
- **NO exponer el email personal** en el HTML (protección anti-spam). El contacto se hace vía formulario EmailJS.

## Sobre el proyecto

Portafolio personal de **Esteban Huenteleo**, enfocado en su perfil como **desarrollador backend**. El sitio refleja:

- Experiencia profesional (Cygnus/DOIN, Conavicoop, Puente Sur GTR)
- Habilidades técnicas organizadas por categoría (Backend, Frontend, BD, Herramientas)
- Formulario de contacto funcional con EmailJS
- CV generado desde la web en ruta `/cv`
- Links a GitHub y LinkedIn

## Stack

- **Angular 21** (standalone components, signals, lazy loading)
- **TypeScript**
- **SCSS** con variables CSS globales
- Google Fonts (Montserrat, Noto Sans)
- **EmailJS** (@emailjs/browser) para formulario de contacto
- Diseño responsive con breakpoint principal en 950px
- Deploy automático con **GitHub Actions** a **GitHub Pages**

## Estructura

```
src/
├── index.html                          ← Google Fonts + meta tags
├── styles.scss                         ← normalize + variables CSS globales
├── app/
│   ├── app.ts                          ← Root component (solo router-outlet)
│   ├── app.routes.ts                   ← Rutas: '' -> Home, 'cv' -> CV
│   ├── directives/
│   │   └── fade-in.ts                  ← Directiva reutilizable de animación scroll
│   └── components/
│       ├── home/                       ← Layout principal (compone todas las secciones)
│       ├── navbar/                     ← Menú + scroll tracking con IntersectionObserver
│       ├── profile/                    ← Hero section con botón "Descargar CV"
│       ├── experiences/                ← Timeline de experiencia (datos en array)
│       ├── skills/                     ← Skills por categoría (datos en array)
│       ├── contact/                    ← Formulario EmailJS + links GitHub/LinkedIn
│       └── cv/                         ← Vista CV imprimible (ruta /cv)
├── public/                             ← Imágenes (logo, wave, iconos)
.github/workflows/deploy.yml           ← GitHub Actions deploy a GitHub Pages
```

## Paleta de colores

- Primario: `#124f88` (azul oscuro)
- Secundario: `#f7c331` (amarillo dorado)
- Fondo: blanco
- Texto: negro / blanco según sección

## URLs

- **Repo:** https://github.com/EstebanHuenteleo/Portfolio
- **Live:** https://estebanhuenteleo.github.io/Portfolio/
- **CV:** https://estebanhuenteleo.github.io/Portfolio/cv

## EmailJS Config

- Service ID: `service_u270kup`
- Template ID: `template_l6hv9cm`
- Public Key: `JBzKIvr-jnLwZdqii`
- Variables del template: `{{from_name}}`, `{{from_email}}`, `{{message}}`

## Comandos

- `npx ng serve` - Levantar servidor de desarrollo
- `npx ng build` - Build de producción
- `npx ng generate component components/nombre` - Nuevo componente

## Pendientes / Ideas futuras

- Subir PDF real de CV y que el botón descargue directo
- Agregar sección de proyectos personales
- Considerar SSR para mejor SEO
- Agregar modo oscuro
- Agregar sección de educación/certificaciones
