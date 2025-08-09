var personName = "John";
var age = 25;
var isStudent = true;
var notSure = 4;
notSure = "maybe a string";
notSure = false;
var numbers = [1, 2, 3, 4, 5];
var strings = ["hello", "world"];
var tuple = ["age", 25];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
var unusable = undefined;
var nullValue = null;
