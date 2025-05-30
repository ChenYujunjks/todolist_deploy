// ① 泛型函数：返回输入本身
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42); // 推断出 T = number
const str = identity("hello"); // 类型推断，等同于 T = string

// ② 泛型接口
interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

type User = { id: number; name: string };
const res: ApiResponse<User> = {
  code: 0,
  data: { id: 1, name: "Alice" },
  message: "ok",
};
