import { useEffect, useState } from "react";

const navigationItems = [
  { href: "#top", label: "Home", sectionId: "top" },
  { href: "#projects", label: "Work", sectionId: "projects" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = navigationItems
      .map(({ sectionId }) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="glass-card mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-4 py-3 backdrop-blur-xl sm:px-5"
      >
        <a
          href="#top"
          aria-label="Back to the top"
          className="font-display text-lg font-bold tracking-[-0.04em] text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          JH<span className="text-blue-600">.</span>
        </a>

        <div className="flex items-center gap-1">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                key={item.sectionId}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isActive ? "bg-blue-50 text-blue-700" : "text-zinc-600 hover:bg-black/5 hover:text-black"}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
