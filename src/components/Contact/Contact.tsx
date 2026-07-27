import { useState } from "react";

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
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("kubahermyt@gmail.com");
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-shell scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="glass-card overflow-hidden rounded-[2rem] border border-black/10 bg-white/85">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative px-8 py-10 sm:px-10 sm:py-12">
              <div className="reveal-up relative">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Contact
                </p>

                <h2 id="contact-heading" className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">
                  Let&apos;s make the next version of your product feel sharper,
                  faster, and easier to ship.
                </h2>

                <p className="mt-5 max-w-[62ch] text-base leading-7 text-zinc-700">
                  If you need a frontend that looks polished and moves without
                  friction, send over the brief. I help startups with landing
                  pages, product UI, and React codebases that need structure,
                  speed, and a more reliable shipping rhythm.
                </p>

                <div className="mt-8">
                  <a
                    href="mailto:kubahermyt@gmail.com?subject=Project%20inquiry"
                    className="shine-on-hover inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    Email me
                  </a>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
                  <span>kubahermyt@gmail.com</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={
                      emailCopied ? "Email address copied" : "Copy email address"
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-medium text-zinc-600 transition hover:bg-black/5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {emailCopied ? (
                      "Copied"
                    ) : (
                      <>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <rect x="8" y="8" width="11" height="11" rx="2" />
                          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                  <span className="sr-only" aria-live="polite">
                    {emailCopied ? "Email address copied" : ""}
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Good fit for
                  </p>

                  <ul className="mt-4 space-y-3 text-zinc-700">
                    {engagementPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="reveal-up reveal-delay-1 border-t border-black/10 bg-zinc-100/70 px-8 py-10 sm:px-10 sm:py-12 lg:border-l lg:border-t-0">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Best first message
              </p>

              <p className="mt-4 text-lg leading-8 text-zinc-800">
                A short message is enough. Send the context you have now, and we
                can turn it into a concrete next step.
              </p>

              <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Include
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                  {processPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-zinc-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-black/10 bg-white/40 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Typical support
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-700">
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
