const greet = (name?: string) => {
    return `Hello ${name || 'Guest'}!`;
};

const multiplyWithDefault = (x: number, y: number = 1) => x * y;

const sum = (...numbers: number[]) => {
    return numbers.reduce((total, num) => total + num, 0);
};