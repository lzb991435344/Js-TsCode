

//接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
interface namelist { 
    [index:number]:string 
 } 
  
 //var list2:namelist = ["John",1,"Bran"] // 错误元素 1 不是 string 类型
 interface ages { 
    [index:string]:number 
 } 
  
 var agelist:ages; 
 agelist["John"] = 15   // 正确 
 //agelist[2] = "nine"   // 错误