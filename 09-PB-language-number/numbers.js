let a = 32;
let b = 939; 
let c = 40.9;

let answerA = a % 2; // if 30 is dividable by 2 ? yes! because we have no remainder! === 0
let answerB = b % 2; // 938 / 2 = 469 remainder would be 1 
let answerC = c % 2; // 40 / 2 = 20 remainder would be 0.9

console.log(`
    ${a}: ${answerA === 0 ? "is even" : "is not even"}
    ${b}: ${answerB === 0 ? "is even" : "is not even"}
    ${c}: ${answerC === 0 ? "is even" : "is not even"}
`);
// 0 === false => make sure, that the even case is the false case 
console.log(`
    ${a}: ${answerA ? "is not even" : "is even"}
    ${b}: ${answerB ? "is not even" : "is even"}
    ${c}: ${answerC ? "is not even" : "is even"}
`);
// not (!) zero === is not even
console.log(`
    ${a}: ${!answerA ? "is even" : "is not even"}
    ${b}: ${!answerB ? "is even" : "is not even"}
    ${c}: ${!answerC ? "is even" : "is not even"}
`);
