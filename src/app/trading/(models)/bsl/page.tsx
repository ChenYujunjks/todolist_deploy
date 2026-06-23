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
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
  Waves,
} from "lucide-react";

export default function BslSslPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Model
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            BSL / SSL 与扫流动性后的交易判断
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            BSL 和 SSL
            不是普通支撑阻力，而是止损、强平、追单和流动性聚集的位置。
            专业交易员不会因为价格扫掉流动性就立刻开单，而是观察扫掉前后的订单流、
            结构反应、CVD、OI、Funding
            和清算区，判断这是有效突破，还是流动性收割。
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-chart-2/10 text-chart-2">
                <ArrowUp className="h-5 w-5" />
              </div>
              <CardTitle>BSL：Buy-Side Liquidity</CardTitle>
              <CardDescription>上方买方流动性</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                BSL 通常位于前高、双顶、区间上沿、明显阻力位上方。
                这里聚集着空头止损、空头强平买单，以及突破追多订单。
              </p>
              <p>
                价格接近 BSL 不代表一定超买，也不代表马上做空。
                它首先代表：上方存在一个市场可能去争夺的流动性目标。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <ArrowDown className="h-5 w-5" />
              </div>
              <CardTitle>SSL：Sell-Side Liquidity</CardTitle>
              <CardDescription>下方卖方流动性</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                SSL 通常位于前低、双底、区间下沿、明显支撑位下方。
                这里聚集着多头止损、多头强平卖单，以及跌破追空订单。
              </p>
              <p>
                SSL 与 BSL 是对称逻辑。BSL 研究上方流动性，SSL 研究下方流动性。
                本页后面主要用 BSL 展开，SSL 可以反向理解。
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        <Card className="border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              核心结论
            </CardTitle>
            <CardDescription>扫之前看吸引力，扫之后看反应。</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm leading-7 text-muted-foreground">
              BSL / SSL
              的价值不是直接预测方向，而是帮助交易员识别市场可能争夺的位置。
              真正的交易依据来自扫掉流动性之后的反应：价格是否快速收回、是否站稳、
              是否形成支阻互换，以及 OI / CVD / Funding 是否支持延续。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm leading-7">
                执行顺序：
                <span className="font-medium text-brand">
                  {" "}
                  识别 BSL / SSL → 判断流动性吸引力 → 等待扫流动性 →
                  观察是否收回或站稳 → 用 OI / CVD / Funding 验证 →
                  再决定做多、做空或观望。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-10" />

        <section className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-3">
              Support / Resistance Flip
            </Badge>
            <h2 className="text-2xl font-semibold">
              为什么扫掉之后会形成支撑或阻力？
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle>1. 流动性被触发</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                价格扫掉 SSL 时，多头止损和追空订单被触发。 价格扫掉 BSL
                时，空头止损和突破追多订单被触发。
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle>2. 订单被吸收</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                如果大量订单被触发后，价格没有继续延续，说明另一侧资金正在吸收。
                这通常是反转或支阻互换的早期信号。
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <RotateCcw className="h-5 w-5" />
                </div>
                <CardTitle>3. 重新夺回结构</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                如果价格扫掉流动性后重新站回关键位，刚才追单的人会被套。
                他们后续止损或平仓，会反向推动价格。
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-10" />

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Waves className="h-5 w-5 text-brand" />扫 BSL
                之前：专业交易员怎么看？
              </CardTitle>
              <CardDescription>
                重点不是提前做空，而是判断上方流动性是否会被吸引。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                当价格接近前高、双顶或上方清算密集区时，BSL 会变成潜在目标。
                如果上方流动性很近很密集，而下方流动性较远，市场可能先向上扫掉
                BSL。
              </p>

              <div className="rounded-xl border border-card-border bg-muted p-4 font-mono text-xs">
                <div>价格接近前高 / BSL</div>
                <div>上方清算区密集</div>
                <div>CVD 没有明显转弱</div>
                <div>OI 没有快速下降</div>
                <div className="text-chart-2">→ 不急着空，等待是否扫高点</div>
              </div>

              <p>
                所以 BSL 在扫掉前，更像是一个
                <span className="font-medium text-foreground">
                  流动性吸引目标
                </span>
                ， 而不是直接的做空理由。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-brand" />扫 BSL
                之后：真正的信息才出现
              </CardTitle>
              <CardDescription>
                重点是判断：这是有效突破，还是假突破。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                BSL 被扫之后，交易员会观察价格是否站稳前高上方。
                如果快速跌回区间，说明这次上涨可能只是拿流动性；
                如果回踩不破并继续上行，说明突破可能有效。
              </p>

              <div className="rounded-xl border border-card-border bg-muted p-4 font-mono text-xs">
                <div>扫掉 BSL</div>
                <div>↓</div>
                <div>看是否站稳前高</div>
                <div>↓</div>
                <div>看 OI / CVD / Funding</div>
                <div>↓</div>
                <div className="text-brand">决定做空、做多或观望</div>
              </div>

              <p>
                开单依据不是“扫了 BSL”，而是
                <span className="font-medium text-foreground">
                  扫完之后市场的反应
                </span>
                。
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <TrendingDown className="h-5 w-5" />
                情况一：扫 BSL 后做空
              </CardTitle>
              <CardDescription>
                Liquidity Sweep Reversal 假突破模型
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>价格突破前高</div>
                <div className="text-chart-2">↑ 扫掉 BSL</div>
                <div>触发空头止损 / 空头爆仓</div>
                <div>OI 下降或没有明显增加</div>
                <div>CVD 背离 / 主动买盘不足</div>
                <div className="text-destructive">↓ 快速跌回前高下方</div>
                <div className="font-medium text-destructive">
                  等结构转弱后找空
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                做空逻辑成立的关键不是扫掉 BSL，而是扫完后无法站稳。
                如果上涨主要来自空头回补，而不是新买盘推动，突破失败后容易回落。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <TrendingUp className="h-5 w-5" />
                情况二：扫 BSL 后做多
              </CardTitle>
              <CardDescription>
                Breakout Continuation 真突破模型
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>价格突破前高</div>
                <div className="text-chart-2">↑ 扫掉 BSL</div>
                <div>OI 持续增加</div>
                <div>CVD 同步上涨</div>
                <div>成交量放大</div>
                <div>回踩前高不破</div>
                <div className="font-medium text-chart-2">回踩确认后找多</div>
              </div>

              <p className="text-sm text-muted-foreground">
                做多逻辑成立的关键是：扫完 BSL 后价格没有被打回，
                而是站稳在前高上方，并且有新资金和主动买盘继续跟随。
              </p>
            </CardContent>
          </Card>
        </section>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-brand" />扫 BSL 后的指标验证框架
            </CardTitle>
            <CardDescription>
              用订单流判断突破质量，而不是只看价格有没有破前高。
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <Activity className="h-4 w-4 text-brand" />
                1. OI：上涨是谁推动的？
              </h3>
              <p className="text-sm text-muted-foreground">
                扫 BSL 后，如果 OI 下降，说明上涨可能主要来自空头回补； 如果 OI
                上升，说明有新仓位进入，突破质量更强。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <Gauge className="h-4 w-4 text-chart-2" />
                2. CVD：主动买盘是否跟随？
              </h3>
              <p className="text-sm text-muted-foreground">
                如果价格创新高，但 CVD 没有同步创新高，说明主动买盘不足。 如果
                CVD 同步上升，说明真实买盘更强。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <Flame className="h-4 w-4 text-destructive" />
                3. Funding：市场是否过度拥挤？
              </h3>
              <p className="text-sm text-muted-foreground">
                Funding 很高时，多头拥挤，扫 BSL 后更容易出现诱多回落。 Funding
                不极端时，突破延续的压力会小一些。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <ShieldAlert className="h-4 w-4 text-chart-3" />
                4. Liquidation Map：是否打到清算堆？
              </h3>
              <p className="text-sm text-muted-foreground">
                如果刚好扫到上方空头清算密集区后快速回落，
                说明这次上涨可能只是为了拿流动性。
                如果清算后继续站稳，则偏趋势延续。
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-10" />

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Waves className="h-5 w-5" />
              </div>
              <CardTitle>真突破：原 BSL 变支撑</CardTitle>
              <CardDescription>突破站稳后的支阻互换</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                BSL 被扫后，如果价格没有跌回前高下方，而是回踩前高守住，
                说明原来的阻力可能转化为支撑。
              </p>
              <div className="rounded-xl border bg-muted/40 p-4 font-mono text-xs">
                BSL 被扫
                <br />
                ↓
                <br />
                价格站稳前高上方
                <br />
                ↓
                <br />
                回踩不破
                <br />
                ↓
                <br />
                OI / CVD 支持
                <br />
                ↓
                <br />
                原阻力变支撑
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                <RotateCcw className="h-5 w-5" />
              </div>
              <CardTitle>假突破：原 BSL 变阻力</CardTitle>
              <CardDescription>扫流动性后的反转模型</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                BSL 被扫后，如果价格快速跌回前高下方，并且回踩无法重新站上，
                说明上方买盘被吸收，原 BSL 可能重新变成阻力。
              </p>
              <div className="rounded-xl border bg-muted/40 p-4 font-mono text-xs">
                BSL 被扫
                <br />
                ↓
                <br />
                快速跌回区间
                <br />
                ↓
                <br />
                回踩站不上
                <br />
                ↓
                <br />
                CVD 转弱 / OI 下降
                <br />
                ↓
                <br />原 BSL 变阻力
              </div>
            </CardContent>
          </Card>
        </section>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-chart-3" />
              情况三：不做，等待确认
            </CardTitle>
            <CardDescription>
              很多时候最专业的选择不是做多或做空，而是过滤噪音。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              如果扫 BSL 后横盘，OI 小幅波动，CVD 没有明显方向， Funding
              也不极端，说明市场暂时没有给出清晰方向。 这种时候不要强行解释。
            </p>

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
              以 BSL 为例，快速判断偏空、偏多还是观望。
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
                <div>接近 BSL，但还没扫掉</div>
                <div className="text-muted-foreground">上方存在流动性吸引</div>
                <div className="font-medium text-chart-3">等待，不急着空</div>
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
                <div className="font-medium text-destructive">谨慎追多</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>价格突破，OI 上升，CVD 上升</div>
                <div className="text-muted-foreground">新资金主动进场</div>
                <div className="font-medium text-chart-2">回踩确认后做多</div>
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
                  BSL / SSL 是流动性地图，不是开单按钮。扫之前看吸引力，
                  扫之后看反应；站稳才考虑延续，跌回才考虑反转。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
