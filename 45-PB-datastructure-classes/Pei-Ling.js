"use strict";

/* 
1. Person Class
* Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.describe = function () {
            return `${name}, ${age} years old.`;
        }
    }
}
const newPerson = new Person(`John`, 19);
console.log(newPerson);
person = new Person(`John`, 19);
console.log(person.describe());



/* 
2. Volume
Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 

Note: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.
*/