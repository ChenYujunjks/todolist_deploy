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
      const data = UserSchema.parse(JSON.parse(userJson)); // 不合法会 throw
      setResult(data);
    } catch (e: any) {
      setResult(null);
      setError(e?.errors ? JSON.stringify(e.errors, null, 2) : String(e));
    }
  };

  const handleSafeParse = () => {
    setError("");
    const parsed = UserSchema.safeParse(JSON.parse(userJson)); // 不 throw
    setResult(parsed);
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
        className="w-full h-40 p-2 border rounded"
        value={userJson}
        onChange={(e) => setUserJson(e.target.value)}
      />

      <div className="flex gap-2">
        <button className="px-3 py-1 border rounded" onClick={handleParse}>
          parse()
        </button>
        <button className="px-3 py-1 border rounded" onClick={handleSafeParse}>
          safeParse()
        </button>
      </div>

      {error && (
        <pre className="text-sm text-red-600 whitespace-pre-wrap">{error}</pre>
      )}
      {result && (
        <pre className="text-sm p-2 rounded bg-gray-50">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </section>
  );
}
