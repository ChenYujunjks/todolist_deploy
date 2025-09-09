"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const coerceSchema = z.coerce.boolean();
const enumSchema = z.enum(["true", "false"]).transform((v) => v === "true");

const testValues = [true, false, "true", "false", 1, 0, "", null];

export default function ZodDemoPage() {
  const [results, setResults] = useState<
    { input: any; coerce: any; enumStrict: any }[]
  >([]);

  useEffect(() => {
    const output = testValues.map((value) => {
      let coerceResult: any;
      let enumResult: any;

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
              z.enum(["true","false"]).transform
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
