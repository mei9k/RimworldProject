import type { ReactNode } from 'react';

type SummaryItem = {
  title: string;
  description: string;
};

type NoteTone = 'amber' | 'rose' | 'cyan' | 'neutral';

const noteToneClasses: Record<NoteTone, string> = {
  amber: 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  rose: 'border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300',
  cyan: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
  neutral: 'border-fd-border bg-fd-card/70 text-fd-muted-foreground',
};

export function MedicalHero() {
  return (
    <div className="not-prose mb-8 overflow-hidden rounded-3xl border border-fd-primary/20 bg-gradient-to-br from-fd-card via-fd-card to-fd-primary/5">
      <div className="grid gap-6 p-6 md:grid-cols-[1.5fr_1fr] md:p-8">
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-fd-muted-foreground">
            Proteger  | Avisar | Socorrer
          </div>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
            Consumibles médicos
          </h2>
          <div className="max-w-2xl text-sm leading-6 text-fd-muted-foreground md:text-[15px]">
            Esta página organiza los consumibles médicos en tres grupos: botiquines, primeros auxilios e inyectores.
            Cada grupo cubre una necesidad distinta y se usa en momentos diferentes.
          </div>
        </div>
        <div className="grid gap-3 self-start">
          <div className="rounded-2xl border border-fd-border/80 bg-fd-background/80 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-fd-muted-foreground">Botiquines</div>
            <div className="mt-1 text-sm text-fd-foreground">Curación directa para recuperar PV.</div>
          </div>
          <div className="rounded-2xl border border-fd-border/80 bg-fd-background/80 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-fd-muted-foreground">Primeros Auxilios</div>
            <div className="mt-1 text-sm text-fd-foreground">Estabilización rápida de heridas y estados críticos.</div>
          </div>
          <div className="rounded-2xl border border-fd-border/80 bg-fd-background/80 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-fd-muted-foreground">Inyectores</div>
            <div className="mt-1 text-sm text-fd-foreground">Efectos inmediatos con posibles costes secundarios.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SummaryGrid({ items }: { items: SummaryItem[] }) {
  return (
    <div className="not-prose mb-10 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-fd-border bg-fd-card p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">{item.title}</div>
          <div className="mt-2 text-sm leading-6 text-fd-muted-foreground">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export function UsageGrid({ items }: { items: SummaryItem[] }) {
  return (
    <div className="not-prose my-6 grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-fd-border bg-fd-card/60 p-4">
          <div className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">{item.title}</div>
          <div className="mt-2 text-sm text-fd-foreground">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export function ToneNote({
  tone,
  title,
  children,
}: {
  tone: NoteTone;
  title: string;
  children: ReactNode;
}) {
  const toneClass = noteToneClasses[tone];
  const titleClass = tone === 'neutral' ? 'text-fd-muted-foreground' : toneClass.split(' ').at(-1);

  return (
    <div className={`not-prose my-6 rounded-2xl border p-5 ${toneClass}`}>
      <div className={`text-xs font-semibold uppercase tracking-[0.24em] ${titleClass ?? ''}`}>{title}</div>
      <div className="mt-2 text-sm leading-6 text-fd-foreground">{children}</div>
    </div>
  );
}