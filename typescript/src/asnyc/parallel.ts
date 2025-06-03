function fakeFetch<T>(data: T, delay: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`返回数据:`, data);
      resolve(data);
    }, delay);
  });
}

// 模拟的数据类型
interface Comment {
  id: number;
  content: string;
}
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

// 并行 vs 串行测试
async function main() {
  console.log("👉 串行调用开始");
  const comment = await fakeFetch<Comment>({ id: 1, content: "Hello" }, 1000);
  const todo = await fakeFetch<Todo>(
    { id: 1, task: "Do homework", completed: false },
    1000
  );
  console.log("串行调用结束：", comment, todo);

  console.log("\n👉 并行调用开始");
  const [comment2, todo2] = await Promise.all([
    fakeFetch<Comment>({ id: 2, content: "World" }, 1000),
    fakeFetch<Todo>({ id: 2, task: "Sleep", completed: true }, 1000),
  ]);
  console.log("并行调用结束：", comment2, todo2);
}

main();
