"use client";

import { useState } from "react";
import { UserSchema } from "@/lib/schemas/user";

export default function BasicObjectSection() {
  const [userJson, setUserJson] = useState(
    JSON.stringify(
      { id: "550e8400-e29b-41d4-a716-446655440000", name: "Kevin", age: 23 },
      null,
      2
    )
  );
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleParse = () => {
    setError("");
    try {
      const data = UserSchema.parse(JSON.parse(userJson));
      setResult({ mode: "parse", success: true, data });
    } catch (e: any) {
      setResult({ mode: "parse", success: false });
      setError(e?.errors ? JSON.stringify(e.errors, null, 2) : String(e));
    }
  };

  const handleSafeParse = () => {
    setError("");
    const parsed = UserSchema.safeParse(JSON.parse(userJson));
    setResult({ mode: "safeParse", ...parsed });
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

      {/* ✅ 错误输出（红色） */}
      {error && (
        <pre className="text-sm p-2 rounded bg-red-100 text-red-700 whitespace-pre-wrap">
          ❌ Error:
          {"\n"}
          {error}
        </pre>
      )}

      {/* ✅ 结果输出 */}
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
              <>✅ parse 成功: {JSON.stringify(result.data, null, 2)}</>
            ) : (
              "❌ parse 失败"
            )
          ) : (
            <>
              <div>🔎 safeParse 结果：</div>
              {JSON.stringify(result, null, 2)}
            </>
          )}
        </pre>
      )}
    </section>
  );
}
