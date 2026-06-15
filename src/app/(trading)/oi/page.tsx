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
  Database,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function OIPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            OI 是什么？专业交易员怎么用它判断仓位？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            OI，全称 Open Interest，中文叫未平仓量。它不是方向指标，
            而是用来判断市场里是否有新仓位进场，或者旧仓位正在释放。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              OI 回答的问题不是涨跌，而是：市场里有多少仓位正在参与。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              OI 上升，说明有新合约仓位进入市场；OI
              下降，说明仓位正在平仓、爆仓或释放。
            </p>

            <p className="text-muted-foreground">
              专业交易员看 OI，不是简单地说 OI 涨就看多、OI 跌就看空，
              而是把它和价格一起看：
              <span className="font-medium text-brand">
                {" "}
                价格变化有没有新仓位支持？
              </span>
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                OI 上升
              </CardTitle>
              <CardDescription>新仓位进入市场</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>OI 上升说明市场参与度增加：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>价格波动变大</div>
                <div className="text-chart-2">OI 上升</div>
                <div>新多头 / 新空头进场</div>
                <div className="font-medium text-chart-2">
                  趋势可能正在积累能量
                </div>
              </div>

              <p className="text-muted-foreground">
                但 OI
                上升本身不能告诉你方向，因为每一个合约都有一个多头和一个空头。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                OI 下降
              </CardTitle>
              <CardDescription>仓位正在释放</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>OI 下降说明市场中已有仓位正在减少：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>价格快速波动</div>
                <div className="text-destructive">OI 下降</div>
                <div>平仓 / 止损 / 爆仓</div>
                <div className="font-medium text-destructive">
                  原有仓位正在退出
                </div>
              </div>

              <p className="text-muted-foreground">
                OI
                下降通常代表一波行情的仓位释放，趋势可能进入短暂缓和或反弹阶段。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-chart-3" />
              价格 + OI 的四种核心组合
            </CardTitle>
            <CardDescription>
              这是专业交易员最常用的 OI 判断框架。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-chart-2">
                  <TrendingUp className="h-4 w-4" />
                  价格涨 + OI 涨
                </h3>
                <p className="text-sm text-muted-foreground">
                  有新仓位进场推动上涨。通常偏趋势延续，但还要结合 Funding
                  判断是否多头过度拥挤。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand">
                  <TrendingUp className="h-4 w-4" />
                  价格涨 + OI 跌
                </h3>
                <p className="text-sm text-muted-foreground">
                  更像空头回补，不一定是真多头趋势。上涨如果没有新仓支持，持续性要打折。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-destructive">
                  <TrendingDown className="h-4 w-4" />
                  价格跌 + OI 涨
                </h3>
                <p className="text-sm text-muted-foreground">
                  有新仓位进场推动下跌。通常偏空头延续，但要警惕跌到 SSL
                  后卖盘被吸收。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand">
                  <TrendingDown className="h-4 w-4" />
                  价格跌 + OI 跌
                </h3>
                <p className="text-sm text-muted-foreground">
                  更像多头平仓或爆仓释放。下跌动能可能进入释放阶段，要小心反弹。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              OI 在实际开单中的用法
            </CardTitle>
            <CardDescription>
              OI 用来判断这波行情是新仓推动，还是旧仓释放。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                做多模型：扫 SSL 后，OI 释放再重新增加
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格跌破前低</div>
                <div className="text-destructive">↓ 扫 SSL</div>
                <div>OI 快速下降</div>
                <div>多头止损 / 空头止盈释放</div>
                <div>价格重新收回区间</div>
                <div className="text-chart-2">回踩不破，OI 重新增加</div>
                <div className="font-medium text-chart-2">观察做多机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是：下方流动性被扫后，旧仓位先释放，
                如果价格收回并且 OI 重新增加，说明可能有新多头开始介入。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空模型：扫 BSL 后，OI 释放再重新增加
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格突破前高</div>
                <div className="text-chart-2">↑ 扫 BSL</div>
                <div>OI 快速下降</div>
                <div>空头止损 / 多头止盈释放</div>
                <div>价格重新跌回区间</div>
                <div className="text-destructive">反抽不破，OI 重新增加</div>
                <div className="font-medium text-destructive">观察做空机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是：上方流动性被扫后，旧仓位先释放，
                如果价格跌回并且 OI 重新增加，说明可能有新空头开始介入。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle>OI 和其他指标怎么组合？</CardTitle>
          </CardHeader>

          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">OI + Funding Rate</h3>
              <p className="text-sm text-muted-foreground">
                OI 看仓位规模，Funding 看哪边拥挤。OI 上升同时 Funding 极端，
                说明市场可能正在向某一边过度堆仓。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">OI + CVD</h3>
              <p className="text-sm text-muted-foreground">
                OI 增加说明有仓位进场，CVD
                用来判断主动买卖力量是否配合价格方向。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">OI + Liquidity</h3>
              <p className="text-sm text-muted-foreground">
                价格扫 BSL / SSL 时，观察 OI 是释放还是继续增加，
                可以帮助判断是清洗仓位还是趋势继续。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">OI + FVG</h3>
              <p className="text-sm text-muted-foreground">
                扫流动性后形成 FVG，如果回踩或反抽时 OI 重新增加，
                说明新的方向仓位可能开始进入。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <BadgeAlert className="h-5 w-5" />
              新手常见误区
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">误区 1：</span>
              OI 上升就看多，OI 下降就看空。
            </p>

            <p>
              <span className="font-medium">误区 2：</span>
              忘记每个合约都有一个多头和一个空头，OI 本身不代表方向。
            </p>

            <p>
              <span className="font-medium">误区 3：</span>
              不结合价格位置。OI 在区间中间上升，和在 BSL / SSL
              附近上升，意义不同。
            </p>

            <p className="text-muted-foreground">
              更专业的理解是：OI 是仓位参与度指标，不是方向指标。
              它要和价格、Funding、CVD、Liquidity 一起看。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <TrendingUp className="h-5 w-5" />
              一句话总结
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg leading-8">
              OI 的核心价值不是预测涨跌，而是判断：
              <span className="font-medium text-brand">
                {" "}
                这波价格运动是新仓位推动，还是旧仓位释放。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
