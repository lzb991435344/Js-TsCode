



//4种方式
//1.声明变量的类型及初始值：
//var [变量名] : [类型] = 值;
var uname:string = "Runoob";

//2.声明变量的类型，但没有初始值，变量值会设置为 undefined：
//var [变量名] : [类型];
var uname:string;

//3.声明变量并初始值，但不设置类型，该变量可以是任意类型：
//var [变量名] = 值;
var uname = "Runoob";


//4.声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
//var [变量名];

var uname1;  //any类型

var uname:string = "Runoob";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("名字: "+uname)
console.log("第一个科目成绩: "+score1)
console.log("第二个科目成绩: "+score2)
console.log("总成绩: "+sum)