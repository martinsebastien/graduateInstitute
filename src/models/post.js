/* eslint no-underscore-dangle: "off" */
import generateAuthor from './author';
import generateThumbnail from './thumbnail';
import generateCategory from './category';

export default function post(data) {
  const { id } = data;
  const title = data.title.rendered;
  const content = data.content.rendered;
  const excerpt = data.excerpt.rendered;
  const date = new Date(data.date);
  const author = generateAuthor((data._embedded.author && data._embedded.author[0]) || {});
  const thumbnail = generateThumbnail((data._embedded['wp:featuredmedia'] && data._embedded['wp:featuredmedia'][0]) || {});
  const categories = ((data._embedded['wp:term'] && data._embedded['wp:term'][0]) || []).map(generateCategory);

  return { id, categories, title, content, excerpt, date, author, thumbnail };
}
