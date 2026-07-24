# 项目命名与编码规范（旧 README）

---

## 1. 文件命名规范

### 1.1 页面文件（位于 `pages/` 或 `app/`）

- **命名格式**：`kebab-case`（短横线连接的小写格式）
- **文件后缀**：`.tsx`，用于 React 页面组件
- **示例**：

  ```
  pages/
    index.tsx          # 对应路径 `/`
    about-us.tsx       # 对应路径 `/about-us`
    user-profile.tsx   # 对应路径 `/user-profile`
  ```

### 1.2 组件文件（位于 `components/`）

- **命名格式**：`PascalCase`（每个单词首字母大写）
- **文件后缀**：`.tsx`
- **示例**：

  ```
  components/
    Navbar.tsx
    UserCard.tsx
    LoginForm.tsx
  ```

---

## 2. 变量与函数命名规范

### 2.1 普通变量与函数

- **命名格式**：`camelCase`（首字母小写，后续单词首字母大写）
- **示例**：

  ```ts
  const userName = "Bruce";
  function fetchData() { ... }
  ```

### 2.2 React 组件命名

- **命名格式**：`PascalCase`
- **示例**：

  ```tsx
  function UserCard() {
    return <div>...</div>;
  }
  ```

---

## 3. 项目目录结构

```plaintext
proj-root/
├── components/      # 可复用的 UI 组件（使用 PascalCase 命名）
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   └── UserCard.tsx
├── pages/           # Next.js 页面文件（使用 kebab-case 命名）
│   ├── index.tsx
│   ├── about-us.tsx
│   └── user-profile.tsx
├── public/          # 公共资源文件（如图片、字体）
├── styles/          # 全局样式文件
│   └── globals.css
├── utils/           # 工具函数文件（文件名使用 camelCase）
│   └── dateFormatter.ts
└── README.md        # 项目说明文档
```

---

# Project Naming & Coding Conventions

## 1. File Naming Conventions

### 1.1 Pages (in `pages/` or `app/`)

- **Format**: `kebab-case`
- **Extension**: `.tsx` for React pages
- **Examples**:

  ```
  pages/
    index.tsx          # maps to `/`
    about-us.tsx       # maps to `/about-us`
    user-profile.tsx   # maps to `/user-profile`
  ```

### 1.2 Components (in `components/`)

- **Format**: `PascalCase`
- **Extension**: `.tsx`
- **Examples**:

  ```
  components/
    Navbar.tsx
    UserCard.tsx
    LoginForm.tsx
  ```

---

## 2. Variable & Function Naming

### 2.1 Variables & Functions

- **Format**: `camelCase`
- **Examples**:

  ```ts
  const userName = "Bruce";
  function fetchData() { ... }
  ```

### 2.2 React Component Names

- **Format**: `PascalCase`
- **Examples**:

  ```tsx
  function UserCard() {
    return <div>...</div>;
  }
  ```

---

## 3. Folder Structure

```plaintext
proj-root/
├── components/      # Reusable UI components (PascalCase filenames)
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   └── UserCard.tsx
├── pages/           # Next.js pages (kebab-case filenames)
│   ├── index.tsx
│   ├── about-us.tsx
│   └── user-profile.tsx
├── public/          # Public assets
├── styles/          # Global styles
│   └── globals.css
├── utils/           # Utility functions (camelCase filenames)
│   └── dateFormatter.ts
└── README.md        # Project README
```

---

非常正确 ✅，**在 Windows 上仅修改文件名的大小写时，Git 默认是不会察觉到变化的**，这是很多开发者遇到的一个坑。

---

## 😵 为什么 Git 无法追踪大小写变动？

因为：

- Windows 是**大小写不敏感**的文件系统（`foo.tsx` 与 `Foo.tsx` 被认为是同一个文件）。
- Git 虽然本质是大小写敏感的，但**依赖于操作系统的行为**。
- 所以在 Windows 上你把 `BuyPriceCard.tsx` 改成 `buy-price-card.tsx`，Git **认为啥都没变**。

---

## ✅ 正确的解决方案：强制重命名触发 Git 变动

### ✅ 方法一：**中间重命名法（推荐）**

1. 改成一个临时名字（例如加 `_tmp`）：

   ```
   BuyPriceCard.tsx → tmp.tsx
   ```

2. 再改成目标名字：

   ```
   tmp.tsx → buy-price-card.tsx
   ```

3. 此时 Git 就能正确追踪到大小写变化。

---

### ✅ 方法二：Git 设置强制追踪大小写变化（不推荐在团队项目中）

可以修改本地 Git 配置：

```bash
git config core.ignorecase false
```

这会让 Git 强制识别大小写变化，但：

- ✅ 在 Linux、macOS 上可以这么做。
- ⚠️ 在 Windows 上**并不总是生效**，而且容易引起协作冲突。
- 🧠 所以在团队项目中**不推荐全局改这个配置**。

---

非常好的问题！

在 TypeScript 中：

```ts
import { Todo } from "@/types/Todo";
```

和

```ts
import type { Todo } from "@/types/Todo";
```

**确实有区别**，区别主要体现在 **构建优化** 和 **类型/值的语义上**。

---

### ✅ 区别详解

#### ✅ `import { Todo } from "@/types/Todo";`

- 是一个**普通的导入**。
- TypeScript 会认为你可能在运行时代码中也会用到 `Todo`（尽管它只是一个类型）。
- 这可能会让构建工具（比如 Webpack、Vite、tsc）在输出的 JavaScript 中**保留对该模块的引用**（哪怕只是类型）。

#### ✅ `import type { Todo } from "@/types/Todo";`

- 是一个 **类型专用导入**，告诉 TypeScript：

  > 我只用这个东西作为“类型”，运行时根本不需要它。

- 这种导入在编译输出的 JavaScript 中会**完全被移除**（没有任何副作用或模块引用）。
- 对于只导出类型的模块（比如你的 `Todo.ts` 文件），这是最佳实践。

---

### ✅ 哪个应该用？

你的 `Todo.ts` 是一个纯类型定义文件（interface），**推荐使用**：

```ts
import type { Todo } from "@/types/Todo";
```

这样可以：

1. 明确表达你的意图（只用类型）
2. 避免无用的运行时代码
3. 提升构建优化和 tree-shaking 效果

---

### 🚫 什么时候不能用 `import type`？

当你导入的内容里既有 **类型** 又有 **值**（比如函数、类、常量），就不能用 `import type`：

```ts
// ❌ 错误：someFunction 是值，不能用 import type
import type { SomeType, someFunction } from "@/utils";
```

---

### ✅ 总结

| 用法                            | 仅用于类型？ | 编译后是否保留 | 推荐使用场景           |
| ------------------------------- | ------------ | -------------- | ---------------------- |
| `import { Todo } from ...`      | 否           | 是             | 类型 + 值 或不确定用法 |
| `import type { Todo } from ...` | 是           | 否             | 明确只作为类型使用 ✅  |
