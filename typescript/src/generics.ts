class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

const numberBox = new Box<number>(123); // 装数字
const stringBox = new Box<string>("hello"); // 装字符串

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
