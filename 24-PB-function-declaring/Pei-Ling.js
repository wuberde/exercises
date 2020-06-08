`use strict`;

// #### 1. Multiply - Function Declaration
function myMultiply1(a, b) {
    return a * b;
}
console.log(`Task 1: Function "myMultiply1" definition = a * b`);

// #### 2. Multiply - Function Declarations as Values
function myMultiply2(a = 2, b = 3) {
    console.log(`Task 2:`, a * b);
}
myMultiply2(10, 20);

// #### 3. Multiply - Arrow Function
let myMultiply3 = (a, b) => {
    return a * b;
}
console.log(`Task 3:`, myMultiply3(5, 4));

// #### 4. Declarations
function myMultiply4(a, b) {
    return a % b;
}
console.log(`Task 4-1 Normal Function:`, myMultiply4(9, 8));

const myMultiply5 = function (a, b) {
    return a % b;
}
console.log(`Task 4-2 Anonymous Function:`, myMultiply5(9, 8));

const myMultiply6 = (a, b) => {
    return a % b;
}
console.log(`Task 4-3 Arrow Function:`, myMultiply6(9, 8));