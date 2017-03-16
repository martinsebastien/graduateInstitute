const noAvatar = 'noAvatar.png';

export default function author(data) {
  const { name = 'Unknown', description = '' } = data;
  const avatar = data.avatar_urls[96] || data.avatar_urls[48] || data.avatar_urls[24] || noAvatar;
  const title = 'Academic Adviser, Direction of Studies';
  const openingTimes = 'Monday - Friday: 09:00 - 12:00 and 14:00 - 17:00';

  return { name, title, openingTimes, description, avatar };
}
