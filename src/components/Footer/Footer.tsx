const Footer = () => {
  return (
    <footer className="section-shell py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Jakub Hermyt. Built with React and TypeScript.</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:kubahermyt@gmail.com"
            className="transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            kubahermyt@gmail.com
          </a>
          <a
            href="https://github.com/JakHer"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jakub-hermyt/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
