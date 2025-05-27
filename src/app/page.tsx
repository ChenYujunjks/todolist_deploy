import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 ">
      <h1 className="text-4xl font-bold mb-4">
        🚀 Axios + Next.js 示例 This is a simple page to test your Next.js,
        tRPC, and supabase.
      </h1>
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
        <a
          href="/body-dashboard"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          前往身体变化仪表盘 →
        </a>
        <nav className="flex flex-wrap space-x-4">
          <Link
            href="todolist"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-violet-500 font-mono"
          >
            Main Content
          </Link>
        </nav>
      </div>
    </div>
  );
}
