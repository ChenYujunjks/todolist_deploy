// app/test-tailwind/page.tsx
export default function TailwindTestPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[--color-background] text-[--color-foreground] px-6">
      <h1 className="text-4xl font-bold">🎨 Tailwind Theme 测试</h1>

      <div className="p-6 card">
        <p className="text-lg">
          这是一个<span className="font-bold text-[--color-brand]">卡片</span>
          ，使用了你定义的变量：
        </p>
        <ul className="list-disc pl-6 text-bg text-[--color-muted-foreground]">
          <li>背景：`--color-card`</li>
          <li>边框：`--color-card-border`</li>
          <li>圆角：`--radius`</li>
        </ul>
      </div>

      {/* ✅ 链接直接用 text-hsl */}
      <a
        href="#"
        className="underline decoration-[hsl(242_85%_65%)] underline-offset-2 hover:text-[hsl(242_85%_65%)]"
      >
        这是一个链接，hover 会变成品牌色
      </a>
      {/* ✅ 按钮直接用 bg-hsl */}
      <button className="px-4 py-2 rounded-lg text-white bg-[hsl(242_85%_65%)] hover:bg-[hsl(242_85%_55%)] transition-colors">
        这是一个按钮，hover 会变深
      </button>
      <div className="p-4 border rounded-xl text-sm bg-[--color-muted] text-[--color-muted-foreground]">
        muted 背景测试区
      </div>
    </main>
  );
}
