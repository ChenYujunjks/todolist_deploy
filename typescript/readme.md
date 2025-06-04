## Typescript 泛型和 Promise 学习

### 🚨 原因：箭头函数的**隐式 return** 规则只对**单表达式**成立

这是个很经典、**很容易误解**的 JavaScript/TypeScript 行为，背后其实是语法差异：

---

#### ✅ 没有 `{}` 的箭头函数是“表达式体” —— 自动 return

```ts
.then((user) =>
  fetchJson<Post[]>(...) // ✅ 自动 return 这个 Promise
)
```

上面这个是**表达式形式**的箭头函数，等价于：

```ts
.then(function(user) {
  return fetchJson<Post[]>(...);
})
```

---

#### ❌ 加了 `{}` 的箭头函数是“代码块体” —— 不自动 return

```ts
.then((user) => {
  fetchJson<Post[]>(...); // ❌ 没有写 return，这个函数默认返回 undefined
})
```

等价于：

```ts
.then(function(user) {
  fetchJson<Post[]>(...);
  return undefined;
})
```

---

### ✅ 如何修复：显式加 `return`

```ts
.then((user) => {
  console.log("user", user);
  return fetchJson<Post[]>(...); // ✅ 显式 return
})
```

---

### 🧂 箭头函数中的隐式 return 就是语法糖

举个等价转换：

```ts
// 简写（语法糖）
const getData = () => fetch("/api");

// 等价于：
const getData = function () {
  return fetch("/api");
};
```

是不是“糖”？看你把 `()` 后面换成 `{}` 就立刻打回原形 😂

---

### 🍬 再看你的例子对比：

#### ✅ 自动 return（语法糖）

```ts
.then(user => fetchJson<Post[]>(...))
```

#### ❌ 没有 return（块体，没有语法糖）

```ts
.then(user => {
  fetchJson<Post[]>(...); // ❌ 你必须手写 return
})
```

---

### 🧠 理解建议：

你可以这样记：

> **箭头函数写法分两种**：
>
> 1. 表达式体（`()` 后直接写表达式） = 有语法糖，自动 return
> 2. 代码块体（`()` 后跟 `{}`） = 没语法糖，必须手写 return

---

### 🧪 Bonus 你可以亲自试试这个：

```ts
const hello1 = () => "hi";
const hello2 = () => {
  "hi";
}; // ❌ undefined
const hello3 = () => {
  return "hi";
}; // ✅ "hi"

console.log(hello1()); // "hi"
console.log(hello2()); // undefined ❗（被坑了）
console.log(hello3()); // "hi"
```

> 为什么 `hello2()` 是 `undefined`？因为你用了 `{}`，但没有 return，所以它是语法块，不返回值！
