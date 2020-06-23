"use strict";

// 1. sumOfNumbers
const sumOfNumbers = (nums) => {
    return nums[0] + nums[1] + nums[2];
}
console.log(`The sum of ${nums="[3, 2, -1]"} is ${sumOfNumbers([3, 2, -1])}.`);

// 2. Hello Frien
const helloFrien = (names) => {

    for (i = 0; i <= names.length; i++) {
        return names+[i];
    }
}
console.log(`Hello ${helloFrien([`Maria`, `Mike`, `Joe`, `Jane`])}`);


// 5. Capitalize. Create a program that capitalises the first letter of each element in an array of names.

const capitalizeName = (names) => {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i][0].toUpperCase() + names[i].slice(1);
    }
    return names;
}
console.log(capitalizeName(["matt", "sara", "lara"])); // ➞ ["Matt", "Sara", "Lara"]
console.log(capitalizeName(["samuel", "MARIA", "luke", "mary"])); // ➞ ["Samuel", "Maria", "Luke", "Mary"]
console.log(capitalizeName(["Cynthia", "Karen", "Jane", "Carrie"])); // ➞["Cynthia", "Karen", "Jane", "Carrie"]