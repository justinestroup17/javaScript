/* CHAPTER 9:
    TERNARY OPERATORS*/

// Ternary operator = short-hand for if-else statements. 3 part tool for making decisions
// Ternary operators can save lines of code, making it less bulky

/* SYNTAX
condition ? ifTrue : ifFalse;
The colon is the "else" in an if else statement */

let soup = "Chicken Noodle Soup"; // If variable not declared, then it is undefined which is considered false
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you"
: soup
? `Yes, we have ${soup} today.`
: "Sorry, no soup today.";
console.log(soupAccess);

// You can chain ternary operators to mimic if/else statements
let testScore = 92;
let myGrade =
    testScore > 89
        ? "A"
    : testScore > 79
        ? "B"
    : testScore > 69 
        ? "C"
    : testScore > 59
        ? "D"
    : "F";
console.log(`My test grade is a ${myGrade}.`);

// Applying ternary operators to Rock, Paper Scissors
let playerOne = "rock";
let computer = "scissors";
let result =
    playerOne === computer ? "Tie game!"
    : playerOne === "rock" && computer === "paper" ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors" ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock" ? "Computer wins!"
    : "playerOne wins!";
console.log(result);