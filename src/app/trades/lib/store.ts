// lib/store.ts

export type Trade = {
  id: string;
  timestamp: number;
  R: number;
};

export type Store = {
  initialCapital: number;
  riskPct: number;
  trades: Trade[];
};
