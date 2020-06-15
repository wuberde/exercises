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

// 3. 
let currentAge = 40;
let retireAge = 75;
let monthlyWage = 2000;

let monthlySave = 0.1;

function pension() {
    function sumOfSaving() {
        console.log((retireAge - currentAge) * 12 * (monthlySave * monthlyWage));
    }
    sumOfSaving();
}
console.log(`Task 3: Pension total= `)
pension();