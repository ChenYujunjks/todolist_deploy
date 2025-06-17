import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import os from "os";
export const formRouter = router({
  formSubmit: publicProcedure
    .input(
      z.object({
        name: z.string(),
        age: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      console.log("模拟数据库写入操作：", input);
      return {
        message: "数据已成功写入数据库",
        received: input,
        timestamp: new Date().toISOString(),
      };
    }),

  getServerIp: publicProcedure.query(() => {
    const interfaces = os.networkInterfaces();

    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name] || []) {
        if (iface.family === "IPv4" && !iface.internal) {
          return iface.address;
        }
      }
    }
  }),
});
