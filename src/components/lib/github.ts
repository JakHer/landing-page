export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
};

type CachedRepos = {
  cachedAt: number;
  repos: GitHubRepo[];
};

const CACHE_TTL = 1000 * 60 * 30;
const pendingRequests = new Map<string, Promise<GitHubRepo[]>>();

const cacheKey = (username: string) => `github-repos:${username.toLowerCase()}`;

const readCache = (username: string): CachedRepos | null => {
  try {
    const value = window.localStorage.getItem(cacheKey(username));
    if (!value) return null;
    const parsed = JSON.parse(value) as CachedRepos;
    return Array.isArray(parsed.repos) && Number.isFinite(parsed.cachedAt)
      ? parsed
      : null;
  } catch {
    return null;
  }
};

const writeCache = (username: string, repos: GitHubRepo[]) => {
  try {
    window.localStorage.setItem(
      cacheKey(username),
      JSON.stringify({ cachedAt: Date.now(), repos } satisfies CachedRepos),
    );
  } catch {
    // Storage can be unavailable in private or restricted browser contexts.
  }
};

const requestGithubRepos = async (
  username: string,
): Promise<GitHubRepo[]> => {
  const cached = readCache(username);
  if (cached && Date.now() - cached.cachedAt < CACHE_TTL) {
    return cached.repos;
  }

  const repos: GitHubRepo[] = [];
  let page = 1;

  try {
    while (true) {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&page=${page}`,
        {
          headers: { Accept: "application/vnd.github+json" },
        },
      );

      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status}`);
      }

      const batch = (await res.json()) as GitHubRepo[];
      repos.push(...batch);

      if (batch.length < 100) {
        break;
      }

      page += 1;
    }
  } catch (error) {
    if (cached) return cached.repos;
    throw error;
  }

  writeCache(username, repos);
  return repos;
};

export const fetchGithubRepos = (username: string): Promise<GitHubRepo[]> => {
  const key = username.toLowerCase();
  const pending = pendingRequests.get(key);
  if (pending) return pending;

  const request = requestGithubRepos(username).finally(() => {
    pendingRequests.delete(key);
  });
  pendingRequests.set(key, request);
  return request;
};
