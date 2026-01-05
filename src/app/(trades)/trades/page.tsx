"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { addTrade, trades } from "./lib/store";
import { calcEquity, calcStats } from "./lib/calc";

export default function TradesPage() {
  const [date, setDate] = useState("");
  const [R, setR] = useState("");

  const equityData = calcEquity(trades);
  const stats = calcStats(trades);

  function handleAdd() {
    if (!date || !R) return;

    addTrade({
      id: crypto.randomUUID(),
      date,
      R: Number(R),
    });

    setR("");
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Trade Log</h1>

      <div className="flex gap-4 items-end">
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        <div>
          <label>R (e.g. 0.3, -1)</label>
          <input
            value={R}
            onChange={(e) => setR(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        <Button onClick={handleAdd}>Add Trade</Button>
      </div>

      {/* 统计 */}
      <div className="flex gap-6">
        <div>Total Trades: {stats.totalTrades}</div>
        <div>Total R: {stats.totalR.toFixed(2)}</div>
        <div>Avg R: {stats.avgR.toFixed(3)}</div>
        <div>Win Rate: {(stats.winRate * 100).toFixed(1)}%</div>
      </div>

      {/* 表格 */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>R</TableCell>
            <TableCell>PnL %</TableCell>
            <TableCell>Equity</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {equityData.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.date}</TableCell>
              <TableCell>{t.R}</TableCell>
              <TableCell>{(t.pnlPct * 100).toFixed(2)}%</TableCell>
              <TableCell>{t.equity.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
