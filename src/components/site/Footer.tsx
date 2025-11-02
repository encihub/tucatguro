import Image from 'next/image';

import { site } from '@/data/site';
import { contact } from '@/data/contact';

export const Footer = () => (
  <footer className="border-t bg-linear-to-b from-background to-muted/30">
    <div className="container py-10 grid gap-8 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 font-extrabold text-lg">
          <span className="inline-flex size-8 items-center justify-center rounded-md text-primary">
            <Image
              src="/logo.png"
              alt="Logotipo de Tu catguro"
              width={32}
              height={32}
              priority
            />
          </span>
          <span className="tracking-tight">{site.title}</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground max-w-sm">
          {site.motiv}
        </p>
      </div>
      <div>
        <h4 className="font-semibold">Enlaces</h4>
        <ul className="mt-3 space-y-2 text-sm">
          {site.anchors.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Contacto</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>
            <strong>Horario de atención:</strong> {contact.hours}
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a className="hover:underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} {site.title}. Todos los derechos reservados.
    </div>
  </footer>
);
