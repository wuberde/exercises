"use strict";

// 1. Combining Arrays
// 1.1 Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
const euroCountries = ["UK", "France", "Spain"];
const asianCountries = ["Japan", "Korea", "Thailand"];
console.log(euroCountries.concat(asianCountries));

// 1.2 create two arrays. Save all elements of both arrays to another variable
const euroCountries1 = ["UK", "France", "Spain"];
const asianCountries1 = ["Japan", "Korea", "Thailand"];
const combineCountries = euroCountries1.concat(asianCountries1);
console.log(combineCountries);

// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
let cloneEuroCountries = [...euroCountries];
console.log(cloneEuroCountries);

// 3. Find the Largest
// Create a function to find the largest number in an array.
const arr = [1, 2, 3];
const findLargest =(array)=> {
    return (Math.max(...array));
};
console.log(findLargest(arr));

// 4. Find the Smallest
// Create a function to find the smallest number in an array.
const findSmallest =(array)=> {
    return (Math.min(...array));
};
console.log(findSmallest(arr));

// 5. Clone and Merge
// Given two objects:

// const person = {name: "John"}
// const job = {role: "Teacher"}
// 5.1 Clone the person object.
const person = {
    name: "John"
}
const job = {
    role: "Teacher"
}
let clonePerson = {
    ...person
};
console.log(clonePerson);

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
let employee = {
    ...person,
    ...job
};
console.log(employee);

// 5.3 Then change the values of the properties in the employee object.
employee.name = `Jane`;
employee.role = `Designer`;
console.log(employee);