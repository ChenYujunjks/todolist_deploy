"use client";
import { useEffect } from "react";

export default function Demo() {
  const arr = [1, 2, 3]; // 每次渲染都会生成一个新的数组

  useEffect(() => {
    console.log("effect run");
  }, [arr]);

  return <div>hello</div>;
}
