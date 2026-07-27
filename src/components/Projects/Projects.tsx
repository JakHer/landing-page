import { useGithubRepos } from "../hooks/useGithubRepos";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

type ProjectsProps = {
  username: string;
  limit?: number;
};

const Projects = ({ username, limit = 6 }: ProjectsProps) => {
  const {
    data: projects = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGithubRepos({ username, limit });

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-shell scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="reveal-up flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
              Recent work
            </p>
            <h2
              id="projects-heading"
              className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] md:text-5xl"
            >
              Selected Projects
            </h2>
            <p className="mt-4 max-w-[62ch] text-zinc-700">
              A focused selection of shipped interfaces and experiments. Every
              card links to the source, with a live build where one is available.
            </p>
          </div>

          <div className="glass-card rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm text-zinc-700">
            Live from GitHub. Updated automatically.
          </div>
        </div>

        {isLoading && (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {Array.from({ length: limit }).map((_, idx) => (
              <ProjectCardSkeleton key={idx} />
            ))}
          </div>
        )}

        {!isLoading && isFetching && (
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-zinc-500">
            Refreshing projects...
          </p>
        )}

        {isError && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
            <p className="text-red-700">
              {(error as Error)?.message || "Failed to load projects."}
            </p>
            <button
              onClick={() => refetch()}
              className="mt-4 rounded-xl border border-red-300 px-4 py-2 text-sm text-red-700 transition hover:bg-red-100"
            >
              Try again
            </button>
          </div>
        )}

        {!isLoading && !isError && projects.length === 0 && (
          <p className="mt-8 text-zinc-400">No projects available right now.</p>
        )}

        {!isLoading && !isError && projects.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
