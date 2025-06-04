function mockFetch<T>(data: T, delay: number = 500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ mock 返回数据:", data);
      resolve(data);
    }, delay);
  });
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

const mockUser: User = {
  id: 1,
  name: "Alice",
};

// 模拟文章数据
const mockPosts: Post[] = [
  {
    id: 1,
    userId: 1,
    title: "Post One",
    body: "This is the body of Post One",
  },
  {
    id: 2,
    userId: 1,
    title: "Post Two",
    body: "This is the body of Post Two",
  },
];

// ✅ 链式写法（mock）
mockFetch<User>(mockUser)
  .then((user) => mockFetch<Post[]>(mockPosts))
  .then((posts) => console.log("链式写法 Posts:", posts))
  .catch((err) => console.error("链式 Error:", err));

// ✅ async/await 写法（mock）
async function showMockPosts() {
  try {
    const user = await mockFetch<User>(mockUser);
    const posts = await mockFetch<Post[]>(mockPosts);
    console.log("async/await 写法 Posts:", posts);
  } catch (err) {
    console.error("async/await Error:", err);
  }
}
showMockPosts();
