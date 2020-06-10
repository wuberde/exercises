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

const countOccurrences = (str, letter) => {
    return str.split(letter).length - 1;
};
console.log(
    `Task 5: How many times does the letter i appear in the the string "this is a string"?`,
    countOccurrences("this is a string", "i"),
    "times."
);

// **6. X To The Power of X.**
const calculateBaseToExponent = (base, exponent) => base ** exponent;
console.log(`Task 6, ex. 1:`, calculateBaseToExponent(5, 5));
console.log(`Task 6, ex. 2:`, calculateBaseToExponent(10, 10));
console.log(`Task 6, ex. 3:`, calculateBaseToExponent(3, 3));

// **7. Dog Years.**
const dogAge = (a) => a * 7;
console.log(
    `Task 7: According to Guinness World Records, the dog named Bluey lived 29 years, which converted to the human age is ${Math.round(dogAge(29.416666667))} years old.`
);

// **8. A Lifetime Supply...**

// **9. Where's Waldo?**
// const isWaldoHere=()=>

// **10. Pie.**