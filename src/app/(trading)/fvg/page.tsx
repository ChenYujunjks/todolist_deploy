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
  ScanSearch,
  Layers,
  Target,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

export default function FVGPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            FVG 是什么？专业交易员怎么使用？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            FVG，全称 Fair Value Gap，通常翻译为公允价值缺口、价格失衡区。
            它不是普通缺口，而是价格快速单边移动时留下的成交不充分区域。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScanSearch className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              FVG 的本质是价格失衡：某一段价格移动太快，市场没有充分成交。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              当价格快速上涨或快速下跌时，中间某些价格区域没有充分交换筹码。
              这些区域之后可能会被价格重新回补，用来完成重新平衡。
            </p>

            <p className="text-muted-foreground">
              专业交易员不会把 FVG 当成单独的买卖信号，而是把它当成
              <span className="font-medium text-brand">
                {" "}
                回踩区域、反抽区域、结构确认区域{" "}
              </span>
              来观察。
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                Bullish FVG
              </CardTitle>
              <CardDescription>上涨失衡区 / 多头 FVG</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>当价格快速向上拉升，中间留下成交不充分区域：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>低位震荡</div>
                <div className="text-chart-2">↑ 快速拉升</div>
                <div className="text-brand">中间留下 Bullish FVG</div>
                <div>↓ 回踩 FVG</div>
                <div className="font-medium text-chart-2">观察是否继续上涨</div>
              </div>

              <p className="text-muted-foreground">
                如果价格回踩这个 FVG
                后不再跌破，说明这个失衡区可能变成多头防守区域。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                Bearish FVG
              </CardTitle>
              <CardDescription>下跌失衡区 / 空头 FVG</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>当价格快速向下杀跌，中间留下成交不充分区域：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>高位震荡</div>
                <div className="text-destructive">↓ 快速下跌</div>
                <div className="text-brand">中间留下 Bearish FVG</div>
                <div>↑ 反抽 FVG</div>
                <div className="font-medium text-destructive">
                  观察是否继续下跌
                </div>
              </div>

              <p className="text-muted-foreground">
                如果价格反抽这个 FVG
                后无法站回去，说明这个失衡区可能变成空头防守区域。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-chart-3" />
              专业交易员怎么用 FVG？
            </CardTitle>
            <CardDescription>
              重点不是看到 FVG 就进场，而是看它出现在什么位置。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              FVG
              最有价值的时候，通常不是随机出现在图表中间，而是出现在扫流动性之后。
            </p>

            <Separator />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 font-semibold text-chart-2">
                  扫 SSL 后形成 Bullish FVG
                </h3>

                <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格跌破前低</div>
                  <div className="text-destructive">↓ 扫 SSL</div>
                  <div>快速收回区间</div>
                  <div className="text-chart-2">↑ 留下 Bullish FVG</div>
                  <div>回踩 FVG 不破</div>
                  <div className="font-medium text-chart-2">观察做多机会</div>
                </div>

                <p className="text-sm text-muted-foreground">
                  这说明下方卖方流动性可能已经被吸收，随后价格快速反向，留下多头失衡区。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 font-semibold text-destructive">
                  扫 BSL 后形成 Bearish FVG
                </h3>

                <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格突破前高</div>
                  <div className="text-chart-2">↑ 扫 BSL</div>
                  <div>快速跌回区间</div>
                  <div className="text-destructive">↓ 留下 Bearish FVG</div>
                  <div>反抽 FVG 不破</div>
                  <div className="font-medium text-destructive">
                    观察做空机会
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  这说明上方买方流动性可能已经被利用，随后价格快速反向，留下空头失衡区。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <TriangleAlert className="h-5 w-5" />
              新手常见误区
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">误区 1：</span>
              看到 Bullish FVG 就做多，看到 Bearish FVG 就做空。
            </p>

            <p>
              <span className="font-medium">误区 2：</span>
              只看 FVG，不看它前面是否扫过流动性。
            </p>

            <p>
              <span className="font-medium">误区 3：</span>
              认为所有 FVG 都一定会被回补。
            </p>

            <p className="text-muted-foreground">
              更合理的理解是：FVG 是价格失衡留下的参考区域，
              但是否有效，要结合市场结构、流动性、CVD、OI 和资金费率一起判断。
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
              FVG 不是简单的买卖信号，而是价格快速移动后留下的失衡区域。
              专业交易员更关注：
              <span className="font-medium text-brand">
                {" "}
                扫流动性之后形成的 FVG，以及价格回踩或反抽时是否守住这个区域。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
