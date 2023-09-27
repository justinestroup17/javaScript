/* CHAPTER 4:
 * NUMBERS */

// An integer is a whole number.
const myNumber = 42;
console.log(myNumber);

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.01;

console.log(myFloat); // Java will omit the zeros after decimal point

console.log(myNumber === myFloat); // Returns false unless myFloat is 42.00

const myString = "42";

console.log(myNumber === myString); // Returns false b/c of difference in data type

console.log(myString + 3); // Returns 423 because of string data type

// Change String data type to Number data type and add 3
console.log(Number(myString) + 3);

// If you try to change data that can't be converted to a #, will return NaN
console.log(Number("Justine"));

console.log(Number(undefined)); // Returns NaN

console.log(Number(true)); // Returns 1 (and returns 0 for false)

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer

console.log(Number.isInteger(myNumber)); // Returns true

// The Number.parseFloat() method parses an argument and returns a floating point number.
// If a number can't be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myNumber)); // Returns 42

// When parsing, removes non-numeric characters and converts other data types to the number data type
console.log(Number.parseFloat("42.123abc"));

// However, the method returns NaN when the first non-whitespace character can't be converted to a number
console.log(Number.parseFloat("abc42.123")); // Returns NaN

// The toFixed() method formats a number according to how many
// decimal points you provide as the parameter. RETURNS STRING DATA
console.log(Number.parseFloat(myString).toFixed(2)); // Returns 42.00

// toFixed() will round up if we're trailing decimals
console.log(Number.parseFloat("42.9996").toFixed(1)); // Returns 43.0

// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat));

// When parsing, removes non-numeric characters and converts other data types to the number data type
console.log(Number.parseInt("34.2justine")); // Returns 34

// The toString() method returns a string representing the number.
console.log(myFloat.toString()); // Returns 42 as a string

// typeof returns the data type
console.log(typeof myFloat.toString()); // Returns string
console.log(typeof Number.parseFloat(myString)); // Returns number

// Chaining: Using several methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString()); // Returns 4.24
// toFixed already returns string data so you would not chain toString, this is just an example

// NaN is an acronym for Not a Number

// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number
console.log(Number.isNaN("Justine")); // Returns false because of AND condition which is confusing, use the global isNaN function

console.log(isNaN("Justine")); // Returns true