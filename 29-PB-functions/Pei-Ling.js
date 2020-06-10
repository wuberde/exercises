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
  `Task 7: According to Guinness World Records, the dog named Bluey lived 29 years and 5 months, which converted to the human age is ${Math.round(
    dogAge(29.416666667)
  )} years old.`
);

// **8. A Lifetime Supply...**
const calcSupply = (ageNow, snacksPerDay) => {
  let maxAge = 100;
  return (maxAge - ageNow) * (snacksPerDay * 365);
};
console.log(
  `Task 8, ex. 1: You will need`,
  calcSupply(25, 2),
  ` bars of chocolate (2 a day) to last you til the age of 80.`
);
console.log(
  `Task 8, ex. 2: You will need`,
  calcSupply(40, 3),
  `packets of crisps (3 a day) to last you til the age of 80.`
);

// **9. Where's Waldo?**
const isWaldoHere = (a) => a.includes(`Waldo`);
console.log(
  `Task 9-1, "Is there wal here?" `,
  isWaldoHere("is there wal here?")
);
console.log(
  `Task 9-2, "I found you Waldo!" `,
  isWaldoHere("I found you Waldo!")
);
console.log(`Task 9-3, "Is wally here?" `, isWaldoHere("Is wally here?"));
console.log(`Task 9-4, "Waldo is here." `, isWaldoHere("Waldo is here."));

// **10. Pie.**
const equalSlices = (a, b, c) => a >= b * c;
console.log(`Task 10, ex. 1: `, equalSlices(8, 3, 2));
console.log(`Task 10, ex. 2: `, equalSlices(8, 3, 3));
console.log(`Task 10, ex. 3: `, equalSlices(24, 12, 2));

// **11. XO**
// copied the solution from classmate's presentation
const xo = (myString) => {
  let checkForX = 0; // "x"
  let checkForO = 0; // "o"
  let myNewString = myString.toLowerCase();
  for (let position = 0; position < myNewString.length; position++) {
    if (myNewString.charAt(position) === "x") {
      checkForX++;
    } else if (myNewString.charAt(position) === "o") {
      checkForO++;
    }
  }
  if (checkForO === checkForX) {
    return true;
  } else {
    return false;
  }
};
console.log(xo("ooxx")); // ➞ true
console.log(xo("xooxx")); // ➞ false
console.log(xo("ooxXm")); // ➞ true (case insensitive)
console.log(xo("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(xo("zzoo")); // ➞ false

// **12. isPrime?**
// copied the solution from classmate's presentation
const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};
console.log(`Task 12:`);
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));

// **13. Validate Email.**
// I can't solve this

/* 
const checkEmail = (string) => {
  if (string.includes(`@` && `.`)) {
    return true;
  } else {
    return false;
  }
;
console.log(checkEmail("john@example.com"));
 */
