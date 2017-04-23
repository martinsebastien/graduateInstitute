export class Thumbnail {

  public src: String;
  public alt?: String;

  static build(data: any): Thumbnail {
    if (!data) return null;

    // Get value
    const {
      source_url,
      alt_text,
    } = data;

    // Create thumbnail
    const t = new Thumbnail;
    t.src = source_url;
    t.alt = alt_text;
    return t;

  }

}
