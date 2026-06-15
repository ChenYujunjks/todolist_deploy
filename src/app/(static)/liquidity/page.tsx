import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowUp, TrendingUp, Waves, Target } from "lucide-react";

export default function LiquidityPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-10 space-y-4">
          <Badge variant="outline" className="border-cyan-500/40 text-cyan-300">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            震荡累计多空流动性是什么意思？
          </h1>

          <p className="max-w-3xl text-zinc-400">
            在一段 K
            线里，如果价格长时间横盘震荡，市场上方和下方会不断堆积止损单、
            爆仓单和追单。这些未来可能被触发的订单，就是交易里常说的流动性。
          </p>
        </div>

        <Card className="border-zinc-800 bg-zinc-900/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-cyan-400" />
              核心理解
            </CardTitle>
            <CardDescription>
              这里的流动性，不是普通成交量，而是未来可能被触发的市价单。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-zinc-300">
            <p>
              当 BTC 在一个区间内震荡，比如{" "}
              <span className="text-cyan-300">62000 - 63000</span>
              ，越来越多交易者会在支撑附近做多， 在压力附近做空。
            </p>

            <p>
              这些人的止损通常会集中放在区间外，因此上方和下方都会逐渐形成流动性池。
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-red-500/20 bg-red-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-300">
                <ArrowDown className="h-5 w-5" />
                下方流动性
              </CardTitle>
              <CardDescription>多头止损 / 多头爆仓</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-zinc-300">
              <p>很多人在支撑位附近做多：</p>

              <div className="rounded-lg border border-red-500/20 bg-zinc-950 p-4 font-mono text-sm">
                <div>62000 支撑位</div>
                <div className="text-red-400">↓</div>
                <div>61900 多头止损</div>
                <div>↓</div>
                <div className="text-red-300">形成卖方流动性</div>
              </div>

              <p>当价格跌破支撑时，多头止损会被触发，变成市价卖单。</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-300">
                <ArrowUp className="h-5 w-5" />
                上方流动性
              </CardTitle>
              <CardDescription>空头止损 / 空头爆仓</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-zinc-300">
              <p>很多人在压力位附近做空：</p>

              <div className="rounded-lg border border-green-500/20 bg-zinc-950 p-4 font-mono text-sm">
                <div>63000 压力位</div>
                <div className="text-green-400">↑</div>
                <div>63100 空头止损</div>
                <div>↑</div>
                <div className="text-green-300">形成买方流动性</div>
              </div>

              <p>当价格突破压力时，空头止损会被触发，变成市价买单。</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-zinc-800 bg-zinc-900/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-yellow-400" />
              为什么价格喜欢去扫流动性？
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-zinc-300">
            <p>
              大资金想建仓，需要足够多的对手盘。如果直接买或直接卖，容易把价格推得很远。
            </p>

            <p>所以市场经常会先去打掉某一边的止损，让大量被动市价单出现。</p>

            <Separator className="bg-zinc-800" />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-red-500/20 bg-zinc-950 p-4">
                <h3 className="mb-2 font-semibold text-red-300">
                  扫下方流动性
                </h3>
                <p className="text-sm text-zinc-400">
                  震荡 → 假跌破 → 触发多头止损 → 出现大量市价卖单 →
                  被吸收后快速拉回。
                </p>
              </div>

              <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-4">
                <h3 className="mb-2 font-semibold text-green-300">
                  扫上方流动性
                </h3>
                <p className="text-sm text-zinc-400">
                  震荡 → 假突破 → 触发空头止损 → 出现大量市价买单 →
                  被吸收后快速砸回。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-cyan-500/20 bg-cyan-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-300">
              <TrendingUp className="h-5 w-5" />
              一句话总结
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg leading-8 text-zinc-200">
              震荡累计多空流动性，就是价格在区间内停留越久，越多交易者在上下边界附近建仓并设置止损，
              最终让区间上方和下方都堆积大量未来可能被触发的买单或卖单。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
