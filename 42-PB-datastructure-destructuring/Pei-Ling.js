"use strict";

// 1.
let fruit, vegetable, food;
[fruit, vegetable] = ["banana", "cucumber"];
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(`fruit: `, fruit);
console.log(`vegetable: `, vegetable);
console.log(`food: `, food);

// 2. 
let halloweenCostume = {
    fran: "witch",
    peter: "vampire",
    bob: "frankenstein"
};
// console.log(halloweenCostume);
let fran, peter, bob;
({
    fran,
    peter,
    bob
} = halloweenCostume);
console.log(fran);
console.log(peter);
console.log(bob);

// 3.  Parameters: Object Destructuring 
/* Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
Then, create a function to display all of the band/musician's data.
Example
`Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`. */
// let obj={band: `AAA`, musician: `Adam`, hit: `Heaven`, 