"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Scatter,
} from "recharts";
import { cashflow } from "@/data/cashflow";

export function CashflowChart() {
  return (
    <div className="w-full h-80 bg-white shadow rounded-2xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cashflow}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="ts"
            type="number"
            domain={["dataMin", "dataMax"]}
            tickFormatter={(ts) =>
              new Date(ts).toLocaleDateString("zh-CN", {
                month: "2-digit",
                day: "2-digit",
              })
            }
          />
          <YAxis />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload || payload.length === 0) return null;
              const item = payload[0].payload;
              return (
                <div className="bg-white dark:bg-gray-800 border rounded p-2 text-sm shadow">
                  <div>
                    日期: {new Date(item.ts).toLocaleDateString("zh-CN")}
                  </div>
                  <div>余额: ${item.balance}</div>
                  {item.note && <div>备注: {item.note}</div>}
                </div>
              );
            }}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
          <Scatter
            data={cashflow.filter((d) => d.type === "income")}
            fill="#16a34a"
          />
          <Scatter
            data={cashflow.filter((d) => d.type === "food")}
            fill="#f97316"
          />
          <Scatter
            data={cashflow.filter((d) => d.type === "travel")}
            fill="#dc2626"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
