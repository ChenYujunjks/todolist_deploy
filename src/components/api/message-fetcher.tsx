// components/MessageFetcher.tsx
"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";

export default function MessageFetcher() {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMessage = async () => {
      try {
        const res = await api.get("/api/hello");
        if (isMounted) {
          setMsg(res.data.message);
        }
      } catch {
        if (isMounted) {
          setMsg("❌ Failed to load");
        }
      }
    };

    fetchMessage();
    const intervalId = setInterval(fetchMessage, 60000); // 每 60 秒刷新一次数据

    // useEffect 返回一个清理函数，用于在组件卸载时清理副作用。
    return () => {
      clearInterval(intervalId);
      isMounted = false;
      console.log("已清除轮询请求");
    };
  }, []);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-inner">
      <h3 className="text-lg font-medium mb-2">当前服务器信息：</h3>
      {msg === null ? (
        <p className="text-sm text-gray-500 animate-pulse">正在加载...</p>
      ) : (
        <p className="text-base font-mono text-blue-700 dark:text-blue-300 break-words">
          {msg}
        </p>
      )}
    </div>
  );
}
