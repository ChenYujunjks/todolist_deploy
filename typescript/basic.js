var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function (n) { return n * 2; });
var evens = numbers.filter(function (n) { return n % 2 === 0; });
var sum = numbers.reduce(function (acc, n) { return acc + n; }, 0);
console.log("Doubled:", doubled);
console.log("Even numbers:", evens);
console.log("Sum:", sum);
