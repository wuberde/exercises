"use strict";

//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let rangeFrom = 50;
let rangeTo = 99;
let integer1 = 49;
let integer2 = 100;
if (
    (integer1 >= rangeFrom && integer1 <= rangeTo) ||
    (integer2 >= rangeFrom && integer2 <= rangeTo)
) {
    console.log(`1:`, "True");
} else {
    console.log(`1:`, "False. Neither of them is in the range");
}

/* else {
    console.log(`1:`, " ");
} */

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let integer3 = 55;
if (
    (integer1 >= rangeFrom && integer1 <= rangeTo) ||
    (integer2 >= rangeFrom && integer2 <= rangeTo) ||
    (integer3 >= rangeFrom && integer3 <= rangeTo)
) {
    console.log(`2:`, "true");
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 10;
let b = 20;
let c = 30;
if (a > b && a > c) {
    console.log(`3:`, `a has the largest value.`);
}
if (b > a && b > c) {
    console.log(`3:`, `b has the largest value.`);
}
if (c > a && c > b) {
    console.log(`3:`, `c has the largest value.`);
}

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let string1 = `rometer`;
string1 = `Py` + `rometer`;

if (string1.slice(0, 2) === `Py`) {
    console.log(`4:`, string1);
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

if (integer1 + integer2 >= 50 && integer1 + integer2 <= 80) {
    console.log(`5:`, 65);
} else {
    console.log(`5:`, 80);
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
if (integer1 + integer2 === 8 || integer1 - integer2 === 8) {
    console.log(`6:`, true);
} else {
    console.log(`6:`, false);
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
if (integer1 === 15 || integer2 === 15 || integer1 + integer2 === 15) {
    console.log(`7:`, true);
} else {
    console.log(`7:`, false);
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
if (
    integer1 % 7 === 0 ||
    integer2 % 7 === 0 ||
    integer1 % 11 === 0 ||
    integer2 % 11 === 0
) {
    console.log(`8:`, true);
} else {
    console.log(`8:`, false);
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
if (integer1 === integer2) {
    console.log(`9:`, 3 * integer2);
} else {
    console.log(
        `9:`,
        4 * integer2,
        `! I don't understand this question so the "else" is just a test.`
    );
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let d = 22;
if (d > 19) {
    console.log(`10:`, 2 * (d - 19));
}

// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

let firstName = `Stacey`;
let age = 58;
if (age < 13) {
    console.log(`11:`, firstName, "is a child");
}

if (age > 13 && age < 20) {
    console.log(`11:`, firstName, "is a teenager");
}

if (age >= 20 && age < 30) {
    console.log(`11:`, firstName, "is a young adult");
} else {
    console.log(`11:`, firstName, "is a an adult");
}