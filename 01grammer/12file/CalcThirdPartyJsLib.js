
/*
声明文件以 .d.ts 为后缀   runoob.d.ts
声明文件或模块的语法
declare module Module_Name {
}


TypeScript 引入声明文件语法
/// <reference path = " runoob.d.ts" />

*/

var Runoob;  
(function(Runoob) {
    var Calc = (function () { 
        function Calc() { 
        } 
    })
    Calc.prototype.doSum = function (limit) {
        var sum = 0; 
 
        for (var i = 0; i <= limit; i++) { 
            sum = sum + i; 
        }
        return sum; 
    }
    Runoob.Calc = Calc; 
    return Calc; 
})(Runoob || (Runoob = {})); 
var test = new Runoob.Calc();