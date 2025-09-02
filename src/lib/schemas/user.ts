import { z } from "zod";

// ✅ 定义一个 UserSchema
export const UserSchema = z.object({
  id: z.string().uuid(), // 必须是 UUID
  name: z.string().min(1), // 非空字符串
  age: z.number().int().min(0), // 非负整数
});

// ✅ 推导类型 (避免手写 type 重复)
export type User = z.infer<typeof UserSchema>;
