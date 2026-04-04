import { useState } from "react";

const cards = [
  {
    title: "UBISHARE",
    label: "WEB",
    url: "https://ubishare.netlify.app/",
    description:
      "Plataforma de ubicación compartida en tiempo real que permite ver a tu equipo en un mapa usando una clave de sesión.",
  },
  {
    title: "JUEGO PAREJAS",
    label: "GAME",
    url: "https://juegoparejas.netlify.app/",
    description:
      "Juego de memoria con modo individual y duelo multijugador en línea, incluyendo rankings de victorias y derrotas.",
  },
  {
    title: "STROMROL.ES",
    label: "WEB",
    url: "https://stromrol.es/",
    description:
      "Generador de fichas de rol y recursos de juego con estilo dinámico, actualizado desde el repositorio de StromRol.",
  },
  {
    title: "GORILAS BAS",
    label: "WEB",
    url: "https://yeicogm.github.io/GorilasBas/",
    description:
      "Homenaje a Gorillas.bas en JavaScript: duelo por turnos lanzando plátanos ajustando ángulo y velocidad.",
  },
];

function App() {
  const [previewCard, setPreviewCard] = useState<(typeof cards)[number] | null>(
    null,
  );

  return (
    <main className="crt-effect relative min-h-screen zx-loading-bg text-[#d7d7d7] font-['Courier_New',monospace] uppercase flex flex-col p-6 sm:p-12 overflow-hidden">
      {/* Inner black screen with the animated loading border outside */}
      <div
        className="absolute inset-6 sm:inset-12 bg-black pointer-events-none"
        aria-label="Inner black screen"
      />
      <div className="absolute inset-0 pointer-events-none noise-overlay opacity-30 mix-blend-screen z-10" />
      <div className="absolute inset-0 pointer-events-none scanlines z-10" />

      <div className="relative z-20 w-full max-w-4xl mx-auto grow flex flex-col pt-2 sm:pt-8">
        <header className="mb-16">
          <div className="flex gap-2 mb-6">
            <span className="w-4 h-4 bg-[#ff0000] inline-block shadow-[0_0_10px_#ff0000]" />
            <span className="w-4 h-4 bg-[#ffff00] inline-block shadow-[0_0_10px_#ffff00]" />
            <span className="w-4 h-4 bg-[#00ff00] inline-block shadow-[0_0_10px_#00ff00]" />
            <span className="w-4 h-4 bg-[#0000ff] inline-block shadow-[0_0_10px_#0000ff]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-widest drop-shadow-[2px_2px_0px_#ff0000]">
            Ejercicios Javascript React
          </h1>
          <p className="text-[#ffff00] text-lg sm:text-xl font-bold">
            0 OK, 0:1
          </p>
        </header>

        <section className="grow flex flex-col gap-6 w-full">
          {cards.map((card) => (
            <article
              key={card.title}
              onClick={() => card.url && setPreviewCard(card)}
              onKeyDown={(event) => {
                if (card.url && (event.key === "Enter" || event.key === " ")) {
                  setPreviewCard(card);
                }
              }}
              role="button"
              tabIndex={0}
              className="group flex flex-col gap-4 w-full py-4 px-6 border-2 border-transparent hover:border-[#ffff00] hover:bg-[#0000ff] transition-none cursor-pointer"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4 sm:w-1/3">
                  <span className="text-[#00ff00] sm:text-xl font-bold animate-pulse-slow">
                    {"\u25A0"}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white zx-text-yellow group-hover:text-black group-hover:drop-shadow-none">
                    {card.title}
                  </h2>
                </div>
                <div className="grow flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className="text-sm bg-[#0000ff] text-black px-2 py-0.5 font-bold whitespace-nowrap group-hover:bg-white">
                    {card.label}
                  </span>
                  <p className="text-base text-[#d7d7d7] leading-relaxed group-hover:text-white">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {previewCard ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-4xl border border-white/10 bg-[#020305]/95 shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
              <header className="flex flex-col gap-4 border-b border-white/10 bg-[#05070f]/90 px-6 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#00ff00] font-semibold">
                    Vista previa
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {previewCard.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewCard(null)}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/15"
                >
                  Cerrar
                </button>
              </header>

              <div className="relative h-[75vh] w-full bg-[#05070f]">
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      previewCard.url,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  aria-label="Abrir proyecto en nueva pestaña"
                  className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                />
                <iframe
                  src={previewCard.url}
                  title={`Vista previa ${previewCard.title}`}
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  className="h-full w-full border-0 bg-[#05070f]"
                />
                <div className="absolute bottom-4 right-4 z-20 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                  Click para abrir proyecto
                </div>
              </div>

              <div className="px-6 py-5">
                <p className="text-sm leading-6 text-[#d7d7d7]">
                  {previewCard.description}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <footer className="mt-auto pt-16 pb-8 flex items-end">
          <p className="text-base sm:text-xl text-[#d7d7d7]">
            © 1980 Yeico Research Ltd{" "}
            <span className="inline-block w-4 h-5 align-middle bg-[#ff0000] ml-2 animate-blink"></span>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
