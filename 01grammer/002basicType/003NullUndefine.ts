/*
  null
在 JavaScript 中 null 表示 "什么都没有"。
null是一个只有一个值的特殊类型。表示一个空对象引用。
用 typeof 检测 null 返回是 object。

undefined
在 JavaScript 中, undefined 是一个没有设置值的变量。
typeof 一个没有值的变量会返回 undefined。
Null 和 Undefined 是其他任何类型（包括 void）的子类型，
可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined。
而在TypeScript中启用严格的空校验（--strictNullChecks）特性，就可以使得null 和 undefined 
只能被赋值给 void 或本身对应的类型
 */


 // 启用 --strictNullChecks
/*
let x: number;
x = 1; // 运行正确
x = undefined;    // 运行错误
x = null;    // 运行错误
*/

//如果一个类型可能出现 null 或 undefined， 可以用 | 来支持多种类型
// 启用 --strictNullChecks
/*
let x: number | null | undefined;
x = 1; // 运行正确
x = undefined;    // 运行正确
x = null;    // 运行正确
*/
