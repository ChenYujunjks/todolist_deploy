"use client";

import { useState } from "react";
import { z } from "zod";
import {
  UserWithPasswordSchema,
  type UserWithPassword,
} from "@/lib/schemas/user";

type ParseResult =
  | { mode: "parse"; success: true; data: UserWithPassword }
  | { mode: "parse"; success: false }
  | { mode: "safeParse"; success: true; data: UserWithPassword }
  | { mode: "safeParse"; success: false; error: z.ZodError };

// 3) 类型守卫：判断是否为 ZodError
function isZodError(e: unknown): e is z.ZodError {
  return e instanceof z.ZodError;
}

export default function BasicObjectSection() {
  const [userJson, setUserJson] = useState(
    JSON.stringify(
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        name: "Kevin",
        age: 23,
        password: "Secure123",
      },
      null,
      2
    )
  );
  const [result, setResult] = useState<ParseResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleParse = () => {
    setError("");
    try {
      const data = UserWithPasswordSchema.parse(JSON.parse(userJson)); // 合法则返回 data
      setResult({ mode: "parse", success: true, data });
    } catch (e: unknown) {
      // 不使用 any，先缩小类型
      setResult({ mode: "parse", success: false });
      if (isZodError(e)) {
        setError(JSON.stringify(e.errors, null, 2));
      } else {
        setError(String(e));
      }
    }
  };

  const handleSafeParse = () => {
    setError("");
    const parsed = UserWithPasswordSchema.safeParse(JSON.parse(userJson));
    if (parsed.success) {
      setResult({ mode: "safeParse", success: true, data: parsed.data });
    } else {
      setResult({ mode: "safeParse", success: false, error: parsed.error });
    }
  };

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">
        1) parse vs safeParse（基础对象）
      </h2>
      <p className="text-sm text-gray-600">
        Schema：id(uuid) / name(非空) / age(非负整数)
      </p>

      <textarea
        className="w-full h-40 p-2 border rounded font-mono text-sm"
        value={userJson}
        onChange={(e) => setUserJson(e.target.value)}
      />

      <div className="flex gap-2">
        <button
          className="px-3 py-1 border rounded bg-blue-100 hover:bg-blue-200"
          onClick={handleParse}
        >
          parse()
        </button>
        <button
          className="px-3 py-1 border rounded bg-green-100 hover:bg-green-200"
          onClick={handleSafeParse}
        >
          safeParse()
        </button>
      </div>
      {/*✅ 错误输出（红色 仅 parse 的异常单独显示） */}
      {error && (
        <>
          <pre className="text-sm p-2 rounded bg-red-100 text-red-700 whitespace-pre-wrap">
            ❌ Error:
            {"\n"}
            {error}
          </pre>
          <p className="text-xs text-gray-600">
            （提示：上面展示的是 ZodError 内部的 <code>ZodIssue</code> 数组，
            每个对象表示一个字段的错误，例如 <code>code</code> /{" "}
            <code>expected</code> / <code>received</code> / <code>path</code>
            。）
          </p>
        </>
      )}

      {/* 结果输出 */}
      {result && (
        <pre
          className={`text-sm p-2 rounded whitespace-pre-wrap ${
            result.success
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {result.mode === "parse" ? (
            result.success ? (
              <>✅ parse 成功：{JSON.stringify(result.data, null, 2)}</>
            ) : (
              "❌ parse 失败（已在上方显示错误详情）"
            )
          ) : result.success ? (
            <>
              🔎 safeParse 结果（success=true）
              {"\n"}
              {JSON.stringify(result.data, null, 2)}
            </>
          ) : (
            <>
              🔎 safeParse 结果（success=false）
              {"\n"}
              {JSON.stringify(result.error.flatten(), null, 2)}
            </>
          )}
        </pre>
      )}
    </section>
  );
}
