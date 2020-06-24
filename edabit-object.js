"use strict";

// 1.
function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}
console.log(
    volumeOfBox({
        width: 2,
        length: 5,
        height: 1,
    })
);
console.log(
    volumeOfBox({
        width: 4,
        length: 2,
        height: 2,
    })
);
console.log(
    volumeOfBox({
        width: 2,
        length: 3,
        height: 5,
    })
);
/* 
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30 
*/

// 2.
function cityFacts(city) {
    return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}
console.log(
    cityFacts({
        name: "Paris",
        population: "2,140,526",
        continent: "Europe",
    })
);
console.log(
    cityFacts({
        name: "Tokyo",
        population: "13,929,286",
        continent: "Asia",
    })
);

/*
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
*/

// 3.
function hasKey(obj, key) {
    return obj[key] ? true : false;
}
console.log(
    hasKey({
            a: 44,
            b: 45,
            c: 46,
        },
        "d"
    )
);
console.log(
    hasKey({
            craves: true,
            midnight: true,
            snack: true,
        },
        "morning"
    )
);
console.log(
    hasKey({
            pot: 1,
            tot: 2,
            not: 3,
        },
        "not"
    )
);
/* 
hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true
*/

function profit(info) {}

/* 
profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}) ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
}) ➞ 44030
*/