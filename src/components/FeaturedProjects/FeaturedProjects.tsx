const featuredProjects = [
  {
    title: "Car Diary",
    displayTitle: ["CAR", "DIARY"],
    eyebrow: "Vehicle ownership platform",
    summary:
      "One place for the complete story of a car — service, fuel, costs, mileage, and maintenance reminders.",
    caseStudy: [
      ["Problem", "Ownership data is scattered across invoices, notes, and mileage records."],
      ["Solution", "A connected workflow for vehicles, service, fuel, costs, and reminders."],
      ["Outcome", "A protected account-level timeline with clearer maintenance and cost decisions."],
    ],
    demoUrl: "https://you-car-diary.netlify.app/",
    repoUrl: "https://github.com/JakHer/car-diary",
    palette: {
      background: "#111216",
      card: "#1a1d23",
    },
    stack: ["React 19", "TypeScript", "Supabase", "TanStack Query"],
    modules: ["Vehicles", "Service", "Fuel", "Costs", "Reminders"],
  },
  {
    title: "All Time Detailing",
    displayTitle: ["ALL TIME", "DETAILING"],
    eyebrow: "Studio operations system",
    summary:
      "A connected workspace for bookings, customers, vehicles, services, photo documentation, and daily operations.",
    caseStudy: [
      ["Problem", "Studio planning gets fragmented between calendars, customer data, and job records."],
      ["Solution", "One operational UI connecting bookings, customers, vehicles, services, and photos."],
      ["Outcome", "Faster front-desk navigation across day, week, and month planning workflows."],
    ],
    demoUrl: "https://alltimedetailing.netlify.app/",
    repoUrl: "https://github.com/JakHer/all-time-detailing",
    palette: {
      background: "#15203a",
      card: "#1d2945",
    },
    stack: ["React 18", "TypeScript", "Supabase", "React Hook Form"],
    modules: ["Bookings", "Customers", "Vehicles", "Services", "Gallery"],
  },
] as const;

const featuredPalette = {
  accent: "#9ec5ff",
} as const;

type Project = (typeof featuredProjects)[number];

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M5 15 15 5M7 5h8v8" />
  </svg>
);

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap gap-3">
    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
      Live app <ArrowIcon />
    </a>
    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
      GitHub <ArrowIcon />
    </a>
  </div>
);

const SystemCard = ({ project }: { project: Project }) => (
  <div className="w-[min(42vw,520px)] rounded-[2rem] border border-white/15 p-7 shadow-[0_35px_100px_rgba(0,0,0,0.3)] backdrop-blur-md max-lg:w-full" style={{ backgroundColor: `${project.palette.card}e6` }}>
    <div className="flex items-center justify-between">
      <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">Product case study</span>
      <span className="h-2.5 w-2.5 rounded-full shadow-[0_0_20px_currentColor]" style={{ backgroundColor: featuredPalette.accent, color: featuredPalette.accent }} />
    </div>
    <dl className="mt-5 divide-y divide-white/10 border-y border-white/10">
      {project.caseStudy.map(([label, value]) => (
        <div key={label} className="grid grid-cols-[0.55fr_1.45fr] gap-4 py-3.5">
          <dt className="text-xs font-bold uppercase tracking-[0.12em] text-white/75">{label}</dt>
          <dd className="text-sm font-medium leading-5 text-white/85">{value}</dd>
        </div>
      ))}
    </dl>
    <div className="mt-5 flex flex-wrap gap-2">
      {project.stack.map((technology) => (
        <span key={technology} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/70">{technology}</span>
      ))}
    </div>
  </div>
);

