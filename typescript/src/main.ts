// main.ts
import { fetchJson, User, Post } from "./real";

fetchJson<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((user) =>
    fetchJson<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    )
  )
  .then((posts) => {
    const firstPost = posts[0];
    console.log("第一条 Post:----->>\n", firstPost);
  })
  .catch((err) => console.error("链式 Error:", err));
