`use strict`;
// # Function Scope
// // #### 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers. 
// After that, the function should print _y_ exponential values starting from _x_.

const exponential1 = (x, y) => {
    console.log(x **= y);
}
exponential1(5, 3);

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 

const myFavoriteFruit = `blue berry`;
const printFavoriteFruit = (val) => {
    console.log("My favorite fruit is: ", val);
    val = myFavoriteFruit;
}
printFavoriteFruit(myFavoriteFruit);

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

let result = ``;
const exponent = (x, y) => {
    console.log(x **= y);
    let result = exponent;
    console.log(result);
}
exponent(2, 3);
result = exponent;
console.log(result);
// Not possible. Only shows the function name.