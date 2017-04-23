export class Category {

  public id: String;
  public name: String;
  public slug: String;
  public description?: String;

  static build(data: any): Category  {
    if (!data) return null;

    // Get value
    const {
      id,
      name,
      slug,
      description,
    } = data;

    // Create category
    const c = new Category;
    c.id = id;
    c.name = name;
    c.slug = slug;
    c.description = description;
    return c;

  }

}