const ProjectScene = ({ project, number, sceneClass }: { project: Project; number: number; sceneClass: string }) => {
  const positions = [[8, 36], [12, 69], [78, 31], [82, 62], [69, 78]];

  return (
    <div className={`project-scene ${sceneClass} pointer-events-none absolute inset-0 overflow-hidden text-white`}>
      <div className="scene-background absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: project.palette.background }} />
        <div className="project-contours absolute inset-0 opacity-35" />

        <div className="scene-title-left absolute inset-x-0 top-[12vh] whitespace-nowrap font-display text-[clamp(6rem,15vw,14rem)] font-bold leading-[0.7] tracking-[-0.08em] text-white/[0.055]">
          {project.displayTitle[0]} {project.displayTitle[0]}
        </div>
        <div className="scene-title-right absolute inset-x-0 bottom-[9vh] whitespace-nowrap text-right font-display text-[clamp(6rem,15vw,14rem)] font-bold leading-[0.7] tracking-[-0.08em] text-white/[0.055]">
          {project.displayTitle[1]} {project.displayTitle[1]}
        </div>
      </div>

      <div className="absolute inset-x-0 top-28 mx-auto flex w-full max-w-6xl items-start justify-between px-6">
        <div className="scene-meta">
          <p className="text-xs font-bold uppercase tracking-[0.26em]" style={{ color: featuredPalette.accent }}>0{number} / Selected work</p>
          <p className="mt-2 text-sm font-medium text-white/55">{project.eyebrow}</p>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">Scroll to transform</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="project-card">
          <SystemCard project={project} />
        </div>
      </div>

      {project.modules.map((module, index) => {
        const [left, top] = positions[index];
        const direction = index % 2 === 0 ? -1 : 1;
        return (
          <div key={module} data-direction={direction} className="scene-module absolute rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/65 backdrop-blur-sm" style={{ left: `${left}%`, top: `${top}%` }}>
            {module}
          </div>
        );
      })}

      <div className="scene-footer pointer-events-auto absolute inset-x-0 bottom-10 mx-auto flex w-full max-w-6xl items-end justify-between gap-8 px-6">
        <div className="max-w-md">
          <h3 className="font-display text-5xl font-bold tracking-[-0.055em]">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/60">{project.summary}</p>
        </div>
        <ProjectLinks project={project} />
      </div>
    </div>
  );
};

const MobileProject = ({ project, index }: { project: Project; index: number }) => (
  <article className="overflow-hidden rounded-[2rem] p-6 text-white shadow-[0_28px_80px_rgba(24,24,27,0.16)] sm:p-8" style={{ backgroundColor: project.palette.background }}>
    <p className="text-night-accent text-xs font-bold uppercase tracking-[0.22em]">0{index + 1} / {project.eyebrow}</p>
    <h3 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em]">{project.title}</h3>
    <p className="mt-4 leading-7 text-white/65">{project.summary}</p>
    <div className="mt-8"><SystemCard project={project} /></div>
    <div className="mt-7"><ProjectLinks project={project} /></div>
  </article>
);

const FeaturedProjects = () => {
  return (
    <section id="projects" aria-label="Selected projects" className="section-shell relative scroll-mt-0">
      <div className="project-desktop">
        <div className="project-stage bg-canvas relative h-screen overflow-hidden">
          <div className="project-intro absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <p className="text-primary-hover text-sm font-bold uppercase tracking-[0.3em]">Selected work / 02</p>
              <h2 className="mt-5 font-display text-[clamp(5rem,12vw,11rem)] font-bold leading-[0.78] tracking-[-0.085em]">BUILT TO<br /><span className="text-primary">BE USED.</span></h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-zinc-600">Two real products. Scroll to move through the systems behind them.</p>
              <div className="mx-auto mt-10 h-14 w-px overflow-hidden bg-black/10"><span className="scroll-line bg-primary block h-1/2 w-full" /></div>
            </div>
          </div>

          <ProjectScene project={featuredProjects[0]} number={1} sceneClass="scene-one" />
          <ProjectScene project={featuredProjects[1]} number={2} sceneClass="scene-two" />

        </div>
      </div>

      <div className="project-static mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
        <p className="text-primary-hover text-sm font-bold uppercase tracking-[0.24em]">Selected work / 02</p>
        <h2 className="mt-4 font-display text-5xl font-bold leading-[0.9] tracking-[-0.06em]">Products,<br />not just pages.</h2>
        <p className="mt-5 max-w-lg leading-7 text-zinc-600">Two real applications built around real workflows and maintainable systems.</p>
        <div className="mt-12 space-y-8">
          {featuredProjects.map((project, index) => <MobileProject key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
