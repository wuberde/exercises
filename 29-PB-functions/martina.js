/*11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:

Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:
*/
// 012345678910
//"hello world" = lenght 11
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
}
console.log(xo("ooxx"));// ➞ true
console.log(xo("xooxx"));// ➞ false
console.log(xo("ooxXm")); // ➞ true (case insensitive)
console.log(xo("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(xo("zzoo")); // ➞ false