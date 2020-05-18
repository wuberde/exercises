"use strict";

// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

function isDog(thisIsDog) {
    return thisIsDog ? "pat, pat" : "find me a dog to pat!";
}
console.log(isDog(true));

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 51;
console.log(speedCheck >= 50 ? "you are going too fast!" : "You are driving below the speed limit, Oma");


// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 40;
console.log(age >= 16 ? "serve butter beer" : "serve beer");


// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

function isStudent(isAStudent) {
    return isAStudent ? "pTicket costs €5,00" : "Ticket costs €12,00";
}
console.log(isStudent(false));

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

function okMarie(isCake) {
    return isCake ? "Let them eat cake" : "Oh, bother";
}
console.log(okMarie(true));