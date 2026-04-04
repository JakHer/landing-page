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
    <section className="section-shell min-h-[92vh]">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 lg:min-h-[92vh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="reveal-up inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-zinc-300 glass-card">
            <span className="h-2 w-2 rounded-full bg-white" />
            Frontend React Developer
          </div>

          <h1 className="reveal-up reveal-delay-1 mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.94] tracking-[-0.04em] md:text-7xl">
            {title}
          </h1>

          <p className="reveal-up reveal-delay-2 mt-6 max-w-[62ch] text-base leading-7 text-zinc-300 md:text-lg">
            {subtitle}
          </p>

          <div className="reveal-up reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={primaryCtaHref}
              className="shine-on-hover inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {primaryCtaLabel}
            </a>

            <a
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-white/[0.03] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {secondaryCtaLabel}
            </a>
          </div>

          <div className="reveal-up reveal-delay-3 mt-12 flex flex-wrap gap-3 text-sm text-zinc-300">
            <div className="glass-card rounded-full border border-white/10 bg-white/5 px-4 py-2">
              React + TypeScript
            </div>
            <div className="glass-card rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Landing pages and product UI
            </div>
            <div className="glass-card rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Performance-minded delivery
            </div>
          </div>
        </div>

        <div className="reveal-up reveal-delay-2 relative">
          <div className="float-slow absolute -left-6 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="float-slower absolute right-2 top-0 h-56 w-56 rounded-full bg-white/8 blur-3xl" />

          <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/75 p-6 md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-zinc-500">
              <span>Selected Focus</span>
              <span>2026</span>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Positioning
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Sharper messaging and tighter hero sections that make startup
                  products feel more credible from the first screen.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                    UI systems
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Interfaces that stay clean as products grow.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                    Shipping speed
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Frontend work that improves momentum instead of adding drag.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                      Working style
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-300">
                      Product-minded execution, strong frontend fundamentals, and
                      a bias toward clarity over noise.
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-display text-5xl font-bold tracking-[-0.05em] text-white">
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
