

/*
public（默认） : 公有，可以在任何地方被访问。

protected : 受保护，可以被其自身以及其子类和父类访问。

private : 私有，只能被其定义所在的类访问。


*/

class Encapsulate { 
    str1:string = "hello" 
    private str2:string = "world" 
 }
  
 var obj4 = new Encapsulate() 
 console.log(obj4.str1)     // 可访问 
 //console.log(obj4.str2)   // 编译错误， str2 是私有的