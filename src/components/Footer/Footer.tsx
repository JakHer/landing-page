const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Jakub Hermyt. Built with React and TypeScript.</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:kubahermyt@gmail.com"
            className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            kubahermyt@gmail.com
          </a>
          <a
            href="https://github.com/JakHer"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
