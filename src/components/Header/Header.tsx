import { useEffect, useState } from "react";

const navigationItems = [
  { href: "#top", label: "Home", sectionId: "top", observedIds: ["top"] },
  {
    href: "#projects",
    label: "Work",
    sectionId: "projects",
    observedIds: ["projects", "github-projects"],
  },
  {
    href: "#contact",
    label: "Contact",
    sectionId: "contact",
    observedIds: ["contact"],
  },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("top");
  const activeIndex = Math.max(
    navigationItems.findIndex((item) => item.sectionId === activeSection),
    0,
  );

  useEffect(() => {
    const handleStorySection = (event: Event) => {
      setActiveSection((event as CustomEvent<string>).detail);
    };
    window.addEventListener("portfolio-section", handleStorySection);

    const sectionToNavigation = new Map(
      navigationItems.flatMap((item) =>
        item.observedIds.map((observedId) => [observedId, item.sectionId]),
      ),
    );
    const sections = Array.from(sectionToNavigation.keys())
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              sectionToNavigation.get(entry.target.id) ?? entry.target.id,
            );
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("portfolio-section", handleStorySection);
    };
  }, []);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between"
      >
        <a
          href="#top"
          aria-label="JH. — Back to the top"
          className="header-brand glass-card rounded-full border border-black/10 bg-white/85 px-4 py-3 font-display text-lg font-bold tracking-[-0.04em] text-ink backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          JH<span className="text-primary">.</span>
        </a>

        <div className="header-menu glass-card relative grid grid-cols-3 items-center rounded-full border border-black/10 bg-white/85 p-1.5 backdrop-blur-xl">
          <span
            aria-hidden="true"
            className="nav-indicator bg-primary pointer-events-none absolute bottom-1.5 left-1.5 top-1.5 w-[calc((100%_-_0.75rem)/3)] rounded-full shadow-[0_6px_18px_rgba(37,99,235,0.22)]"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
          {navigationItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                key={item.sectionId}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative z-10 rounded-full px-3.5 py-2 text-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${isActive ? "text-white" : "text-zinc-600 hover:text-black"}`}
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
