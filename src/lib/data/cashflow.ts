const startingBalance = 300; // 这里填你最初的余额

// ✅ 原始 cashflow：只写 change，不写 balance
export const rawCashflow = [
  {
    date: "2025-09-14",
    change: 0,
    note: "初始状态",
    type: "travel",
  },
  {
    date: "2025-09-16",
    change: -80,
    note: "买东西消费 -$80",
    type: "consumption",
  },
  {
    date: "2025-09-21",
    change: -350,
    note: "起始后第一周伙食 -$250；固定支出 -$100（合计 -$350）",
    type: "food",
  },
  {
    date: "2025-09-28",
    change: -200,
    note: "伙食 -$200",
    type: "food",
  },

  // 10月第一周（收入到账 + 固定支出 + 当周伙食）
  {
    date: "2025-10-05",
    change: +950,
    note: "10月生活费到账 $1400；固定支出 -$200；伙食 -$250（合计 +$1100）",
    type: "income",
  },
  {
    date: "2025-10-07",
    change: +200,
    note: "银行返现 +$200",
    type: "income",
  },
  {
    date: "2025-10-12",
    change: -150,
    note: "伙食 -$150",
    type: "food",
  },
  {
    date: "2025-10-19",
    change: -175,
    note: "伙食 -$175",
    type: "food",
  },
  {
    date: "2025-10-26",
    change: -150,
    note: "伙食 -$150",
    type: "food",
  },

  {
    date: "2025-11-02",
    change: +950,
    note: "11月生活费到账 $1400；固定支出 -$200；伙食 -$250（合计 +$1050）",
    type: "income",
  },
  {
    date: "2025-11-09",
    change: -150,
    note: "伙食 -$150",
    type: "food",
  },
  {
    date: "2025-11-16",
    change: -150,
    note: "伙食 -$150",
    type: "food",
  },
  {
    date: "2025-11-19",
    change: +288,
    note: "获得一点钱",
    type: "income",
  },

  {
    date: "2025-11-23",
    change: -175,
    note: "伙食 -$175",
    type: "food",
  },
  {
    date: "2025-11-30",
    change: -150,
    note: "伙食 -$150",
    type: "food",
  },

  // 12月第一周到账
  {
    date: "2025-12-07",
    change: +1100,
    note: "12月生活费到账 $1400；固定支出 -$150；伙食 -$150（合计 +$1100）",
    type: "income",
  },

  // 12/14 机票支出 + 当周伙食
  {
    date: "2025-12-14",
    change: -200,
    note: "当周伙食 -$200（合计 -$200）",
    type: "travel",
  },
  // 12/16 大楼返佣
  {
    date: "2025-12-16",
    change: +888,
    note: "大楼返佣到账 $888",
    type: "income",
  },
  {
    date: "2025-12-21",
    change: -150,
    note: "伙食 -$150",
    type: "food",
  },
  {
    date: "2025-12-22",
    change: +1000,
    note: "12/22 额外 aunt 收入 $1000",
    type: "income",
  },
  {
    date: "2025-12-28",
    change: -200,
    note: "本周伙食 -$200",
    type: "food",
  },
  // 1月第一周到账
  {
    date: "2026-01-04",
    change: +1250,
    note: "1月生活费到账 $1400；固定支出 -$150（合计 +$1250）",
    type: "income",
  },
  {
    date: "2026-01-11",
    change: -200,
    note: "本周伙食 -$200",
    type: "food",
  },
  {
    date: "2026-01-18",
    change: -200,
    note: "本周伙食 -$200",
    type: "food",
  },
  {
    date: "2026-01-25",
    change: -150,
    note: "伙食 -$150",
    type: "food",
  },

  // 2月
  {
    date: "2026-02-01",
    change: +1050,
    note: "2月生活费到账 $1400；固定支出 -$200；伙食 -$150（合计 +$1050）",
    type: "income",
  },
  { date: "2026-02-08", change: -150, note: "伙食 -$150", type: "food" },
  { date: "2026-02-15", change: -150, note: "伙食 -$150", type: "food" },
  {
    date: "2026-02-17",
    change: +2083,
    note: "压岁钱到账 ¥15000 ≈ $2083",
    type: "income",
  },
  { date: "2026-02-22", change: -150, note: "伙食 -$150", type: "food" },

  // 3月
  {
    date: "2026-03-01",
    change: +1050,
    note: "3月生活费到账 $1400；固定支出 -$200；伙食 -$150（合计 +$1050）",
    type: "income",
  },
  { date: "2026-03-08", change: -150, note: "伙食 -$150", type: "food" },
  { date: "2026-03-15", change: -150, note: "伙食 -$150", type: "food" },
  { date: "2026-03-22", change: -150, note: "伙食 -$150", type: "food" },
  { date: "2026-03-29", change: -150, note: "伙食 -$150", type: "food" },
];

// ✅ 自动生成 balance + ts
export const cashflow = rawCashflow.reduce((acc, item, idx) => {
  const prevBalance = idx === 0 ? startingBalance : acc[idx - 1].balance;
  const balance = prevBalance + item.change;

  acc.push({
    ...item,
    balance,
    ts: new Date(item.date).getTime(),
  });
  return acc;
}, [] as ((typeof rawCashflow)[number] & { balance: number; ts: number })[]);
