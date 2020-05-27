/* 
# On the block

#### 1. Updater
* Depending on the value of a variable (determiner), assign a value to `x`. 
    - If determiner is less than 0, `x`'s value should be "Less than 0"
    - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".
*/

let determiner = 1;

if (determiner < 0) {
  // true case
  let x = "Less than 0";
  console.log(x);
} else {
  // false case
  let x = "Greater or equal to 0";
  console.log(x);
}

/* 
#### 2. New Variables 
* Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
    - If determiner is greater or equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
    - If determiner is less than 0, `updater`'s value should be "Less than 0".

* **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
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
#### 3. Ternary v.s. If statement 
* When do you use a ternary v.s. an if statement? Give an example. 
*/

let ifElseTernary = `Using a conditional, like an if statement, allows us to specify that a certain block of code should be executed if a certain condition is met. The ternary operator shortens the if/else statement into just one line of code. A ternary operator takes three arguments. The first one (1st) is the condition, the second one (2nd) is executed if the condition is true, and the third one (3rd) is executed if the condition is false.`;
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
