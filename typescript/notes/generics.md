## 🔍 `:` 和 `=` 在 TypeScript 里的区别

### ✅ `:` 是**类型注解**（type annotation）

表示：**这个变量的类型应该是 `ApiResponse<User>`**

```ts
const res: ApiResponse<User>;
```

这就像在告诉 TypeScript 编译器：

> “我**承诺**变量 `res` 的结构会符合 `ApiResponse<User>` 的定义。”

---

### ✅ `=` 是**赋值操作符**

表示：**给变量 `res` 实际赋一个值**

```ts
= {
  code: 0,
  data: { id: 1, name: "Alice" },
  message: "ok"
}
```

这段对象字面量的结构就是 `ApiResponse<User>` 类型的值。

---

### 🧠 合起来看：

```ts
const res: ApiResponse<User> = {
  code: 0,
  data: { id: 1, name: "Alice" },
  message: "ok",
};
```

- `res`: 变量名
- `: ApiResponse<User>`：说明它的**类型**
- `=`：给它一个**具体的值**

---

### ✅ 类比解释

你可以把这看作是 TypeScript 的 **声明 + 赋值**：

```ts
// 类型注解 + 赋值
const a: number = 123;

// 就等于先声明，再赋值
let a: number;
a = 123;
```

---

### ❗ 如果没有类型注解（只用 `=` 会怎么样？）

TypeScript 会自动根据右边的值**推断类型**：

```ts
const res = {
  code: 0,
  data: { id: 1, name: "Alice" },
  message: "ok",
}; // TS 会自动推断成一个特定结构的对象
```

但没有显式的 `: ApiResponse<User>`，你就**失去了明确的泛型表达和文档性**。

---

## 🔍 一句话区别

| 对比点 | `Map<K, V>`                                      | `Record<K, V>`                                  |
| ------ | ------------------------------------------------ | ----------------------------------------------- |
| 本质   | JavaScript 内建的 `Map` 类（运行时对象）         | TypeScript 类型系统的语法糖（编译期类型）       |
| 运行时 | 是真正的 `Map` 对象，有方法如 `.set()`、`.get()` | 实际是普通 JS 对象 `{}`                         |
| 键类型 | 可以是任何值（对象、数字、符号等）               | 只能是 `string` 或 `number`（通常是联合字面量） |
| 常用于 | 动态键、键不是字符串时                           | 静态、已知键名时                                |

---

## ✅ `Record<K, V>` 示例（静态键）

```ts
type UserRole = "admin" | "user" | "guest";

// 每种角色有一个权限等级
const rolePermissions: Record<UserRole, number> = {
  admin: 3,
  user: 2,
  guest: 1,
};

console.log(rolePermissions.admin); // 3
```

> `Record<K, V>` 是**类型工具**，不是运行时数据结构。

---

## ✅ `Map<K, V>` 示例（动态键）

```ts
const userScores = new Map<number, string>();

userScores.set(1001, "Alice");
userScores.set(1002, "Bob");

console.log(userScores.get(1002)); // "Bob"
```

> `Map` 是**运行时对象**，支持更多方法：`.set()`、`.get()`、`.has()`、`.delete()` 等。

---

## 🧠 用哪一个？

| 场景                                   | 推荐用法    |                |
| -------------------------------------- | ----------- | -------------- |
| 键是确定的、固定字符串（如 \`"admin"   | "user"\`）  | `Record<K, V>` |
| 键是对象、数字 ID、不固定或动态的      | `Map<K, V>` |                |
| 你想使用 `.get()`、`.set()` 等高级操作 | `Map<K, V>` |                |

---

## 📝 总结

| 特性              | `Map<K, V>`            | `Record<K, V>`      |
| ----------------- | ---------------------- | ------------------- |
| 类型安全          | ✅                     | ✅                  |
| 动态键            | ✅                     | ❌（需手动扩展）    |
| 方法（如 `.get`） | ✅                     | ❌（用 `obj[key]`） |
| 底层结构          | 实例对象               | 普通对象            |
| 性能              | 较优（特别是频繁操作） | 普通场景够用        |
