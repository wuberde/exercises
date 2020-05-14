// # Programming Basics: Arithmetic Operators (Math Problems)

// These tasks are aimed at making you more comfortable with solving math problems using JS. **Print each of your results to the console.**

// **Basic Arithmetic Problems**

// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 
let boxOffice = 6450;
let eachTicket = 15;
let ticketSold = (boxOffice / eachTicket);
console.log(ticketSold);

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
let incomePerWeek = 500;
let weeksPerYear = 52;
let yearlyIncome = (incomePerWeek * weeksPerYear);
console.log(yearlyIncome);

// **Percentage**

// Q3. Calculate the percentage of 17/30. Expected output: number%
let a = 17;
let b = 30;
let c = a * 100 / b;
let percentage = (c + '%');
console.log(percentage);

// **Geometry Formulas** 

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
let side = 4.75;
let perimeterSquare = (side * 4) + ' cm';
console.log(perimeterSquare);


// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let t1 = 5;
let t2 = 6;
let t3 = 7;
let trianglePerimeter = t1 + t2 + t3;
console.log(trianglePerimeter);

// Q6. Calculate the area of a square. Each side is 5cm.
let eachSide = 4.75;
let areaSquare = (eachSide * eachSide + ' cm-2');
console.log(areaSquare);

// Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let noAnswer = 'I dont have a solution.';
console.log(noAnswer);


// Q8. Calculate the volume of a cube. Length of each side is 9cm.
let cubeSide = 9;
let cubeVolume = (cubeSide * 3 + 'cm-3');
console.log(cubeVolume);

// **Consumer Formula**

// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip

let netA = 22.35;
let netB = 26.67;
let netC = 35.92;
let tipA = 0.1;
let tipB = 0.15;
let tipC = 0.2;
let withTipA = (netA + netA * tipA + '€');
console.log(withTipA);
let withTipB = (netB + netB * tipB + '€');
console.log(withTipB);
let withTipC = (netC + netC * tipC + '€');
console.log(withTipC);

// **Average** 

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hours worked per day?
let hoursPerDay = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(hoursPerDay);

// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.
let total5 = 75 + 70 + 85 + 90 + 100;
console.log(total5);
let avg6 = 85;
let the6th = 85 * 6 - total5;
console.log(the6th);

// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
// Expected output: James needs a minimum of --% to get an 80% average.
let wantAvg80 = 80 * 9;
let avg78In8 = 78 * 8;
let the9th = (wantAvg80 - avg78In8 + '%');
console.log(the9th);