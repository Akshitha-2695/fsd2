function identity<T>(arg: T): T {
    return arg;
}

// Generic interface
interface GenericResponse<T> {
    data: T;
    status: number;
}

// Generic class
class GenericBox<T> {
    private content: T;
    
    constructor(value: T) {
        this.content = value;
    }
    
    getValue(): T {
        return this.content;
    }
}