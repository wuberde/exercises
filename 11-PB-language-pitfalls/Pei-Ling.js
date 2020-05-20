"use strict";

// # Pitfalls 

// #### 1. NaN
// **Question: Comment your answer in your js file**: What does NaN stand for? 

// * Check if `"hello"` is NaN. 
console.log(`Check if "hello" is NaN. Answer: `, isNaN("hello"));

// * Check if `3` is NaN.
console.log("Check if `3` is NaN. Answer: ", isNaN("3"));

// * What is the type of NaN?
console.log(`What is the type of NaN? Answer:`, typeof (NaN));

// #### 2. Rounding 
// ```javascript
// console.log(0.1 * 0.2);
// ```
// The above in JavaScript will print: `0.020000000000000004`. 
// Use a method to make sure that only `0.02` is printed.

let number1 = 0.1 * 0.2;
console.log("Make sure that only `0.02` is printed: ", number1.toFixed(2));


// #### 3. Infinity
// * Divide Infinity by `0`. 
console.log("Divide Infinity by `0`: ", Infinity / 0);
// * Divide Infinity by Infinity. 
console.log("Divide Infinity by Infinity: ", Infinity / Infinity);
// * Divide `1` by `0`.
console.log("Divide `1` by `0`: ", 1 / 0);