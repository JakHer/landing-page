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

export const fetchGithubRepos = async (
  username: string,
): Promise<GitHubRepo[]> => {
  const repos: GitHubRepo[] = [];
  let page = 1;

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

  return repos;
};
