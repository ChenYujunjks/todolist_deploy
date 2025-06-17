//以后需要 t、router、publicProcedure 时都从这里 import，避免循环依赖。

//子路由绝不去 import 根路由，只 import trpc.ts 提供的 router / procedure 单例。
//根路由只做“单向聚合”：
import { initTRPC } from "@trpc/server";

export const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;
