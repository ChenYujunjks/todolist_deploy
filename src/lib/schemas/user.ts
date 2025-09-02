import { z } from "zod";

// 基础对象校验：字符串、整数、下限
export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "name is required"),
  age: z.number().int().min(0, "age must be >= 0"),
});

// 从 schema 推导类型，避免重复写 type/interface
export type User = z.infer<typeof UserSchema>;
