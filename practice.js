"use strict";
let a = 1;
console.log(a);
let b = "1";
console.log(b);
let c = 20;
let d = 10;
console.log(c, d);
console.log("task 2:", c > d ? "Yes, it's bigger." : "No, it's smaller.");
console.log(15 < 5 ? "Yes, it's bigger." : "No, it's smaller.");
console.log(42 > 12 ? "true, its bigger" : "no, it's smaller");
console.log(42 > 12 ? true : false);
console.log("11" + 1);
console.log("11" - 1);

console.log(`Hi\"s World`);
console.log(`Is this going to be\n2 lines ?`);
console.log(`git it a try \" `);
console.log(`This is Chewie's food`);
console.log(`This is also Chewie\"s food`);
console.log(`Chewie\"s food\\ My food \\ Papa's food.\nOur food.`);
console.log(`'This is NOT con'+'cat'+'ti'+'nation.'`);
console.log('This IS con' + 'cat' + 'ti' + 'nation.' + ' ' + 'Yes, it is.');

let myString1 = 'interpolation';
console.log(`I think ${myString1} is neat. Do you like ${myString1}?`);
let myString2 = 'concatination';
console.log(`Usually when I use ${myString1} I get an error, as well as using ${myString2}. I'm not so familiar with them. I have to practice more.`)
let myString3 = 'Don\'t forget the syntax for interpolation.'
let myString4 = 'Otherwise you get an error.'
console.log(`You heard me?    ! ! !    ${myString3} ${myString4} And, furthermore, never ever forget the semicolon at the end of the line...`);

console.log(' ` " "  `');
console.log(` ' " " ' ` + `Would this work?` + ' What about also this?' + " Yay! They all work! It's called 'concatination'");

let myString5 = '12345youcn12';
console.log(myString4.length + ' The answer is funny');
let myName = 'Pei-Ling Wu';
console.log(myName.length);

console.log(`I'm   <still> {not}
very
familiar with interpolation`);


let myString6 = `George`;
let myString7 = `Mary`;
console.log(myString6);
console.log(myString7);

let myString8 = `testing123`;
console.log(myString8);

let myString9 = `This is also a test.`;
console.log(myString9);

// can declare multiple variables in one statement
let myString10 = `Dogs`,
    myString11 = `Cats`,
    myString12 = `Birds`;
console.log(myString10, myString11, myString12);

let x = 3 * 3;
console.log(x);
console.log(typeof x);

let myPersonalData = {
    myAge: 100,
    myHeight: 160,
    myWeight: 51,
    myFullName: "Pei-Ling Wu"
}

console.log(`My name is ${myPersonalData.myFullName}. I'm ${myPersonalData.myAge} years old. My weight is ${myPersonalData.myWeight} kg, and my height is ${myPersonalData.myHeight}cm.`);