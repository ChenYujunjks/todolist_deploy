// app/trades/page.tsx  （❌ 不要 use client）
export const dynamic = "force-dynamic";

import { getStore } from "./lib/storeRepo";
import TradesClient from "./trades-client";

export default function TradesPage() {
  const store = getStore(); // JSON 读取
  return <TradesClient store={store} />;
}
