"use client";

import { useState } from "react";
import MessageFetcher from "@/components/api/MessageFetcher";
import FormSender from "@/components/api/FormSender";

export default function AxiosDemoPage() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <main className="flex-grow flex flex-col justify-center min-h-screen items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          🚀 Axios + Next.js App Router
        </h1>
        <p className="text-center text-lg mb-8 text-gray-600 dark:text-gray-400">
          简单示例:GET 与 POST 请求
        </p>

        <button
          onClick={() => setShowMessage((prev) => !prev)}
          className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          {/*每次点击按钮重新显示 MessageFetcher 组件时，React 可能会重新渲染组件 */}
          {showMessage ? "隐藏 MessageFetcher" : "显示 MessageFetcher"}
        </button>

        {showMessage && (
          <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">📨 获取信息（GET）</h2>
            <MessageFetcher />
          </section>
        )}

        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">📝 发送信息（POST）</h2>
          <FormSender />
        </section>
      </div>
    </main>
  );
}
