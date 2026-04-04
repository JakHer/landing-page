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

const normalizeUrl = (value: string | null): string | null => {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};

export const toProjectCardModel = (repo: GitHubRepo): ProjectCardModel => ({
  id: repo.id,
  title: repo.name,
  summary: repo.description ?? "No description provided.",
  repoUrl: repo.html_url,
  demoUrl: normalizeUrl(repo.homepage),
  primaryTag: repo.language,
  stars: repo.stargazers_count,
  updatedAt: repo.pushed_at,
});
