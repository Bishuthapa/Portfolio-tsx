// Batched, build-time GitHub star fetch. Called once from index.astro.
// No token needed for public repos (60 req/hr unauthenticated — fine at build).
// Set a GITHUB_TOKEN env var to raise the limit if you have many repos.

type StarMap = Record<string, number>;

const cache: StarMap = {};

export async function getStars(repos: (string | null)[]): Promise<StarMap> {
  const unique = [...new Set(repos.filter((r): r is string => !!r))];
  const token = import.meta.env.GITHUB_TOKEN;

  await Promise.all(
    unique.map(async (repo) => {
      if (repo in cache) return;
      try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'bishesh-portfolio',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        if (!res.ok) throw new Error(`${res.status}`);
        const data = await res.json();
        cache[repo] = data.stargazers_count ?? 0;
      } catch {
        cache[repo] = -1; // sentinel: fetch failed, hide badge
      }
    }),
  );

  return { ...cache };
}
