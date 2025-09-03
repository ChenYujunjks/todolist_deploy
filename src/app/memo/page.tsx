"use client";
import React, { useState } from "react";

export default function WithoutMemo() {
  const [count, setCount] = useState(0);

  // 模拟一个很重的计算（比如过滤 400 项数据）
  const expensiveValue = (() => {
    console.log("🔄 重新计算 expensiveValue");
    let sum = 0;
    for (let i = 0; i < 500000000; i++) {
      sum += i;
    }
    return sum;
  })();

  return (
    <div>
      <p>重计算的结果：{expensiveValue}</p>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
