"use client";

import { cashflow } from "@/lib/data/cashflow";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

export default function StipendPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">资金余额追踪</h1>

      {/* 折线图 */}
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

                const item = payload[0].payload; // 拿到当前 data 对象

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

            {/* 折线 */}
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />

            {/* 分类点 */}
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

      {/* 表格 */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日期</TableHead>
            <TableHead>余额</TableHead>
            <TableHead>本周变化</TableHead>
            <TableHead>备注</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cashflow.map((item, idx) => (
            <TableRow
              key={idx}
              className={
                item.type === "income"
                  ? "bg-emerald-50"
                  : item.type === "food"
                  ? "bg-yellow-50"
                  : item.type === "travel"
                  ? "bg-red-50"
                  : item.type === "consumption"
                  ? "bg-blue-100"
                  : ""
              }
            >
              <TableCell>{item.date}</TableCell>
              <TableCell className="font-mono">${item.balance}</TableCell>
              <TableCell
                className={`font-mono ${
                  item.change > 0
                    ? "text-green-600"
                    : item.change < 0
                    ? "text-red-600"
                    : "text-gray-500"
                }`}
              >
                {item.change > 0 ? `+${item.change}` : item.change}
              </TableCell>
              <TableCell>{item.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
