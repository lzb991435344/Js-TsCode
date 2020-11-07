/*
namespace SomeNameSpaceName { 
   export interface ISomeInterfaceName {      }  
   export class SomeClassName {      }  
}
//定义了一个命名空间 SomeNameSpaceName，如果我们需要在外部可以调用 SomeNameSpaceName 
//中的类和接口，则需要在类和接口添加 export 关键字。

引用方式
SomeNameSpaceName.SomeClassName;
*/

namespace Drawing { 
    export interface IShape { 
        draw(); 
    }
}