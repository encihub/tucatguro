import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Index() {
  useEffect(() => {
    // optional analytics hook
  }, []);

  return (
    <div className="bg-gradient-to-b from-accent/20 via-background to-background">
      <Hero />
      <Valores />
      <Servicio />
      <Tarifas />
      <Contacto />
      <FAQ />
    </div>
  );
}

function Hero() {
  return (
    <section className="container pt-14 md:pt-24 pb-12 md:pb-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Encinar del Alberche</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Canguro de confianza para tu familia
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose">
            Apoyo cercano, seguro y flexible para el cuidado de tus peques en la urbanización Encinar del Alberche. Nos movemos por valores humanos y una comunicación transparente.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full px-6">
              <a href="#contacto">Reserva tu primera cita</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <a href="#tarifas">Ver tarifas</a>
            </Button>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary"/> CPR y primeros auxilios</li>
            <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary"/> Experiencia con bebés</li>
            <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary"/> Con referencias</li>
            <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary"/> Seguro de responsabilidad</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/15 via-accent/50 to-secondary/20 ring-1 ring-border shadow-xl" />
          <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card p-4 shadow-lg ring-1 ring-border">
            <p className="text-sm font-semibold">100% del Encinar</p>
            <p className="text-xs text-muted-foreground">Vivimos aquí, conocemos el barrio y sus familias.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Valores() {
  const items = [
    {
      title: "Cariño y respeto",
      desc: "Trato cercano y afectuoso, fomentando autoestima y autonomía.",
    },
    {
      title: "Seguridad ante todo",
      desc: "Protocolos claros, formación en primeros auxilios y comunicación constante.",
    },
    {
      title: "Transparencia",
      desc: "Información clara sobre actividades, tiempos y costes. Sin sorpresas.",
    },
    {
      title: "Flexibilidad",
      desc: "Nos adaptamos a tus horarios: mañanas, tardes, noches y fines de semana.",
    },
  ];
  return (
    <section id="valores" className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Nuestros valores</h2>
        <p className="mt-3 text-muted-foreground">La base del servicio que ofrecemos a las familias del Encinar del Alberche.</p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary px-2 py-1 text-xs font-semibold">{it.title}</div>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Servicio() {
  const bullets = [
    "Cuidado por horas en domicilio",
    "Recogida del cole y actividades",
    "Apoyo con tareas escolares",
    "Noches y fines de semana",
  ];
  return (
    <section id="servicio" className="container py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">El servicio</h2>
          <p className="mt-3 text-muted-foreground max-w-prose">
            Servicio integral y cercano, pensado para la vida real: comunicación diaria, planificación semanal y seguimiento de rutinas.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary"/> {b}</li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">Qué incluye</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>• Plan de adaptación inicial</li>
              <li>• Reporte resumen después de cada sesión</li>
              <li>• Material lúdico y educativo básico</li>
              <li>• Atención de emergencias</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tarifas() {
  const plans = [
    {
      name: "Por hora",
      price: "12€/h",
      features: ["Mínimo 2 horas", "Incluye reporte", "Flexibilidad total"],
    },
    {
      name: "Bono semanal",
      price: "200€/sem",
      features: ["20 horas", "Prioridad de agenda", "Ahorro 15%"],
      highlight: true,
    },
    {
      name: "Nocturno",
      price: "60€/noche",
      features: ["22:00—07:00", "Desplazamiento incluido", "Soporte emergencias"],
    },
  ];
  return (
    <section id="tarifas" className="container py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Tarifas claras</h2>
        <p className="mt-3 text-muted-foreground">Precios transparentes, sin letra pequeña. Consulta packs personalizados.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl border p-6 shadow-sm bg-card ${p.highlight ? "ring-2 ring-primary" : ""}`}>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <Button asChild className="mt-6 w-full">
              <a href="#contacto">Reservar</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="container py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Reserva o solicita información</h2>
          <p className="mt-3 text-muted-foreground max-w-prose">Cuéntanos tus necesidades y te responderemos en menos de 24 horas.</p>
          <div className="mt-6 rounded-2xl border bg-card p-6 text-sm text-muted-foreground">
            <p><strong>Horario de atención:</strong> 9:00 - 20:00</p>
            <p className="mt-2"><strong>Teléfono:</strong> <a className="hover:underline" href="tel:+34900123456">+34 900 123 456</a></p>
            <p className="mt-2"><strong>Email:</strong> <a className="hover:underline" href="mailto:hola@canguroencinar.es">hola@canguroencinar.es</a></p>
          </div>
        </div>
        <div>
          <FormContacto />
        </div>
      </div>
    </section>
  );
}

function FormContacto() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.success("Solicitud enviada. Te contactaremos pronto.");
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
  );
}

function FAQ() {
  const faqs = [
    { q: "¿Incluyes desplazamiento?", a: "Sí, dentro del Encinar del Alberche está incluido." },
    { q: "¿Emites factura?", a: "Sí, emitimos factura para todas las reservas." },
    { q: "¿Cómo se realiza el pago?", a: "Bizum o transferencia tras cada sesión o al finalizar la semana." },
  ];
  return (
    <section className="container pb-16">
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <h3 className="text-xl font-semibold">Preguntas frecuentes</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q}>
              <p className="font-medium">{f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
