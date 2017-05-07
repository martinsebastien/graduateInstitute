import { Author } from './author';
import { Thumbnail } from './thumbnail';
import { Category }  from './category';
import { Comment } from './comment';

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
  public comments: Comment[];
  public videoUrl: String;
  public linkWeb: String;
  public linkFile: String;
  public commentOpen: boolean;
  public json: any;

  static build(data: any): Post  {

    const {
      id,
      slug,
      date,
      comment_status,
      title: { rendered: title },
      content: { rendered: content },
      excerpt: { rendered: excerpt },
      _embedded: {
        replies = [],
        author: authors = [],
        'wp:featuredmedia': featuredmedia = [],
        'wp:term': terms = [],
      },
      acf: {
        video_url,
        link_web,
        link_file,
      },
    } = data;

    const [author] = authors;
    const [thumbnail] = featuredmedia;
    const [categories = []] = terms;
    const [comments = []] = replies;

    const p = new Post;
    p.json = data;
    p.id = id;
    p.title = title;
    p.slug = slug;
    p.content = content;
    p.excerpt = excerpt;
    p.date = new Date(date);
    p.author = Author.build(author);
    p.thumbnail = Thumbnail.build(thumbnail);
    p.categories = categories.map(category => Category.build(category));
    p.comments = comments.map(comment => Comment.build(comment));
    p.videoUrl = video_url;
    p.linkWeb = link_web;
    p.linkFile = link_file;
    p.commentOpen = comment_status == 'open';
    return p;

  }

}
