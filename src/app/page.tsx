import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow grid place-items-center px-4">
        <div className="text-center space-y-6 motion-safe:animate-fadeSlide">
          <h1 className="text-4xl/tight sm:text-5xl font-extrabold">
            🚀 Axios + Next.js 示例
          </h1>
          <p className="max-w-xl mx-auto text-balance text-lg text-muted-foreground">
            使用 App Router 构建的 Axios 请求页面。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hello"
              className="px-6 py-3 rounded-xl font-medium bg-[--color-brand] text-[--color-brand] hover:bg-[--color-brand-hover] transition"
            >
              前往示例页面 →
            </Link>

            <Link
              href="/todolist"
              className="px-6 py-3 rounded-xl font-medium border border-[--color-brand] text-[--color-brand] hover:bg-[--color-brand] hover:text-white transition" //	有 border border-[--color-brand]（主色描边按钮）
            >
              Todo List
            </Link>
            <Link
              href="/coinbase"
              className="px-6 py-3 rounded-xl font-medium border border-[--color-brand] text-[--color-brand] hover:bg-[--color-brand] hover:text-white transition"
            >
              Coinbase API
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-[--color-card-border] py-4 text-center text-sm text-muted-foreground">
        © 2024 My Todo List. All rights reserved.
      </footer>
    </div>
  );
}
