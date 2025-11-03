import Image from 'next/image';

import { Button } from '@/components/ui/Button';

import { site } from '@/data/site';

export const Header = () => (
  <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
    <div className="container flex h-16 items-center justify-between gap-6">
      <a href="/" className="flex items-center gap-2 font-extrabold text-lg">
        <span className="inline-flex size-8 items-center justify-center rounded-md text-primary">
          <Image
            src="logo.png"
            alt="Logotipo de Tu catguro"
            width={32}
            height={32}
            priority
          />
        </span>
        <span className="tracking-tight">{site.title}</span>
      </a>
      <nav className="hidden md:flex items-center gap-1">
        {site.anchors.map((item) => (
          <a
            key={item.href}
            className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-accent transition-colors"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="ml-auto md:ml-0">
        <Button asChild className="rounded-full px-5">
          <a href="/#contacto">Reserva una cita</a>
        </Button>
      </div>
    </div>
  </header>
);
