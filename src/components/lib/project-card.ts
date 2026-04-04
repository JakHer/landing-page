import type { GitHubRepo } from "./github";

export type ProjectCardModel = {
  id: number;
  title: string;
  summary: string;
  repoUrl: string;
  demoUrl: string | null;
  primaryTag: string | null;
  stars: number;
  updatedAt: string;
};

export const toProjectCardModel = (repo: GitHubRepo): ProjectCardModel => ({
  id: repo.id,
  title: repo.name,
  summary: repo.description ?? "No description provided.",
  repoUrl: repo.html_url,
  demoUrl: repo.homepage || null,
  primaryTag: repo.language,
  stars: repo.stargazers_count,
  updatedAt: repo.pushed_at,
});
