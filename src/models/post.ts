import { Author } from './author';
import { Thumbnail } from './thumbnail';
import { Category }  from './category';

export class Post {

  public id: String;
  public title: String;
  public slug: String;
  public content: String;
  public excerpt: String;
  public date: Date;
  public author: Author;
  public thumbnail: Thumbnail;
  public categories: Category[];
  public videoUrl: String;
  public linkWeb: String;
  public linkFile: String;

  static build({
    id,
    slug,
    date,
    title: { rendered: title },
    content: { rendered: content },
    excerpt: { rendered: excerpt },
    _embedded: {
      author: [author],
      'wp:featuredmedia': [thumbnail],
      'wp:term': [categories = []],
    },
    acf: {
      video_url,
      link_web,
      link_file,
    },
  }: any): Post  {

    try {
      let p = new Post;
      p.id = id;
      p.title = title;
      p.slug = slug;
      p.content = content;
      p.excerpt = excerpt;
      p.date = new Date(date);
      p.author = Author.build(author);
      p.thumbnail = Thumbnail.build(thumbnail);
      p.categories = categories.map(category => Category.build(category));
      p.videoUrl = video_url;
      p.linkWeb = link_web;
      p.linkFile = link_file;
      return p;

    } catch(e) {
      return null;

    }
  }

}
