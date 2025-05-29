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
  <T, U, V>(f: (x: U) => V, g: (x: T) => U) =>
  (x: T): V =>
    f(g(x));

const result = compose(square, double)(5); // (5*2)^2 = 100
console.log("Composed Result:", result);
