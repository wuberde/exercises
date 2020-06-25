"use strict";

// 1.
const person = {
    firstName: `Tom`,
    lastName: `Hardy`,
    age: 42,
    profession: `actor`,
    country: `UK`
};
const entries = Object.entries(person);
console.log(`Task 1: \n`, person, `\n`);

// 2. 
const arrayOfValues = () => {
    return Object.values(person);
}
console.log(`Task 2: \n`, arrayOfValues(person), `\n`);

// 3. 
const samePerson = {
    firstName: `Tom`,
    lastName: `Hardy`,
    age: 42,
    profession: `actor`,
    country: `UK`,
    method: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age}-year-old ${this.profession} from ${this.country}.`;
    }
}
console.log(`Task 3:`);
console.log(samePerson.method(), `\n`);

// 1. Bonus
const objectToArray = {
    A: 1,
    B: 2,
    C: 3
};
const myArray = () => {
    return Object.entries(objectToArray);
}
console.log(`Bonus Task 1: \n`, myArray(objectToArray), `\n`);