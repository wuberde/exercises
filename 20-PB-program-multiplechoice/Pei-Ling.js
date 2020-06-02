"use strict";

//# Switch if...

// #### 1. Color Analyzer
let myColor = `purple`;
switch (myColor) {
    case `red`:
        console.log(`It's red.`);
        break;
    case `blue`:
        console.log(`It's blue.`);
        break;
    case `green`:
        console.log(`It's green.`);
        break;
    case `yellow`:
        console.log(`It's yellow.`);
        break;
    default:
        console.log(`It's not red, blue, green, or yellow. It's ${myColor}.`);
}

// #### 2. Grading
let yourScore = `1`;
switch (yourScore) {
    case `1`:
        console.log(`Very good!`);
        break;
    case `2`:
        console.log(`Good!`);
        break;
    case `3`:
        console.log(`Satisfactory.`);
        break;
    case `4`:
        console.log(`Sufficient.`);
        break;
    case `5`:
        console.log(`Insufficient.`);
        break;
    default:
        console.log(`You did not take the exam.`);
}

// #### 3. Fruits
let myFruit = `banana`;
switch (myFruit) {
    case `banana`:
        console.log(`Bananas are 0.88 €/kg.`);
        break;
    case `orange`:
        console.log(`Oranges are 1.99 €/kg.`);
        break;
    case `strawberry`:
        console.log(`Strawberries are 1.49 €/500g.`);
        break;
    case `apple`:
        console.log(`Apple are 1.49 €/kg.`);
        break;
    default:
        console.log(`There's no banana, orange, strawberry, or apple.`);
}

// #### 4. Percentage Complete.
let percentageComplete = 50;
switch (true) {
    case percentageComplete < 30:
        console.log(`Still a long way to go.`);
        break;
    case 30 <= percentageComplete <= 50:
        console.log(`Slowly getting there.`);
        break;
    case 51 <= percentageComplete <= 80:
        console.log(`You can do it!`);
        break;
    case 81 <= percentageComplete <= 99:
        console.log(`This is the last push!`);
        break;
    case percentageComplete === 100:
        console.log(`You're there. Well done!`);
        break;
    default:
        console.log(`You haven't done anything....`);
}

// 5. Differences
//    When should you use a switch statement versus an if else statement. Comment your answer in your js file.
/* Answer: if-else better for boolean values: If-else conditional branches are great for variable conditions that result into a boolean, whereas switch statements are great for fixed data values. ... Prefer switch if the number of cases are more than 5 otherwise, you may use if-else too.*/