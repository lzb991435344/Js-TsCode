//( [param1, parma2,…param n] )=>statement;
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //输出结果为 110
var foo1 = function (x) {
    x = 10 + x;
    console.log(x);
};
foo1(100);
//不指定函数的参数类型，通过函数内来推断参数类型
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " 是一个数字");
    }
    else if (typeof x == "string") {
        console.log(x + " 是一个字符串");
    }
};
func(12);
func("Tom");
//单个参数 () 是可选的
var display = function (x) {
    console.log("输出为 " + x);
};
display(12);
//无参数时可以设置空括号
var disp = function () {
    console.log("Function invoked");
};
disp();
