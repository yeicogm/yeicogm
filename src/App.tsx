const cards = [
  {
    title: "1 RAM EXPANSION",
    label: "32K",
    description:
      "Expanded memory systems optimized for continuous operation and reliable logic constraints.",
  },
  {
    title: "2 AY-3-8912 CHIP",
    label: "AUDIO",
    description:
      "Multi-channel sound synthesis for rich melodic patterns and square wave dynamics.",
  },
  {
    title: "3 ULA PROCESSOR",
    label: "VIDEO",
    description:
      "Custom logic handling palette generation, contention timing, and screen refreshing.",
  },
  {
    title: "4 MICRODRIVE",
    label: "STORAGE",
    description:
      "Fast tape loop technology providing continuous magnetic data access and transfer.",
  },
];

function App() {
  return (
    <main className="crt-effect relative min-h-screen zx-loading-bg text-[#d7d7d7] font-['Courier_New',monospace] uppercase flex flex-col p-6 sm:p-12 overflow-hidden">
      {/* Inner black screen with the animated loading border outside */}
      <div className="absolute inset-[1.5rem] sm:inset-[3rem] bg-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none noise-overlay opacity-30 mix-blend-screen z-10" />
      <div className="absolute inset-0 pointer-events-none scanlines z-10" />

      <div className="relative z-20 w-full max-w-4xl mx-auto flex-grow flex flex-col pt-2 sm:pt-8">
        <header className="mb-16">
          <div className="flex gap-2 mb-6">
            <span className="w-4 h-4 bg-[#ff0000] inline-block shadow-[0_0_10px_#ff0000]" />
            <span className="w-4 h-4 bg-[#ffff00] inline-block shadow-[0_0_10px_#ffff00]" />
            <span className="w-4 h-4 bg-[#00ff00] inline-block shadow-[0_0_10px_#00ff00]" />
            <span className="w-4 h-4 bg-[#0000ff] inline-block shadow-[0_0_10px_#0000ff]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-widest drop-shadow-[2px_2px_0px_#ff0000]">
            PORTFOLIO 48K
          </h1>
          <p className="text-[#ffff00] text-lg sm:text-xl font-bold">
            0 OK, 0:1
          </p>
        </header>

        <section className="flex-grow flex flex-col gap-6 w-full">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 py-4 px-6 border-2 border-transparent hover:border-[#ffff00] hover:bg-[#0000ff] transition-none cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:w-1/3">
                <span className="text-[#00ff00] sm:text-xl font-bold animate-pulse-slow">
                  {"\u25A0"}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white zx-text-yellow group-hover:text-black group-hover:drop-shadow-none">
                  {card.title}
                </h2>
              </div>
              <div className="flex-grow flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="text-sm bg-[#0000ff] text-black px-2 py-0.5 font-bold whitespace-nowrap group-hover:bg-white">
                  {card.label}
                </span>
                <p className="text-base text-[#d7d7d7] leading-relaxed group-hover:text-white">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-auto pt-16 pb-8 flex items-end">
          <p className="text-base sm:text-xl text-[#d7d7d7]">
            © 1982 Sinclair Research Ltd{" "}
            <span className="inline-block w-4 h-5 align-middle bg-[#ff0000] ml-2 animate-blink"></span>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
