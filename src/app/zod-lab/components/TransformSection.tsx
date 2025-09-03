// 跨字段校验
"use client";

import { useState } from "react";
import { FormInputSchema } from "@/lib/schemas/forms";

export default function TransformSection() {
  const [form, setForm] = useState({
    age: "  20 ",
    name: "  Bruce  ",
    subscribed: "true" as any,
  });
  const parsed = FormInputSchema.safeParse(form);

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">
        3) transform / preprocess / coerce
      </h2>

      <div className="flex flex-col gap-2 max-w-md">
        <label className="text-sm">age (string → number)：</label>
        <input
          className="border p-1 rounded"
          value={form.age as string}
          onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))}
        />

        <label className="text-sm">name（自动 trim）：</label>
        <input
          className="border p-1 rounded"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />

        <label className="text-sm">
          subscribed（&quot;true&quot;/&quot;false&quot; → boolean）：
        </label>

        <select
          className="border p-1 rounded"
          value={String(form.subscribed)}
          onChange={(e) =>
            setForm((f) => ({ ...f, subscribed: e.target.value }))
          }
        >
          <option>true</option>
          <option>false</option>
        </select>
      </div>

      <pre className="text-sm p-2 rounded bg-gray-50">
        {JSON.stringify(parsed, null, 2)}
      </pre>
    </section>
  );
}
