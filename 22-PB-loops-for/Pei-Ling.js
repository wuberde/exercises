// 1. **Addition.** Write a program to add up the numbers 1 to 20.

let mySum = 0;
for (let i = 1; i <= 20; i++) {
  mySum = mySum + i;
}
console.log(mySum);

// 2. **There are i bottles of beer on the wall.**
let myBeer = ``;

for (i2 = 0; i2 < 6; i2++) {
  if (i2 === 1) {
    myBeer += `There is ` + i2 + ` bottle of beer on the wall. `;
  }
  myBeer += `There are ` + i2 + ` bottles of beer on the wall. `;
}
console.log(myBeer);

// 3. **The odd/even reporter.**
let myNum;
for (myNum = 1; myNum <= 20; myNum++) {
  // // if (myNum === 0) {
  // //   console.log(myNum + ` is even`);
  // // } else
  if (myNum % 2 === 0) {
    console.log(myNum + ` is even`);
  } else {
    console.log(myNum + ` is odd`);
  }
}
console.log(myNum);

// 4. **Multiplication Tables.**
let myMultiplier = 9;
let i3 = 0; //updated
for (let i3 = 0; i3 <= 10; i3++) {
  let result = myMultiplier * i3;
  console.log(i3 + ` * ` + myMultiplier + ` = ` + result);
}

for (myMultiplier = 0; myMultiplier <= 10; myMultiplier++) {
  for (let i3 = 0; i3 <= 10; i3++) {
    result = myMultiplier * i3;
    console.log(myMultiplier + " * " + i3 + " = " + result);
  }
}

// 5. **Fizz Buzz**
for (i4 = 1; i4 <= 100; i4++) {
  if (i4 % 3 === 0 && i4 % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i4 % 3 === 0) {
    console.log(`Fizz`);
  } else if (i4 % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i4);
  }
}

// 6. **Sum of Multiples**
let mySum2 = 0;
for (myNum3 = 0; myNum3 < 1000; myNum3++) {
  if (myNum3 % 3 === 0 || myNum3 % 5 === 0) {
    mySum2 = mySum2 + myNum3;
  }
}
console.log(mySum2);
