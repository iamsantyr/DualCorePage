# DualCorePage

Sitio web de **DualCore Intelligence Labs**, un estudio de soluciones de IA y Machine Learning fundado en 2025 en Bogotá, Colombia. Construido con Angular 17.

## Sobre el proyecto

DualCore Intelligence Labs diseña e implementa productos de IA, agentes autónomos y sistemas de automatización para empresas. Este repositorio contiene el sitio de marketing de la compañía: presentación de servicios, expertise técnico, metodología de trabajo, equipo y formulario de contacto.

Cofundado por **Sergio López** (Backend Lead) y **Santiago Rodríguez** (Frontend Lead).

## Screenshots

<img width="900" height="460" alt="image" src="https://github.com/user-attachments/assets/a31489a2-1790-4442-ae79-8710615b920b" />


<img width="900" height="460" alt="image" src="https://github.com/user-attachments/assets/0961652f-2807-4a1e-a212-89d33c0d757b" />



## Features

- Landing page responsiva de una sola página (secciones Home, Services, Portfolio, About)
- Secciones: Hero, proof points ("Why choose DualCore"), expertise/servicios, metodología ("Our Approach"), equipo con modal de perfil, contacto
- Formulario de contacto funcional con EmailJS
- UI en tema oscuro con acentos en gradiente
- Arquitectura basada en componentes standalone de Angular

## Stack técnico

- [Angular 17](https://angular.dev/) (standalone components, Angular Router)
- TypeScript
- [EmailJS](https://www.emailjs.com/) para el formulario de contacto
- RxJS

## Estructura del proyecto

```
src/app/
├── components/     # navigation, hero-section, proof-points, expertise,
│                   # innovation, clients, team, team-modal,
│                   # contact-form, contact-info, contact-preview, footer
├── pages/          # páginas enrutadas
├── models/         # interfaces y tipos
├── services/       # servicios de Angular
└── utils/          # utilidades
```

## Cómo correrlo localmente

```bash
npm install
ng serve
-- Si no funciona con ese comando. Usar este.
npx ng serve

```

Abre `http://localhost:4200/`

## Build de producción

```bash
ng build
```

Los archivos quedan en `dist/dualcore-angular/browser`.

## Autor

**Santiago Rodríguez** — [@iamsantyr](https://github.com/iamsantyr) · Frontend Lead & Co-Founder, DualCore Intelligence Labs
