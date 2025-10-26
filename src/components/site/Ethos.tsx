import { items } from '@/data/ethos';

export const Ethos = () => (
  <section id="valores" className="container py-12 md:py-20">
    <div className="max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Valores
      </h2>
      <p className="mt-3 text-muted-foreground">
        La base del servicio que ofrezco a las familias.
      </p>
    </div>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.title}
          className="rounded-2xl border bg-card p-6 shadow-sm"
        >
          <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary px-2 py-1 text-xs font-semibold">
            {it.title}
          </div>
          <p className="text-sm text-muted-foreground">{it.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
