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
      className="glass-card reveal-up shine-on-hover flex h-full flex-col rounded-[1.75rem] border border-black/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-blue-500/35 md:p-7"
      style={animationStyle}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-950">
          {project.title}
        </h3>
        <span className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${project.demoUrl ? "border-blue-500/25 bg-blue-50 text-blue-700" : "border-black/10 text-zinc-500"}`}>
          {project.demoUrl
            ? "Live project"
            : index === 0
              ? "Latest work"
              : "Source"}
        </span>
      </div>

      <p className="mt-3 text-zinc-700">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-600">
        {project.primaryTag && (
          <span className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1">
            {project.primaryTag}
          </span>
        )}
        <span className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1">
          Updated {formatDate(project.updatedAt)}
        </span>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Open live project
          </a>
        )}

        <a
          aria-label={`Open ${project.title} repository on GitHub`}
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          View source
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
