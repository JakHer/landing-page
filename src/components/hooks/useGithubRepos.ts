import { useQuery } from "@tanstack/react-query";
import { fetchGithubRepos, type GitHubRepo } from "../lib/github";
import { toProjectCardModel, type ProjectCardModel } from "../lib/project-card";

type UseGithubReposParams = {
  username: string;
  limit?: number;
};

export const useGithubRepos = ({ username, limit = 6 }: UseGithubReposParams) =>
  useQuery<GitHubRepo[], Error, ProjectCardModel[]>({
    queryKey: ["github-repos", username, limit],
    queryFn: () => fetchGithubRepos(username),
    enabled: Boolean(username),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    retry: 1,
    select: (repos) =>
      repos
        .filter((repo) => !repo.fork)
        .filter(
          (repo) => repo.description && repo.description.trim().length > 0,
        )
        .filter((repo) => repo.stargazers_count > 0 || repo.homepage)
        .sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return (
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          );
        })
        .slice(0, limit)
        .map(toProjectCardModel),
  });
