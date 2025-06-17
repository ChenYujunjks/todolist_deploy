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
    // 每 60 秒刷新一次数据
    const intervalId = setInterval(fetchMessage, 60000);

    // 清理函数：组件卸载时取消定时器
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
