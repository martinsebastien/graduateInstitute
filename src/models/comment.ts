export class Comment {

  public id: string;
  public parent: string;
  public name: string;
  public content: string;
  public date: Date;

  static build(data: any): Comment {

    const {
      id,
      parent,
      author_name,
      date,
      content: { rendered: content },
    } = data;

    const c = new Comment;
    c.id = id;
    c.parent = parent;
    c.name = author_name;
    c.date = new Date(date);
    c.content = content;
    return c;

  }

}
