/* Chapter 14: Scope */

// var, let, and const all used to initialize variables
var x = 1; // Was done in JS from beginning until 2015. Legacy code
console.log(x);

// var DOESN'T declare an error when a variable is redefined, which can cause issues:
var x = 2;
console.log(x); // No longer equals 1 as previously defined

let y = 1;
let y = 2; // Will show error (y has already been declared. If you take out "let", then no error
console.log(y);

let z = 1; 
let z = 2; // No error (see above)
console.log(z); // Displays 2

const a = 1;
a = 2; // Will throw an error (typeError: assignment to constant variable)
console.log(a);

// Use const WHENEVER YOU CAN. Use let WHEN YOU KNOW YOU'RE GOING TO NEED TO REASSIGN A VALUE


/* Global Scope = Variables defined here are available everywhere
    Not in a function or block. Not desirable.*/
// Local Scope = In a function or block. Not global. There are 2 types:
// 1. Block Scope
// EXAMPLE BELOW:
{
    // Can define a variable here in block, even if it's defined outside of the block

}
// 2. Function Scope

// Can put a block inside of a function, and can put another function inside of a function
function myFunc() {
    const z = 5;
}

// A variable defined inside a local scope is not available outside the local scope

{
    let y = 4; // Not available outside of this scope
}
//console.log(y); // Yields error (commented out so program can still run)

{
    let z = 4;
    console.log(z); // WILL display 4 to console, because inside local scope
}

// Values from local scope cannot move upwards. They do not go to the parent

// Global Scope
var x = 1;
let y = 2;
const z = 3;

console.log(`Global: ${x}`);
console.log(`Global: ${y}`);
console.log(`Global: ${z}`);

function myFunction() {
    console.log(`Function: ${x}`);
    console.log(`Function: ${y}`);
    console.log(`Function: ${z}`);
    {
        console.log(`Block: ${x}`);
        console.log(`Block: ${y}`);
        console.log(`Block: ${z}`);
    }
}
myFunction(); // Shows all three groups of variables because of the global scope applies to all child blocks
// Var instantiates function() scoped variables. Var is function scoped, not block scoped and will ignore the {} curly braces
// Const and let instantiate block scoped variables

// TIPS:
// 1. Avoid using var. Stick with const and let
// 2. Use const unless you need to reassign a value
// 3. Use let if you know you will reassign a value