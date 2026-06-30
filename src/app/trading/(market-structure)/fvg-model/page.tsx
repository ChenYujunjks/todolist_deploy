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
  ArrowDown,
  ArrowUp,
  BadgeAlert,
  CandlestickChart,
  CheckCircle2,
  CircleDot,
  Crosshair,
  Eye,
  LineChart,
  Repeat,
  ShieldAlert,
  Target,
  TrendingDown,
  TrendingUp,
  XCircle,
} from "lucide-react";

export default function FVGModelPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            ICT Fair Value Gap Model
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Bullish / Bearish FVG：ICT 里面真正怎么用？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            FVG 不是看到就进场的信号。它在 ICT 里面更像是一个
            回踩入场区域，用来配合流动性清扫、市场结构转变和趋势延续。
            专业交易员不会交易“FVG 本身”，而是交易 FVG 出现的位置和背景。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CandlestickChart className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              FVG = 价格不平衡区域；ICT 用法 = 等价格回到不平衡区域重新定价。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              FVG 的本质是价格在短时间内快速推动，导致中间某些价格没有充分成交。
              所以它不是普通支撑阻力，而是一个价格可能回补、重新定价的区域。
            </p>

            <p className="text-muted-foreground">
              ICT 里面真正有价值的 FVG，通常不是单独出现的，而是出现在：
              <span className="font-medium text-brand">
                {" "}
                扫流动性之后、市场结构转变之后，或者趋势行情的强势推动之后。
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircleDot className="h-5 w-5 text-chart-3" />
              FVG 在 ICT 里面的角色
            </CardTitle>
            <CardDescription>
              它不是方向信号，而是入场区域、回踩区域、风险定义区域。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              很多人把 FVG 理解错了，以为 bullish FVG 就一定做多， bearish FVG
              就一定做空。但在 ICT 里面，FVG 更像是一个
              “价格回补后可能继续原方向”的区域。
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">入场区域</h3>
                <p className="text-sm text-muted-foreground">
                  当方向已经由流动性和结构确认后，FVG 可以作为回踩入场位置。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">重新定价区域</h3>
                <p className="text-sm text-muted-foreground">
                  价格快速离开后，后续可能回到 FVG 区域重新成交，再继续移动。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">风险参考区域</h3>
                <p className="text-sm text-muted-foreground">
                  FVG 可以辅助设计入场、止损和止盈，但不能单独决定交易方向。
                </p>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">交易员视角</h3>

              <p className="text-sm text-muted-foreground">
                FVG 的价值不是“它存在”，而是它出现之前发生了什么。
                如果前面没有扫流动性、没有结构转变、没有明显推动， 这个 FVG
                很可能只是图表噪音。
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                Bullish FVG
              </CardTitle>
              <CardDescription>
                多头推动留下的不平衡区域，常用于回踩做多。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>标准理解：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>第 1 根 K 线 high</div>
                <div className="text-chart-2">到</div>
                <div>第 3 根 K 线 low</div>
                <div className="font-medium text-chart-2">
                  中间区域 = Bullish FVG
                </div>
              </div>

              <p className="text-muted-foreground">
                Bullish FVG 通常代表买方强势推动。真正的用法不是看到它就追多，
                而是等价格回踩这个区域，看买方是否继续防守。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                Bearish FVG
              </CardTitle>
              <CardDescription>
                空头推动留下的不平衡区域，常用于反弹做空。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>标准理解：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>第 1 根 K 线 low</div>
                <div className="text-destructive">到</div>
                <div>第 3 根 K 线 high</div>
                <div className="font-medium text-destructive">
                  中间区域 = Bearish FVG
                </div>
              </div>

              <p className="text-muted-foreground">
                Bearish FVG 通常代表卖方强势推动。真正的用法不是看到它就追空，
                而是等价格反弹这个区域，看卖方是否继续压制。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <BadgeAlert className="h-5 w-5" />
              为什么 FVG 不能单独用？
            </CardTitle>
            <CardDescription>
              单独看 FVG，噪音太多，尤其是在低周期。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              FVG 在任何强一点的 K 线推动中都可能出现。 如果只要看到 FVG
              就做单，很容易变成过度交易。
            </p>

            <div className="rounded-xl border border-destructive/20 bg-muted p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                单独使用 FVG 的问题
              </h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>低周期 FVG 数量太多</div>
                <div>很多 FVG 没有流动性背景</div>
                <div>很多 FVG 没有结构转变</div>
                <div>趋势强的时候逆势 FVG 容易被直接打穿</div>
                <div className="font-medium text-destructive">
                  所以 FVG 不能作为单独开仓理由
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              更专业的理解是：FVG 是执行工具，不是方向工具。
              方向要从市场结构、流动性位置、扫盘后的反应里面判断。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-brand" />
              清算图扫流动性后，怎么用 FVG？
            </CardTitle>
            <CardDescription>
              清算图负责告诉你哪里可能被扫，FVG 负责告诉你扫完后哪里可以等回踩。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              清算热力图上的亮区，可以理解成潜在的杠杆清算区域。
              但价格扫到亮区之后，不代表立刻反转。真正要看的是：
              扫完之后价格是接受这个方向，还是快速拒绝这个方向。
            </p>

            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                偏多模型：下扫清算区后出现 Bullish FVG
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 清算图下方有明显亮区</div>
                <div className="text-destructive">2. 价格下扫该区域</div>
                <div>3. 下扫后没有继续下跌</div>
                <div className="text-chart-2">4. 价格重新收回关键低点上方</div>
                <div>5. 低周期出现 bullish MSS</div>
                <div>6. 向上推动形成 Bullish FVG</div>
                <div className="font-medium text-chart-2">
                  7. 回踩 Bullish FVG，观察做多机会
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的核心是：下方流动性被扫掉后，卖方没有延续能力。 随后的
                Bullish FVG
                不是单独信号，而是买方重新夺回短线结构后的回踩入场区域。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                偏空模型：上扫清算区后出现 Bearish FVG
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 清算图上方有明显亮区</div>
                <div className="text-chart-2">2. 价格上扫该区域</div>
                <div>3. 上扫后没有继续上涨</div>
                <div className="text-destructive">
                  4. 价格重新跌回关键高点下方
                </div>
                <div>5. 低周期出现 bearish MSS</div>
                <div>6. 向下推动形成 Bearish FVG</div>
                <div className="font-medium text-destructive">
                  7. 反弹 Bearish FVG，观察做空机会
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的核心是：上方流动性被扫掉后，买方无法维持突破。 随后的
                Bearish FVG
                是价格拒绝上方区域之后，空头重新掌控短线结构的回踩区域。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-brand" />
              扫完流动性后：接受还是拒绝？
            </CardTitle>
            <CardDescription>
              这是判断 FVG 能不能参与交易的核心。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <CheckCircle2 className="h-4 w-4" />
                  接受价格
                </h3>

                <p className="text-sm text-muted-foreground">
                  价格扫完流动性后，站稳在突破区域外，回踩不破，
                  继续向下一组流动性移动。这种情况更像趋势延续，
                  不适合马上反手。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <XCircle className="h-4 w-4" />
                  拒绝价格
                </h3>

                <p className="text-sm text-muted-foreground">
                  价格扫完流动性后，快速回到原区间，并出现反向结构转变。
                  这种情况更接近 liquidity sweep reversal， 后续 FVG
                  才有交易意义。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">交易员视角</h3>

              <p className="text-sm text-muted-foreground">
                价格扫清算图亮区之后，不要立刻反手。先看它是否快速收回，
                再看低周期是否出现 MSS。只有当市场拒绝扫盘方向， 并用
                displacement 留下 FVG，FVG 才能作为回踩入场区。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-chart-2" />
              趋势行情中怎么用 FVG？
            </CardTitle>
            <CardDescription>
              趋势行情里，FVG 更多用于顺势回踩，而不是逆势摸顶抄底。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              在强趋势行情中，FVG 最稳定的用法通常是顺势使用。
              也就是说，上升趋势中优先看 Bullish FVG 回踩做多； 下降趋势中优先看
              Bearish FVG 反弹做空。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <TrendingUp className="h-4 w-4" />
                  上升趋势中的 Bullish FVG
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格结构 HH / HL</div>
                  <div>向上 displacement</div>
                  <div className="text-chart-2">形成 Bullish FVG</div>
                  <div>价格回踩 FVG</div>
                  <div>没有跌破前一个 HL</div>
                  <div className="font-medium text-chart-2">顺势观察做多</div>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <TrendingDown className="h-4 w-4" />
                  下降趋势中的 Bearish FVG
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格结构 LH / LL</div>
                  <div>向下 displacement</div>
                  <div className="text-destructive">形成 Bearish FVG</div>
                  <div>价格反弹 FVG</div>
                  <div>没有突破前一个 LH</div>
                  <div className="font-medium text-destructive">
                    顺势观察做空
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">趋势里的关键点</h3>

              <p className="text-sm text-muted-foreground">
                趋势行情中，不是所有反向 FVG 都值得做。 比如强上涨中出现小的
                bearish FVG，可能只是回调噪音。 交易员更重视和大趋势一致的
                FVG，因为它更可能是顺势回踩区域。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              FVG 能不能指导止盈止损？
            </CardTitle>
            <CardDescription>
              可以提供参考，但不能机械地把 FVG 边界当作唯一止损止盈。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              FVG 可以帮助交易员规划交易，但真正的止损通常要结合 sweep high /
              sweep low、结构高低点和交易方向。止盈则通常看对侧流动性，
              而不是只看某个 FVG 的边界。
            </p>

            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                做多时的参考方式
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>Entry：回踩 Bullish FVG</div>
                <div>Invalidation：跌破 sweep low / 关键 HL</div>
                <div className="text-destructive">
                  Stop Loss：通常放在 sweep low 下方
                </div>
                <div className="text-chart-2">
                  Take Profit：看上方 BSL / 清算亮区 / 前高
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                做多时，不建议机械把止损放在 Bullish FVG 下边界。
                因为价格可能刺穿 FVG 后再收回。更稳的失效位通常是扫低点下方，
                或者导致多头结构失效的位置。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空时的参考方式
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>Entry：反弹 Bearish FVG</div>
                <div>Invalidation：突破 sweep high / 关键 LH</div>
                <div className="text-destructive">
                  Stop Loss：通常放在 sweep high 上方
                </div>
                <div className="text-chart-2">
                  Take Profit：看下方 SSL / 清算亮区 / 前低
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                做空时，也不要机械把止损放在 Bearish FVG 上边界。
                真正的失效条件是价格重新接受上方价格，并破坏空头结构。
              </p>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">
                关于止盈的交易员理解
              </h3>

              <p className="text-sm text-muted-foreground">
                FVG 更适合指导入场和失效区域，而不是主要止盈目标。
                止盈目标通常看对侧流动性：做多看上方前高、equal highs、
                空头清算区；做空看下方前低、equal lows、多头清算区。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <CheckCircle2 className="h-5 w-5" />
              有效 FVG 检查清单
            </CardTitle>
            <CardDescription>
              一个 FVG 想要变成可交易区域，至少要通过这些检查。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">确认 1：</span>
              它是否出现在扫流动性之后，而不是随机出现？
            </p>

            <p>
              <span className="font-medium">确认 2：</span>
              扫完之后价格是接受，还是快速拒绝？
            </p>

            <p>
              <span className="font-medium">确认 3：</span>
              是否出现 MSS / CHoCH，证明短线结构发生变化？
            </p>

            <p>
              <span className="font-medium">确认 4：</span>
              形成 FVG 的推动是否足够强，有没有明显 displacement？
            </p>

            <p>
              <span className="font-medium">确认 5：</span>
              趋势行情中，这个 FVG 是否和主趋势方向一致？
            </p>

            <p>
              <span className="font-medium">确认 6：</span>
              回踩 FVG 后，价格是否出现预期方向的反应？
            </p>

            <p>
              <span className="font-medium">确认 7：</span>
              止损是否有明确失效位，止盈是否有对侧流动性目标？
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-destructive" />
              什么时候放弃这个 FVG？
            </CardTitle>
            <CardDescription>
              FVG 只是计划区域，不是必须生效的区域。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-xl border border-destructive/20 bg-muted p-4">
              <h3 className="mb-3 font-semibold text-destructive">失效条件</h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格回补 FVG 后没有任何反应</div>
                <div>直接穿透 FVG 并接受该区域</div>
                <div>做多时跌破 sweep low / 关键 HL</div>
                <div>做空时突破 sweep high / 关键 LH</div>
                <div>价格结构重新反向</div>
                <div className="font-medium text-destructive">
                  放弃该 FVG 的交易意义
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              对交易员来说，FVG 不是信仰。价格如果没有在 FVG 区域产生预期反应，
              或者直接破坏了结构失效位，就说明原来的交易计划不成立。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <Repeat className="h-5 w-5" />
              一句话总结
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg leading-8">
              FVG 在 ICT 里面不是独立买卖信号，而是：
              <span className="font-medium text-brand">
                {" "}
                扫流动性之后、结构转变之后、趋势推动之后留下的回踩入场区域。
                它可以帮助规划入场和失效位置，但止盈主要仍然看对侧流动性。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
