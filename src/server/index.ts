import { initTRPC } from "@trpc/server";
import { z } from "zod";
import supabase from "@/lib/supabase-client";

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

/*-------
 creating routes

export const createTRPCRouter = initTRPC.create().router;
*/

export const appRouter = router({
  formSubmit: publicProcedure
    .input(
      z.object({
        name: z.string(),
        age: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      // 这里可以连接数据库写入，或者像原来一样只是 console 模拟
      console.log("模拟数据库写入操作（实际上没写入）：", input);

      return {
        message: "数据已成功写入数据库",
        received: input,
        timestamp: new Date().toISOString(),
      };
    }),

  getTodos: publicProcedure.query(async () => {
    const { data, error } = await supabase.from("todos").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }),

  addTodo: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { data, error } = await supabase
        .from("todos")
        .insert([
          {
            title: input.title,
            description: input.description || "",
            is_completed: false,
          },
        ])
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return data[0];
    }),

  updateTodo: publicProcedure
    .input(
      z.object({
        id: z.number(),
        is_completed: z.boolean(),
      })
    )
    .mutation(async ({ input }) => {
      const { data, error } = await supabase
        .from("todos")
        .update({ is_completed: input.is_completed })
        .match({ id: input.id })
        .select();

      if (error) {
        throw new Error(error.message);
      }
      if (!data) {
        throw new Error("No matching records found or data is null");
      }
      return data[0];
    }),

  deleteTodo: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    const { error } = await supabase
      .from("todos")
      .delete()
      .match({ id: input });
    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  }),
});

export type AppRouter = typeof appRouter;
