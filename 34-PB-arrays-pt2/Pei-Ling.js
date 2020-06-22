"use strict";

// 1.
let result;

function findGreatest(num) {
  return function (arr) {
    return arr > num;
  };
}
console.log((result = [3, 4, 5].filter(findGreatest(4))));
console.log((result = [10, 20, 30].filter(findGreatest(12))));
console.log((result = [0, 10, 3].filter(findGreatest(4))));

// 2.
const longestWord = (str) => {
  let words = str.split(` `); //convert it to an array of words
  let longest = ``;
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;

  /* //one liner solution
      return str.split(` `).sort(function (a, b) {
          return b.length - a.length
      })[0]; */
};
console.log(longestWord(`this is a web development course`));

// 3.
const reverse = (num) => {
  let num2 = num.toString().split("").reverse().join("");
  return parseInt(num2);
};
console.log(reverse(34532));

// 4.
const countVowels = (str) => {
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) > -1) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("this is a string"));

// 5.
function missingNums(num) {
  let min = 1;
  num.sort(function (a, b) {
    return a - b;
  });

  for (let i in num) {
    if (num[i] > -1 && num[i] == min) {
      min++;
    }
  }
  return min;
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// 6.
/* let sumOfCubes = (a) {
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i] * a[i] * a[i];
    }
    return(a);
}
console.log(sumOfCubes([2])); */

const sumOfCubes = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 3);
  }
  return sum;
};
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
