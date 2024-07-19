export default async function getAllUSers() {
  const res = await fetch("jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("failed to fetch data");
  return res.json;
}
