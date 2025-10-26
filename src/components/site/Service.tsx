const bullets1 = [
  'Te avisaré cuando llegue al domicilio (por Whatsapp o Telegram), simplemente por registrar la visita, no es necesario que me contestes a no ser que me tengas que dar acceso, por alarmas, avisos a conserjería, etc., de la misma manera lo haré al salir.',
  'En casa, todas las estancias a las que el gato no debe acceder, deberán de tener las puertas cerradas, yo no las abriré a no ser que sea imprescindible o por indicación tuya.',
  'Debes indicarme dónde y qué productos de limpieza utilizar, así como dónde se encuentra su comida, juguetes, chuches…',
  'La limpieza del arenero se realizará en cada visita que haga y los residuos, me los llevaré para depositarlos en la basura, así como latas vacías y demás para no dejar residuos en el domicilio que puedan provocar mal olor.',
  'Tras la visita, os mandaré un mensaje con el resúmen de la misma y/o cosas relevantes, y si quieres, fotos y vídeos.',
  'Si quieres verlos en “directo” para mandarles una saludito si les echas de menos, durante mi visita, podemos realizar una videollamada.',
  'Si hay algún tipo de incidencia no urgente, te informaré al finalizar mi visita mediante mensaje. Sólo te contactaré mediante llamada telefónica si hay alguna urgencia.',
];

const bullets2 = [
  'Limpieza de areneros y espacios que puedan ensuciar (vómitos…)',
  'Limpieza de comedero/bebederos',
  'Poner o dar comida/agua',
  'Tiempo extra de juegos Plan de adaptación inicial',
];

const bullets3 = [
  'Al llegar y al salir',
  'Cuando me lo solicites durante la visita',
  'Ante cualquier urgencia',
];

export const Service = () => (
  <section id="servicio" className="container py-12 md:py-20">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
      Servicio
    </h2>
    <div className="grid gap-5 md:gap-10 md:grid-cols-2 md:items-start">
      <div className="order-2 md:order-1">
        <div className="mt-0 md:mt-4 rounded-3xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Durante mi visita</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {bullets1.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="mt-4 rounded-3xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">La visita se compone como mínimo de</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {bullets2.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 rounded-3xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Estaremos en contacto</h3>
          <p className="mt-3 text-muted-foreground max-w-prose">
            Si hay algún tipo de incidencia no urgente, te informaré al
            finalizar mi visita mediante mensaje. Sólo te contactaré mediante
            llamada telefónica si hay alguna urgencia.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {bullets3.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
