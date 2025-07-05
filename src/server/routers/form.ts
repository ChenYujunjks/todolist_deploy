import { z } from "zod";
import { router, publicProcedure } from "../trpc";
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
});
