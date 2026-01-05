// lib/calc.ts
import { Trade } from "./store";

export function calcEquity(
  trades: Trade[],
  initialCapital: number,
  riskPct: number
) {
  let equity = initialCapital;

  return trades.map((t) => {
    const pnlPct = t.R * riskPct;
    equity = equity * (1 + pnlPct);

    return {
      ...t,
      pnlPct,
      equity,
    };
  });
}

export function calcStats(trades: Trade[]) {
  const N = trades.length;
  const totalR = trades.reduce((s, t) => s + t.R, 0);

  return {
    totalTrades: N,
    totalR,
    avgR: N === 0 ? 0 : totalR / N,
    winRate: N === 0 ? 0 : trades.filter((t) => t.R > 0).length / N,
  };
}
