/* REFACTOR THE GAME */

// Ask if the user would like to play a game
let playGame = confirm("Would you like to play rock, paper, or scissors?");

// User hit okay to play game
if (playGame) {
    while (playGame) {
        const playerChoice = prompt("Please enter rock, paper, or scissors.");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
    
            // If player one entered valid input
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors"
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];
    
            const result =
                playerOne === computer
                ? "Tie game!"
                
                : playerOne === "rock" && computer ==="paper"
                ? `Player One: ${playerOne}
                   \nComputer: ${computer}
                   \nComputer wins!`
    
                : playerOne === "paper" && computer === "scissors"
                ? `PlayerOne: ${playerOne}
                   \nComputer: ${computer}
                   \nComputer wins!`
    
                : playerOne === "scissors" && computer === "rock"
                ? `PlayerOne: ${playerOne}
                   \nComputer: ${computer}
                   \nComputer wins!`
    
                : `PlayerOne: ${playerOne}
                   \nComputer: ${computer}
                   \nPlayer One wins!`;
    
                alert(result);
                playGame = confirm("Would you like to play again?");
                if (!playGame) alert("Ok, thanks for playing.");
                continue;
            } else {
                alert("You didn't enter rock, paper, or scissors.");
                continue;
            }
        } else {
            alert("I guess you changed your mind, maybe next time.");
            break;
        }
    }
} else {
    alert("Ok, maybe next time.");
}