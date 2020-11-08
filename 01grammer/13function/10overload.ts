
//重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

//每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

function disp3(s1:string):void; 
function disp3(n1:number,s1:string):void; 
 
function disp3(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp3("abc") 
disp3(1,"xyz");
/*
abc
undefined
1
xyz

*/