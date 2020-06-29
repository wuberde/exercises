"use strict";

// 1. Check if a number is within a given range.

const checkRange = (a, {
    min,
    max
}) => {
    if (a >= min && a <= max) {
        return true;
    } else {
        return false;
    }
};
console.log(`Task 1`);
console.log(
    checkRange(4, {
        min: 0,
        max: 5,
    })
);
console.log(
    checkRange(4, {
        min: 4,
        max: 5
    })
);
console.log(
    checkRange(4, {
        min: 6,
        max: 10
    })
);
console.log(
    checkRange(5, {
        min: 5,
        max: 5
    })
);

// 2. Scrabble.
/* Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
Example:
[
{ tile: "N", score: 1 },
{ tile: "K", score: 5 },
{ tile: "Z", score: 10 },
{ tile: "X", score: 8 },
{ tile: "D", score: 2 },
{ tile: "A", score: 1 },
{ tile: "E", score: 1 }
]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 */

// 3. Is it an empty object?
/* Write a program that returns true if an object is empty, and false if otherwise.

Examples:

- {} ➞ true
- {a: 1} ➞ false */

const isEmpty = obj => {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}; //if(Object.keys(obj).length){return false;}else{return true;}
console.log(`Task 3:`);
console.log(isEmpty({}));
console.log(isEmpty({
    a: 1
}));

// 4. 
/* 
Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

Example:

- countLetters("tree") ➞ {t: 1, r: 1, e: 2}
*/

function countLetters(string) {
    let string1 = string.split("").sort().join("");
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if ((string1[i] === string1[i + 1])) {
            counter++;
        } else {
            console.log(string1[i] + " " + counter);
            counter = 0;
        }
    }
}
countLetters("thequickbrownfoxjumpsoverthelazydog");

// 5. Check free shipping
const freeShipping = (obj) => {
    let totalPurchase = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < totalPurchase.length; i++) {
        sum += totalPurchase[i];
    }
    if (sum >= 50) {
        return true;
    } else {
        return false;
    }
};
console.log(freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
})); // ➞ false
console.log(freeShipping({
    "Surround Sound Equipment": 499.99
})); // ➞ true
console.log(freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
})); // ➞ false