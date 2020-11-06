


//number 	双精度 64 位浮点值。它可以用来表示整数和分数。

let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制


//一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。

let names: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;


//bool 
let flag: boolean = true;



//arr
// 在元素类型后面加上[]
let arr1: number[] = [1, 2];

// 或者使用数组泛型
let arr2: Array<number> = [1, 2];



//元组
//元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。

//let x: [string, number];
//x = ['Runoob', 1];    // 运行正常
//x = [1, 'Runoob'];    // 报错
console.log(x[0]);    // 输出 Runoob


//枚举

enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2



//用于标识方法返回值的类型，表示该方法没有返回值。 void
function hello(): void {
    alert("Hello Runoob");
}

//表示对象值缺失。 null
//用于初始化变量为一个未定义的值 undefined	
//never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。 never


//TypeScript 和 JavaScript 没有整数类型。



