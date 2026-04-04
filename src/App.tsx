import { useState } from "react";

const cards = [
  {
    title: "UBISHARE",
    tags: ["Ubicacion", "Comunicación", "Mapas"],
    url: "https://ubishare.netlify.app/",
    description:
      "Plataforma de ubicación compartida en tiempo real que permite ver a tu equipo en un mapa usando una clave de sesión.",
  },
  {
    title: "JUEGO PAREJAS",
    tags: ["BD", "WebSockets", "Multijugador"],
    url: "https://juegoparejas.netlify.app/",
    description:
      "Juego de memoria con modo individual y duelo multijugador en línea, incluyendo rankings de victorias y derrotas.",
  },
  {
    title: "STROMROL.ES",
    tags: ["React", "Tailwind CSS", "Generador dinámico"],
    url: "https://stromrol.es/",
    description:
      "Generador de fichas de rol y recursos de juego con estilo dinámico",
  },
  {
    title: "RESUMIDOR WEB",
    tags: ["IA", "Local", "Resumen automático"],
    url: "https://resumidorweb.netlify.app/",
    description:
      "Herramienta web para resumir textos automáticamente y obtener versiones condensadas en segundos.",
  },
  {
    title: "GORILAS BAS",
    tags: ["JavaScript", "Canvas", "Animación"],
    url: "https://yeicogm.github.io/GorilasBas/",
    description:
      "Homenaje a Gorillas.bas en JavaScript: duelo por turnos lanzando plátanos ajustando ángulo y velocidad.",
  },
];

