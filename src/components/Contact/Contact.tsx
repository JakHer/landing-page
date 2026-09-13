import { useState } from "react";

const strengths = [
  "Complex, data-rich product interfaces",
  "Maintainable React and TypeScript systems",
  "Accessible UI with thoughtful interaction states",
];

const ContactActions = () => (
  <div className="flex flex-wrap gap-3">
    <a href="mailto:kubahermyt@gmail.com?subject=Frontend%20opportunity" className="bg-primary hover:bg-primary-hover rounded-full px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-night-accent">Email me</a>
    <a href="https://www.linkedin.com/in/jakub-hermyt/" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-night-accent">LinkedIn</a>
    <a href="https://github.com/JakHer" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-night-accent">GitHub</a>
  </div>
);

const ContactContent = ({ onCopy, copied }: { onCopy: () => void; copied: boolean }) => (
  <div className="mx-auto grid h-full w-full max-w-6xl items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr]">
    <div>
      <p className="contact-kicker text-night-accent text-sm font-bold uppercase tracking-[0.26em]">04 / Contact</p>
      <h2 className="contact-title mt-6 max-w-3xl font-display text-6xl font-bold leading-[0.86] tracking-[-0.065em] xl:text-8xl">
        LET&apos;S BUILD<br />WHAT&apos;S NEXT.
      </h2>
      <p className="contact-copy mt-7 max-w-xl text-lg leading-8 text-white/60">
        Looking for a frontend developer who thinks beyond the component? Send me the role or product context.
      </p>
      <div className="contact-actions mt-9"><ContactActions /></div>
      <div className="contact-email mt-6 flex items-center gap-2 text-sm text-white/45">
        <span>kubahermyt@gmail.com</span>
        <button type="button" onClick={onCopy} className="rounded-lg px-2 py-1 font-bold transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-night-accent">
          {copied ? "Copied" : "Copy"}
        </button>
        <span className="sr-only" aria-live="polite">{copied ? "Email address copied" : ""}</span>
      </div>
      <p className="mt-8 hidden text-xs uppercase tracking-[0.16em] text-white/60 lg:block">© 2026 Jakub Hermyt · React + TypeScript</p>
    </div>

    <div className="contact-strengths rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">What I bring</p>
      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {strengths.map((strength, index) => (
          <li key={strength} className="grid grid-cols-[auto_1fr] items-center gap-5 py-5">
            <span className="text-night-accent font-mono text-xs">0{index + 1}</span>
            <span className="leading-7 text-white/70">{strength}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs uppercase tracking-[0.16em] text-white/60 lg:hidden">© 2026 Jakub Hermyt · React + TypeScript</p>
    </div>
  </div>
);

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    const email = "kubahermyt@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }

    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" aria-label="Contact" className="relative scroll-mt-0">
      <div className="story-desktop">
        <div className="contact-stage bg-canvas relative h-screen overflow-hidden">
          <div className="contact-intro absolute inset-0 flex items-center justify-center overflow-hidden text-center">
            <p className="font-display text-[clamp(7rem,18vw,17rem)] font-bold leading-[0.75] tracking-[-0.09em] text-ink">SAY<br /><span className="text-primary">HELLO.</span></p>
          </div>
          <div className="contact-scene bg-night absolute inset-0 text-white">
            <div className="project-contours absolute inset-0 opacity-25" />
            <ContactContent onCopy={copyEmail} copied={emailCopied} />
          </div>
        </div>
      </div>

      <div className="story-static bg-night text-white">
        <ContactContent onCopy={copyEmail} copied={emailCopied} />
      </div>
    </section>
  );
};

export default Contact;
