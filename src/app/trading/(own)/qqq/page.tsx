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
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeAlert,
  BarChart3,
  Bitcoin,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Coins,
  Crosshair,
  Layers,
  LineChart,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  XCircle,
} from "lucide-react";

const btcCycleChecklist = [
  "比较周期位置，而不是只比较年份",
  "观察价格是否处于日线 EMA200 上方或下方",
  "比较 EMA200 的方向和斜率",
  "比较反弹幅度、持续时间和市场结构",
  "结合 ETF 资金、现货需求、OI 和 Funding 验证",
  "明确历史类比失效的条件",
];

const goldLiquidityLevels = [
  "亚洲盘高点与低点",
  "前一交易日高点与低点",
  "周高、周低与整数关口",
  "伦敦开盘区间",
  "纽约开盘前区间",
  "重大数据公布前形成的窄幅区间",
];

const stockLongConditions = [
  "周线和日线趋势仍然向上",
  "EMA55、EMA100、EMA200 保持多头排列",
  "被测试的均线仍然向上倾斜",
  "价格没有破坏关键周线结构低点",
  "回调到均线后出现扫低、收回和结构转强",
  "上方存在足够的风险收益空间",
];

export default function MultiMarketTradingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Multi-Market Trading Framework
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            BTC、ETH、XAU 与美股指数交易框架
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            不同市场可以使用相同的市场结构、流动性、EMA 和风险管理方法，
            但不能机械地使用同一种入场逻辑。BTC 和 ETH 更强调周期与杠杆结构，
            XAUUSDT 更强调时段流动性和宏观数据，SPY 与 QQQ
            更适合在长期上升趋势中寻找回调做多机会。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-brand" />
              我的核心交易思路
            </CardTitle>

            <CardDescription>
              使用不同市场最有优势的交易模型，而不是强行用一种方法交易所有资产。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-chart-3/20 bg-chart-3/5 p-4">
                <Bitcoin className="mb-3 h-5 w-5 text-chart-3" />

                <h3 className="font-semibold">BTC / ETH</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  研究四年周期、历史路径、ETF
                  资金、市场结构和衍生品仓位，提前编写多个条件式剧本。
                </p>
              </div>

              <div className="rounded-xl border border-chart-4/20 bg-chart-4/5 p-4">
                <Coins className="mb-3 h-5 w-5 text-chart-4" />

                <h3 className="font-semibold">XAUUSDT</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  重点观察亚洲、伦敦和纽约时段之间的流动性清扫，
                  等待扫损后的收回和低时间框架结构确认。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <LineChart className="mb-3 h-5 w-5 text-chart-2" />

                <h3 className="font-semibold">SPY / QQQ</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  不主动猜顶做空，优先在日线或 4H 的 EMA55、EMA100 和 EMA200
                  支撑区域寻找顺势多单。
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              三类模型的共同原则是：
              <span className="font-medium text-brand">
                {" "}
                位置只负责提醒，结构确认才负责入场。
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bitcoin className="h-5 w-5 text-chart-3" />
              Model 1：BTC / ETH 周期剧本
            </CardTitle>

            <CardDescription>
              使用历史周期作为条件式参考，而不是认为四年前的路径一定会机械重演。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="font-medium text-brand">核心假设</p>

              <p className="mt-2 text-sm text-muted-foreground">
                币圈可能存在大约四年的周期节奏，因此可以比较 2026 年 6 月至 9
                月与四年前相似阶段的市场行为。但是需要比较的是周期位置、
                市场结构和资金条件，而不是只比较日历日期。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-card-border p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                  <BarChart3 className="h-4 w-4 text-chart-3" />
                  上一轮观察
                </h3>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    上一轮 BTC 熊市反弹较弱，价格甚至没有有效触碰日线 EMA200。
                  </p>

                  <p>
                    ETH 的熊市反弹最高测试日线 EMA200 附近，随后再次进入下跌。
                  </p>

                  <p>
                    当时可以把日线 EMA200 看成熊市反弹中的潜在动态阻力区域。
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <TrendingUp className="h-4 w-4" />
                  本轮新的变化
                </h3>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    本轮 BTC 更轻松地测试日线 EMA200，说明价格承接能力、
                    反弹弹性或市场结构可能比上一轮更强。
                  </p>

                  <p>
                    ETF、机构资金、合规投资渠道和更成熟的衍生品市场，
                    可能是造成这一差异的重要因素。
                  </p>

                  <p>
                    但触碰 EMA200 本身不能单独证明机构持续买入，
                    仍需结合资金流和现货需求验证。
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Layers className="h-4 w-4 text-brand" />
                周期类比检查清单
              </h3>

              <div className="grid gap-3 md:grid-cols-2">
                {btcCycleChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-card-border bg-background p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-chart-2" />

                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <ScenarioCard
                title="剧本 A"
                subtitle="EMA200 继续压制"
                icon={<TrendingDown className="h-4 w-4" />}
                tone="bearish"
                items={[
                  "价格从下方测试 EMA200",
                  "EMA200 仍然向下",
                  "日线无法稳定站上",
                  "LTF 出现 bearish MSS",
                  "跌破反弹中的关键 higher low",
                ]}
              />

              <ScenarioCard
                title="剧本 B"
                subtitle="突破后继续深度反弹"
                icon={<Activity className="h-4 w-4" />}
                tone="neutral"
                items={[
                  "日线收盘站上 EMA200",
                  "但更高周期 lower high 未突破",
                  "EMA200 仍然向下或走平",
                  "上方仍有周线供给区域",
                  "暂时视为更深的熊市反弹",
                ]}
              />

              <ScenarioCard
                title="剧本 C"
                subtitle="历史类比失效"
                icon={<TrendingUp className="h-4 w-4" />}
                tone="bullish"
                items={[
                  "连续日线收盘站上 EMA200",
                  "回踩 EMA200 后获得支撑",
                  "突破日线关键 lower high",
                  "EMA200 开始走平或向上",
                  "现货需求持续支持上涨",
                ]}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-chart-4" />
              Model 2：XAUUSDT 双向扫损模型
            </CardTitle>

            <CardDescription>
              黄金经常先清扫区间两侧的流动性，再在伦敦、纽约时段或宏观数据后形成真正方向。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-xl border border-chart-4/20 bg-chart-4/5 p-4">
              <p className="font-medium text-chart-4">为什么容易双向扫损</p>

              <p className="mt-2 text-sm text-muted-foreground">
                亚洲、伦敦和纽约时段的主要参与者不同。亚洲盘经常先形成区间，
                伦敦盘突破一侧寻找流动性，纽约盘再根据美元、美债收益率和经济数据重新定价。
                因此图表上经常表现为先扫一侧，再扫另一侧，最后才形成持续扩张。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <ProcessCard
                number="01"
                title="亚洲盘形成区间"
                description="波动相对有限，在高点和低点外侧逐渐积累止损单与突破挂单。"
              />

              <ProcessCard
                number="02"
                title="伦敦盘寻找流动性"
                description="伦敦开盘后常突破亚洲高点或低点，触发第一批止损和追价订单。"
              />

              <ProcessCard
                number="03"
                title="纽约盘重新定价"
                description="美国数据、美元和收益率推动第二轮波动，真正方向可能在此时形成。"
              />
            </div>

            <div className="rounded-xl border border-card-border p-4">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Target className="h-4 w-4 text-chart-4" />
                黄金常见流动性位置
              </h3>

              <div className="grid gap-3 md:grid-cols-2">
                {goldLiquidityLevels.map((level) => (
                  <div
                    key={level}
                    className="flex items-center gap-3 rounded-lg bg-muted/40 p-3"
                  >
                    <CircleDollarSign className="h-4 w-4 shrink-0 text-chart-4" />

                    <span className="text-sm">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowUp className="h-4 w-4" />
                  做多确认流程
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格接近前低或亚洲低点</div>
                  <div className="text-destructive">向下扫掉 SSL</div>
                  <div>迅速重新收回关键位置</div>
                  <div>出现 bullish displacement</div>
                  <div>突破最后一个 lower high</div>
                  <div className="text-chart-2">回踩不破，观察做多</div>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowDown className="h-4 w-4" />
                  做空确认流程
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格接近前高或亚洲高点</div>
                  <div className="text-chart-2">向上扫掉 BSL</div>
                  <div>重新跌回关键位置下方</div>
                  <div>出现 bearish displacement</div>
                  <div>跌破最后一个 higher low</div>
                  <div className="text-destructive">反抽不破，观察做空</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <div className="flex items-start gap-3">
                <BadgeAlert className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />

                <div>
                  <p className="font-medium text-destructive">
                    XAUUSDT 的额外风险
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    XAUUSDT 通常是以 USDT
                    结算的永续合约。除了黄金本身的波动，还需要考虑杠杆、
                    资金费率、标记价格、交易所流动性和连续清算。不要把传统黄金图表上的止损距离，
                    直接照搬到高杠杆永续产品。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-chart-2" />
              Model 3：SPY / QQQ EMA 回调做多
            </CardTitle>

            <CardDescription>
              顺应美股指数长期向上的结构，在日线或 4H
              均线支撑区域寻找多头恢复，而不是频繁猜顶做空。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <p className="font-medium text-chart-2">核心交易偏好</p>

              <p className="mt-2 text-sm text-muted-foreground">
                SPY 和 QQQ
                长期经常保持日线、周线均线向上，因此优先等待价格回调到
                EMA55、EMA100 或 EMA200
                附近，再寻找做多确认。只做多并不代表永远看涨，而是主动选择更符合指数长期漂移的方向。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <EmaCard
                ema="EMA55"
                title="强趋势普通回调"
                description="适合趋势较强、日线结构完整时的浅度回调，但震荡中容易反复穿越。"
              />

              <EmaCard
                ema="EMA100"
                title="中等深度回调"
                description="适合经历明显修正后观察中期趋势是否继续，必须结合前高前低结构。"
              />

              <EmaCard
                ema="EMA200"
                title="长期趋势分界"
                description="市场关注度较高，但触碰并不等于安全抄底，需要更严格的 reclaim 确认。"
              />
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-chart-2" />
                高质量回调多单条件
              </h3>

              <div className="grid gap-3 md:grid-cols-2">
                {stockLongConditions.map((condition) => (
                  <div
                    key={condition}
                    className="flex items-start gap-3 rounded-lg border border-chart-2/15 bg-chart-2/5 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-chart-2" />

                    <span className="text-sm text-muted-foreground">
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-card-border p-4">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <ArrowRight className="h-4 w-4 text-brand" />
                推荐执行流程
              </h3>

              <div className="grid gap-3 md:grid-cols-5">
                {[
                  "确认周线趋势",
                  "等待价格回调",
                  "观察 EMA 区域",
                  "等待扫低与收回",
                  "结构转多后入场",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="relative rounded-lg border border-card-border bg-background p-3"
                  >
                    <div className="mb-2 text-xs font-medium text-brand">
                      STEP {index + 1}
                    </div>

                    <p className="text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <Sparkles className="h-4 w-4" />
                  可以考虑做多
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• 日线均线维持多头排列</p>
                  <p>• EMA55、100、200 仍然向上</p>
                  <p>• 回调没有破坏周线结构</p>
                  <p>• 价格扫低后重新站回均线</p>
                  <p>• 4H 或 1H 出现多头结构转变</p>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <XCircle className="h-4 w-4" />
                  应该放弃
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• 均线走平并相互缠绕</p>
                  <p>• EMA200 已经向下</p>
                  <p>• 周线关键结构低点被跌破</p>
                  <p>• 价格只触碰均线，没有 reclaim</p>
                  <p>• 止损距离过大，风险收益不合理</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-destructive" />
              跨市场组合风险
            </CardTitle>

            <CardDescription>
              BTC、ETH、QQQ、SPY
              和黄金看似不同，但部分时间可能在交易同一个宏观因子。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              同时做多 BTC、ETH、QQQ 和 SPY，不一定是四笔独立交易。
              当市场共同受流动性、美元和利率预期驱动时，这些仓位可能高度相关。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-card-border bg-background p-4">
                <p className="mb-3 font-medium">表面仓位</p>

                <div className="space-y-2 font-mono text-sm text-muted-foreground">
                  <div>BTC Long：风险 0.5%</div>
                  <div>ETH Long：风险 0.5%</div>
                  <div>QQQ Long：风险 0.5%</div>
                  <div>SPY Long：风险 0.5%</div>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <p className="mb-3 font-medium text-destructive">真实风险</p>

                <p className="text-sm text-muted-foreground">
                  如果四笔仓位都在押注风险偏好改善或美元走弱，
                  极端情况下可能接近一次集中的 2% 方向性风险。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              最终交易框架
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-xl bg-background p-4 font-mono text-sm">
              <div>BTC / ETH：周期背景 + 资金结构 + 情景剧本</div>
              <div>XAUUSDT：时段流动性 + Sweep + Reclaim + MSS</div>
              <div>SPY / QQQ：上升趋势 + EMA 回调 + 多头确认</div>
            </div>

            <p className="text-muted-foreground">
              所有市场都遵循同一条原则：
              <span className="font-medium text-brand">
                {" "}
                位置提供关注区域，流动性解释市场行为，结构转变提供入场，
                结构失效决定止损。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

type ScenarioCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tone: "bullish" | "bearish" | "neutral";
  items: string[];
};

function ScenarioCard({
  title,
  subtitle,
  icon,
  tone,
  items,
}: ScenarioCardProps) {
  const toneClasses = {
    bullish: {
      wrapper: "border-chart-2/20 bg-chart-2/5",
      title: "text-chart-2",
    },
    bearish: {
      wrapper: "border-destructive/20 bg-destructive/5",
      title: "text-destructive",
    },
    neutral: {
      wrapper: "border-chart-3/20 bg-chart-3/5",
      title: "text-chart-3",
    },
  };

  const currentTone = toneClasses[tone];

  return (
    <div className={`rounded-xl border p-4 ${currentTone.wrapper}`}>
      <div
        className={`mb-1 flex items-center gap-2 font-semibold ${currentTone.title}`}
      >
        {icon}
        {title}
      </div>

      <p className="mb-4 text-sm font-medium">{subtitle}</p>

      <div className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
};

function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="rounded-xl border border-card-border bg-background p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-sm text-brand">{number}</span>
        <Clock3 className="h-4 w-4 text-muted-foreground" />
      </div>

      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

type EmaCardProps = {
  ema: string;
  title: string;
  description: string;
};

function EmaCard({ ema, title, description }: EmaCardProps) {
  return (
    <div className="rounded-xl border border-card-border bg-background p-4">
      <Badge variant="outline" className="mb-3 border-chart-2/30 text-chart-2">
        {ema}
      </Badge>

      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
