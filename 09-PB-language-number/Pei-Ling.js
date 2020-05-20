"use strict";

// #### 1. Concatenation. 
// * Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.

let myString1 = `My name is Pei-Ling. I'm a student in DCI in the year of `;
let myDciYear = 2020;
console.log(myString1 + myDciYear);

// * In this case, what is the `+` operator doing? Comment your answer in the js file.
// Comment: the `+` concatenates the string and the number.

// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
let myString2 = `1005`;
let myConvertedNumber1 = parseInt(myString2);
console.log(myConvertedNumber1);
// * Create a variable with the value of "10.05". 
let myString3 = `10.05`;
let myConvertedNumber2 = parseFloat(myString3);
console.log(myConvertedNumber2);

// #### 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9
let number1 = 30 % 2;
let number2 = 939 % 2;
let number3 = 40.9 % 2;
console.log(number1 === 0 ? "30 is an even number." : "30 is an odd number.");
console.log(number2 === 0 ? "939 is an even number." : "939 is an odd number.");
console.log(number3 === 0 ? "40.9 is an even number." : "40.9 is an odd number.");