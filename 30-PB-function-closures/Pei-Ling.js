"use strict";

//1.

function add(firstNum) {

    return function add2(secondNum) {
        return firstNum + secondNum;
    }
}
let result1 = add(3)(4);
console.log(`Task 1: `, result1);

// 2.
let multiplier = function (firstNum) {
    return function multiplier2(secondNum) {
        return firstNum * secondNum;
    }
}
console.log(`Task 2: `, multiplier(3)(5));

function pension(currentAge, retireAge, monthlyWage, monthlySave) {
    const isRetired = false;
    if (isRetired) {
        return `You're already retired!`;
    } else {
        return ((retireAge - currentAge) * (12 * (monthlySave * monthlyWage / 100)));
    }
}
pension();
console.log(`Task 3: `, pension(40, 75, 2000, 10));