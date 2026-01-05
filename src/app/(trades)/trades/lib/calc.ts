// lib/calc.ts
import { Trade, config } from "./store";

export function calcEquity(trades: Trade[]) {
  let equity = config.initialCapital;

  return trades.map((t) => {
    const pnlPct = t.R * config.riskPct;
    equity = equity * (1 + pnlPct);

    return {
      ...t,
      equity,
      pnlPct,
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
