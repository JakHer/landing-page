const engagementPoints = [
  "Startup landing pages that need clearer messaging and stronger conversion flow.",
  "React products that need a faster, cleaner frontend before the next release.",
  "Product teams that want senior frontend support without extra overhead.",
];

const processPoints = [
  "What you are building and who it is for.",
  "The main problem right now, whether it is UX, speed, or frontend delivery.",
  "Any links to the product, repo, or designs if you already have them.",
];

const Contact = () => {
  return (
    <section id="contact" className="section-shell py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="glass-card overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative px-8 py-10 sm:px-10 sm:py-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />

              <div className="reveal-up relative">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Contact
                </p>

                <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">
                  Let&apos;s make the next version of your product feel sharper,
                  faster, and easier to ship.
                </h2>

                <p className="mt-5 max-w-[62ch] text-base leading-7 text-zinc-300">
                  If you need a frontend that looks polished and moves without
                  friction, send over the brief. I help startups with landing
                  pages, product UI, and React codebases that need structure,
                  speed, and a more reliable shipping rhythm.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:kubahermyt@gmail.com?subject=Project%20inquiry"
                    className="shine-on-hover inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    Email about your project
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-white/[0.03] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    Review recent work
                  </a>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Good fit for
                  </p>

                  <ul className="mt-4 space-y-3 text-zinc-300">
                    {engagementPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="reveal-up reveal-delay-1 border-t border-white/10 bg-zinc-900/60 px-8 py-10 sm:px-10 sm:py-12 lg:border-l lg:border-t-0">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Best first message
              </p>

              <p className="mt-4 text-lg leading-8 text-zinc-200">
                A short message is enough. Send the context you have now, and we
                can turn it into a concrete next step.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Include
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
                  {processPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-zinc-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Typical support
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  React feature delivery, landing page redesigns, interface
                  cleanup, component systems, and performance-minded frontend
                  work for growing products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
