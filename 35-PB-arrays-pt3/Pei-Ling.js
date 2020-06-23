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

// 4. (solution from Martina)
function unique(array) {
    let number = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i - 1] !== array[i]) {
            number = array[i - 1];
        }
    }
    return parseFloat(number);
};
console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));

// 5. (solution found online)
const wordRank = (s) => {
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}
console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty.")); //why not "pretty"?
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));

// 6. 
const hackerSpeak = (orig, replacements = {'a': '4', 'e': '3', 'i': '1', 'o': '0'}) => (
    Object
    .entries(replacements)
    .reduce((acc, el) => acc.replace(el[0], el[1]), orig)
) 
console.log(hackerSpeak("javascript is cool")); // ➞"j4v45cr1pt 15 c00l"
console.log(hackerSpeak("programming is fun")); // ➞"pr0gr4mm1ng 15 fun"
console.log(hackerSpeak("become a coder")); // ➞"b3c0m3 4 c0d3r"