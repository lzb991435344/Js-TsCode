var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj5 = new AgriLoan(10, 1);
console.log("利润为 : " + obj5.interest + "，抽成为 : " + obj5.rebate);
