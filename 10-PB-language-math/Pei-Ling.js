"use strict";

// # Math

// **Perform Mathematical Tasks with JavaScript. Remember: you must use the `Math` functions and print all results to the console!**

// ## 1. Minimum and maximum

// ### a. Lowest Number

// Print out the lowest number between -1 and 4.
console.log(
    `The lowest number between - 1 and 4 is: ${Math.min(-1, 0, 1, 2, 3, 4)}`
);

// ### b. Highest Number

// Print out the highest number between -1 and 4.
console.log(
    `The highest number between - 1 and 4 is: ${Math.max(-1, 0, 1, 2, 3, 4)}`
);

// ## 2. Rounding

// ### a. Round up

// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
let number1 = 3321.32321;
console.log(Math.ceil(number1));
let number2 = 326.76;
console.log(Math.ceil(number2));
let number3 = 76788.7;
console.log(Math.ceil(number3));
let number4 = -9.78;
console.log(Math.ceil(number4));
let number5 = 43.342;
console.log(Math.ceil(number5));

// ### b. Round down

// Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
console.log(Math.floor(number1));
console.log(Math.floor(number2));
console.log(Math.floor(number3));
console.log(Math.floor(number4));
let number6 = 28.329;
console.log(Math.floor(number6));

// ## 3. Dice Roll!

// Create a program that prints a random **_integer_** from 1 - 6.
let random = (Math.random() * 6) + 1;
let result = parseInt(random);
console.log(result);