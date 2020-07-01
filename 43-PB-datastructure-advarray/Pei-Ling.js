"use strict";

// 1. Get total orders (Mohamed solution)
const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

const mySum = orders.reduce(function (previousValue, currentValue) {
    return currentValue["amount"] + previousValue
}, 0);
console.log(mySum);

// 2. Increment by 1
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const newArray = arrayOfNumbers.map(arrayIncrement);

function arrayIncrement(num) {
    return num + 1;
}
console.log(newArray);

// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

const filterEvens = (numbers) => {
    return numbers.filter((numbers) => numbers % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]

// 4. Filter Friends
// Given an array, create a function which filters array based on a search query. 

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (friends, query) => {
    return friends.filter((friends) => friends.toLowerCase().includes(query));
}
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

// 5. (Lena solution)
const sum = arr => arr.reduce((previous, current) => previous + current);
console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(sum([6, 7, 7])); //20

// 6. 