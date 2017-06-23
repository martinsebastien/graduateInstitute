export class Comment {

  public id: string;
  public parent: string;
  public name: string;
  public content: string;
  public date: Date;
  public status: string;

  static build(data: any): Comment {

    const {
      id,
      parent,
      author_name,
      date,
      content: { rendered: content },
      status,
    } = data;

    const c = new Comment;
    c.id = id;
    c.parent = parent;
    c.name = author_name;
    c.date = new Date(date);
    c.content = content;
    c.status = status;
    return c;

  }

}
