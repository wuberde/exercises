//1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let myString1 = `I can walk in the park all day!`;
console.log(myString1);

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let myString2 = "Hello World";
myString2 = myString2.toUpperCase();
console.log(myString2);

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 

let myString3 = "Hello Earthling";
myString3 = myString3.toLowerCase();
console.log(myString3);

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

let myString4 = "JavaScript";
console.log(myString4[3] + myString4[4] + myString4[5]);

// 5. Check if the sentence "nice shoes" contains the letter l or n.

let myString5 = "nice shoes";
console.log(myString5.includes("l"));
console.log(myString5.includes("n")); // How can I write the "or" question in one line?

// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

let myString6 = myString4[0] + myString4 + myString4[0];
console.log(myString6);

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

console.log(myString3.length);
let myString7 = myString3[12] + myString3[13] + myString3[14] + myString3;
console.log(myString7);

// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
console.log(myString2.length);
console.log(`${myString2.substring(1,11)}${myString2[0]}`);

// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
let firstName = "Pei-Ling";
let currentCity = "Berlin";
let pet = "I have a cat"
console.log(`My name is ${firstName}. I live in ${currentCity}, and ${pet}.`)

// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let myString10 = "the quick brown fox.";
console.log(`${myString10[0].toUpperCase()}${myString10.substring(1)}`);