"use strict";

// 1. Create the following object: Create a method that prints the following: "John smith is a student in class 12"

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    method: function () {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}. `;
    }
}
console.log(student.method());

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    country: `France`,
    method: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} ${this.job} living in ${this.country}.`;
    }
}
console.log(person.method());

// ## Bonus
// 3. Write a method to get the length of the person object.

/* 
const person2 = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    country: `France`,
    method: function () {
        return person2.length;
    }
}
console.log(Object.keys(person2).length); 
*/

console.log(Object.keys(person).length);