class Person {
    private _age: number;
    protected _name: string;
    public email: string;
    
    constructor(name: string, age: number, email: string) {
        this._name = name;
        this._age = age;
        this.email = email;
    }
    
    // Methods and getters/setters...
}

class Employee extends Person {
    // Inheritance example...
}