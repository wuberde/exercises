"use strict";

// 1.
let teamAleezaScore1 = 89;
let teamAleezaScore2 = 120;
let teamAleezaScore3 = 103;
let teamLisScore1 = 116;
let teamLisScore2 = 94;
let teamLisScore3 = 123;

// 1a)
let teamAleezaScoreAvg =
    (teamAleezaScore1 + teamAleezaScore2 + teamAleezaScore3) / 3;

let teamLisScoreAvg = (teamLisScore1 + teamLisScore2 + teamLisScore3) / 3;

console.log(
    `1a): Aleeza's team's average score is: ${teamAleezaScoreAvg}. Lis's team's average score is: ${teamLisScoreAvg}.`
);

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

// 1c) Then change the scores to show different winners.
let teamAleezaDreamAvg = teamLisScoreAvg + 1;
// console.log(teamAleezaDreamAvg);
if (teamAleezaDreamAvg > teamLisScoreAvg) {
    winner = `Aleeza's team wins in their dream with higher average score of`;
    winnerScoreAvg = teamAleezaDreamAvg;
    //Don't forget to take into account there might be a draw (the same average score).
} else if ((teamAleezaScoreAvg = teamLisScoreAvg)) {
    winner = `There's no winner cuz both team have the same average score.`;
    winnerScoreAvg = ` `;
}
console.log(`1c):`, winner, winnerScoreAvg);

// 1d)
let teamMaryScore1 = 97;
let teamMaryScore2 = 134;
let teamMaryScore3 = 105;
let teamMaryScoreAvg = (teamMaryScore1 + teamMaryScore2 + teamMaryScore3) / 3;
// console.log(`1d): Mary's team's average score is:  ${teamMaryScoreAvg}.`)

if (
    teamMaryScoreAvg > teamLisScoreAvg &&
    teamMaryScoreAvg > teamAleezaScoreAvg
) {
    winner = `Mary's team wins with the highest average score of`;
    winnerScoreAvg = teamMaryScoreAvg;
} else if (
    teamAleezaScoreAvg > teamLisScoreAvg &&
    eamAleezaScoreAvg > teamMaryScoreAvg
) {
    winner = `Aleeza's team wins with the highest average score of`;
    winnerScoreAvg = teamAleezaScoreAvg;
} else if (
    teamLisScoreAvg > teamAleezaScoreAvg &&
    eamLisScoreAvg > teamMaryScoreAvg
) {
    winner = `Lis's team wins with the highest average score of`;
    winnerScoreAvg = teamLisScoreAvg;
} else if ((teamAleezaScoreAvg = teamLisScoreAvg = teamMaryScoreAvg)) {
    winner = `It's a draw cuz both team have the same average score.`;
    winnerScoreAvg = ` `;
}
console.log(`1d):`, winner, winnerScoreAvg);

// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let teamAleezaDreamAvg2 = teamMaryScoreAvg + 1;
if (
    teamAleezaDreamAvg2 > teamLisScoreAvg &&
    teamAleezaDreamAvg2 > teamMaryScoreAvg
) {
    winner = `Aleeza's team wins in their dream with the highest average score of`;
    winnerScoreAvg = teamAleezaDreamAvg2;
    //Don't forget to take into account there might be a draw (the same average score).
} else if (teamAleezaScoreAvg2 === teamLisScoreAvg && teamAleezaScoreAvg2 === teamMaryScoreAvg) {
    winner = `It's a draw cuz all teams have the same average score.`;
    winnerScoreAvg = ` `;
}
console.log(`1e):`, winner, winnerScoreAvg);