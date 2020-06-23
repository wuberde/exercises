"use strict";

// 4

function unique(array) {
    let currentValue = null;
    for (let i = 0; i < array.length; i++) {
        currentValue = array[i];
        if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) { // no doublette
            return currentValue; // uniqueness
        }
    }
}
console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0
console.log(unique([1, 1, 1, 1, 1, 1, 1, 0])); // ➞ 0

// 6 

function hackerSpeak(string) {
    let arr = string.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "a":
                arr[i] = "4";
                break;
            case "e":
                arr[i] = "3";
                break;
            case "i":
                arr[i] = "1";
                break;
            case "o":
                arr[i] = "0";
                break;
            case "s":
                arr[i] = "5";
        }
    }
    return arr.join("");
}

function hackerSpeak2(string) {
    let newString = string; // copy to the string for output 
    //const regexA = /a/gi;
    //console.log(typeof regexA);
    newString = newString.replace(/a/gi, 4)
        .replace(/e/gi, 3)
        .replace(/i/gi, 1)
        .replace(/o/gi, 0)
        .replace(/s/gi, 5);
    return newString;
}
console.log(hackerSpeak2("javascript is cool"));
console.log(hackerSpeak2("programming is fun"));
console.log(hackerSpeak2("become a coder"));

// Word Ranking
function wordRank(sentence) {
    const words = sentence.split(" ");
    console.log(words);
    const ranking = [];
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            const letterScore = word.toUpperCase().charCodeAt(j) - 64; // little hacky :D 
            // charCodeAt would return a number between 65 (A) - 90 (Z)
            wordScore += letterScore;
        }
        ranking.push(wordScore);
    }
    let winningPosition = 0;
    for (let i = 0; i < ranking.length; i++) {
        if (i === 0) {
            // first entry, skip over
            continue;
        }
        if (ranking[i] > ranking[winningPosition]) {
            winningPosition = i;
        }
    }
    return `"${words[winningPosition]}" is the winner with a score of ${ranking[winningPosition]}`;
}
//console.log(wordRank("Testing, one, 2, three"));
console.log(wordRank("The quick brown fox."));// ➞ "brown"
console.log(wordRank("Nancy is very pretty."));// ➞ "pretty"
console.log(wordRank("Check back tomorrow, man!") );//➞ "tomorrow"
console.log(wordRank("Today is Wednesday."));// ➞ "Wednesday"