var greet = function (name) {
    return "Hello ".concat(name || 'Guest', "!");
};
var multiplyWithDefault = function (x, y) {
    if (y === void 0) { y = 1; }
    return x * y;
};
var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
};
