function add(x, y) {
    return x + y;
}
function printPerson(person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old"));
}
var multiplyNumbers = function (x, y) { return x * y; };
var mySearch = function (source, subString) {
    return source.includes(subString);
};
console.log(add(10, 5));
printPerson({ name: "John", age: 25 });
console.log(multiplyNumbers(6, 7));
console.log(mySearch("TypeScript", "Script"));
