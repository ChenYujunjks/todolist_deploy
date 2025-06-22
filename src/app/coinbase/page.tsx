// app/coinbase/currencies/page.tsx
"use client";

import BuyPriceCard from "@/components/coinbase/buypricecard";
import ExchangeRatesViewer from "@/components/coinbase/ExchangeRatesViewer";

export default function CoinbaseCurrenciesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-center">
          📊 Coinbase 汇率与买入价
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          查询任意基础币种的实时汇率和 Coinbase 买入价格
        </p>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <ExchangeRatesViewer />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <BuyPriceCard />
        </section>
      </div>
    </main>
  );
}
