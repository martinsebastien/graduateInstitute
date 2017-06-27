export class Web {

  public src: String;
  public title: String;

  static build(link_web: string): Web {
    if (!link_web) return null;

    // Create File
    const t = new Web;
    t.src = link_web;
    t.title = this.findTitle(link_web) || link_web;
    return t;
  }

  static findTitle(src) {
    return src.substr(src.lastIndexOf('/') + 1, (src.lastIndexOf('.') - src.lastIndexOf('/')) - 1);
  }

}
