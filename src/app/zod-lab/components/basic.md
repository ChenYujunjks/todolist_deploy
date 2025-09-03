✅ **总结：**

1. `| null` 是为了允许初始值 `null`，否则类型不匹配。
2. `success` 不是必须，但有它更直观地区分成功/失败。
3. `handleParse` 里不用手动重置 `result`，因为后面一定会更新。
4. `<pre>` 标签用来展示“保持格式”的文本，尤其适合

---

### 1. `useState<ParseResult | null>(null);` 里的 `null`

- **意思**：

  - 这是 React 的初始值，表示一开始 `result` 里面什么都没有。
  - `| null` 表示 `result` 除了可能是 `ParseResult` 类型，还可以是 `null`。

- **能不能删掉 `| null`？**

  - 如果删掉，那么 `result` 一定要是 `ParseResult` 类型，但初始值你写的是 `null`，类型就不对了。
  - 你要么改成：

    ```ts
    const [result, setResult] = useState<ParseResult>(
      { mode: "parse", success: false } // 给一个合法的 ParseResult 初始值
    );
    ```

    要么保留 `| null`，这样初始值 `null` 就合法。

👉 所以大多数情况下我们会写 `| null`，因为“初始时没结果”很自然。

---

### 2. ParseResult 里的 `success`

```ts
| { mode: "parse"; success: true; data: User }
| { mode: "parse"; success: false }
```

- **为什么要 success？**
  因为 parse 的结果只有两种情况：

  1. 成功 → 有 `data`
  2. 失败 → 没有 `data`，但我们需要标记失败

- **能不能不写 success？**
  当然可以，比如写成：

  ```ts
  | { mode: "parse"; data: User }
  | { mode: "parse"; error: string }
  ```

  这样也行。但一般我们喜欢用 `success: true/false` 来做分支判断，逻辑更清晰。

👉 结论：`success` 不是必须的，但有了它，分支逻辑更直观。

---

### 3. `handleParse` 里要不要 `setResult` 重置？

```ts
const handleParse = () => {
  setError("");
  try {
    ...
  } catch (e: unknown) {
    ...
  }
};
```

- 现在只在开头重置了 `error`，没重置 `result`。

- 为什么？因为：

  - 如果这次验证失败，会在 `catch` 里更新 `result`（失败状态）。
  - 如果成功，也会在 `try` 里更新 `result`（成功状态）。
  - 所以 `result` 不会保持旧值，每次都会被更新。

- **需不需要额外在开头 `setResult(null)`？**

  - 功能上没必要，因为后面一定会更新。
  - 但如果你想在点击按钮和显示结果之间避免“闪一下旧数据”，可以加 `setResult(null)`。
  - 这取决于 UX 需求。

👉 一般不用写，因为 React 更新很快，几乎看不到旧数据。

---

### 4. `<pre> ... </pre>` 是什么意思？

- `<pre>` 是 HTML 标签，全称 **preformatted text**（预格式化文本）。
- 特点：

  - 会保留文本里的换行和空格。
  - 会用等宽字体（像代码编辑器一样）。

在这里用 `<pre>` 是因为我们要展示 `JSON.stringify(...)` 的结果：

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Kevin",
  "age": 23
}
```

如果用普通 `<div>`，所有换行会丢失，看起来就会是一行。
而 `<pre>` 会保留格式，更适合展示 JSON / 错误信息。
