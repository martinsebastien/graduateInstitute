export default function author(data) {
  const { name = null, description = null } = data;
  const avatar = data.acf.avatar || null;
  const title = (data.acf && data.acf.title) || null;
  const email = (data.acf && data.acf.email) || null;
  const phoneNumber = (data.acf && data.acf.phone_number) || null;
  const openingTimes = (data.acf && data.acf.opening_times) || null;

  return { name, description, avatar, title, email, phoneNumber, openingTimes };
}
