// Make a Christmas tree which is upside down!

let space = "";
for (let i = 10; i >= 1; i--) {
    // simply change the (let i = 1; i <= 10;) to (let i = 10; i >= 1;)
    space = "";
    for (let j = i; j < 10; j++) {
        space += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        space += "*";
    }
    console.log(space);
}

// RHOMBUS
let string = `RHOMBUS`;
console.log(string);

let space2 = "";
for (let i = 1; i <= 10; i++) {
    space2 = "";
    for (let j = i; j < 10; j++) {
        space2 += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        space2 += "*";
    }
    console.log(space2);
}
for (let i = 10; i >= 1; i--) {
    space2 = "";
    for (let j = i; j < 10; j++) {
        space2 += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        space2 += "*";
    }
    console.log(space2);
}