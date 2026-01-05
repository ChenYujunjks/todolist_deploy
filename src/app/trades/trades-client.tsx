"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { Store } from "./lib/store";
import { calcEquity, calcStats } from "./lib/calc";
import { addTradeAction } from "./action";

type Props = {
  store: Store;
};

export default function TradesClient({ store }: Props) {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [R, setR] = useState("");

  // ===== 纯计算（来自 props）=====
  const equityData = calcEquity(
    store.trades,
    store.initialCapital,
    store.riskPct
  );
  const stats = calcStats(store.trades);

  // ===== 提交一笔交易 =====
  async function handleAdd() {
    if (!date || R === "") return;

    await addTradeAction({
      id: crypto.randomUUID(),
      timestamp: new Date(date).getTime(),
      R: Number(R),
    });

    setR("");

    // 关键：让 Server Component 重新读 JSON
    router.refresh();
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Trade Log</h1>

      {/* ===== 输入区域 ===== */}
      <div className="flex gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-muted-foreground">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-muted-foreground">
            R (e.g. 0.3, -1)
          </label>
          <input
            value={R}
            onChange={(e) => setR(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        <Button onClick={handleAdd}>Add Trade</Button>
      </div>

      {/* ===== 统计信息 ===== */}
      <div className="flex gap-6 text-sm">
        <div>Total Trades: {stats.totalTrades}</div>
        <div>Total R: {stats.totalR.toFixed(2)}</div>
        <div>Avg R: {stats.avgR.toFixed(3)}</div>
        <div>Win Rate: {(stats.winRate * 100).toFixed(1)}%</div>
      </div>

      {/* ===== 表格 ===== */}
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
              <TableCell>
                {new Date(t.timestamp).toISOString().slice(0, 10)}
              </TableCell>
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
