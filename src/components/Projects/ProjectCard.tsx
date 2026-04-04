import type { ProjectCardModel } from "../lib/project-card";

type ProjectCardProps = {
  project: ProjectCardModel;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-3 text-zinc-300">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
        {project.primaryTag && (
          <span className="rounded-full border border-zinc-700 px-3 py-1">
            {project.primaryTag}
          </span>
        )}
        <span className="rounded-full border border-zinc-700 px-3 py-1">
          ★ {project.stars}
        </span>
        <span className="rounded-full border border-zinc-700 px-3 py-1">
          Updated {formatDate(project.updatedAt)}
        </span>
      </div>

      <div className="mt-6 flex gap-4">
        <a
          aria-label={`Open ${project.title} repository on GitHub`}
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-white underline decoration-zinc-500 underline-offset-4 hover:decoration-zinc-200"
        >
          View on GitHub
        </a>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-semibold text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:text-white"
          >
            Live demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
