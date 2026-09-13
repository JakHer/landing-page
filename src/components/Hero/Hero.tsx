const focusAreas = [
  ["01", "Product UI", "Complex workflows made clear"],
  ["02", "Typed systems", "React and TypeScript architecture"],
  ["03", "Data layer", "Supabase and server-state patterns"],
  ["04", "Quality", "Accessible, responsive interfaces"],
];

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const HeroContent = ({ animated = false }: { animated?: boolean }) => (
  <>
    <div className={`${animated ? "hero-name" : ""} absolute inset-0 flex items-center justify-center overflow-hidden`}>
      <h1 id="hero-heading" className="text-center font-display text-[clamp(5rem,15vw,14rem)] font-bold leading-[0.7] tracking-[-0.09em]">
        JAKUB<br /><span className="text-primary">HERMYT</span>
      </h1>
    </div>

    <div className={`${animated ? "hero-kicker" : ""} absolute inset-x-0 top-28 mx-auto flex w-full max-w-6xl items-center justify-between px-6`}>
      <p className="text-primary-hover text-xs font-bold uppercase tracking-[0.26em]">Frontend developer / Mysłowice, Poland</p>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">React + TypeScript</p>
    </div>

    <div className={`${animated ? "hero-reveal" : ""} absolute inset-0 flex items-center px-6`}>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="border-primary/20 bg-primary-soft text-primary-hover mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]">
            <span className="bg-primary h-2 w-2 rounded-full" aria-hidden="true" />
            Available for frontend opportunities
          </div>
          <p className="text-primary-hover text-sm font-bold uppercase tracking-[0.25em]">Product-minded by default</p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] xl:text-7xl">
            Reliable products. Thoughtful interfaces.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            I turn complex workflows into clear React products backed by maintainable TypeScript systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="bg-night hover:bg-primary-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
              Explore the work <ArrowIcon />
            </a>
            <a href="https://www.linkedin.com/in/jakub-hermyt/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 bg-white px-6 py-3.5 font-bold text-zinc-900 transition hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
              LinkedIn
            </a>
          </div>
        </div>

        <div className={`${animated ? "hero-capabilities" : ""} bg-night overflow-hidden rounded-[2rem] p-7 text-white shadow-[0_35px_100px_rgba(24,24,27,0.2)]`}>
          <p className="text-night-accent text-xs font-bold uppercase tracking-[0.22em]">What I bring</p>
          <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
            {focusAreas.map(([number, title, description]) => (
              <div key={number} className="grid grid-cols-[auto_0.8fr_1.2fr] items-center gap-4 py-4">
                <span className="font-mono text-xs text-white/30">{number}</span>
                <span className="font-bold">{title}</span>
                <span className="text-sm text-white/50">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

const Hero = () => {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative scroll-mt-0">
      <div className="story-desktop">
        <div className="hero-stage bg-canvas relative h-screen overflow-hidden">
          <div aria-hidden="true" className="hero-ambient absolute -right-[8vw] top-[14vh] h-[34rem] w-[34rem] rounded-full" />
          <div className="project-contours absolute inset-0 opacity-35" />
          <HeroContent animated />
        </div>
      </div>

      <div className="story-static bg-canvas relative overflow-hidden px-6 pb-16 pt-28 sm:pt-32">
        <div aria-hidden="true" className="hero-ambient absolute -right-44 top-28 h-96 w-96 rounded-full" />
        <div className="project-contours absolute inset-0 opacity-30" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-primary-hover text-xs font-bold uppercase tracking-[0.24em]">Frontend developer / Mysłowice, Poland</p>
          <h1 className="mt-8 font-display text-6xl font-bold leading-[0.82] tracking-[-0.075em] sm:text-7xl">JAKUB<br /><span className="text-primary">HERMYT</span></h1>
          <div className="border-primary/20 bg-primary-soft text-primary-hover mt-8 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]">
            <span className="bg-primary h-2 w-2 rounded-full" aria-hidden="true" />
            Available for frontend opportunities
          </div>
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.05em]">Reliable products. Thoughtful interfaces.</h2>
          <p className="mt-5 max-w-xl leading-7 text-zinc-600">I turn complex workflows into clear React products backed by maintainable TypeScript systems.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="bg-night inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold text-white">Explore the work <ArrowIcon /></a>
            <a href="https://www.linkedin.com/in/jakub-hermyt/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 bg-white px-5 py-3 font-bold">LinkedIn</a>
          </div>
          <div className="bg-night mt-12 overflow-hidden rounded-[2rem] p-6 text-white">
            {focusAreas.map(([number, title, description]) => (
              <div key={number} className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/10 py-4 last:border-b-0">
                <span className="text-night-accent font-mono text-xs">{number}</span>
                <div><p className="font-bold">{title}</p><p className="mt-1 text-sm leading-6 text-white/50">{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
