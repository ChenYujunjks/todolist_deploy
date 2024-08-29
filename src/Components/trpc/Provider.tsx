"use client";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";

import { type AppRouter } from "@/server";

export const trpc = createTRPCReact<AppRouter>({});

export function Provider({ children }: { children: React.ReactNode }) {
  //React Query 用于数据获取、缓存、同步和更新 在 tRPC 中与其集成可以让你方便地管理和缓存服务端的数据。
  const [queryClient] = useState(() => new QueryClient());
  //创建客户端
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
