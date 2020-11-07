
/*
namespace namespace_name1 { 
    export namespace namespace_name2 {
        export class class_name {    } 
    } 
}
*/

namespace Runoob { 
    export namespace invoiceApp { 
       export class Invoice { 
          public calculateDiscount(price: number) { 
             return price * .40; 
          } 
       } 
    } 
 }

