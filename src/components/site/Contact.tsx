'use client';

import { Button } from '@/components/ui/Button';

import { contact } from '@/data/contact';

export const Contact = () => (
  <section id="contacto" className="container py-12 md:py-20">
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Reserva o solicita información
        </h2>
        <p className="mt-3 text-muted-foreground max-w-prose">
          Según disponibilidad:
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
          <li>• Mínimo 2 días antes del servicio</li>
          <li>
            • 24h antes del servicio si ya se ha realizado algún servicio previo
            y dispongo de las llaves
          </li>
        </ul>
      </div>
      <div>
        <div className="mt-6 rounded-2xl border bg-card p-6 text-sm text-muted-foreground">
          <p>
            <strong>Horario de atención:</strong> {contact.hours}
          </p>
          <p className="mt-2">
            <strong>Email:</strong>{' '}
            <a className="hover:underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
        </div>
        <Button asChild className="rounded-full px-5 mt-5">
          <a href={`mailto:${contact.email}`}>Contáctame!</a>
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          * Pulsando este botón se abrira tu aplicación predeterminada para el
          envío de correo electrónico
        </p>
      </div>
    </div>
  </section>
);
