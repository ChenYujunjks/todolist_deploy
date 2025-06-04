## 📘 TS 中 Promise 与 async 的关键知识整理

### ✅ 一、Promise 是什么？

- `Promise` 是一个异步操作的封装对象，代表将来某个值的返回结果。
- 它有 `.then()`、`.catch()`、`.finally()` 三个方法。

#### ✅ 基本用法：

```ts
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 1000);
});

p.then((value) => console.log(value)); // 1 秒后输出 "done"
```

---

### ✅ 二、async 函数和 Promise 的关系

#### ✅ 特性：

- `async function` 自动返回一个 Promise（即使你没有写 `return`）。
- `await` 用于等待另一个 Promise 的结果。

#### ✅ 示例：

```ts
async function sayHello() {
  return "hello";
}

sayHello().then((res) => console.log(res)); // 输出 "hello"
```

等价于：

```ts
function sayHello() {
  return Promise.resolve("hello");
}
```

---

### ✅ 三、没有写 `return` 的 async 函数会返回什么？

```ts
async function test() {
  // 没有 return
}

test().then((val) => console.log(val)); // 输出 undefined
```

---

### ✅ 四、只有 Promise 才有 `.then()` 方法

#### ✅ `.then()` 是 Promise 的方法，不是一般函数或对象的方法：

```ts
function normalFn() {
  return "hi";
}

const result = normalFn();
// result.then(...) ❌ 错误：不是 Promise
```

---

### ✅ 五、在 TypeScript 中使用 Promise 的泛型

#### ✅ 泛型语法：

```ts
function fetchJson<T>(url: string): Promise<T> {
  return axios.get<T>(url).then((res) => res.data);
}
```

- `<T>` 是泛型，占位符，代表返回的数据结构。
- `Promise<T>` 表示：这个异步函数最终会**返回一个类型为 `T` 的值**。

#### ✅ 调用示例：

```ts
interface User {
  id: number;
  name: string;
}

fetchJson<User>("https://example.com/user/1").then((user) => {
  console.log("第一条 User:----->>\n", user[1].id);
  // user 类型是 User，拥有 id 和 name 属性
});
```

---

### ✅ 六、链式 Promise 的执行流程

```ts
fetchJson<User>("url")
  .then((user) => fetchJson<Post[]>(`url?userId=${user.id}`))
  .then((posts) => {
    console.log(posts[0]);
  });
```

#### ✅ 解释：

1. 第一个 `.then()` 拿到 `User`。
2. 返回另一个 `Promise<Post[]>`。
3. 第二个 `.then()` 拿到的是这个 `Post[]`。
4. 整个链条每次的 `.then()` 接收的都是**上一个 Promise 的返回值**。

---

### 🧠 总结一句话

> 在 TypeScript 中，async 函数的返回类型始终是 `Promise<T>`，你可以通过泛型显式指定这个 `T` 是什么类型，从而让类型系统帮你自动推断、提示、校验。

---

### 📌 推荐你自己写写的练习（练一下泛型 + async）

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodo(id: number): Promise<Todo> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
}

fetchTodo(1).then((todo) => {
  console.log(todo.title); // 会有自动补全提示！
});
```
