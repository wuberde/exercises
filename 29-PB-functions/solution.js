// // 1. Add up

// function addUp(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(addUp(25));

// // 2. Cubed

// function sumOfCubes(a, b, c) {
//     const sum = a ** 3 + b ** 3 + c ** 3;
//     return sum;
// }
// console.log(sumOfCubes(2, 6, 3));

// // 3. String Check

// function strWordCheck(str, word) {
//     const indexEnd = str.length;
//     const lowerCaseStr = str.toLowerCase();
//     const lowerCaseWord = word.toLowerCase();
//     if (lowerCaseWord.substring(lowerCaseStr, indexEnd) === str) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(strWordCheck("hicc", "hiccough"));
// console.log(strWordCheck("spices", "German food uses spices"));
// console.log(strWordCheck("hello", "Hello, World"));

// // 4. Less than or Equal to Zero?

// function lessThanOrEqualToZero(number) {
//     if (number <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(lessThanOrEqualToZero(-10));

// // 5. Count Occurences

// function countOccurrences(str, letter) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(countOccurrences("this is a string", "i"));


// // //6. X To The Power of X

// function calculateBaseToExponent(base, exponent) {
//     return base ** exponent;
// }

// console.log(calculateBaseToExponent(3, 3));


// // 7. Dog Years

// function calcDogYears(humanYears) {
//     const doggoYears = humanYears * 7;
//     return `Your doggo is ${doggoYears} years old in dog years and is also the best doggo`;
// }

// console.log(calcDogYears(9));

// 8. Lifetime Supply

// function calcLifetimeSupply(age, amount, snack) {
//     const maxAge = 100;
//     const supplyCalc = Math.ceil((maxAge - age) * 365 * amount); // Bonus: round the result of any floating values here
//     return `You will need ${supplyCalc} pieces of that ${snack} that you like, (assuming you live until the ripe old age of ${maxAge}. Happy snacking!`;
// }

// console.log(calcLifetimeSupply(32, 3.58, "chocolate"));

// //9. Where's Waldo?

// function isWaldoHere(str) {
//     const lowercaseStr = str.toLowerCase();
//     return lowercaseStr.includes("waldo");
// }

// console.log(isWaldoHere("where is Wally?"));
// console.log(isWaldoHere("is there wal here ?"));
// console.log(isWaldoHere("I found you Waldo!"));
// console.log(isWaldoHere("is wally here?"));

// // 10. Pie

// function isEqualPieSlices(totalSlices, numOfRecipients, slicesPerPerson) {
//     const neededSlices = numOfRecipients * slicesPerPerson;
//     return totalSlices >= neededSlices;
// }
// console.log(isEqualPieSlices(4, 2, 3));
// console.log(isEqualPieSlices(4, 2, 2));
// console.log(isEqualPieSlices(4, 3, 1));

// // 11. XO

// function isEqualNumberOfXandOs(str) {
//     const lowerCaseStr = str.toLowerCase();
//     let countX = 0;
//     let countO = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (lowerCaseStr[i] === "x") {
//             countX++;
//         } else if (lowerCaseStr[i] === "o") {
//             countO++;
//         }
//     }
//     if ((countX === 0) && (countO === 0)) {
//         return `${true}: there is no instance of either "x" or "o"`;
//     } else if (countX === countO) {
//         return `${true}: we have the same number of "x" and "o"s`;
//     } else if (countX !== countO) {
//         return `${false}: panic stations, we do not have the same number of "x" and "o"s`;
//     }
// }

//12. isPrime?

// function isPrime(num) {
//     for (var i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// }

// console.log(isPrime(7)); // ➞ true
// console.log(isPrime(9)); // ➞ false
// console.log(isPrime(10)); // ➞ false

// // console.log(isPrime(212));

// // 13. Validate Email

// function validate(email) {
//     let atSymbolPos;
//     let dotPos;
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] === "@") {
//             atSymbolPos = i;
//         }
//         if (email[i] === ".") {
//             dotPos = i;
//         }
//     }
//     if ((atSymbolPos > 0) && (dotPos > atSymbolPos)) {
//         return `${email} is valid`;
//     } else {
//         return `${email} is invalid`;
//     }
// }

// console.log(validate("fran@personal.com"));