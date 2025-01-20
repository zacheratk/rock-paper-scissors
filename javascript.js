/* Rock Paper Scissors
Simple CLI program to play rock paper scissors with the computer.

This accepts input from the user, and randomly selects a choice for the
computer. 

After both "players" choose, it is evaluated who won, or if there was a tie.


*/
// Score
let humanScore = 0;
let computerScore = 0;

// Create a map each choice, with each opponent choice (as the key) and the
// result of a game (value)

// Rock values
const rock = new Map();
rock.set("rock", "tie");
rock.set("paper", "loss");
rock.set("scissors", "win");

// Paper values
const paper = new Map();
paper.set("rock", "win");
paper.set("paper", "tie");
paper.set("scissors", "loss");;

// Scissors values
const scissors = new Map();
scissors.set("rock", "loss");
scissors.set("paper", "win");
scissors.set("scissors", "tie");


// Choice selection
function getComputerChoice() {
    // Generate a random number between 0 and 2, and store in a
    // variable
    let randomNumber = getRandomInt(0, 3);

    // Based on the random number return a string either containing "rock",
    // "paper", or "scissors"
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            throw new Error("getComputerChoice returned an unknown value");
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getHumanChoice() {
    // Prompt human to write what option they choose
    choice = prompt("Rock... paper... scissors... (enter your choice)").toLowerCase().trim();

    // Check if the response is valid:
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        alert("Invalid input.");
        getHumanChoice();
    }
}

function evaluateChoice(humanChoice, computerChoice) {
    // Use map to determine winner of the two choices
    let result;
    if (humanChoice == "rock") result = rock.get(computerChoice);
    if (humanChoice == "paper") result = paper.get(computerChoice);
    if (humanChoice == "scissors") result = scissors.get(computerChoice);
    // Return string stating if human won, lost, or tied with the computer
    return result;
}

// Main game
function playRound() {
    // Call getHumanChoice and getComputerChoice, then evaluate the result
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log("You picked: " + humanChoice);
    console.log("Your opponent picked: " + computerChoice);

    switch (evaluateChoice(humanChoice, computerChoice)) {
        case "win":
            console.log("You won!");
            humanScore++;
            break;
        case "loss":
            console.log("You lost...");
            computerScore++;
            break;
        case "tie":
            console.log("You tied.");
            break;
        default:
            throw new Error("evaluateChoice returned unknown value");
    }
}

function playGame(rounds = 5) {
    for (let i = 0; i < rounds; i++) {
        console.log("Round " + (i+1) + ":");
        playRound();
    }

    declareWinner();
}

function declareWinner() {
    // Print score of both the computer and the human, and declare the winner
    console.log("Your final score: " + humanScore);
    console.log("Opponent final score: " + computerScore);
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game...");
    } else {
        console.log("You tied. Rematch?")
    }
}

playGame();