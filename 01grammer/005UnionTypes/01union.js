//联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
//注意：只能赋值指定的类型，如果赋值其它类型就会报错。
//Type1|Type2|Type3 
var val;
val = 12;
console.log("数字为 " + val);
val = "Runoob";
console.log("字符串为 " + val);
/*
数字为 12
字符串为 Runoob
*/