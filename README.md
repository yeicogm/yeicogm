# Porfolio React App

Aplicación de portafolio construida con React, TypeScript y Vite. Muestra una selección de proyectos web con un diseño retro inspirado en consolas clásicas, además de una vista previa en modal para cada proyecto.

## Características

- Proyecto hecho con React 19 y Vite
- Estilo retro con efectos CRT, scanlines y animaciones suaves
- Lista de proyectos clicables
- Modal de vista previa que abre el proyecto en una nueva pestaña al hacer click
- Interacción accesible por teclado

## Proyectos incluidos

- `UBISHARE` — plataforma de ubicación compartida en tiempo real
- `JUEGO PAREJAS` — juego de memoria con ranking en línea
- `STROMROL.ES` — generador de fichas y recursos de rol
- `GORILAS BAS` — homenaje a Gorillas.bas en JavaScript

## Tecnología

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- ESLint

## Ejecución local

Instala dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre el enlace que muestra Vite en tu terminal para ver la app.

## Producción

Genera los archivos de producción con:

```bash
npm run build
```

Y revisa la versión optimizada localmente con:

```bash
npm run preview
```

## Estructura principal

- `src/App.tsx` — componente principal con la lista de proyectos y la vista previa en modal
- `src/index.css` — estilos globales y utilidades personalizadas
- `tailwind.config.js` — configuración de Tailwind CSS
- `vite.config.ts` — configuración de Vite

## Notas

Este repositorio está pensado como un portafolio interactivo para exhibir proyectos reales y demostrar una UI retro moderna con React y Tailwind.
