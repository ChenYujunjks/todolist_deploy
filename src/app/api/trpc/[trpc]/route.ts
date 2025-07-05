// ✅ 自动部署到最近边缘节点（Edge Network）
export const runtime = "edge";

console.log("Running in:", process.env.VERCEL_REGION || "unknown");

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
