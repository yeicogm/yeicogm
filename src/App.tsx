import "./App.css";

const projects = [
  {
    title: "Nebula Flow",
    description:
      "Visualizador de datos con animaciones SVG y entradas en tiempo real, diseñado para explotar un lenguaje espacial y fluid motion.",
    tags: ["React", "D3", "Motion"],
  },
  {
    title: "Código Prisma",
    description:
      "Generador de snippets interactivos con filtros avanzados y un modo oscuro que mantiene la legibilidad y la sensación de terminal moderna.",
    tags: ["TypeScript", "API", "UI"],
  },
  {
    title: "Panel de Rendimiento",
    description:
      "Dashboard 3D con métricas animadas, micrográficas y filtros rápidos para aplicaciones de seguimiento en tiempo real.",
    tags: ["Dashboard", "CSS", "Analytics"],
  },
];

function App() {
  return (
    <div className="portfolio-shell min-h-screen px-6 py-12 sm:px-10 lg:px-14">
      <div className="hero-panel mx-auto max-w-5xl">
        <span className="inline-flex items-center gap-3 rounded-full bg-[rgba(96,214,255,0.12)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Portafolio de programación
        </span>
        <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
          Proyectos con presencia <span className="text-accent">3D</span>.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
          Una vitrina oscura y contemporánea para tus proyectos, con tarjetas
          que flotan, responden al hover y crean profundidad sin distracciones.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[color:var(--text-secondary)]">
          <span className="rounded-full bg-white/5 px-4 py-2">
            React · Vite · CSS moderno
          </span>
          <a
            className="rounded-full bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            href="#projects"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      <section className="projects mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {projects.map((project) => (
          <article
            className="project-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(8,12,24,0.78)] shadow-glow transition-transform duration-300 will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent hover:-translate-y-2 hover:rotate-[0.2deg]"
            key={project.title}
            tabIndex={0}
          >
            <div className="card-surface" aria-hidden="true" />
            <div className="card-copy relative flex h-full flex-col justify-end gap-6 p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                Proyecto
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="max-w-xl text-sm leading-7 text-[color:var(--text-muted)]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
