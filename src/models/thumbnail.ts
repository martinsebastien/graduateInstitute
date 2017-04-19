export class Thumbnail {

  public src: String;
  public alt?: String;

  static build({ source_url, alt_text }: any): Thumbnail {

    try {
      let t = new Thumbnail;
      t.src = source_url;
      t.alt = alt_text;
      return t;

    } catch(e) {
      return null;

    }
  }

}
