import type { CSSProperties } from "react";
import type { ProjectCardModel } from "../lib/project-card";

type ProjectCardProps = {
  project: ProjectCardModel;
  index: number;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const animationStyle = {
    animationDelay: `${0.08 * Math.min(index, 6)}s`,
  } satisfies CSSProperties;

  return (
    <article
      className="glass-card reveal-up shine-on-hover rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 md:p-7"
      style={animationStyle}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
          {project.title}
        </h3>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          Repo
        </span>
      </div>

      <p className="mt-3 text-zinc-300">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
        {project.primaryTag && (
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            {project.primaryTag}
          </span>
        )}
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
          Starred {project.stars}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
          Updated {formatDate(project.updatedAt)}
        </span>
      </div>

      <div className="mt-6 flex gap-4">
        <a
          aria-label={`Open ${project.title} repository on GitHub`}
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-white underline decoration-zinc-500 underline-offset-4 transition hover:decoration-zinc-200"
        >
          View on GitHub
        </a>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Live demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
