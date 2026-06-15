import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TradeNotesPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-3 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Notes
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            职业交易员视角：结构、成本与失败形态
          </h1>

          <p className="leading-7 text-muted-foreground">
            交易不是简单预测涨跌，而是理解价格为什么停滞、失效或加速。
            下面这三个点，是分析行情时最核心的框架。
          </p>
        </header>

        <TradeNoteCard
          index="01"
          title="多周期结构"
          description="市场不是只有一个时间尺度在交易，而是不同资金层级同时在博弈。"
          points={[
            ["4h / 日线", "代表更大资金、波段资金、机构风险敞口。"],
            ["1h", "代表主动交易者和短线资金。"],
            ["15m", "更多是情绪、噪音和追单资金。"],
          ]}
          body="所以分析时要先判断谁是主导周期，再看低周期是否顺从高周期。如果 4h 是上涨趋势，而 1h 回调不破结构，那么低周期可能是在给高周期提供入场机会。"
          takeaway="核心：不是哪个周期“对”，而是哪个周期正在主导市场。"
        />

        <TradeNoteCard
          index="02"
          title="均线作为成本分布"
          description="EMA 不应该只被看成金叉死叉信号，而应该被理解成市场参与者的平均成本区域。"
          points={[
            ["EMA20", "短期参与者的平均成本。"],
            ["EMA50", "中期参与者的平均成本。"],
            ["EMA200", "更长期资金的成本参考。"],
          ]}
          body="当价格远离 EMA20 / EMA50 时，不代表一定要反转，但说明新进场的人成本变差，老多头也更容易产生止盈动机。"
          takeaway="核心：均线不预测方向，它告诉你现在进场的人是否舒服。"
        />

        <TradeNoteCard
          index="03"
          title="K 线失败形态"
          description="职业交易员往往更重视失败形态，而不是单纯追逐成功突破。"
          points={[
            [
              "天地针",
              "价格冲高或下探后无法收住，说明该区域存在强烈反向力量。",
            ],
            ["假突破", "价格突破关键位置后无法延续，容易形成反向陷阱。"],
            [
              "冲高不收",
              "多头有进攻，但没有收盘确认，说明继续上涨的共识不足。",
            ],
          ]}
          body="失败形态最重要的地方在于：它会制造被困资金。被困资金后续往往会产生被动止损、减仓或反向追单行为。"
          takeaway="核心：失败不是噪音，而是市场给出的高信息密度信号。"
        />

        <Card className="border-brand/30 bg-brand/5">
          <CardHeader>
            <CardTitle>总结</CardTitle>
            <CardDescription>
              不追高，不盲空，先判断主导周期和失败确认。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 leading-7 text-muted-foreground">
            <p>
              在主导周期仍然向上的前提下，如果价格短期偏离主流成本过远，
              并且在高位出现冲高失败、天地针或假突破，就说明该区域可能存在供给压力。
            </p>

            <p>
              这不等于趋势一定反转，而是说明这里不适合盲目追多，
              应该等待低周期确认、回踩企稳，或者突破后的有效收盘。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

type TradeNoteCardProps = {
  index: string;
  title: string;
  description: string;
  points: [string, string][];
  body: string;
  takeaway: string;
};

function TradeNoteCard({
  index,
  title,
  description,
  points,
  body,
  takeaway,
}: TradeNoteCardProps) {
  return (
    <Card className="border-card-border bg-card text-card-foreground">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{index}</Badge>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>

        <CardDescription className="leading-7">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2 text-muted-foreground">
          {points.map(([label, text]) => (
            <p key={label}>
              <strong className="text-foreground">{label}：</strong>
              {text}
            </p>
          ))}
        </div>

        <Separator />

        <p className="leading-7 text-muted-foreground">{body}</p>

        <div className="rounded-md bg-muted p-4 font-medium text-foreground">
          {takeaway}
        </div>
      </CardContent>
    </Card>
  );
}
