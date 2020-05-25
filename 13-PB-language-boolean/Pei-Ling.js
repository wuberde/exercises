// # True or False? 

// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. 
console.log(`Task 1.1: Check whether \`3\` is equal to \`"3"\` using loose comparison. Result= ${3 == "3" ? true : false}`);

// Then, check whether they are equal while using strict comparison. 
console.log('Task 1.2:', 3 === "3" ? true : false);

// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 
console.log('Task 1.3: Yes, there is a difference. "==" only compares the value. "===" compares the value and the data type.')

//* Which comparison operator should we generally use? Why?
console.log('Task 1.4: Generally we should use the === comparison operator because the === operator ensures that not only the values are equal, but the two items being compared are of the same type too; Whereas the == operator only checks that the values of the two items are equal.')

//* What would happen if we were to use `=`?
console.log('Task 1.5: If we were to use `=` a value would be assigned to the variable.')

// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.
let myString1 = true;
console.log(`Task 2:`, !myString1 ? true : false);

// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

// ```javascript
let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John';
console.log(`Task 3: Stacey will be printed.`);
console.log(name);