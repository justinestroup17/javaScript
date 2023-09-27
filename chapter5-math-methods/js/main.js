/* CHAPTER 5:
 * MATH METHODS */

// The JavaScript math object has both properties and methods
console.log(Math.PI);

// Returns the integer portion of a number (truncates decimals)
console.log(Math.trunc(Math.PI));

// Returns the value of the number rounded to the nearest integer (up or down)
console.log(Math.round(Math.PI));

// Will ALWAYS round the number up
console.log(Math.ceil(Math.PI));

// Will ALWAYS round the number down
console.log(Math.floor(Math.PI));

// Takes 2 arguments, base and exponent, and returns the result
console.log(Math.pow(2, 4));

// Returns the smallest of 0 or more arguments
console.log(Math.min(2, 5, 9));

// Returns the largest of 0 or more arguments
console.log(Math.max(2, 9.2, 9));

// Provides a pseudo-random number from 0 to 1 including 0 but not including 1
console.log(Math.random());

// Can combine random method with to get random # from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // Must add 1 or will get 0 through 9