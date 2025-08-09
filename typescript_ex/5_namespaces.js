var Validation;
(function (Validation) {
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isValid = function (s) {
            return /^[A-Za-z]+$/.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var NumberValidator = /** @class */ (function () {
        function NumberValidator() {
        }
        NumberValidator.prototype.isValid = function (s) {
            return /^[0-9]+$/.test(s);
        };
        return NumberValidator;
    }());
    Validation.NumberValidator = NumberValidator;
})(Validation || (Validation = {}));
