import { getCollection } from 'astro:content';
import { SITE } from '../config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const base = (context.site ?? new URL(SITE.url)).toString().replace(/\/$/, '');
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: SITE.name,
    home_page_url: `${base}/`,
    feed_url: `${base}/feed.json`,
    description: SITE.description,
    items: posts.map((post) => ({
      id: `${base}/blog/${post.id}/`,
      url: `${base}/blog/${post.id}/`,
      title: post.data.title,
      summary: post.data.description,
      date_published: post.data.date.toISOString(),
      tags: post.data.tags,
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
