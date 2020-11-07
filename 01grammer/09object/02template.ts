var sites1 = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } // 类型模板
};
sites1.sayHello = function () {
    console.log("hello " + sites1.site1);
};
sites1.sayHello();//hello Runoob