function ZxLoading({ onComplete }: { onComplete: () => void }) {
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<
    "start" | "pilot" | "pilot-short" | "data" | "pause" | "data-end"
  >("start");
  const [lines, setLines] = useState<string[]>([]);

  const startLoading = () => {
    setStarted(true);

    const AudioContextConstructor: typeof AudioContext | undefined =
      window.AudioContext ??
      (window as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioContextConstructor) {
      onComplete();
      return;
    }

    const ctx = new AudioContextConstructor();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "square";
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.value = 0;
    osc.start();

    const playVolume = 0.05; // Volumen bajo para evitar atronar

    let noiseInterval: number;
    const playNoise = (enabled: boolean) => {
      clearInterval(noiseInterval);
      if (enabled) {
        noiseInterval = window.setInterval(() => {
          if (ctx.state === "running") {
            osc.frequency.setValueAtTime(
              Math.random() * 2000 + 1000,
              ctx.currentTime,
            );
          }
        }, 1);
      }
    };

    const cancelled = false;
    const sequence = async () => {
      // 1. Pantalla gris (esperando)
      await new Promise((r) => setTimeout(r, 1000));
      if (cancelled) return;

      // 2. Tono piloto cabecera (Cian/Rojo lento)
      setPhase("pilot");
      gain.gain.setValueAtTime(playVolume, ctx.currentTime);
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      await new Promise((r) => setTimeout(r, 2500));
      if (cancelled) return;
      setLines(["Program: YEICOPORTF"]);

      // 3. Pausa corta
      setPhase("pause");
      gain.gain.setValueAtTime(0, ctx.currentTime);
      await new Promise((r) => setTimeout(r, 600));
      if (cancelled) return;

      // 4. Tono de datos
      setPhase("data");
      gain.gain.setValueAtTime(playVolume, ctx.currentTime);
      playNoise(true);
      await new Promise((r) => setTimeout(r, 4500));
      if (cancelled) return;
      setLines((prev) => [...prev, "Bytes: Loading..."]);

      // 5. Tono piloto muy corto antes de datos
      setPhase("pilot-short");
      playNoise(false);
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      await new Promise((r) => setTimeout(r, 600));
      if (cancelled) return;

      // 6. Tono de datos final
      setPhase("data-end");
      playNoise(true);
      await new Promise((r) => setTimeout(r, 2000));
      if (cancelled) return;

      playNoise(false);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      osc.stop();
      ctx.close();
      onComplete();
    };

    sequence();
  };

  if (!started) {
    return (
      <div
        className="fixed inset-0 crt-effect bg-black font-['Courier_New',monospace] uppercase flex flex-col items-center justify-center p-6 sm:p-12 z-50 cursor-pointer"
        onClick={startLoading}
      >
        <p className="text-white text-2xl sm:text-4xl font-bold animate-pulse-slow z-20">
          PULSA PLAY PARA INICIAR
        </p>
        <p className="text-[#d7d7d7] text-sm mt-4 z-20">(Click para empezar)</p>
        <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-screen z-10 pointer-events-none" />
        <div className="absolute inset-0 scanlines z-10 pointer-events-none" />
      </div>
    );
  }

  let bgClass = "bg-black";
  if (phase === "pilot" || phase === "pilot-short")
    bgClass = "zx-loading-pilot";
  else if (phase === "data" || phase === "data-end")
    bgClass = "zx-loading-data";

  return (
    <div
      className={`fixed inset-0 crt-effect ${bgClass} font-['Courier_New',monospace] uppercase flex flex-col p-6 sm:p-12 z-50`}
    >
      <div className="relative z-20 flex flex-col gap-2 items-start mt-4 sm:mt-8 ml-4 sm:ml-8">
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-black bg-[#d7d7d7] px-4 py-1 text-xl sm:text-2xl font-bold font-['Courier_New',monospace] drop-shadow-none"
          >
            {line}
          </p>
        ))}
        {phase !== "start" && (
          <p className="text-black bg-[#d7d7d7] px-4 py-1 text-xl sm:text-2xl font-bold font-['Courier_New',monospace] drop-shadow-none animate-blink">
            _
          </p>
        )}
      </div>
      <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-screen z-10 pointer-events-none" />
      <div className="absolute inset-0 scanlines z-10 pointer-events-none" />
    </div>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [previewCard, setPreviewCard] = useState<(typeof cards)[number] | null>(
    null,
  );

  return (
    <>
      {!isLoaded && <ZxLoading onComplete={() => setIsLoaded(true)} />}
      <main
        className={`crt-effect relative ${
          !isLoaded ? "hidden" : "flex"
        } min-h-screen zx-loading-bg text-[#d7d7d7] font-['Courier_New',monospace] uppercase flex-col p-6 sm:p-12 overflow-hidden`}
      >
        {/* Inner black screen with the animated loading border outside */}
        <div
          className={`absolute inset-6 sm:inset-12 bg-black pointer-events-none ${isLoaded ? "animate-zx-reveal" : ""}`}
          aria-label="Inner black screen"
        />
        <div
          className={`absolute inset-6 sm:inset-12 pointer-events-none bg-black ${isLoaded ? "hidden" : ""}`}
        />{" "}
        {/* Cover before reveal starts */}
        <div
          className={`absolute inset-0 pointer-events-none noise-overlay opacity-30 mix-blend-screen z-10 ${isLoaded ? "animate-zx-reveal" : ""}`}
        />
        <div
          className={`absolute inset-0 pointer-events-none scanlines z-10 ${isLoaded ? "animate-zx-reveal" : ""}`}
        />
        <div
          className={`relative z-20 w-full max-w-none mx-auto grow flex flex-col pt-2 sm:pt-8 px-4 sm:px-6 ${isLoaded ? "animate-zx-reveal" : "opacity-0"}`}
        >
          <header className="mb-2">
            <div className="flex gap-2 mb-6">
              <span className="w-4 h-4 bg-[#ff0000] inline-block shadow-[0_0_10px_#ff0000]" />
              <span className="w-4 h-4 bg-[#ffff00] inline-block shadow-[0_0_10px_#ffff00]" />
              <span className="w-4 h-4 bg-[#00ff00] inline-block shadow-[0_0_10px_#00ff00]" />
              <span className="w-4 h-4 bg-[#0000ff] inline-block shadow-[0_0_10px_#0000ff]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-widest drop-shadow-[2px_2px_0px_#ff0000] text-center">
              Ejercicios Javascript React
            </h1>
            <p className="text-[#ffff00] text-lg sm:text-xl font-bold">
              0 OK, 0:1
              <span className="inline-block h-[1.1em] w-[0.35rem] bg-[#ffff00] ml-2 align-middle animate-blink" />
            </p>
          </header>

          <section className="grow flex flex-col gap-1 w-full">
            {cards.map((card) => (
              <article
                key={card.title}
                onClick={() => card.url && setPreviewCard(card)}
                onKeyDown={(event) => {
                  if (
                    card.url &&
                    (event.key === "Enter" || event.key === " ")
                  ) {
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
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm bg-[#0000ff] text-black px-2 py-0.5 font-bold whitespace-nowrap group-hover:bg-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
    </>
  );
}

export default App;
