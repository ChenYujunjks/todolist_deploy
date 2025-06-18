import { z } from "zod";
import supabase from "@/lib/supabase-client";
import { router, publicProcedure } from "../trpc";

export const todoRouter = router({
  getTodos: publicProcedure.query(async () => {
    const { data, error } = await supabase.from("todos").select("*");
    if (error) throw new Error(error.message);
    return data;
  }),

  addTodo: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        due_date: z.string().optional(), // 前端传 ISO 字符串
      })
    )
    .mutation(async ({ input }) => {
      const { data, error } = await supabase
        .from("todos")
        .insert({
          title: input.title,
          description: input.description ?? "",
          is_completed: false,
          due_date: input.due_date ? new Date(input.due_date) : null,
        })
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
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
        .eq("id", input.id)
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    }),

  deleteTodo: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    const { error } = await supabase.from("todos").delete().eq("id", input);
    if (error) throw new Error(error.message);
    return { success: true };
  }),
});
