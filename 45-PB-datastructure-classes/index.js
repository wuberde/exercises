// PEI-LING
"use strict";

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.method = function () {
            console.log('my name is ' + name);
        }
        this.describe();
    }
    // Another way of making a method 
    describe = function () { // function outside the constructor 
        this.hiddenFunction();
        return `${this.name}, ${this.age} years old.`;
    }
    // Another way of making a method invisible
    hiddenFunction () { // hidden function
        console.log('hello world');
        this.method();
    }
}
const newPerson = new Person(`John`, 19); // INSTANCE
console.log(newPerson);
console.log(newPerson.describe());
newPerson.hiddenFunction();

class Cylinder {
    constructor(myHeigh, ridus) {
        this.myHeigh = myHeigh;
        this.ridus = ridus;
        /*    this.volumeOfCylinder = function () {
               return Math.PI * this.ridus **2 * this.myHeigh
           } */
    }
    volumeOfCylinder = function() {
        return Math.PI * this.ridus ** 2 * this.myHeigh;
    }
}
const volumeCylinder = new Cylinder(1, 2);
console.log(volumeCylinder.volumeOfCylinder());
