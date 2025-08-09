function identity(arg) {
    return arg;
}
// Generic class
var GenericBox = /** @class */ (function () {
    function GenericBox(value) {
        this.content = value;
    }
    GenericBox.prototype.getValue = function () {
        return this.content;
    };
    return GenericBox;
}());
