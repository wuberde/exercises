// D-3 How many days remain?

// Create a function that accepts a date object as an argument and calculates how many days remain until the end of the month. The function should return the number of days.

`use strict`;

const today = new Date();
console.log(today);
let toDate = today.getDate();

const remainingDaysOfMonth = (days) => {
    return days - toDate;
};

console.log(remainingDaysOfMonth(30, toDate));