const cards = [
  {
    title: "Bruma flotante",
    label: "Aire",
    description: "Tarjetas que levitan con un trazo suave y un volumen ligero.",
  },
  {
    title: "Suspensión clara",
    label: "Perspectiva",
    description: "Bloques sobrios con sombra sutil y sensación de profundidad.",
  },
  {
    title: "Plano suspendido",
    label: "Espacio",
    description:
      "Una tarjeta serena separada del fondo por un efecto de elevación.",
  },
  {
    title: "Nube sólida",
    label: "Volumen",
    description:
      "Diseño con bordes suaves y una base oscura que enfatiza la flotación.",
  },
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,214,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_24%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 sm:px-10 lg:px-14">
        <header className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
            Tarjetas flotantes
          </span>
          <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Un diseño limpio y en suspensión.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Un conjunto de tarjetas profundas, ordenadas y con movimiento suave
            al pasar el cursor.
          </p>
        </header>

        <section className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/95 p-8 shadow-[0_28px_90px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-8 hover:shadow-[0_40px_140px_rgba(56,189,248,0.2)]"
            >
              <div className="absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top_left,rgba(96,214,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_35%)] opacity-90" />
              <div className="absolute inset-0 rounded-4xl border border-white/10 bg-slate-950/80 backdrop-blur-sm" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
                  {card.label}
                </span>
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="max-w-sm text-sm leading-7 text-slate-300">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200 backdrop-blur-md">
                  {card.label}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
