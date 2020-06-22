'use strict';
// 1. Four Letter Words
const isFourLetters = (words) => {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 4) {
            result.push(words[i]);
        }
    }
    return result;
}
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));

// 2. Months.
const monthName = (number) => {
    let monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsNames[number - 1];
}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

// 4. 
var unique = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        if (i === 0) {
            nums[0] = 0 ^ nums[0];
        } else {
            nums[0] ^= nums[i];
        }
    }
    return nums[0];
};
console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));