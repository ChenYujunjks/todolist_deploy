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

// ✅ 链式写法，只看这个！
fetchJson<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((user) =>
    fetchJson<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    )
  )
  .then((posts) => console.log("链式写法 Posts:", posts))
  .catch((err) => console.error("链式 Error:", err));
