export class Author {

  public name: String;
  public description: String;
  public avatar: String;
  public title: String;
  public email: String;
  public phoneNumber: String;
  public openingTimes: String;

  static build({
    name,
    description,
    acf: {
      avatar,
      title,
      email,
      phone_number,
      opening_times,
    },
  }: any): Author  {

    try {
      let a = new Author;
      a.name = name;
      a.description = description;
      a.avatar = avatar;
      a.title = title;
      a.email = email;
      a.phoneNumber = phone_number;
      a.openingTimes = opening_times;
      return a;

    } catch(e) {
      return null;

    }
  }

}
