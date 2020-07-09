"use strict";

/* 
1. Person Class
* Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe = function () {
        return `${this.name}, ${this.age} years old.`;
    }
}
const newPerson = new Person(`John`, 19);
console.log(newPerson);
console.log(newPerson.describe());

/* 
2. Volume
Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 

Note: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.
*/
// Lena's solution

class VolumeCylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
        this.calcVolume = function () {
            const volume = Math.PI * this.radius ** 2 * this.height;
            const result = volume.toFixed(4);
            return `The volume of your cylinder is ${result}`;
        };
    }
    calcVolume() {
        const volume = Math.PI * this.radius ** 2 * this.height;
        const result = volume.toFixed(4);
        return `The volume of your cylinder is ${result}`;
    }
}
const firstCylinder = new VolumeCylinder(8, 30);
console.log(firstCylinder);
console.log(firstCylinder.calcVolume());
const secondCylinder = new VolumeCylinder(12, 45);
console.log(secondCylinder);
console.log(secondCylinder.calcVolume());

// 4. 
/* 
Create a TV class with properties like brand, channel and volume.
Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
Add a method to set the channel randomly. Let's say the TV has only 50 channels.
Add a method to reset TV so it goes back to channel 1 and volume 50.
It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
*/
class Tv {
    constructor(brand=``, channel, volume) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
/*     describe = function () {
        return `${this.brand}, ${this.channel} years old.`;
    } */
}
/* const newPerson = new Person(`John`, 19);
console.log(newPerson);
console.log(newPerson.describe()); */