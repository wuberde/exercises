"use strict";

// 1.
let row;
let triangle = "";
row = triangle;
for (let i = 0; i < 4; i++) {
    row = ``;
    for (let j = 0; j <= i; j++) {
        row += `* `;
    }
    triangle += row + `\n`;
}
console.log(triangle);

// 2. 
let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (let i in a) 
{
   console.log("row " + i);
   for (let j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}
console.log(a);