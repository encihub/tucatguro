import { items } from '@/data/faqs';

export const FAQ = () => (
  <section className="container pb-16">
    <div className="rounded-2xl border bg-card p-6 md:p-8">
      <h3 className="text-xl font-semibold">Preguntas frecuentes</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map((f) => (
          <div key={f.q}>
            <p className="font-medium">{f.q}</p>
            <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
