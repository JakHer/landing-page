type HeroProps = {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

const Hero = ({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) => {
  return (
    <section id="top" aria-labelledby="hero-heading" className="section-shell min-h-screen">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-32 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20 lg:pt-28">
        <div>
          <div className="reveal-up glass-card inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.26em] text-zinc-700">
            <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.5)]" />
            Frontend React Developer
          </div>

          <h1 id="hero-heading" className="reveal-up reveal-delay-1 mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.94] tracking-[-0.04em] md:text-7xl">
            {title}
          </h1>

          <p className="reveal-up reveal-delay-2 mt-6 max-w-[62ch] text-base leading-7 text-zinc-700 md:text-lg">
            {subtitle}
          </p>

          <div className="reveal-up reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={primaryCtaHref}
              className="shine-on-hover inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              {primaryCtaLabel}
            </a>

            <a
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/70 px-6 py-3 font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {secondaryCtaLabel}
            </a>
          </div>

          <div className="reveal-up reveal-delay-3 mt-12 flex flex-wrap gap-3 text-sm text-zinc-700">
            <div className="glass-card rounded-full border border-black/10 bg-white/65 px-4 py-2">
              React + TypeScript
            </div>
            <div className="glass-card rounded-full border border-black/10 bg-white/65 px-4 py-2">
              Landing pages and product UI
            </div>
            <div className="glass-card rounded-full border border-black/10 bg-white/65 px-4 py-2">
              Performance-minded delivery
            </div>
          </div>
        </div>

        <div className="reveal-up reveal-delay-2 relative">
          <div className="glass-card relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 p-6 md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-zinc-500">
              <span>Selected Focus</span>
              <span>2026</span>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.5rem] border border-black/10 bg-white/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50">
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Positioning
                </p>
                <p className="mt-3 text-lg font-medium text-zinc-950">
                  Sharper messaging and tighter hero sections that make startup
                  products feel more credible from the first screen.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/10 bg-white/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50">
                  <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                    UI systems
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    Interfaces that stay clean as products grow.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/10 bg-white/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50">
                  <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                    Shipping speed
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    Frontend work that improves momentum instead of adding drag.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-gradient-to-br from-blue-50/80 to-white/70 p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                      Working style
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-700">
                      Product-minded execution, strong frontend fundamentals, and
                      a bias toward clarity over noise.
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-display text-5xl font-bold tracking-[-0.05em] text-zinc-950">
                      JH
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-500">
                      Interface craft
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
