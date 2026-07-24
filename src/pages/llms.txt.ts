import { getCollection } from 'astro:content';
import { SITE, PROJECTS } from '../config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const base = (context.site ?? new URL(SITE.url)).toString().replace(/\/$/, '');
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const body = `# ${SITE.name}

> ${SITE.description}

## Contact
- Email: ${SITE.email}
- GitHub: https://github.com/${SITE.githubUser}

## Projects
${PROJECTS.map((p) => `- ${p.name}: ${p.desc} (${p.href})`).join('\n')}

## Writing
${posts.map((p) => `- ${p.data.title}: ${base}/blog/${p.id}/`).join('\n') || '- (no posts yet)'}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
