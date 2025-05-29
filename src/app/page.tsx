// app/page.tsx
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 主内容 */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-4">🚀 Axios + Next.js 示例</h1>
        <p className="text-center text-lg mb-6 text-gray-600 dark:text-gray-400">
          使用 App Router 构建的 Axios 请求页面。
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="/axios"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            前往示例页面 →
          </a>

          <nav className="flex flex-wrap space-x-4">
            <Link
              href="/todolist"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-violet-500 font-mono"
            >
              Main Content
            </Link>
          </nav>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-auto">
        <p>© 2024 My Todo List. All rights reserved.</p>
      </footer>
    </div>
  );
}
