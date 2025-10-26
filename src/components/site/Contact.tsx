'use client';

import { toast } from 'sonner';

import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

import { contact } from '@/data/contact';
import { format } from '@/lib/phone';

export const Contact = () => {
  return (
    <section id="contacto" className="container py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Reserva o solicita información
          </h2>
          <p className="mt-3 text-muted-foreground max-w-prose">
            Cuéntanos tus necesidades y te responderemos en menos de 24 horas.
          </p>
          <div className="mt-6 rounded-2xl border bg-card p-6 text-sm text-muted-foreground">
            <p>
              <strong>Horario de atención:</strong> 9:00 - 20:00
            </p>
            <p className="mt-2">
              <strong>Teléfono:</strong>{' '}
              <a className="hover:underline" href={`tel:${contact.phone}`}>
                {format(contact.phone)}
              </a>
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{' '}
              <a className="hover:underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
          </div>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success('Solicitud enviada. Te contactaremos pronto.');
            }}
            className="rounded-2xl border bg-card p-6 shadow-sm grid gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input required name="nombre" placeholder="Nombre y apellidos" />
              <Input required name="telefono" placeholder="Teléfono" />
            </div>
            <Input required type="email" name="email" placeholder="Email" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="date" name="fecha" placeholder="Fecha" />
              <Input name="horario" placeholder="Horario preferido" />
            </div>
            <Textarea name="mensaje" placeholder="Cuéntanos qué necesitas" />
            <Button type="submit">Enviar solicitud</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
