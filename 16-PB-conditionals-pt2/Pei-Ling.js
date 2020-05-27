// 1. Store Mark's and John's mass and height in variables.
let heightMark = 1.7;
let massMark = 65;
let heightJohn = 1.85;
let massJohn = 70;
console.log(heightMark, massMark, heightJohn, massJohn);

// 2. Calculate both their BMIs and store their BMIs in variables.
let bmiMark;
let bmiJohn;
console.log(
    `2: Mark's BMI = `,
    (bmiMark = (massMark / heightMark ** 2).toFixed(2))
);
console.log(
    `2: John's BMI = `,
    (bmiJohn = (massJohn / heightJohn ** 2).toFixed(2))
);

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let compareBmi;
console.log((compareBmi = bmiMark > bmiJohn ? true : false));

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(`Is Mark's BMI higher than John's? The answer is ${compareBmi}`);

// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI.
if (bmiMark > bmiJohn) {
    console.log(`5: Mark has the highest BMI with ${bmiMark}`);
} else {
    console.log(`5: John has the highest BMI with ${bmiJohn}`);
}

/* # Programming Basics: Conditionals Part 2

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs and store their BMIs in variables. 
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 
 */
/* 
Martina's solution:
*/

let markMass = 72.5;
let markHeight = 1.65;
let johnMass = 95;
let johnHeight = 1.90;

let bmiMark = markMass / (markHeight * markHeight);
let bmiJohn = johnMass / johnHeight ** 2;

console.log('bmi mark', bmiMark);
console.log('bmi john', bmiJohn);

let isMarksBMIhigher = bmiMark > bmiJohn; // boolean

console.log(isMarksBMIhigher);

console.log(`Is Marks BMI higher than Johns? 
${isMarksBMIhigher}`);

if (isMarksBMIhigher) {
    console.log('Mark');
} else {
    console.log('John');
}