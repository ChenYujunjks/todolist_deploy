const startingBalance = 525; // 这里填你最初的余额

// ✅ 原始 cashflow：只写 change，不写 balance
export const rawCashflow = [
  {
    date: "2025-09-14",
    change: 0,
    note: "初始状态",
    type: "travel ",
  },
  {
    date: "2025-09-21",
    change: -100,
    note: "起始后第一周伙食 -$100",
    type: "food",
  },
  {
    date: "2025-09-28",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },

  // 10月第一周（收入到账 + 固定支出 + 当周伙食）
  {
    date: "2025-10-05",
    change: +1150,
    note: "10月生活费到账 $1400；固定支出 -$150；伙食 -$100（合计 +$1150）",
    type: "income",
  },
  {
    date: "2025-10-12",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },
  {
    date: "2025-10-19",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },
  {
    date: "2025-10-26",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },

  // 11月第一周到账
  {
    date: "2025-11-02",
    change: +1150,
    note: "11月生活费到账 $1400；固定支出 -$150；伙食 -$100（合计 +$1150）",
    type: "income",
  },
  {
    date: "2025-11-09",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },
  {
    date: "2025-11-16",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },
  {
    date: "2025-11-23",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },
  {
    date: "2025-11-30",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },

  // 12月第一周到账
  {
    date: "2025-12-07",
    change: +1150,
    note: "12月生活费到账 $1400；固定支出 -$150；伙食 -$100（合计 +$1150）",
    type: "income",
  },

  // 12/14 机票支出 + 当周伙食
  {
    date: "2025-12-14",
    change: -1171,
    note: "机票支出 ¥7800 ≈ $1071；当周伙食 -$100（合计 -$1171）",
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
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },

  // 12/22 额外收入
  {
    date: "2025-12-22",
    change: +1000,
    note: "12/22 额外 aunt 收入 $1000",
    type: "income",
  },

  // 12/28 旅行期间消费 + 当周伙食
  {
    date: "2025-12-28",
    change: -656,
    note: "旅行期间 10 天消费（含酒店）≈ ¥4000 ≈ $556；本周伙食 -$100（合计 -$656）",
    type: "travel",
  },

  // 1月第一周到账
  {
    date: "2026-01-04",
    change: +1150,
    note: "1月生活费到账 $1400；固定支出 -$150；伙食 -$100（合计 +$1150）",
    type: "income",
  },
  {
    date: "2026-01-11",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },
  {
    date: "2026-01-18",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },
  {
    date: "2026-01-25",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },

  // 2月第一周到账
  {
    date: "2026-02-01",
    change: +1150,
    note: "2月生活费到账 $1400；固定支出 -$150；伙食 -$100（合计 +$1150）",
    type: "income",
  },
  {
    date: "2026-02-08",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },
  {
    date: "2026-02-15",
    change: -100,
    note: "伙食 -$100",
    type: "food",
  },

  // 2/17 压岁钱
  {
    date: "2026-02-17",
    change: +2083,
    note: "压岁钱到账 ¥15000 ≈ $2083",
    type: "income",
  },
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
