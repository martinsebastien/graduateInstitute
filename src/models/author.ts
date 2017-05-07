export class Author {

  public name: String;
  public description: String;
  public avatar: String;
  public title: String;
  public email: String;
  public phoneNumber: String;
  public openingTimes: String;

  static build(data: any): Author  {
    if (!data) return null;

    // Get Value
    const {
      name,
      description,
      acf: {
        avatar,
        title,
        email,
        phone_number,
        opening_times,
      },
    } = data;

    // Author object
    const a = new Author;
    a.name = name;
    a.description = description;
    a.avatar = avatar || 'assets/noavatar.png';
    a.title = title;
    a.email = email;
    a.phoneNumber = phone_number;
    a.openingTimes = opening_times;
    return a;

  }

  hasNoInformations(): boolean {
    return !this.title && !this.email && !this.phoneNumber && !this.openingTimes;
  }

}
