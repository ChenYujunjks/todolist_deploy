"use client";

import { trpc } from "@/components/api/trpc/Provider";
import { useState } from "react";

export default function CoinbasePriceCard() {
  const [result, setResult] = useState<string>("");

  const btcQuery = trpc.coinbase.getBTCPrice.useQuery();
  const ethQuery = trpc.coinbase.getETHPrice.useQuery();

  const refresh = () => {
    btcQuery.refetch();
    ethQuery.refetch();
    setResult("✅ 已刷新");
  };

  return (
    <div className="p-4 space-y-4 border border-gray-300 rounded-2xl shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        💰 实时币价（Coinbase）
      </h2>

      <div className="space-y-2 text-gray-900 dark:text-white">
        <p>
          <span className="font-semibold">BTC/USD：</span>
          {btcQuery.data?.data?.amount
            ? `$${btcQuery.data.data.amount}`
            : "加载中..."}
        </p>
        <p>
          <span className="font-semibold">ETH/USD：</span>
          {ethQuery.data?.data?.amount
            ? `$${ethQuery.data.data.amount}`
            : "加载中..."}
        </p>
      </div>

      <button
        onClick={refresh}
        className="mt-2 px-6 py-2 bg-green-600 text-white rounded-2xl shadow-md transition-all duration-200 ease-in-out hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 active:scale-95"
      >
        🔄 刷新价格
      </button>

      <p className="text-sm text-gray-600 dark:text-gray-400">{result}</p>
    </div>
  );
}
