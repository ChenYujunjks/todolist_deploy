// components/ExchangeRatesViewer.tsx
"use client";

import { useState } from "react";
import { trpc } from "@/components/trpc/Provider";

export default function ExchangeRatesViewer() {
  const [base, setBase] = useState("BTC");
  const exchangeRatesQuery = trpc.coinbase.getExchangeRates.useQuery({ base });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">🔁 汇率查询</h3>

      <input
        value={base}
        onChange={(e) => setBase(e.target.value.toUpperCase())}
        placeholder="基础币种，如 BTC"
        className="w-full px-4 py-2 border border-gray-300 rounded-xl dark:bg-gray-700"
      />

      <button
        onClick={() => exchangeRatesQuery.refetch()}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      >
        🔄 刷新汇率
      </button>

      {exchangeRatesQuery.isLoading ? (
        <p>加载中...</p>
      ) : exchangeRatesQuery.isError || !exchangeRatesQuery.data ? (
        <p>获取失败 可能是因为edge function 在新加坡</p>
      ) : (
        <div className="max-h-64 overflow-y-auto text-sm">
          {Object.entries(exchangeRatesQuery.data.data.rates)
            .filter(([symbol]) => ["ETH", "PEPE", "GALA"].includes(symbol))
            .map(([symbol, rate]) => (
              <div key={symbol}>
                <strong>{symbol}</strong>: {String(rate)}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
