export class Web {

  public src: String;
  public title: String;

  static build(link_web: string): Web {
    if (!link_web) return null;
    console.log(link_web)

    // Create File
    const t = new Web;
    t.src = link_web;
    t.title = link_web.substr(link_web.lastIndexOf('/') + 1, (link_web.lastIndexOf('.') - link_web.lastIndexOf('/')) - 1);
    return t;

  }

}
