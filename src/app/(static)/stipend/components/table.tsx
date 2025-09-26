"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cashflow } from "@/lib/data/cashflow";

export function CashflowTable() {
  return (
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
  );
}
