const noAvatar = 'noAvatar.png';

export default function author(data) {
  const { name = 'Unknown', description = '' } = data;
  const avatar = data.acf.avatar || noAvatar;
  const phoneNumber = data.acf.phone_number;
  const slug = data.slug;
  const title = 'Academic Adviser, Direction of Studies';
  const openingTimes = 'Monday - Friday: 09:00 - 12:00 and 14:00 - 17:00';

  return { name, title, openingTimes, description, avatar, phoneNumber, slug };
}
