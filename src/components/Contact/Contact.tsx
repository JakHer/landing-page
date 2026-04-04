const engagementPoints = [
  "Landing pages that need sharper positioning and better conversion flow.",
  "React and TypeScript frontends that need cleanup before the next release.",
  "Product teams that want a reliable frontend partner instead of hand-holding.",
];

const processPoints = [
  "A short brief or rough idea of what you are building.",
  "Your current bottleneck, whether it is speed, UX, or maintainability.",
  "Links to the product, repo, or designs if you already have them.",
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="overflow-hidden rounded-4xl border border-zinc-800 bg-zinc-950">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative px-8 py-10 sm:px-10 sm:py-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />

              <div className="relative">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                  Contact
                </p>

                <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
                  Let&apos;s turn the next release into something faster,
                  clearer, and easier to ship.
                </h2>

                <p className="mt-5 max-w-[62ch] text-base leading-7 text-zinc-300">
                  If you need a frontend that feels polished and moves with less
                  friction, send over the brief. I can help with landing pages,
                  product UI, and React codebases that need structure without
                  slowing the team down.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:kubahermyt@gmail.com?subject=Project%20inquiry"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    Email about your project
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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

            <div className="border-t border-zinc-800 bg-zinc-900/60 px-8 py-10 sm:px-10 sm:py-12 lg:border-l lg:border-t-0">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                Best first message
              </p>

              <p className="mt-4 text-lg leading-8 text-zinc-200">
                A short note is enough. Send what you have now, and we can shape
                the next step from there.
              </p>

              <div className="mt-8 rounded-2xl border border-zinc-800 bg-black/30 p-6">
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

              <div className="mt-8 rounded-2xl border border-zinc-800 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Typical support
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  React feature work, landing page redesigns, interface cleanup,
                  component architecture, and performance-minded frontend
                  delivery.
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
