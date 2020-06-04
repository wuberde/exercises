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

// still using the remaining time to try the bonus task