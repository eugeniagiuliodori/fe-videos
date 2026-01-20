
## OBJETIVO DEL PROYECTO

Mi app con jerarquía de capas, incluyendo un core de componentes UI reutilizables, para mantener consistencia y control interno del comportamiento y estilo.
El proyecto está pensado como un reproductor de música. En principio soporta una lista de videos youtube seleccionados estáticamente e internamente en la aplicación.
Cuenta con un control para gestionar las funciones básicas de un video, como 'reproducir', 'pausar', 'ajustar volumen', 'ajustar velocidad de reproducción', 
'cambiar de modo claro-oscuro de estilos del panel del video'. 
Actualmente el diseño no está restringido a la reproducción del video sólo desde el propio control. Sino que se puede delegar el control a youtube
(clicleando en el video, por encima del control visible propio de la aplicación) delegando el control a youtube, y de este modo poder navegar por videos aleatorios que son propuestos directamente por youtube. 
Los videos propuestos por la aplicación se visualizan uno debajo de otro con el scroll vertical.
Como potencialidad, se implementarán funcionalidades que implquen comunicación API REST con backend, login con keyckloack. Etc. Para los usuarios registrados en la aplicación, se permitirá el registro y/o autenticación a youtube, para soportar funcionalidades extras de youtube al video en reproducción.


## ESTADO DEL PROYECTO

Inicial. Funcionalidades básicas implementadas. Desarrollo activo.


## BRANCHES

main → branch principal, estable.
feature/foundations-styles → branch donde hago ciclos de push actualmente hasta lograr una versión estable

## FRAMEWORK

Este es un proyecto construido con **Next.js**, inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente **Geist**, 
la familia tipográfica de Vercel.


### DOCUMENTACIÓN SOBRE Next.js

* [Documentación oficial de Next.js](https://nextjs.org/docs)
* [Learn Next.js](https://nextjs.org/learn) – tutorial interactivo
* [Repositorio de Next.js en GitHub](https://github.com/vercel/next.js)


## TECNOLOGÍAS Y VERSIONES ACTUALES

- Node.js: 24.7.0 (`node -v` para chequear)
- Next.js: 16.0.1 (`npx next --version` para chequear)
- React: 19.2.0 (`npm list react` o `yarn list react` para chequear)
- MUI (Material-UI): 7.3.5 (`npm list @mui/material` o `yarn list @mui/material` para chequear)
- TypeScript: 5.9.3 (`npx tsc -v` para chequear)


## PASOS DE EJECUCIÓN

La página se actualiza automáticamente al guardar los cambios.

1) Levantar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

2) Abrir [http://localhost:3000](http://localhost:3000) en el navegador. Podés empezar a editar la aplicación modificando app/page.tsx


## DEPLOY EN VERCEL

La forma más sencilla de desplegar la aplicación es usando la **plataforma de Vercel**:

* [https://vercel.com/new](https://vercel.com/new)

Más información en la documentación oficial:

* [https://nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)


## GUÍA DE ESTILOS DEL PROYECTO - PRINCIPIOS GENERALES


1. Los estilos por defecto **pueden pisarse conscientemente**.
2. Se intenta evitar `!important` y cascadas globales abiertas.
3. Se prioriza **APIs públicas de MUI** antes que detalles internos.
