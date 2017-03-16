export default function thumbnail(data) {
  const { alt_text: alt = '', source_url: src = '' } = data;
  return { alt, src };
}
