// components/BuyPriceCard.tsx
"use client";

import { useState } from "react";
import { trpc } from "@/components/trpc/Provider";

export default function BuyPriceCard() {
  const [base, setBase] = useState("BTC");
  const [quote, setQuote] = useState("USD");

  const buyPriceQuery = trpc.coinbase.getBuyPrice.useQuery({ base, quote });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">💵 实时买入价（Coinbase）</h3>

      <div className="flex gap-2">
        <input
          value={base}
          onChange={(e) => setBase(e.target.value.toUpperCase())}
          placeholder="基础币种，如 BTC"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-xl dark:bg-gray-700"
        />

        <input
          value={quote}
          onChange={(e) => setQuote(e.target.value.toUpperCase())}
          placeholder="计价币种，如 USD"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-xl dark:bg-gray-700"
        />
      </div>

      <button
        onClick={() => buyPriceQuery.refetch()}
        className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
      >
        🔄 获取买入价
      </button>

      {buyPriceQuery.isLoading ? (
        <p>加载中...</p>
      ) : buyPriceQuery.isError || !buyPriceQuery.data ? (
        <p>获取失败</p>
      ) : (
        <div className="text-lg">
          当前 {base}/{quote} 买入价：
          <span className="font-bold text-green-500 ml-2">
            ${buyPriceQuery.data.data.amount}
          </span>
        </div>
      )}
    </div>
  );
}
