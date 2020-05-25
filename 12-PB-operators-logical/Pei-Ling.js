// 0. Declare two variables: "a" with the value of true, and "b" with the value of false.
let a = true;
let b = false;
console.log(`Task 0: a=${a}, b=${b}`);

/* 
1. Check the result of:
- a) a AND b. 
- b) a OR b. 
- c) NOT (a AND b). 
*/
console.log("Task 1.a):", a && b);
console.log("Task 1.b):", a || b);
console.log("Task 1.c):", !a && b);

// 2. Declare three more variables "x", "y", "z". Give these variables number values.
let x = 10;
let y = 5;
let z = 15;
console.log(`Task 2: Declare three more variables. x=${x}, y=${y}, z=${z}`);

// 3. Check the result of whether:
// - a) x is greater than z AND x is greater than y.
console.log(
  `Task 3.a): ${
    x > z && x > y
      ? "Yes, x is greater than z AND x is greater than y"
      : "No, x is NOT greater than BOTH z AND y"
  }`
);

// - b) x is NOT equal to y.
console.log(
  `Task 3.b): ${
    x !== y ? "Yes. x is NOT equal to y" : "No! x is INDEED equal to y"
  }`
);

// - c) z is less than y OR z is greater than x.
console.log(
  `Task 3.c): ${
    z < y || z > x
      ? "Yes, z is less than y OR z is greater than x"
      : "No, z is NOT less than y OR z is NOT greater than x"
  }`
);

// - d) x is equal to z OR x is NOT equal to y.
console.log(
  `Task 3.d): ${
    x === z || x !== y
      ? "Yes, x is equal to z OR x is NOT equal to y"
      : "Is 'x is equal to z OR x is NOT equal to y' correct? Answer: No."
  }`
);

// - e) x is greater than or equal to 10 AND y is less than or equal to 10.
console.log(
  `Task 3.e): ${
    x > 10 || (x === 10 && y < 10) || y === 10
      ? "Yes, x is greater than or equal to 10 AND y is less than or equal to 10."
      : "Is 'x is greater than or equal to 10 AND y is less than or equal to 10.' correct? Answer: No."
  }`
);

// - f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
console.log(
  `Task 3.f): ${
    x * z < 100 || x * z > 100
      ? "Yes, x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100."
      : "No. This is wrong: x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100."
  }`
);
