export class Category {

  public id: String;
  public name: String;
  public slug: String;
  public description?: String;

  static build({ id, name, slug, description }: any): Category  {

    try {
      let c = new Category;
      c.id = id;
      c.name = name;
      c.slug = slug;
      c.description = description;
      return c;

    } catch(e) {
      return null;

    }
  }

}
