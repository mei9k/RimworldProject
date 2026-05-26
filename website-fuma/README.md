# website-fuma

Sitio alternativo de documentacion con Next.js + Fumadocs.

Aqui vive ya tanto la aplicacion como la documentacion fuente del proyecto.

## Comandos

```bash
npm run dev
npm run build
```

## Flujo de contenido

- La fuente real es `content/docs`.
- Los documentos Markdown y MDX se editan directamente dentro de `content/docs`.
- El compendio medico ya usa tooltips React/MDX dentro de Fumadocs.

## Despliegue recomendado

La opcion mas simple es Vercel Free conectado directamente al repo:

1. Importar el repositorio en Vercel.
2. Elegir `website-fuma` como Root Directory.
3. Añadir `NEXT_PUBLIC_SITE_URL` con tu dominio final de Vercel.
4. Deploy automatico en cada push a `main`.

