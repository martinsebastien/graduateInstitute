export class File {

  public src: String;
  public title: String;

  static build(link_file: string): File {
    if (!link_file) return null;

    // Create File
    const t = new File;
    t.src = link_file;
    t.title = link_file.substr(link_file.lastIndexOf('/') + 1, (link_file.lastIndexOf('.') - link_file.lastIndexOf('/')) - 1);
    return t;

  }

}
