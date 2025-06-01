import axios from "axios";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await axios.get<T>(url);
  return res.data;
}

interface User {
  id: number;
  name: string;
}
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface A {
  valueA: string;
}
interface B {
  valueB: number;
}

// ✅ 链式写法
fetchJson<User>("https://api.example.com/user/1")
  .then((user) => fetchJson<Post[]>(`/posts?userId=${user.id}`))
  .then((posts) => console.log(posts))
  .catch((err) => console.error("链式 Error:", err));

// ✅ async/await 写法替代原来的链式写法
async function showPosts() {
  try {
    const user = await fetchJson<User>("https://api.example.com/user/1");
    const posts = await fetchJson<Post[]>(`/posts?userId=${user.id}`);
    console.log(posts);
  } catch (err) {
    console.error("async/await Error:", err);
  }
}

showPosts();

// ✅ 并行调用
async function main() {
  // 串行
  const a = await fetchJson<A>("/A");
  const b = await fetchJson<B>("/B");

  // 并行
  const [a2, b2] = await Promise.all([fetchJson<A>("/A"), fetchJson<B>("/B")]);
}
main();
