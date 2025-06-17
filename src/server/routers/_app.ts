import { router } from "../trpc";
import { todoRouter } from "./todos";
import { formRouter } from "./form";
import { coinbaseRouter } from "./coinbase";

export const appRouter = router({
  todo: todoRouter,   // 前端调用时路径为 todo.getTodos 等
  form: formRouter,   // form.formSubmit
  coinbase: coinbaseRouter,
});

// 导出类型供前端自动推导
export type AppRouter = typeof appRouter;
