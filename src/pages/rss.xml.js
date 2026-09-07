import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_DESC } from '../data/site';

export async function GET(context) {
  const posts = (await getCollection('news')).filter((p) => !p.data.draft);
  return rss({
    title: SITE_NAME,
    description: SITE_DESC,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((p) => ({
        title: p.data.title,
        pubDate: p.data.date,
        description: p.data.summary,
        link: `/news/${p.id}/`,
      })),
  });
}
