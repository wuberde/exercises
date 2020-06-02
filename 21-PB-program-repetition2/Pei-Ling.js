//# Repeat

/* ## 1. Run Along
Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`.
 */

let i = 0;
while (i < 15) {
    i++;
    console.log(`i`, i)
}

/* 
## 2. Add it up 
Create a function which sums up numbers from 1-20 using a `while` loop.
*/

let myNum = 1;
let mySum = 0;
while (myNum <= 20) {
    mySum = mySum + myNum;
    myNum = myNum + 1;
}
console.log(mySum);

/* 
## 3. Do this while i...
Use a `do`, `while` loop to print `The number is [i]` while i is less than 20. 
*/
do {
    console.log(`The number is`, i);
    i++;
} while (i < 20)
console.log(i);