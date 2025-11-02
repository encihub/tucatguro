import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Slider } from '@/components/ui/Slider';

export const Prices = () => {
  const [visita, setVisita] = useState('10');
  const [horas, setHoras] = useState(1);
  const [gatos, setGatos] = useState(2);
  const plans = [
    {
      name: 'Visita',
      price: '10€/13€',
      features: [
        '10€ en temporada baja',
        '13€ en temporada alta (25/07 - 31/08, 24/12 - 01/01, 06/01 y Semana Santa) y noches',
      ],
    },
    {
      name: 'Tiempo',
      price: '+6€/hora',
      features: [],
      highlight: false,
    },
    {
      name: 'Número de gatos',
      price: '+4€/gato extra',
      features: ['El primer gato lo cubre la visita'],
    },
  ];
  return (
    <section id="tarifas" className="container py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Tarifas claras
        </h2>
        <p className="mt-3 text-muted-foreground">
          La tarifa es la suma de: Visita + Tiempo + Número de gatos
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border p-6 shadow-sm bg-card ${p.highlight ? 'ring-2 ring-primary' : ''}`}
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center max-w-2xl mx-auto mt-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Calcula tu tarifa
        </h2>
        <form
          onSubmit={() => {
            // Do nothing
          }}
          className="rounded-2xl border bg-card p-6 shadow-sm grid gap-4 mt-4"
        >
          <Label htmlFor="visita" className="text-left">
            Visita
          </Label>
          <Select
            required
            value={visita}
            onValueChange={(newValue) => {
              setVisita(newValue);
            }}
          >
            <SelectTrigger className="SelectTrigger" aria-label="Food">
              <SelectValue id="visita" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Temporada baja (10€)</SelectItem>
              <SelectItem value="13">Temporada alta (13€)</SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="horas" className="text-left">
            Horas
          </Label>
          <Slider
            min={1}
            max={4}
            value={[horas]}
            onValueChange={(newValue) => {
              setHoras(newValue[0]);
            }}
          />
          <Input
            required
            type="number"
            name="horas"
            id="horas"
            value={horas}
            onChange={(event) => {
              setHoras(Number(event.target.value));
            }}
          />
          <Label htmlFor="gatos" className="text-left">
            Número de gatos
          </Label>
          <Slider
            min={1}
            max={8}
            value={[gatos]}
            onValueChange={(newValue) => {
              setGatos(newValue[0]);
            }}
          />
          <Input
            required
            type="number"
            name="gatos"
            id="gatos"
            value={gatos}
            min={1}
            max={9}
            onChange={(event) => {
              setGatos(Number(event.target.value));
            }}
          />
          <Label className="text-center text-[4rem]">
            {Number(visita) + horas * 6 + (gatos - 1) * 4}€
          </Label>
          <Button asChild className="rounded-full px-6">
            <a href="#contacto">Reserva tu primera cita</a>
          </Button>
        </form>
      </div>
    </section>
  );
};
