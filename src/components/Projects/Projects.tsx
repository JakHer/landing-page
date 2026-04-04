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
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2
          id="projects-heading"
          className="font-display text-3xl font-bold md:text-4xl"
        >
          Selected Projects
        </h2>
        <p className="mt-4 max-w-[65ch] text-zinc-300">
          Real repositories pulled directly from my GitHub profile.
        </p>

        {isLoading && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {Array.from({ length: limit }).map((_, idx) => (
              <ProjectCardSkeleton key={idx} />
            ))}
          </div>
        )}

        {!isLoading && isFetching && (
          <p className="mt-4 text-xs text-zinc-500">Refreshing projects…</p>
        )}

        {isError && (
          <div className="mt-8 rounded-xl border border-red-900 bg-red-950/30 p-4">
            <p className="text-red-300">
              {(error as Error)?.message || "Failed to load projects."}
            </p>
            <button
              onClick={() => refetch()}
              className="mt-3 rounded-lg border border-red-700 px-4 py-2 text-sm text-red-200 hover:bg-red-900/30"
            >
              Try again
            </button>
          </div>
        )}

        {!isLoading && !isError && projects.length === 0 && (
          <p className="mt-8 text-zinc-400">No projects available right now.</p>
        )}

        {!isLoading && !isError && projects.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
