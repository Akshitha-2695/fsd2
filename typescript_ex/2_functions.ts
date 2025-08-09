function add(x: number, y: number): number {
    return x + y;
}
function printPerson(person: { name: string; age: number }): void {
    console.log(`${person.name} is ${person.age} years old`);
}
type MathOperation = (x: number, y: number) => number;
let multiplyNumbers: MathOperation = (x, y) => x * y;
interface SearchFunc {
    (source: string, subString: string): boolean;
}
const mySearch: SearchFunc = function(source, subString) {
    return source.includes(subString);
};
console.log(add(10, 5)); 
printPerson({ name: "John", age: 25 }); 
console.log(multiplyNumbers(6, 7)); 
console.log(mySearch("TypeScript", "Script")); 
