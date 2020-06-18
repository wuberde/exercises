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
const str = "this is a web development course";
const longestWord = (str) => {
    const strArray = str.split(` `);
    const sortedStrArray = strArray.sort((strA, strB) => {
        return strB.length - strA.length;
    });
    return sortedStrArray[0];
};
console.log(longestWord(str));

// 3.
const reverse = (num) => {
    num = num.toString().split("").reverse().join("");
    return num;
};
console.log(reverse(34532));

// 4.
const countVowels = (str) => {
    let vowels = "aeiouAEIOU".split("");
    let count = 0;
    str.split("").forEach(function (letter) {
        if (vowels.indexOf(letter) !== -1) {
            count++;
        }
    });
    console.log(count);
};
countVowels("this is a string");

// 5.
function missing(num) {
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
console.log(missing([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missing([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missing([10, 5, 1, 2, 4, 6, 8, 3, 9]));