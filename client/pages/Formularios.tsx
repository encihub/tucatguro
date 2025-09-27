import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Formularios() {
  return (
    <div className="bg-gradient-to-b from-background to-accent/30">
      <section className="container py-12 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Formularios para familias</h1>
          <p className="mt-3 text-muted-foreground">Completa los documentos necesarios de forma segura y rápida. Recibirás una copia por email.</p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <Card title="Autorización de recogida del colegio" subtitle="Personas autorizadas, horarios y centro educativo.">
            <FormAutorizacion />
          </Card>
          <Card title="Ficha médica y alergias" subtitle="Información esencial para la seguridad del menor.">
            <FormMedico />
          </Card>
          <Card title="Consentimiento para actividades" subtitle="Permisos para parque, piscina y desplazamientos.">
            <FormConsentimiento />
          </Card>
        </div>
      </section>
    </div>
  );
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function FormAutorizacion() {
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Autorización enviada correctamente");
        }, 800);
      }}
      className="grid gap-4"
    >
      <Input required name="menor" placeholder="Nombre del menor" />
      <Input required name="centro" placeholder="Centro educativo" />
      <Input required name="autorizados" placeholder="Personas autorizadas (separadas por coma)" />
      <div className="grid grid-cols-2 gap-3">
        <Input required type="date" name="desde" placeholder="Desde" />
        <Input required type="date" name="hasta" placeholder="Hasta" />
      </div>
      <Button disabled={loading}>{loading ? "Enviando…" : "Enviar autorización"}</Button>
    </form>
  );
}

function FormMedico() {
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Ficha médica enviada correctamente");
        }, 800);
      }}
      className="grid gap-4"
    >
      <Input required name="menor" placeholder="Nombre del menor" />
      <Input name="alergias" placeholder="Alergias" />
      <Input name="medicacion" placeholder="Medicación habitual" />
      <Textarea name="observaciones" placeholder="Observaciones" />
      <Button disabled={loading}>{loading ? "Enviando…" : "Enviar ficha médica"}</Button>
    </form>
  );
}

function FormConsentimiento() {
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Consentimiento enviado correctamente");
        }, 800);
      }}
      className="grid gap-4"
    >
      <Input required name="menor" placeholder="Nombre del menor" />
      <div className="grid grid-cols-2 gap-3">
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="size-4" /> Parque</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="size-4" /> Piscina</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="size-4" /> Desplazamientos a pie</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="size-4" /> Desplazamientos en coche</label>
      </div>
      <Textarea name="condiciones" placeholder="Condiciones adicionales" />
      <Button disabled={loading}>{loading ? "Enviando…" : "Enviar consentimiento"}</Button>
    </form>
  );
}
