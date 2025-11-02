import { Contact } from './components/Contact';
import { Keys } from './components/Keys';
import { Medical } from './components/Medical';
import { Min } from './components/Min';
import { Schedule } from './components/Schedule';
import { Visit } from './components/Visit';

export const Service = () => (
  <section id="servicio" className="container py-12 md:py-20">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
      Servicio
    </h2>
    <div className="grid gap-5 md:gap-10 md:grid-cols-2 md:items-start">
      <div className="order-2 md:order-1">
        <Visit />
        <Schedule />
      </div>
      <div className="order-1 md:order-2">
        <Min />
        <Contact />
        <Keys />
        <Medical />
      </div>
    </div>
  </section>
);
