export default function TailwindDemoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[--color-background] text-[--color-foreground] p-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">🎨 Tailwind + CSS 变量测试</h1>

        <div className="p-6 rounded-lg shadow border bg-[--color-card] border-[--color-card-border]">
          <p className="text-lg font-medium">这是使用了 CSS 变量的背景卡片</p>
        </div>

        <div className="flex gap-4 justify-center">
          <div className="w-24 h-24 bg-red-500 text-white flex items-center justify-center rounded">
            red-500
          </div>
          <div className="w-24 h-24 bg-[--color-brand] text-white flex items-center justify-center rounded">
            --color-brand
          </div>
          <div className="w-24 h-24 bg-[--color-brand-hover] text-white flex items-center justify-center rounded">
            --color-brand-hover
          </div>
        </div>
      </div>
    </main>
  );
}
