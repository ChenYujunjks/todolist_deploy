"use client";

import { useState } from "react";

type Rule = {
  id: string;
  title: string;
  content: string;
};

const rules: Rule[] = [
  {
    id: "rule-1",
    title: "单笔风险控制",
    content: "每一笔交易最大亏损 = 账户的 1%（例如 10,000 → 100 USDT）",
  },
  {
    id: "rule-2",
    title: "最大同时持仓",
    content: "最多同时持有 4 笔交易，避免风险叠加",
  },
  {
    id: "rule-3",
    title: "仓位计算公式",
    content: "仓位 = 风险金额 / 止损百分比",
  },
  {
    id: "rule-4",
    title: "必须设置止损",
    content: "每一笔交易必须在下单时设置止损，不能依赖手动执行",
  },
  {
    id: "rule-5",
    title: "避免相关性风险",
    content: "不要同时做 BTC / ETH / SOL 同方向仓位（等同放大风险）",
  },
  {
    id: "rule-6",
    title: "连续亏损保护",
    content:
      "连续亏损 3 笔 → 降低风险到 0.5%\n连续亏损 5 笔 → 停止交易",
  },
];

export default function RiskManagementPage() {
  const [openId, setOpenId] = useState<string | null>("rule-1");

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-10 bg-[--color-background] dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="w-full max-w-2xl">

        {/* 标题 */}
        <h1 className="text-4xl font-bold text-center mb-4">
          💼 Trading Risk Management
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          你的第一套职业级资金管理系统（10k USDT 模型）
        </p>

        {/* 核心规则卡片 */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">📌 核心规则</h2>

          <ul className="space-y-2 text-lg">
            <li>账户：10,000 USDT</li>
            <li>单笔风险：100 USDT（1%）</li>
            <li>最多同时 4 笔交易</li>
            <li className="font-semibold text-indigo-600">
              仓位 = 风险金额 / 止损%
            </li>
          </ul>
        </section>

        {/* 示例计算 */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">🧮 示例计算</h2>

          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>BTC 入场：50,000</p>
            <p>止损：48,000（风险 = 4%）</p>
            <p className="font-semibold">
              仓位 = 100 / 4% = 2,500 USDT
            </p>
          </div>
        </section>

        {/* Accordion 规则解释 */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">📦 规则解释</h2>

          <div className="space-y-2">
            {rules.map((rule) => (
              <div
                key={rule.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <button
                  onClick={() =>
                    setOpenId(openId === rule.id ? null : rule.id)
                  }
                  className="w-full text-left px-4 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {rule.title}
                </button>

                {openId === rule.id && (
                  <div className="px-4 pb-4 text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {rule.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 总结 */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">🧠 核心理念</h2>

          <p className="text-gray-700 dark:text-gray-300">
            这套系统的目标不是让你赚最多的钱，而是：
            <span className="font-semibold text-indigo-600">
              让你不会死，并长期复利增长
            </span>
          </p>
        </section>

      </div>
    </main>
  );
}