import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/30">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">🍃</span>
            <span className="tracking-tight">Canguro Encinar</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Cuidado infantil de confianza en el Encinar del Alberche. Valores humanos, seguridad y cariño como base de todo.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/#valores" className="hover:underline">Nuestros valores</a></li>
            <li><a href="/#servicio" className="hover:underline">Servicio</a></li>
            <li><a href="/#tarifas" className="hover:underline">Tarifas</a></li>
            <li><a href="/#contacto" className="hover:underline">Contacto</a></li>
            <li><Link to="/formularios" className="hover:underline">Formularios</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Encinar del Alberche, Toledo</li>
            <li><a className="hover:underline" href="mailto:hola@canguroencinar.es">hola@canguroencinar.es</a></li>
            <li><a className="hover:underline" href="tel:+34900123456">+34 900 123 456</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Canguro Encinar. Todos los derechos reservados.
      </div>
    </footer>
  );
}
