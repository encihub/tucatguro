import { site } from '@/data/site';

export const About = () => (
  <section id="sobre-mi" className="container py-12 md:py-20">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
      Sobre mi
    </h2>
    <p className="mt-3 text-muted-foreground">
      Soy Carolina, la persona detrás de {site.title}.
      <br />
      Llevo años dedicada al cuidado de gatos y conozco bien sus ritmos, su
      lenguaje y sus necesidades.
      <br />
      Tengo experiencia en curas medicas y administración de medicación, y se lo
      importante que es confiar en quien entra en tu hogar.
      <br />
      Mi objetivo es que tu gato se sienta acompañado y tranquilo mientras tú no
      estás, y que tengas la certeza de que está en buenas manos.
    </p>
  </section>
);
