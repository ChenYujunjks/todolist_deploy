// 匿名函数
var greet = function (name) { return "Hi, ".concat(name); };
// 组合函数
var square = function (x) { return x * x; };
var double = function (x) { return x * 2; };
var compose = function (f, g) {
    return function (x) {
        return f(g(x));
    };
};
var result = compose(square, double)(5); // (5*2)^2 = 100
console.log("Composed Result:", result);
