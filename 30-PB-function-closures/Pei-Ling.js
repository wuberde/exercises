"use strict";

//1.

function add() {
    let firstNum = 3;

    function addNum() {
        let secondNum = 4;
        console.log(firstNum + secondNum);
    }
    addNum();
}
add();
let result1 = add;
result1;

// 2.
let firstNum = 3;

function multiplier() {
    let secondNum = 5;

    function multiplierThem() {
        console.log(firstNum * secondNum);
    }
    multiplierThem();
}
multiplier();
let result2 = multiplier;
result2;

// 3. 
let currentAge = 40;
let retireAge = 75;
let monthlyWage = 2000;

function retireSaving() {
    let monthlySave = 0.1;

    function sumOfSaving() {
        console.log((retireAge - currentAge) * 12 * (monthlySave * monthlyWage));
    }
    sumOfSaving();
}
retireSaving();
let result3 = retireSaving;
result3;