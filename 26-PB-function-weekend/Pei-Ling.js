`use strict`;

const herBday = new Date(`2020-07-10`);

const weekOrWeekend = (herBday) => {
    if (herBday.getDay() === 6 || herBday.getDay() === 0) {
        console.log(`Her birthday this year will be on the weekend.`);
    } else {
        console.log(`Her birthday this year will be a weekday.`);
    }
};
weekOrWeekend(herBday);