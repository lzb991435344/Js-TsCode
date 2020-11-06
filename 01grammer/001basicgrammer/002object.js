var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("This is a test!");
    };
    return Site;
}());
var obj = new Site();
obj.name();
