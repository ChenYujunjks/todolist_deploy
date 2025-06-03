const numbers: Array<number> = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);
console.log("Even numbers:", evens);
console.log("Sum:", sum);

// 匿名函数
const greet = (name: string): string => `Hi, ${name}`;

// 组合函数
const square = (x: number): number => x * x;
const double = (x: number): number => x * 2;

const compose =
  <T, U, V>(第一函数: (x: U) => V, 第二函数: (x: T) => U) =>
  (输入值: T): V =>
    第一函数(第二函数(输入值));

console.log("Composed Result:", compose(square, double)(5));
