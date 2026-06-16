import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Brain,
  CheckCircle2,
  Flame,
  Gauge,
  ShieldAlert,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function BSLModelPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Model
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            扫掉 BSL 之后，应该做空还是做多？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            BSL 被扫不等于立刻做空。专业交易员真正关心的是：
            这次突破是流动性收割，还是有效突破。判断核心来自价格结构、
            OI、CVD、Funding、成交量、清算区和回踩反应。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              核心结论
            </CardTitle>
            <CardDescription>
              扫 BSL 之后，不是先决定方向，而是先判断“谁推动了上涨”。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              BSL，也就是{" "}
              <span className="font-medium text-brand">Buy Side Liquidity</span>
              ，通常位于前高、双顶、区间高点上方。那里聚集了空头止损、
              空头强平和突破追多买单。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm leading-7">
                专业交易员不会因为价格扫掉前高就马上做空，而是等待：
                <span className="font-medium text-brand">
                  {" "}
                  扫 BSL → 观察是否站稳 → 看 OI/CVD/Funding → 等结构确认 →
                  再决定做空、做多或观望。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <TrendingDown className="h-5 w-5" />
                偏做空：假突破模型
              </CardTitle>
              <CardDescription>扫掉 BSL 后快速跌回区间</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>前高 / BSL</div>
                <div className="text-chart-2">↑ 突破扫流动性</div>
                <div>触发空头止损 / 空头爆仓</div>
                <div className="text-destructive">↓ 快速跌回前高下方</div>
                <div className="font-medium text-destructive">观察做空机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                如果突破后不能站稳，反而迅速跌回原区间，说明上方买方流动性可能已经被大资金利用。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <TrendingUp className="h-5 w-5" />
                偏做多：真实突破模型
              </CardTitle>
              <CardDescription>扫掉 BSL 后回踩不破并继续上行</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>前高 / BSL</div>
                <div className="text-chart-2">↑ 放量突破</div>
                <div>站稳前高上方</div>
                <div>回踩不破</div>
                <div className="font-medium text-chart-2">观察做多机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                如果扫 BSL
                后没有回落，而是在前高上方盘整或回踩确认，说明市场可能不是诱多，而是在进行有效突破。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-brand" />扫 BSL 后的专业判断框架
            </CardTitle>
            <CardDescription>
              不看单一信号，而是用多个指标判断突破质量。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <Activity className="h-4 w-4 text-brand" />
                  1. OI：上涨是谁推动的？
                </h3>
                <p className="text-sm text-muted-foreground">
                  价格扫 BSL 后，如果 OI 下降，说明上涨可能主要来自空头回补；
                  如果 OI 继续上升，说明有新仓位进入，突破质量更强。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <Gauge className="h-4 w-4 text-chart-2" />
                  2. CVD：主动买盘是否跟随？
                </h3>
                <p className="text-sm text-muted-foreground">
                  如果价格创新高，但 CVD 没有同步创新高，说明主动买盘不足，
                  有诱多风险。若 CVD 强势上升，说明真实买盘更强。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <Flame className="h-4 w-4 text-destructive" />
                  3. Funding：市场是否过度拥挤？
                </h3>
                <p className="text-sm text-muted-foreground">
                  Funding 很高时，多头拥挤，扫 BSL 后更容易出现诱多回落。 如果
                  Funding 不极端，突破延续的压力会小一些。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <ShieldAlert className="h-4 w-4 text-chart-3" />
                  4. Liquidation Map：是否打到清算堆？
                </h3>
                <p className="text-sm text-muted-foreground">
                  如果刚好扫到上方空头清算密集区后快速回落，
                  说明这次上涨可能只是为了拿流动性。若清算后继续站稳，则偏趋势延续。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowDown className="h-5 w-5 text-destructive" />
              情况一：扫 BSL 后考虑做空
            </CardTitle>
            <CardDescription>
              这是典型的 liquidity sweep reversal 模型。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
              <div>价格突破前高</div>
              <div className="text-chart-2">↑ 扫掉 BSL</div>
              <div>OI 下降或没有明显增加</div>
              <div>CVD 背离 / 主动买盘不足</div>
              <div>Funding 偏高</div>
              <div className="text-destructive">↓ 跌回前高下方</div>
              <div className="font-medium text-destructive">等 MSS 后找空</div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <p className="mb-1 font-medium">入场条件</p>
                <p className="text-sm text-muted-foreground">
                  不在扫高点的瞬间空，而是等价格跌回前高下方，并跌破短期结构低点。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <p className="mb-1 font-medium">止损位置</p>
                <p className="text-sm text-muted-foreground">
                  放在扫 BSL 的极端高点上方，而不是放在前高附近。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <p className="mb-1 font-medium">目标位置</p>
                <p className="text-sm text-muted-foreground">
                  第一目标看区间中轴，第二目标看下方 SSL 或前低流动性。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <p className="text-sm leading-7">
                做空逻辑成立的关键不是“扫了 BSL”，而是：
                <span className="font-medium text-destructive">
                  {" "}
                  扫完之后无法站稳，并且买盘衰竭、结构转弱。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowUp className="h-5 w-5 text-chart-2" />
              情况二：扫 BSL 后考虑做多
            </CardTitle>
            <CardDescription>这是 breakout continuation 模型。</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
              <div>价格突破前高</div>
              <div className="text-chart-2">↑ 扫掉 BSL</div>
              <div>OI 持续增加</div>
              <div>CVD 同步上涨</div>
              <div>成交量放大</div>
              <div>回踩前高不破</div>
              <div className="font-medium text-chart-2">回踩确认后找多</div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <p className="mb-1 font-medium">入场条件</p>
                <p className="text-sm text-muted-foreground">
                  等价格站稳 BSL 上方，回踩前高不破，或者形成新的 higher low。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <p className="mb-1 font-medium">止损位置</p>
                <p className="text-sm text-muted-foreground">
                  放在回踩低点下方，或重新跌回前高下方后离场。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <p className="mb-1 font-medium">目标位置</p>
                <p className="text-sm text-muted-foreground">
                  看上方下一处清算区、订单墙、FVG 或更高周期阻力。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <p className="text-sm leading-7">
                做多逻辑成立的关键是：
                <span className="font-medium text-chart-2">
                  {" "}
                  扫完 BSL 后价格没有被打回，而是由新资金推动继续站稳。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-chart-3" />
              情况三：不做，等待确认
            </CardTitle>
            <CardDescription>
              很多时候最专业的选择不是做多或做空，而是先过滤噪音。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">信号混乱</h3>
                <p className="text-sm text-muted-foreground">
                  例如价格扫 BSL 后横盘，OI 小幅波动，CVD 没有明显方向， Funding
                  也不极端。这种情况说明市场暂时没有给出清晰方向。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">上下都有流动性</h3>
                <p className="text-sm text-muted-foreground">
                  如果上方刚扫完 BSL，但下方还有近距离 SSL，
                  价格可能先震荡洗盘，不适合急着追单。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-chart-3/20 bg-muted p-4">
              <p className="text-sm leading-7 text-muted-foreground">
                观望不是错过机会，而是在等市场告诉你：
                它到底是在诱多回落，还是在突破后换手。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              最终决策表
            </CardTitle>
            <CardDescription>
              扫 BSL 后，用这张表快速判断偏空、偏多还是观望。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="overflow-hidden rounded-xl border border-card-border">
              <div className="grid grid-cols-3 bg-muted p-3 text-sm font-medium">
                <div>现象</div>
                <div>说明</div>
                <div>倾向</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>扫 BSL 后快速跌回区间</div>
                <div className="text-muted-foreground">假突破概率上升</div>
                <div className="font-medium text-destructive">
                  等结构转弱后做空
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>价格突破，OI 下降</div>
                <div className="text-muted-foreground">可能是空头回补推动</div>
                <div className="font-medium text-destructive">偏空观察</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>价格突破，OI 上升，CVD 上升</div>
                <div className="text-muted-foreground">新资金主动进场</div>
                <div className="font-medium text-chart-2">回踩确认后做多</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>Funding 极高，追多情绪强</div>
                <div className="text-muted-foreground">
                  多头拥挤，诱多风险高
                </div>
                <div className="font-medium text-destructive">谨慎追多</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>突破后横盘，指标无方向</div>
                <div className="text-muted-foreground">市场尚未确认</div>
                <div className="font-medium text-chart-3">观望</div>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm leading-7">
                最实用的一句话：
                <span className="font-medium text-brand">
                  {" "}
                  扫 BSL 后，先判断它是“拿流动性后反转”，还是“拿流动性后站稳”。
                </span>
                前者等 MSS 做空，后者等回踩确认做多。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
