import Image from 'next/image';

import { Button } from '@/components/ui/Button';

import { site } from '@/data/site';

export const Hero = () => (
  <section className="container pt-14 md:pt-24 pb-12 md:pb-20">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Sur-Oeste de Madrid
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          {site.motiv}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-prose">
          Cuido de tu gato con la misma dedicación y carino que tu le das cada
          día. Realizo visitas a domiciolio para garantizar su bienestar
          mientras estas fuera: alimentación, juegos, compania y administración
          de medicación si lo necesita. Tu disfrutas de la tranquilidad de saber
          que está en buenas manos, y el, de la calma de quedarse en su propio
          hogar.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="rounded-full px-6">
            <a href="#contacto">Reserva tu primera cita</a>
          </Button>
          <Button asChild className="rounded-full px-6 btn-outline">
            <a href="#tarifas">Ver tarifas</a>
          </Button>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" /> RCP y primeros
            auxilios
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" /> Etología felina
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" /> Experiencia con
            lactantes
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" /> Curas y
            medicación
          </li>
        </ul>
      </div>
      <div className="relative">
        <div className="aspect-4/3 rounded-3xl bg-linear-to-br from-primary/15 via-accent/50 to-secondary/20 ring-1 ring-border shadow-xl overflow-hidden">
          <Image
            src="/hero.png"
            alt="Canguro felino jugando con un gato en casa"
            width={1080}
            height={809}
            className="h-full w-full rounded-3xl object-cover"
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card p-4 shadow-lg ring-1 ring-border">
          <p className="text-sm font-semibold">100% Catlover</p>
          <p className="text-xs text-muted-foreground">
            Tu catguro de confianza para cuidar lo que más quieres.
          </p>
        </div>
      </div>
    </div>
  </section>
);
