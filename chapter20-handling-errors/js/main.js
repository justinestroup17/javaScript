/* Chapter 20 - Errors */

// JavaScript can be very forgiving
// variable = "Justine"; // Works, even without using let or const
// console.log(variable);

// Put in strict mode to prevent errors
"use strict";
const variable = "Justine"; // Must do const or let to declare with strict mode, otherwise reference error
console.log(variable);

/* Error Types */
// 1. Reference Error: More common
// 2. Syntax Error: Can't catch and fix. JavaScript catches error as we're building our code
// 3. Type Error: Example is assignment to an already declared const variable
// 4. Error that can be caught in the code as it is executing

// Example of syntax error
Object..create();

const makeError = () => {
    try {
        throw new customError("This is a custom error.");
        const name = "Justine";
        name = "Justina";
    } catch(err) { // Pass in an error if an error occurs as the parameter
        // Don't need to use these, but they are available if wish to display errors:
        console.error(err); // Error gets sent to the console and displayed in red for error
        console.warn(err); // Error gets sent to the console and displayed in yellow for warning
        console.table(err); // The properties of error gets logged to the console
    
        console.error(err.name); // Logs the name part of the error to the console
        console.error(err.message); // Logs the message part of the error to the console
        console.error(err.stack); // Logs the stack part of the error to the console

        // logTheError(err.stack); // Make your own function to create a log of the error info instead of just displaying to the console
    }
}
makeError();

/* Instead of getting a normal error, can throw in a a new customError() */
const makeError2 = () => {
    try {
        throw new customError("This is a custom error")
    } catch (err) { // Pass in an error if an error occurs as the parameter
        console.error(err.stack);
    }
}
makeError2();

function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name} : ${this.message}`;
}
/* We can use the generic built-in error constructor instead of making our own */
const makeError3 = () => {
    try {
        throw new Error("This is the built-in error constructor.");
    } catch (err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    }
};
makeError3();

/* Try-catch blocks can also include finally-blocks. Finally blocks
come at the end and execute no matter what. If NO error is thrown,
the finally block will still execute. Catch will ONLY execute if
there is an error and if there is an error in the try block, any
code that remains in the try block will not execute */
const makeError4 = () => {
    let i = 1;
    while (i <= 5) {
        try {
            // Make odd numbers errors, and even numbers not errors
            if (i % 2 !== 0) {
                throw new Error("Odd number");
            } // No else statement needed
            console.log("Even number"); // Will proceed to catch block and then the finally block
        } catch (err) {
            console.error(err.name);
            console.error(err.message);
            console.error(error.stack);
        } finally {
            console.log("... finally");
            i++;
        }
    }
};
makeError4();