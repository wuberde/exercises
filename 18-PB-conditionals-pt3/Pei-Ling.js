"use strict";

// 1. 
let teamAleezaScore1 = 89;
let teamAleezaScore2 = 120;
let teamAleezaScore3 = 103;
let teamLisScore1 = 116;
let teamLisScore2 = 94;
let teamLisScore3 = 123;

// 1a) 
let teamAleezaScoreAvg = (teamAleezaScore1 + teamAleezaScore2 + teamAleezaScore3) / 3;

let teamLisScoreAvg = (teamLisScore1 + teamLisScore2 + teamLisScore3) / 3;

console.log(`1a): Aleeza's team's average score is: ${teamAleezaScoreAvg}. Lis's team's average score is: ${teamLisScoreAvg}.`);

// 1b) 
let winner = `Who knows?`;
let winnerScoreAvg = `I don't know.`;
if (teamAleezaScoreAvg > teamLisScoreAvg) {
    winner = `Aleeza's team wins cuz they have higher average score with`;
    winnerScoreAvg = teamAleezaScoreAvg;
} else if (teamAleezaScoreAvg < teamLisScoreAvg) {
    winner = `Lis's team wins cuz they have higher average score with`;
    winnerScoreAvg = teamLisScoreAvg;
}
console.log(`1b):`, winner, winnerScoreAvg);

// 1c)
let teamAleezaDreamAvg = teamLisScoreAvg + 1;
// console.log(teamADreamAvg);
if (teamAleezaDreamAvg > teamLisScoreAvg) {
    winner = `Aleeza's team wins in their dream with higher average score of`;
    winnerScoreAvg = teamAleezaDreamAvg;
} else if (teamAleezaScoreAvg = teamLisScoreAvg) {
    winner = `There's no winner cuz both team have the same average score, each team individually scored`;
}
console.log(`1c):`, winner, winnerScoreAvg);
// else if (draw = teamLisScoreAvg)  doesn't work

// 1d) 
let teamMaryScore1 = 97;
let teamMaryScore2 = 134;
let teamMaryScore3 = 105;
let teamMaryScoreAvg = (teamMaryScore1 + teamMaryScore2 + teamMaryScore3) / 3;
console.log(`1d): Mary's team's average score is:  ${teamMaryScoreAvg}.`)

// 1e) 
let teamMaryDreamAvg = teamLisScoreAvg + 1;
console.log(teamMaryDreamAvg);

if (teamMaryDreamAvg > teamLisScoreAvg) {
    winner = `Mary's team wins in their dream with higher average score of`;
    winnerScoreAvg = teamMaryDreamAvg;
}
console.log(`1e):`, winner, winnerScoreAvg);
//can't finish