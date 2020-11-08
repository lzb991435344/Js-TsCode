/*
var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
参数说明：

arg1, arg2, ... argN：参数列表。
functionBody：一个含有包括函数定义的 JavaScript 语句的字符串。

*/
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
