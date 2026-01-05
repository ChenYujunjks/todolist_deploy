// lib/store.ts

export type Trade = {
  id: string;
  date: string; // yyyy-mm-dd
  R: number; // +0.3, -1, +1.5
};

export const config = {
  initialCapital: 10_000,
  riskPct: 0.01, // 1%
};

// 暂时用内存 / mock（后面可换 JSON / SQLite）
export let trades: Trade[] = [];

export function addTrade(trade: Trade) {
  trades.push(trade);
}
