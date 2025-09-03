"use client";
import React, { useState, useMemo } from "react";

export default function WithoutMemo() {
  const [count, setCount] = useState(0);

  // 模拟一个很重的计算（比如过滤 400 项数据）
  const expensiveValue = useMemo(() => {
    console.log("⚡ 只在依赖变化时计算一次");
    let sum = 0;
    for (let i = 0; i < 500000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <div>
      <p>使用 useMemo 计算的结果：{expensiveValue}</p>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
