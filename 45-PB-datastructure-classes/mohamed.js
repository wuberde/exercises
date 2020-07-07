'use strict';
//task 01
class Peraon {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.myMethod = function () {
            return `${this.name} is ${this.age} years old`
        }
    }
}
const DataOfPerson = new Peraon('John', 19);
console.log(DataOfPerson.myMethod());
//task 02
class Cylinder {
    constructor(myHeigh, ridus) {
        this.myHeigh = myHeigh;
        this.ridus = ridus;
        /*    this.volumeOfCylinder = function () {
               return Math.PI * this.ridus **2 * this.myHeigh
           } */
    }
    volumeOfCylinder = function () {
        return Math.PI * this.ridus ** 2 * this.myHeigh;
    }
}
const volumeCylinder = new Cylinder(1, 2);
console.log(volumeCylinder.volumeOfCylinder());
//task 03
class Tv {
    constructor(brand, myChannel = 1, myVolume = 50) {
        this.brand = brand;
        this.mychannel = myChannel;
        this.myVolume = myVolume;
    }
    increaseAndDecrease = function () {
        if (this.myVolume !== 0 && this.myVolume !== 100) {
            return this.myVolume;
        }
    }
    randomlyChannel() { //hidden function
        let num = 50
        return Math.random() * num.toFixed(3);
    }
}