/* CH 15: Arrays */

// Arrays = Analogous to a shelf
const myArray = []; // Cannot reassign myArray (always going to be an array) but elements inside can be reassigned (mutable)

// Add elements to an array
myArray[0] = "snowboarding";
myArray[1] = 3;
myArray[2] = false;

// Refer to an array
console.log(myArray);

// Length property
console.log(myArray.length);

// Last element in an Array
console.log(myArray[myArray.length - 1]);

// Add element to array using push
myArray.push("guitar");
console.log(myArray);

// Removes last element from the array
myArray.pop();
console.log(myArray);

// Obtains the last element from the array and places it in a variable
const lastItem = myArray.pop();
console.log(lastItem);

// Removes the first element from an array and returns that removed element
const firstItem = myArray.shift();
console.log(firstItem);

// Adds an element to the beginning of an array and returns the new length of array
myArray.unshift(17);
const newLength = myArray.unshift("I am first now");
console.log(myArray);
console.log(newLength);

// Do not use delete (below)
delete myArray[2];
console.log(myArray); // Doesn't remove that position from the array, instead leaves undefined data

// Removes element at that position until the end argument positions
myArray.splice(1, 1);
console.log(myArray);

// Replaces value at 0 position with 42
myArray.splice(1, 1, 42);
console.log(myArray);

// If don't want to delete value in array, but want to add element in the middle, use this:
myArray.splice(1, 0, 42); // Use 0 as 2nd argument as to not delete
console.log(myArray);

const myArray2 = ["A", "B", "C", "D", "E", "F"];
const newArray = myArray2.slice(2);
console.log(newArray); // Displays "C" starting at position 2, through "F"

const newArray2 = myArray2.slice(2, 5);
console.log(newArray2); // Displays "C" starting at position 2, through "E" ending at position 5

// Reverses array
myArray2.reverse();
console.log(myArray2);

// Join creates and returns a new string by concatenating all of the elements in an array separated by commas, or a specified separator string
const newString = myArray2.join();
console.log(newString);

// String method split returns array with the removal of an indicated item
const newArray3 = newString.split(",");
console.log(newArray3);

// Concat method merges two or more arrays and returns resulting array
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];
const myArrayC = myArrayA.concat(myArrayB); // Returns array with letters A through F
console.log(myArrayC);

// Spread operator
const myArrayD = [...myArrayA, ...myArrayB]; // Makes it so not 2 elements with two array, but spreads all elements from both arrays and combines
console.log(myArrayD);

// Without spread operator, makes new array with 2 elements, the two arrays
const myArrayE = [myArrayA, myArrayB];
console.log(myArrayE);

const equipShelfA = ["Baseball", "Football", "Volleyball"];
const equipShelfB = ["Basketball", "Golf balls", "Tennis balls"];

const clothesShelfA = ["Tank tops", "T-Shirts", "Jerseys"];
const clothesShelfB = ["Sweat tops", "Sweat pants", "Hoodies"];

// Creates an array with two arrays inside (twice, once for equip and once for clothes)
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]); // Displays Football
console.log(clothesDept[1][0]); // Displays Sweat tops

// Creates an array with two arrays inside, equip dept and clothes dept
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]); // Displays football
console.log(sportsStore[1][1][0]); // Displays Sweat tops