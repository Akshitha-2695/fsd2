"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
function printPerson(person) {
    console.log(`${person.name} is ${person.age} years old`);
}
let multiplyNumbers = (x, y) => x * y;
const mySearch = function (source, subString) {
    return source.includes(subString);
};
console.log(add(10, 5));
printPerson({ name: "John", age: 25 });
console.log(multiplyNumbers(6, 7));
console.log(mySearch("TypeScript", "Script"));
//# sourceMappingURL=2_functions.js.map