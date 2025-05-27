# 项目命名与编码规范

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

> Keep these conventions consistent to help everyone on the team read and maintain the codebase efficiently.
