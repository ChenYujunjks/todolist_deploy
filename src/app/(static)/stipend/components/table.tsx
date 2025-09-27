"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cashflow } from "@/lib/data/cashflow";
import { Button } from "@/components/ui/button";

export function CashflowTable() {
  const [hideFall, setHideFall] = useState(false);

  // 定义 9/1 ~ 11/30 时间段
  const start = new Date("2025-09-01").getTime();
  const end = Date.now(); // 今天

  const filtered = hideFall
    ? cashflow.filter((item) => item.ts < start || item.ts > end)
    : cashflow;

  return (
    <div className="space-y-4">
      <Button
        onClick={() => setHideFall(!hideFall)}
        variant="destructive"
        size="sm"
      >
        {hideFall ? "显示9月-今天的数据" : "隐藏9月-今天的数据"}
      </Button>

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
          {filtered.map((item, idx) => (
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
