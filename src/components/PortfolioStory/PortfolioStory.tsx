import { useEffect, useRef } from "react";
import Hero from "../Hero/Hero";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const sectionProgress = {
  "#top": 0,
  "#projects": 0.23,
  "#github-projects": 0.66,
  "#contact": 0.97,
};

const PortfolioStory = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let dispose: (() => void) | undefined;

    const setup = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      const select = gsap.utils.selector(rootRef);
      const context = gsap.context(() => {

    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const viewport = select(".master-viewport")[0];
      const track = select(".master-track")[0];
      const githubTrack = select(".github-track")[0] as HTMLElement;
      const storySections = ["top", "projects", "github-projects", "contact"]
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));
      const firstProjectScene = select(".scene-one")[0] as HTMLElement;
      const secondProjectScene = select(".scene-two")[0] as HTMLElement;
      let activeSectionId = "";

      const setActiveSection = (sectionId: string, progress: number) => {
        if (sectionId !== activeSectionId) {
          activeSectionId = sectionId;
          storySections.forEach((section) => {
            const isActive = section.id === sectionId;
            section.inert = !isActive;
            if (isActive) section.removeAttribute("aria-hidden");
            else section.setAttribute("aria-hidden", "true");
          });
        }

        firstProjectScene.inert = progress >= 0.45;
        secondProjectScene.inert = progress < 0.45;
      };

      setActiveSection("top", 0);

      gsap.set(select(".master-progress"), { scaleX: 0, transformOrigin: "left center" });
      gsap.set(select(".hero-reveal"), { autoAlpha: 0, y: 80 });
      gsap.set(select(".hero-capabilities"), { x: 100, rotation: 2 });
      gsap.set(select(".scene-one"), { autoAlpha: 0 });
      gsap.set(select(".scene-two"), { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(select(".github-track"), { x: () => window.innerWidth * 0.58 });
      gsap.set(select(".contact-stage .contact-scene"), { clipPath: "circle(0% at 50% 50%)" });
      gsap.set(select(".contact-stage .contact-title, .contact-stage .contact-copy, .contact-stage .contact-actions, .contact-stage .contact-email"), { y: 70, autoAlpha: 0 });
      gsap.set(select(".contact-stage .contact-strengths"), { x: 100, rotation: 2, autoAlpha: 0 });

      [".scene-one", ".scene-two"].forEach((scene) => {
        gsap.set(select(`${scene} .project-card`), { y: 100, rotation: 3, scale: 0.88 });
        gsap.set(select(`${scene} .scene-title-left`), { xPercent: -18 });
        gsap.set(select(`${scene} .scene-title-right`), { xPercent: 18 });
        gsap.set(select(`${scene} .scene-meta`), { x: -30 });
        gsap.set(select(`${scene} .scene-module`), {
          x: (_index, element) => Number((element as HTMLElement).dataset.direction) * 90,
          y: (index) => (index + 1) * 9,
        });
      });

      const githubDistance = () =>
        Math.max(githubTrack.scrollWidth - window.innerWidth + 160, 0);

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: viewport,
          start: "top top",
          end: () => `+=${window.innerHeight * 8}`,
          pin: true,
          scrub: 0.75,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const section =
              progress >= 0.84
                ? "contact"
                : progress >= 0.64
                  ? "github-projects"
                  : progress >= 0.2
                    ? "projects"
                    : "top";
            setActiveSection(section, progress);
            window.dispatchEvent(
              new CustomEvent("portfolio-section", {
                detail: section === "github-projects" ? "projects" : section,
              }),
            );
          },
        },
      });

      timeline
        .to(select(".master-progress"), { scaleX: 1, duration: 1 }, 0)
        .to(select(".hero-name"), { scale: 1.22, yPercent: -18, autoAlpha: 0.06, duration: 0.13 }, 0)
        .to(select(".hero-kicker"), { y: -24, autoAlpha: 0, duration: 0.07 }, 0.02)
        .to(select(".hero-reveal"), { autoAlpha: 1, y: 0, duration: 0.1 }, 0.06)
        .to(select(".hero-capabilities"), { x: 0, rotation: 0, duration: 0.1 }, 0.06)
        .to(track, { y: () => -window.innerHeight, duration: 0.07 }, 0.16)
        .to(select(".project-intro"), { autoAlpha: 0, scale: 1.18, duration: 0.05 }, 0.25)
        .to(select(".scene-one"), { autoAlpha: 1, duration: 0.05 }, 0.26)
        .to(select(".scene-one .project-card"), { y: 0, rotation: 0, scale: 1, duration: 0.1 }, 0.26)
        .to(select(".scene-one .scene-title-left, .scene-one .scene-title-right"), { xPercent: 0, duration: 0.12 }, 0.26)
        .to(select(".scene-one .scene-meta, .scene-one .scene-module"), { x: 0, y: 0, duration: 0.1 }, 0.27)
        .to(select(".scene-two"), { clipPath: "inset(0 0% 0 0)", duration: 0.11 }, 0.4)
        .to(select(".scene-two .project-card"), { y: 0, rotation: 0, scale: 1, duration: 0.11 }, 0.43)
        .to(select(".scene-two .scene-title-left, .scene-two .scene-title-right"), { xPercent: 0, duration: 0.12 }, 0.43)
        .to(select(".scene-two .scene-meta, .scene-two .scene-module"), { x: 0, y: 0, duration: 0.11 }, 0.44)
        .to(track, { y: () => -window.innerHeight * 2, duration: 0.08 }, 0.56)
        .to(select(".github-title"), { scale: 1.35, autoAlpha: 0.07, duration: 0.1 }, 0.66)
        .to(select(".github-track"), { x: () => -githubDistance(), duration: 0.16 }, 0.66)
        .to(select(".github-status"), { x: -40, autoAlpha: 0, duration: 0.06 }, 0.66)
        .to(track, { y: () => -window.innerHeight * 3, duration: 0.07 }, 0.81)
        .to(select(".contact-stage .contact-intro"), { scale: 1.25, autoAlpha: 0.08, duration: 0.1 }, 0.86)
        .to(select(".contact-stage .contact-scene"), { clipPath: "circle(150% at 50% 50%)", duration: 0.09 }, 0.87)
        .to(select(".contact-stage .contact-title, .contact-stage .contact-copy, .contact-stage .contact-actions, .contact-stage .contact-email"), { y: 0, autoAlpha: 1, duration: 0.08, stagger: 0.008 }, 0.9)
        .to(select(".contact-stage .contact-strengths"), { x: 0, rotation: 0, autoAlpha: 1, duration: 0.08 }, 0.91);

      const trigger = timeline.scrollTrigger;
      const cleanupLinks: Array<() => void> = [];

      Object.entries(sectionProgress).forEach(([href, progress]) => {
        document.querySelectorAll<HTMLAnchorElement>(`a[href="${href}"]`).forEach((link) => {
          const handleClick = (event: MouseEvent) => {
            event.preventDefault();
            if (!trigger) return;
            window.scrollTo({
              top: trigger.start + (trigger.end - trigger.start) * progress,
              behavior: "smooth",
            });
          };
          link.addEventListener("click", handleClick);
          cleanupLinks.push(() => link.removeEventListener("click", handleClick));
        });
      });

      const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
      resizeObserver.observe(githubTrack);

      return () => {
        resizeObserver.disconnect();
        cleanupLinks.forEach((cleanup) => cleanup());
        storySections.forEach((section) => {
          section.inert = false;
          section.removeAttribute("aria-hidden");
        });
        firstProjectScene.inert = false;
        secondProjectScene.inert = false;
      };
    });

        media.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => {
      gsap.fromTo(
        select(".master-progress"),
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
        });
      }, rootRef);

      dispose = () => {
        media.revert();
        context.revert();
      };
    };

    void setup();

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return (
    <div ref={rootRef} className="master-story relative">
      <div className="master-viewport relative overflow-hidden">
        <div className="master-track">
          <Hero />
          <FeaturedProjects />
          <Projects username="JakHer" limit={4} excludeNames={["car-diary", "all-time-detailing"]} />
          <Contact />
        </div>
        <div className="master-progress-shell pointer-events-none inset-x-0 bottom-0 z-[60] h-1 bg-black/15">
          <div className="master-progress bg-primary h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioStory;
