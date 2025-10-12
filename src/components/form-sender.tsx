// components/FormSender.tsx
"use client";

import { trpc } from "@/components/api/trpc/Provider";
import { useState } from "react";

export default function FormSender() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [formResult, setFormResult] = useState<string>("");

  const mutation = trpc.form.formSubmit.useMutation();

  const sendForm = () => {
    if (!name || age === "") {
      alert("请填写完整信息");
      return;
    }

    mutation.mutate(
      { name, age: Number(age) },
      {
        onSuccess: (data) => {
          setFormResult(JSON.stringify(data));
        },
        onError: () => {
          setFormResult("提交失败！");
        },
      }
    );
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        📝 发送一个 POST 请求
      </h2>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="请输入姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />

        <input
          type="number"
          placeholder="请输入年龄"
          value={age}
          onChange={(e) =>
            setAge(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <button
        onClick={sendForm}
        className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-2xl shadow-md transition-all duration-200 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:scale-95"
      >
        🚀 提交表单
      </button>

      <p className="mt-4 text-gray-800 dark:text-gray-200 break-words">
        📦 返回结果：{formResult}
      </p>
    </div>
  );
}
