"use client";

import { useState } from "react";
import { RangeSchema } from "@/lib/schemas/range";

export default function RangeSection() {
  const [range, setRange] = useState({ start: 10, end: 5 });
  const parsed = RangeSchema.safeParse(range);

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">2) superRefine（跨字段校验）</h2>
      <div className="flex gap-2">
        <input
          type="number"
          className="border p-1 rounded w-32"
          value={range.start}
          onChange={(e) =>
            setRange((v) => ({ ...v, start: Number(e.target.value) }))
          }
        />
        <input
          type="number"
          className="border p-1 rounded w-32"
          value={range.end}
          onChange={(e) =>
            setRange((v) => ({ ...v, end: Number(e.target.value) }))
          }
        />
      </div>
      <pre className="text-sm p-2 rounded bg-gray-50">
        {JSON.stringify(parsed, null, 2)}
      </pre>
    </section>
  );
}
