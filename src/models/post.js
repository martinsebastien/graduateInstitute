/* eslint no-underscore-dangle: "off" */
import generateAuthor from './author';
import generateThumbnail from './thumbnail';
import generateCategory from './category';

export default function post(data) {
  const { id } = data;
  const title = data.title.rendered;
  const slug = data.slug;
  const content = data.content.rendered;
  const excerpt = data.excerpt.rendered;
  const date = new Date(data.date);
  const author = generateAuthor((data._embedded.author && data._embedded.author[0]) || {});
  const thumbnail = generateThumbnail((data._embedded['wp:featuredmedia'] && data._embedded['wp:featuredmedia'][0]) || {});
  const categories = ((data._embedded['wp:term'] && data._embedded['wp:term'][0]) || []).map(generateCategory);
  const videoUrl = (data.acf && data.acf.video_url) || null;
  const linkWeb = (data.acf && data.acf.link_web) || null;
  const linkFile = (data.acf && data.acf.link_file) || null;

  return {
    id,
    categories,
    title,
    slug,
    content,
    excerpt,
    date,
    author,
    thumbnail,
    videoUrl,
    linkWeb,
    linkFile,
  };
}
