import { useGithubRepos } from "../hooks/useGithubRepos";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

type ProjectsProps = {
  username: string;
  limit?: number;
  excludeNames?: string[];
};

const Projects = ({ username, limit = 6, excludeNames }: ProjectsProps) => {
  const { data: projects = [], isLoading, isFetching, isError } =
    useGithubRepos({ username, limit, excludeNames });

  const fallbackCard = (
    <article className="glass-card flex h-full min-h-64 flex-col justify-between rounded-[1.75rem] border border-black/10 bg-white/85 p-7">
      <div>
        <p className="text-primary-hover text-xs font-bold uppercase tracking-[0.2em]">GitHub profile</p>
        <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em]">Explore all repositories</h3>
        <p className="mt-4 leading-7 text-zinc-600">The live repository feed is temporarily unavailable. The complete source history is still one click away.</p>
      </div>
      <a href="https://github.com/JakHer" target="_blank" rel="noreferrer" className="bg-night mt-8 inline-flex w-fit rounded-full px-5 py-3 font-bold text-white">Open GitHub</a>
    </article>
  );

  const cards = isLoading
    ? Array.from({ length: limit }).map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))
    : projects.length > 0
      ? projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))
      : [fallbackCard];

  return (
    <section id="github-projects" aria-labelledby="projects-heading" className="relative scroll-mt-0">
      <div className="story-desktop">
        <div className="github-stage bg-canvas relative h-screen overflow-hidden">
          <div className="project-contours absolute inset-0 opacity-60" />
          <div className="absolute inset-x-0 top-28 mx-auto flex w-full max-w-6xl items-start justify-between px-6">
            <div>
              <p className="text-primary-hover text-xs font-bold uppercase tracking-[0.26em]">03 / Open source</p>
              <p className="mt-2 text-sm font-medium text-zinc-600">Additional work, loaded live from GitHub</p>
            </div>
            <p className="github-status text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
              {isError ? "Profile link available" : isFetching && !isLoading ? "Refreshing" : "github.com/JakHer"}
            </p>
          </div>

          <h2 id="projects-heading" className="github-title absolute inset-0 flex items-center justify-center whitespace-nowrap font-display text-[clamp(7rem,17vw,16rem)] font-bold tracking-[-0.085em] text-zinc-950">
            OPEN SOURCE
          </h2>

          <div className="github-track absolute top-[43%] flex items-stretch gap-6">
            {cards.map((card, index) => (
              <div key={index} className="w-[min(38vw,520px)] shrink-0">{card}</div>
            ))}
          </div>

        </div>
      </div>

      <div className="story-static bg-canvas py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-primary-hover text-sm font-bold uppercase tracking-[0.22em]">More work</p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.05em]">More from GitHub</h2>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">Additional repositories and experiments from my public profile.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">{cards}</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
