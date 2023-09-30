/* CHAPTER 8:
 * CONDITIONALS: SWITCH STATEMENTS */

// Syntax
/* switch (expression OR value) {
    case choice1:
        // run this code
        break;
    case choice2:
        // run this different code
        break;
    
    // add as many cases as needed

    default:
    // run this code if no case matches
    // no need for a break here
} */


// Will result in default case because the string value does not match the numeric value
// Switch statements mean strict matches
switch ("2") { 
    case 1:
        // run this code
        break;
    case 2:
        // run this code
        break;
    case 3:
        // run this code
        break;
    default:
        console.log("No match");
}

switch(2) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
}

// Generates a random number from one to 5
switch(Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
}

let playerOne = "scissors";
let computer = "paper";

switch(playerOne) {
    case computer:
      console.log("Tie game!"); // Both playerOne & computer match
      break;
    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("Computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;
    default: // PlayerOne is scissors
        if (computer === "rock") {
            console.log("Computer wins!");
        } else {
            console.log("playerOne wins!");
        }
}