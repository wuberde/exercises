/* 
# On the block

#### 1. Updater
* Depending on the value of a variable (determiner), assign a value to `x`. 
    - If determiner is less than 0, `x`'s value should be "Less than 0"
    - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".
*/

let determiner = 1;
if (determiner < 0) {
  let x = "Less than 0";
  console.log(x);
} else {
  let x = "Greater or equal to 0";
  console.log(x);
}

/* 
#### 2. New Variables 
* Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
    - If determiner is greater or equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
    - If determiner is less than 0, `updater`'s value should be "Less than 0".
*/

let updater;
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(message);
} else {
  updater = "Less than 0";
}
/*
 * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
 */
// If we tried to print "message" outside of the if statement we get a "ReferenceError: message is not defined" cuz the "message" variable only works within the block scope, the outside of the if statement is global scope.

/* 
#### 3. Ternary v.s. If statement 
* When do you use a ternary v.s. an if statement? Give an example. 
*/

let ifElseTernary = `The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.`;
console.log(ifElseTernary);

let money = 5;
if (money >= 3.89) {
  buyBurger1 = "Buy Filet-o-Fish";
} else {
  buyBurger1 = "Buy Cheeseburger";
}
console.log(buyBurger1);

// Using the ternary operator, you could shorten the expression to:
let buyBurger2 = money >= 3.89 ? "Buy Filet-o-Fish." : "Buy Cheeseburger.";
console.log(buyBurger2);
