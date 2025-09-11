const rawCashflow = [
  {
    date: "2025-09-14",
    balance: 320,
    change: 0,
    note: "起始余额",
    type: "start",
  },

  {
    date: "2025-09-21",
    balance: 245,
    change: -75,
    note: "伙食开销",
    type: "food",
  },
  {
    date: "2025-09-28",
    balance: 170,
    change: -75,
    note: "伙食开销",
    type: "food",
  },

  {
    date: "2025-10-05",
    balance: 1345,
    change: +1175,
    note: "10月收入到账-固定支出-伙食",
    type: "income",
  },
  {
    date: "2025-10-12",
    balance: 1270,
    change: -75,
    note: "伙食开销",
    type: "food",
  },
  {
    date: "2025-10-19",
    balance: 1195,
    change: -75,
    note: "伙食开销",
    type: "food",
  },
  {
    date: "2025-10-26",
    balance: 1120,
    change: -75,
    note: "伙食开销",
    type: "food",
  },

  {
    date: "2025-11-02",
    balance: 2295,
    change: +1175,
    note: "11月收入到账-固定支出-伙食",
    type: "income",
  },
  {
    date: "2025-11-09",
    balance: 2220,
    change: -75,
    note: "伙食开销",
    type: "food",
  },
  {
    date: "2025-11-16",
    balance: 2145,
    change: -75,
    note: "伙食开销",
    type: "food",
  },
  {
    date: "2025-11-23",
    balance: 2070,
    change: -75,
    note: "伙食开销",
    type: "food",
  },
  {
    date: "2025-11-30",
    balance: 1995,
    change: -75,
    note: "伙食开销",
    type: "food",
  },

  {
    date: "2025-12-07",
    balance: 3170,
    change: +1175,
    note: "12月收入到账-固定支出-伙食",
    type: "income",
  },
  {
    date: "2025-12-14",
    balance: 3095,
    change: -75,
    note: "伙食开销",
    type: "food",
  },
  {
    date: "2025-12-21",
    balance: 3020,
    change: -75,
    note: "伙食开销",
    type: "food",
  },
  {
    date: "2025-12-27",
    balance: 1949,
    change: -1071,
    note: "机票支出",
    type: "travel",
  },
  {
    date: "2025-12-28",
    balance: 1874,
    change: -75,
    note: "伙食开销",
    type: "food",
  },

  {
    date: "2026-01-04",
    balance: 3149,
    change: +1275,
    note: "1月收入到账-固定支出-伙食",
    type: "income",
  },
  {
    date: "2026-01-11",
    balance: 5232,
    change: +2083,
    note: "压岁钱到账",
    type: "income",
  },
];

// ✅ 自动加上 ts 字段
export const cashflow = rawCashflow.map((item) => ({
  ...item,
  ts: new Date(item.date).getTime(),
}));
