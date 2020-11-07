var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj3 = new Person();
var isPerson = obj3 instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
