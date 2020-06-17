"use strict";

// 1.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(`Task 1-1: `, euroCities);
let euroCities2 = euroCities[1];
console.log(`Task 1-2: `, euroCities2);

// 2.
console.log(`Task 2: `);
euroCities[0] = `Berlin`;

// 3.
console.log(`Task 3: `, euroCities);

// 4.
console.log(`Task 4: `, euroCities.pop());
console.log(euroCities);

// 5.
console.log(`Task 5: `, (euroCities[euroCities.length] = "Budapest"));
console.log(euroCities);

// 6.
console.log(`Task 6: `, euroCities.splice(1, 2));
console.log(euroCities);

// 7.
let asianCities = ["Taipei", "Tokyo", "Mumbai", "Hanoi", "Seoul"];
console.log(`Task 7: `, asianCities);

// 8.
let asianCities1 = asianCities.slice(1, 4);
console.log(`Task 8: `, asianCities1);

// 9.
let worldCities = euroCities.concat(asianCities);
console.log(`Task 9: `, worldCities);
// console.log(typeof(worldCities));

// 10.
let worldCitiesRev = worldCities.reverse();
console.log(`Task 10: `, worldCitiesRev);

// 11.
worldCities[2] = `Toronto`;
console.log(`Task 11: `, worldCities);