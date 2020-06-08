`use strict`;

const dayNow = new Date();
// console.log(dayNow);
const dayFuture = new Date(`2020-06-20`);
// console.log(dayFuture);
const guestName = `Pei-Ling`;
// console.log(guestName);

checkBooking=(name, date, bookingDate)=> {
    if (date < bookingDate) {
        console.log(`${name}, your book to the event for the ${bookingDate} is already guaranteed!`);
    } else {
        console.log(`${name}, please choose a future date.`);
    }
}
checkBooking(guestName, dayNow, dayFuture);