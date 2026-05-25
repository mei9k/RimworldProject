import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-6 text-center">
      <p className="mb-3 text-sm tracking-[0.18em] text-fd-muted-foreground uppercase">RimworldProject</p>
      <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
        Documentacion viva para una campana sci-fi dura
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-fd-muted-foreground">
        Reglas, universo, compendios y glosario conectados en una sola base navegable.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/docs/00-indice"
          className="rounded-lg bg-fd-primary px-5 py-2.5 text-fd-primary-foreground transition-opacity hover:opacity-90"
        >
          Abrir indice
        </Link>
        <Link href="/docs/01-sistema/10-compendio-consumibles-medicos" className="underline">
          Ver tooltips del compendio
        </Link>
      </div>
    </div>
  );
}
