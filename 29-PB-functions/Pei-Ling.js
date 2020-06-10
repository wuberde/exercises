"use strict";

// **1. Add Up.**
const addUp = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
};
console.log(`Task 1:`, addUp(13));

// **2. Cubed.**
const sumOfCubes = (a = 0, b = 0, c = 0) => a ** 3 + b ** 3 + c ** 3;
console.log(`Task 2, ex. 1:`, sumOfCubes(1, 5, 9));
console.log(`Task 2, ex. 2:`, sumOfCubes(2));
console.log(`Task 2, ex. 3:`, sumOfCubes());

// **3. String Check.**
const dictionary = (a, b) => {
    if (b.startsWith(a)) {
        return true;
    } else {
        return false;
    }
};
console.log(`Task 3, ex. 1:`, dictionary("bu", "button"));
console.log(`Task 3, ex. 2:`, dictionary("beau", "pastry"));

// **4. Less Than or Equal to Zero?**
const lessThanOrEqualToZero = (a) => {
    if (a <= 0) {
        return true;
    } else {
        return false;
    }
};
console.log(`Task 4, ex. 1:`, lessThanOrEqualToZero(3));
console.log(`Task 4, ex. 2:`, lessThanOrEqualToZero(0));
console.log(`Task 4, ex. 3:`, lessThanOrEqualToZero(-4));
console.log(`Task 4, ex. 4:`, lessThanOrEqualToZero(10));

// **5. Count Occurrences.**

const countOccurrences = (longestEnglishWord, x) => {
    return longestEnglishWord.split(x).length - 1;
};
console.log(
    `Task 5: How many times does the letter o appear in the longest English word "pneumonoultramicroscopicsilicovolcanoconiosis"?`,
    countOccurrences("pneumonoultramicroscopicsilicovolcanoconiosis", "o")
);

/* let longestGermanWord = `Donau­dampf­schiffahrts­elektrizitäten­haupt­betriebs­werk­bau­unter­beamten­gesellschaft`;
console.log(`How many characters?`, longestGermanWord.length);  */

// **6. X To The Power of X.**
const calculateBaseToExponent = (base, exponent) => {
    return (base ** exponent);
};
console.log(`Task 6:`, calculateBaseToExponent(2, 3));

// **7. Dog Years.**
const dogAge = (a) => {
    return a * 7;
};
console.log(
    `Task 7: According to Guinness World Records, the dog named Bluey lived 29 years, which converted to the human age of`,
    Math.round(dogAge(29.416666667)),
    `years old.`
);

// **8. A Lifetime Supply...**

// **9. Where's Waldo?**
// const isWaldoHere=()=>

// **10. Pie.** 
