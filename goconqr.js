"use strict";

// 1.
const person = {
    firstName: `John`,
    lastName: `Smith`,
    age: 55,
    yearsResidence: 25,
    nationality: `UK`,
    profession: `teacher`,
    salary: 1000,
    myMethod: function () {
        this.yearsResidence >= 7 ? this.nationality = `Germany` : null;
    }
}
person.myMethod();
console.log(person);

// STUB here you should start with this code
// 2.1
const personOne = {
    firstName: 'Kostas',
    lastName: 'Diakogiannis',
    country: `Greece`,
    currency: `Euro`,
    bankAccount: 2560, // us-dollars
    oneDollarInLocalCurrency: 0.89, // euro
    // bankAccountInLocalCurrency: ??? How much would that be in euro?
    bankAccountInLocalCurrency: function () {
        this.result = this.bankAccount * this.oneDollarInLocalCurrency;
    },
    getPersonInfos: function () {
        return `${personOne.firstName} ${personOne.lastName} has ${personOne.result} ${personOne.currency} in ${personOne.country}`;
    }
};

personOne.bankAccountInLocalCurrency();
console.log(personOne.getPersonInfos());

// 2.3
const personThree = {
    firstName: 'Chris',
    lastName: 'Hemsworth',
    country: `Australia`,
    currency: `AUD`,
    bankAccount: 2560, // us-dollars
    oneDollarInLocalCurrency: 1.44, // euro
    bankAccountInLocalCurrency: function () {
        return this.bankAccount * this.oneDollarInLocalCurrency;
    }
};
personThree.bankAccountInLocalCurrency();
console.log(`${personThree.firstName} ${personThree.lastName} has ${personThree.myMethod} ${personThree.currency} in ${personThree.country}`);


// 2.2
/* const personTwo = {
    firstName: 'Chris',
    lastName: 'Hemsworth',
    country: `Australia`,
    currency: `AUD`,
    bankAccount: 2560, // us-dollars
    oneDollarInLocalCurrency: 1.44, // euro
    bankAccountInLocalCurrency: function () {
        return this.bankAccount * this.oneDollarInLocalCurrency;
    }
};
personOne.bankAccountInLocalCurrency();
console.log(`${personTwo.firstName} ${personTwo.lastName} has ${personTwo.myMethod} ${personTwo.currency} in ${personTwo.country}`); */