# website-fuma

Sitio alternativo de documentacion con Next.js + Fumadocs.

## Comandos

```bash
npm run dev
npm run build
```

Antes de cada `dev` y `build`, el proyecto sincroniza automaticamente la carpeta raiz `../docs` dentro de `content/docs` y adapta el contenido para Fumadocs.

## Flujo de contenido

- La fuente real sigue siendo `../docs`.
- `npm run sync:docs` copia y adapta esos markdown a `content/docs`.
- El compendio medico ya usa tooltips React/MDX dentro de Fumadocs.

## Despliegue recomendado

La opcion mas simple es Vercel Free conectado directamente al repo:

1. Importar el repositorio en Vercel.
2. Elegir `website-fuma` como Root Directory.
3. Añadir `NEXT_PUBLIC_SITE_URL` con tu dominio final de Vercel.
4. Deploy automatico en cada push a `main`.

## Despliegue con GitHub Actions

Tambien se ha dejado preparado un workflow opcional en:

- `../.github/workflows/deploy-fumadocs-vercel.yml`

Para usarlo necesitas estos secrets en GitHub:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Si conectas el repo directamente en Vercel, ese workflow no es necesario.
