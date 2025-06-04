import axios from "axios";
export async function fetchJson<T>(url: string): Promise<T> {
  const res = await axios.get<T>(url);
  return res.data;
}

export interface User {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

fetchJson<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((user) => {
    console.log("User --->:", user.name);
    return fetchJson<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
  })
  .then((posts) => {
    const firstPost = posts[0];
    console.log("第一条 Post:----->>\n", firstPost);
  })
  .catch((err) => console.error("链式 Error:", err));

async function main() {
  try {
    const user = await fetchJson<User>(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log("User --->:", user.name);

    const posts = await fetchJson<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const firstPost = posts[0];
    console.log("第一条 Post:----->>\n", firstPost);
  } catch (err) {
    console.error("错误发生:", err);
  }
}
