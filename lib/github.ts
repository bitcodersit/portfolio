import type { ProjectItem } from "@/types/site-content";

const founderUsers = ["rkanik", "sazal-das", "Ashfaqul-Asif"];

type GitHubRepo = {
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
  language: string | null;
  owner: { login: string };
  fork: boolean;
  updated_at: string;
};

async function fetchFounderRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return [];
    }

    return (await response.json()) as GitHubRepo[];
  } catch {
    return [];
  }
}

export async function getAllFounderProjects(): Promise<ProjectItem[]> {
  const allResults = await Promise.all(founderUsers.map(fetchFounderRepos));
  const merged = allResults.flat();

  const projects = merged
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      name: repo.name,
      summary: repo.description ?? "Open-source project by our founding team.",
      tech: repo.language ? [repo.language] : [],
      result: `GitHub stars: ${repo.stargazers_count}`,
      url: repo.html_url,
      owner: repo.owner.login,
      stars: repo.stargazers_count,
    }))
    .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0) || a.name.localeCompare(b.name));

  return projects;
}
