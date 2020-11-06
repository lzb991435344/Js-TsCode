

//never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值
//，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）

/*
let x: never;
let y: number;

// 运行错误，数字类型不能转为 never 类型
//x = 123;

// 运行正确，never 类型可以赋值给 never类型
x = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}
*/



const getValue = () => {
    return 0
  }
  
  enum List {
    A = getValue(),
    B = 2,  // 此处必须要初始化值，不然编译不通过
    C
  }
  console.log(List.A) // 0
  console.log(List.B) // 2
  console.log(List.C) // 3