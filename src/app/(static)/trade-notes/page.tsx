export default function TradeNotesPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm text-muted-foreground">Trading Notes</p>
          <h1 className="text-3xl font-bold">
            职业交易员视角：结构、成本与失败形态
          </h1>
          <p className="leading-7 text-muted-foreground">
            交易不是简单预测涨跌，而是理解价格为什么停滞、失效或加速。
            下面这三个点，是分析行情时最核心的框架。
          </p>
        </header>

        <section className="space-y-4 rounded-lg border border-card-border bg-card p-6 text-card-foreground">
          <h2 className="text-2xl font-semibold">1. 多周期结构</h2>

          <p className="leading-7 text-muted-foreground">
            市场不是只有一个时间尺度在交易，而是不同资金层级同时在博弈。
          </p>

          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong className="text-foreground">4h / 日线：</strong>
              代表更大资金、波段资金、机构风险敞口。
            </p>
            <p>
              <strong className="text-foreground">1h：</strong>
              代表主动交易者和短线资金。
            </p>
            <p>
              <strong className="text-foreground">15m：</strong>
              更多是情绪、噪音和追单资金。
            </p>
          </div>

          <p className="leading-7 text-muted-foreground">
            所以分析时要先判断谁是主导周期，再看低周期是否顺从高周期。 如果 4h
            是上涨趋势，而 1h
            回调不破结构，那么低周期可能是在给高周期提供入场机会。
          </p>

          <p className="rounded-md bg-muted p-4 text-foreground">
            核心：不是哪个周期“对”，而是哪个周期正在主导市场。
          </p>
        </section>

        <section className="space-y-4 rounded-lg border border-card-border bg-card p-6 text-card-foreground">
          <h2 className="text-2xl font-semibold">2. 均线作为成本分布</h2>

          <p className="leading-7 text-muted-foreground">
            EMA
            不应该只被看成金叉死叉信号，而应该被理解成市场参与者的平均成本区域。
          </p>

          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong className="text-foreground">EMA20：</strong>
              短期参与者的平均成本。
            </p>
            <p>
              <strong className="text-foreground">EMA50：</strong>
              中期参与者的平均成本。
            </p>
            <p>
              <strong className="text-foreground">EMA200：</strong>
              更长期资金的成本参考。
            </p>
          </div>

          <p className="leading-7 text-muted-foreground">
            当价格远离 EMA20 / EMA50
            时，不代表一定要反转，但说明新进场的人成本变差，
            老多头也更容易产生止盈动机。
          </p>

          <p className="rounded-md bg-muted p-4 text-foreground">
            核心：均线不预测方向，它告诉你现在进场的人是否舒服。
          </p>
        </section>

        <section className="space-y-4 rounded-lg border border-card-border bg-card p-6 text-card-foreground">
          <h2 className="text-2xl font-semibold">3. K 线失败形态</h2>

          <p className="leading-7 text-muted-foreground">
            职业交易员往往更重视失败形态，而不是单纯追逐成功突破。
            因为失败形态说明市场尝试了某个方向，但被明确否定。
          </p>

          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong className="text-foreground">天地针：</strong>
              价格冲高或下探后无法收住，说明该区域存在强烈反向力量。
            </p>
            <p>
              <strong className="text-foreground">假突破：</strong>
              价格突破关键位置后无法延续，容易形成反向陷阱。
            </p>
            <p>
              <strong className="text-foreground">冲高不收：</strong>
              多头有进攻，但没有收盘确认，说明继续上涨的共识不足。
            </p>
          </div>

          <p className="leading-7 text-muted-foreground">
            失败形态最重要的地方在于：它会制造被困资金。
            被困资金后续往往会产生被动止损、减仓或反向追单行为。
          </p>

          <p className="rounded-md bg-muted p-4 text-foreground">
            核心：失败不是噪音，而是市场给出的高信息密度信号。
          </p>
        </section>

        <section className="space-y-4 rounded-lg border border-brand bg-card p-6 text-card-foreground">
          <h2 className="text-2xl font-semibold">总结</h2>

          <p className="leading-7 text-muted-foreground">
            在主导周期仍然向上的前提下，如果价格短期偏离主流成本过远，
            并且在高位出现冲高失败、天地针或假突破，就说明该区域可能存在供给压力。
          </p>

          <p className="leading-7 text-muted-foreground">
            这不等于趋势一定反转，而是说明这里不适合盲目追多，
            应该等待低周期确认、回踩企稳，或者突破后的有效收盘。
          </p>
        </section>
      </div>
    </main>
  );
}
