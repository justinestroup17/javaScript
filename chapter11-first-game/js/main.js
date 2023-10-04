/* CH 11:
    FIRST INTERACTIVE GAME */

// Ask if user would like to play a game
let playGame = confirm("Shall we play rock, paper, or scissors?");

// If user wants to play, start game
if(playGame) {
    // Get user choice of rock, paper, or scissors
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    
    // Plan for user hitting cancel, which would return null data
    if(playerChoice) {
        // Continue to play since user entered data, but clean input to check
        let playerOne = playerChoice.trim().toLowerCase();

        // PlayerOne entered valid input (rock, paper, or scissors)
        if (playerOne === "rock" || playerOne === "paper" ||
            playerOne === "scissors") {
                // Computer will be choices 1, 2 or 3, and assigned rock, paper or scissors
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                let computer = 
                    computerChoice === 1 ? "rock"
                    : computerChoice === 2 ? "paper"
                    : "scissors";

            let result = 
            // Ternary statements with template literals to include values
                playerOne === computer
                ? "Tie game!"

                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`

                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`

                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`

                : `playerOne: ${playerOne}\nComputer: ${computer}
                \nplayerOne wins!`;

                // Show result
                alert(result);

                // Ask if user wants to play again
                let playAgain = confirm("Play Again?");
                
                // If true, location.reload() method will reload the webpage, starting the game over
                playAgain ? location.reload()
                : alert("Ok, thanks for playing."); // User does not want to play again
            } else {
                // PlayerOne entered data, but it wasn't rock, paper, or scissors
                alert("You didn't enter rock, paper, or scissors.");
            }
    } else {
        // User hit cancel instead of rock, paper, or scissors
        alert("I guess you changed your mind. Maybe next time.");
    }

} else {
    // User hit cancel right away, does not want to play game
    alert("Ok, maybe next time.");
}