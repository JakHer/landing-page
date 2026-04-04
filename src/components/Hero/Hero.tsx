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
    <section className="min-h-[80vh] flex items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
          Frontend React Developer
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl font-display">
          {title}
        </h1>

        <p className="mt-6 max-w-[65ch] text-base text-zinc-300 md:text-lg">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={primaryCtaHref}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            {primaryCtaLabel}
          </a>

          <a
            href={secondaryCtaHref}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 inline-flex items-center justify-center rounded-xl border border-zinc-600 px-6 py-3 font-semibold text-white transition hover:border-zinc-400"
          >
            {secondaryCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
