"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const coerceSchema = z.coerce.boolean();
const enumSchema = z.enum(["true", "false"]).transform((v) => v === "true");

// ✅ 给 testValues 明确类型（原来是 `any[]`）
// 原来: const testValues = [true, false, "true", "false", 1, 0, "", null];
const testValues: unknown[] = [true, false, "true", "false", 1, 0, "", null];

type ResultRow = {
  // 原来: input: any; coerce: any; enumStrict: any;
  input: unknown;
  coerce: unknown;
  enumStrict: unknown;
};

export default function ZodDemoPage() {
  const [results, setResults] = useState<ResultRow[]>([]);

  useEffect(() => {
    const output: ResultRow[] = testValues.map((value) => {
      let coerceResult: unknown;
      let enumResult: unknown;

      try {
        coerceResult = coerceSchema.parse(value);
      } catch (err) {
        coerceResult = String(err);
      }

      try {
        enumResult = enumSchema.parse(value);
      } catch (err) {
        enumResult = String(err);
      }

      return { input: value, coerce: coerceResult, enumStrict: enumResult };
    });

    console.log("Zod comparison results:", output);
    setResults(output);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Zod Boolean Demo</h1>
      <table className="border border-gray-300 w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Input</th>
            <th className="border px-2 py-1">z.coerce.boolean()</th>
            <th className="border px-2 py-1">
              {/* 原来: z.enum(["true","false"]).transform */}
              z.enum([&quot;true&quot;,&quot;false&quot;]).transform
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, i) => (
            <tr key={i}>
              <td className="border px-2 py-1">{String(row.input)}</td>
              <td className="border px-2 py-1">{String(row.coerce)}</td>
              <td className="border px-2 py-1">{String(row.enumStrict)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-gray-500">
        👉 打开浏览器 console 还能看到同样的结果。
      </p>
    </div>
  );
}
