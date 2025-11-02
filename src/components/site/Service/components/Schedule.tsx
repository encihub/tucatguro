export const Schedule = () => (
  <div className="mt-4 rounded-3xl border bg-card p-6 shadow-sm">
    <h3 className="font-semibold">Horarios de visitas</h3>
    <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
      <li>
        • Una visita mínimo al día con un tiempo de 48h entre ellas como máximo
      </li>
      <li>• El horario de las visitas puede ser de 08:00 a 20:00</li>
      <li>
        • Si quieres más visitas en un mismo día, puedo dividirlas entre mañana
        y tarde, o mañana, mediodía y tarde
      </li>
      <li>• Podemos acordar un horario especial previa consulta</li>
      <li>• El 24 y 31 de Diciembre el horario es de 08:00 a 13:00</li>
      <li>
        • El 25 de Diciembre y el 1 de Enero el horario es de 17:00 a 20:00
      </li>
    </ul>
  </div>
);
