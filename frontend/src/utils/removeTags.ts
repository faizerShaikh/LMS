export default function removeTags(str: string) {
  if (!str) return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}
