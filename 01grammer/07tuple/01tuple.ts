
//我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），
//如果存储的元素数据类型不同，则需要使用元组。
//元组中允许存储不同类型的元素，元组可以作为参数传递给函数。

var mytuple = [10,"Runoob"]; // 创建元组
console.log(mytuple[0]) 
console.log(mytuple[1])


//元祖运算

//push() 向元组添加元素，添加在最后面。

//pop() 从元组中移除元素（最后一个），并返回移除的元素。
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("添加前元素个数："+mytuple.length)    // 返回元组的大小
 
mytuple.push(12)                                    // 添加到元组中
console.log("添加后元素个数："+mytuple.length) 
console.log("删除前元素个数："+mytuple.length) 
console.log(mytuple.pop()+" 元素从元组中删除") // 删除并返回删除的元素
        
console.log("删除后元素个数："+mytuple.length)




var mytuple = [10, "Runoob", "Taobao", "Google"]; // 创建一个元组
console.log("元组的第一个元素为：" + mytuple[0]) 
 
// 更新元组元素
mytuple[0] = 121     
console.log("元组中的第一个元素更新为："+ mytuple[0])



//将元祖赋值给变量
var a =[10,"Runoob"] 
var [b,c] = a 
console.log( b )    
console.log( c )

/*
10
Runoob
添加前元素个数：4
添加后元素个数：5
删除前元素个数：5
12 元素从元组中删除
删除后元素个数：4
元组的第一个元素为：10
元组中的第一个元素更新为：121
10
Runoob

*/