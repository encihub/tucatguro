import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Valores", href: "/#valores" },
  { label: "Servicio", href: "/#servicio" },
  { label: "Tarifas", href: "/#tarifas" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Formularios", href: "/formularios" },
];

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">🍃</span>
          <span className="tracking-tight">Canguro Encinar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <NavItem key={item.href} href={item.href} active={pathname === item.href}>
              {item.label}
            </NavItem>
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
}

function NavItem({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  const isHash = href.includes("#");
  const common = cn(
    "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-accent transition-colors",
  );
  return isHash ? (
    <a className={common} href={href}>
      {children}
    </a>
  ) : (
    <NavLink className={({ isActive }) => cn(common, (isActive || active) && "text-foreground bg-accent")} to={href}>
      {children}
    </NavLink>
  );
}
