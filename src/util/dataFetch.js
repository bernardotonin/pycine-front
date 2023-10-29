export async function getFilmes() {
  const res = await fetch(`http://localhost:8080/movie/list`);
  const text = await res.json();
  if (res.ok) {
    return text;
  } else {
    throw new Error(text);
  }
}
