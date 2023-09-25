/*CHAPTER 3:
 * STRINGS */

// String
const myVariable = 'Mathematics';

// The length property
console.log(myVariable.length);

const myPhrase = "Today is a good day";
console.log(myPhrase.length);

// Returns the character at the position we provide
console.log(myVariable.charAt(0));

// Returns the position of the first occurrence within the string`
console.log(myVariable.indexOf("at"));

// Returns the position of the last occurrence within the string
console.log(myVariable.lastIndexOf("ath"));

// Returns the characters from the start position to the ending position
// The returned result does NOT include the character at the ending position
console.log(myVariable.slice(5,8));

// If the ending position parameter is not provided, the slice method returns the
// characters from the start position to the end of the string
console.log(myVariable.slice(5));

// Returns the string in all uppercase
console.log(myVariable.toUpperCase());

// Returns the string in all lowercase
console.log(myVariable.toLowerCase());

// Returns true or false if string contains segment
console.log(myVariable.includes("mat"));

// Splits a string wherever the character we provide occurs
// The resulting strings are returned in an array (without the char provided)
console.log(myVariable.split("e"));

// Can use split to create an array of names from a string
console.log("guitar, snowboarding, programming".split(", "));

// Can use split to pull words from a sentence
console.log("I love programming and it is my passion".split(" "));