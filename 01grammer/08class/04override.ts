class PrinterClass1 { 
    doPrint():void {
       console.log("父类的 doPrint() 方法。") 
    } 
 } 
  
 class StringPrinter1 extends PrinterClass1 { 
    doPrint():void { 
       super.doPrint() // 调用父类的函数
       console.log("子类的 doPrint()方法。")
    } 
 }