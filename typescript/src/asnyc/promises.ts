import axios from "axios";

// 通用 fetch 工具函数
async function fetchJson<T>(url: string): Promise<T> {
  const res = await axios.get<T>(url);
  return res.data;
}

// 类型定义
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

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

// ✅ 链式写法
fetchJson<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((user) =>
    fetchJson<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    )
  )
  .then((posts) => console.log("链式写法 Posts:", posts))
  .catch((err) => console.error("链式 Error:", err));

// ✅ async/await 写法
async function showPosts() {
  try {
    const user = await fetchJson<User>(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const posts = await fetchJson<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    console.log("async/await 写法 Posts:", posts);
  } catch (err) {
    console.error("async/await Error:", err);
  }
}
showPosts();
