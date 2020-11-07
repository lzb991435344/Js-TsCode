class Root { 
    str:string; 
 } 
  
 class Child extends Root {} 
 class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类
  
 var obj2 = new Leaf(); 
 obj2.str ="hello" 
 console.log(obj2.str) //hello