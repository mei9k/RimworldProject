---
title: "Desarrollo local"
---

# Desarrollo local

Guia rapida para levantar, validar y depurar la documentacion en local antes de subir cambios a Vercel.

## Resumen corto

El frontend activo del proyecto es **Fumadocs + Next.js** y vive en `website-fuma/`.

La fuente real de contenido vive ya en `website-fuma/content/docs/`.

## Estructura que importa

- `website-fuma/`: sitio web que renderiza la documentacion.
- `website-fuma/content/docs/`: fuente real de la documentacion.
- `website-fuma/src/components/`: componentes React/MDX reutilizables.

## Requisitos

- Node.js 20 o superior.
- npm disponible en terminal.

Version usada actualmente en el proyecto: Node 24.x.

## Preparacion inicial

Solo hace falta una vez por maquina o tras borrar dependencias:

```powershell
Set-Location "c:\Users\mei9k\Documents\Rol\RimworldProject\website-fuma"
npm install
```

## Flujo normal de trabajo

### 1. Editar el contenido fuente

Trabaja siempre en `website-fuma/content/docs/`.

Ejemplos:

- `website-fuma/content/docs/indice.md`
- `website-fuma/content/docs/01-sistema/compendio-consumibles-medicos.mdx`
- `website-fuma/content/docs/01-sistema/glosario/efectos-y-estados.md`

### 2. Levantar la web en local

```powershell
Set-Location "c:\Users\mei9k\Documents\Rol\RimworldProject\website-fuma"
npm run dev
```

Esto arranca Next.js en desarrollo sobre el contenido ya existente en `content/docs`.

URL local habitual:

- `http://localhost:3000`

### 3. Revisar la pagina concreta

Ejemplos utiles:

- `http://localhost:3000/docs/indice`
- `http://localhost:3000/docs/01-sistema/compendio-consumibles-medicos`
- `http://localhost:3000/docs/01-sistema/danio-y-curacion`

## Validacion antes de subir cambios

Para validar que todo compila correctamente:

```powershell
Set-Location "c:\Users\mei9k\Documents\Rol\RimworldProject\website-fuma"
npm run build
```

Si el build pasa, el contenido esta en buen estado para subirlo al repo y dejar que Vercel lo despliegue.

## Reglas practicas importantes

- Edita directamente `website-fuma/content/docs/`.
- Los componentes MDX personalizados deben vivir en `website-fuma/src/components/`.
- Si un termino usa tooltip u otros componentes React, el markdown fuente en `website-fuma/content/docs/` puede incluir MDX.

## Problemas habituales

### El cambio no aparece en la web

- Comprueba que editaste el archivo correcto dentro de `website-fuma/content/docs/`.
- Reinicia `npm run dev` si estabas tocando estructura, imports MDX o archivos movidos/renombrados.

### El build falla por MDX

Revisar:

- imports al principio del documento
- etiquetas MDX mal cerradas
- componentes con props mal escritas
- enlaces que se hayan quedado apuntando a nombres antiguos

### La ruta local no coincide con el nombre del archivo

En Fumadocs, la URL sale del arbol dentro de `content/docs`. Por ejemplo:

- `website-fuma/content/docs/01-sistema/compendio-consumibles-medicos.mdx`
- ruta resultante: `/docs/01-sistema/compendio-consumibles-medicos`

## Flujo recomendado antes de pedir cambios grandes

```powershell
Set-Location "c:\Users\mei9k\Documents\Rol\RimworldProject\website-fuma"
npm run dev
```

1. Editar en `website-fuma/content/docs/`.
2. Revisar en `http://localhost:3000`.
3. Ejecutar `npm run build`.
4. Si pasa, subir cambios al repo.

## Despliegue remoto

El despliegue activo va por Vercel usando `website-fuma` como root directory.

URL actual conocida del proyecto:

- `https://rimworld-project.vercel.app`

Si en el futuro hay dudas sobre como validar algo, la referencia por defecto debe ser esta guia.
