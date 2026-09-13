import { useEffect, useMemo, useState } from "react";
import { fetchGithubRepos, type GitHubRepo } from "../lib/github";
import { toProjectCardModel, type ProjectCardModel } from "../lib/project-card";

type UseGithubReposParams = {
  username: string;
  limit?: number;
  excludeNames?: string[];
};

export const useGithubRepos = ({
  username,
  limit = 6,
  excludeNames = [],
}: UseGithubReposParams) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isFetching, setIsFetching] = useState(Boolean(username));
  const [isError, setIsError] = useState(false);
  const excludedKey = excludeNames.join("\u0000");

  useEffect(() => {
    if (!username) return;

    let active = true;

    void fetchGithubRepos(username)
      .then((response) => {
        if (active) setRepos(response);
      })
      .catch(() => {
        if (active) setIsError(true);
      })
      .finally(() => {
        if (active) setIsFetching(false);
      });

    return () => {
      active = false;
    };
  }, [username]);

  const data = useMemo<ProjectCardModel[]>(() => {
    const excluded = new Set(excludedKey.split("\u0000").filter(Boolean));

    return repos
      .filter((repo) => !repo.fork)
      .filter((repo) => !excluded.has(repo.name))
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
      .map(toProjectCardModel);
  }, [excludedKey, limit, repos]);

  return {
    data,
    isLoading: isFetching && repos.length === 0,
    isFetching,
    isError,
  };
};
