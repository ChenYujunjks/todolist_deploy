"use client";
import { useEffect, useState } from "react";

export default function LoopDemo() {
  const [n, setN] = useState(0);

  // ⚠️ 每次渲染都创建一个新对象，引用恒变
  const dep = { k: 1 };

  useEffect(() => {
    console.log("effect runs. n =", n);
    // ⚠️ effect 里 setState，触发下一次渲染
    setN((x) => x + 1);
  }, [dep]); // ⚠️ 依赖始终“变化”→ effect 每次渲染都触发 → setState → 渲染 → 如此循环

  return <div>{n}</div>;
}
