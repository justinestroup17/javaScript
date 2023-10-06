/* Chapter 13: Functions */
// Functions

// Methods = Built-in Functions

// EXAMPLE:
let name = "Justine";
name = name.toLowerCase(); // Built-in function = method
Math.random(); // Built-in function = method

// Functions = Our own reusable code block

// Function Declaration Syntax:
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(14, 2));

console.log(sum(14)); // Returns NaN because only one argument, when function needed 2 arguments

// Accounts for only one parameter with if statement in function
function sum2(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
console.log(sum2(14));

// ANONYMOUS FUNCTIONS:
// If you don't provide a name, it is an anonymous function
// Can hold the result of that function inside a defined variable name

// EXAMPLE:
const getUserNameFromEmail = function(email) {
    // Only keep characters BEFORE @ symbol
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail("playerOne@someRandomEmail.com"));

// ARROW FUNCTIONS:
// Example:
const getUserNameFromEmail2 = (email) => {
    // Only keep characters BEFORE @ symbol
    return (getUserNameFromEmail2("john@davesdomain.com"));
};

// ANOTHER EXAMPLE:
const toProperCase = (name) => {
    // Capitalizes first letter, lowercases the rest of the name, then concatenates rest of the name
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("jUStInE"));