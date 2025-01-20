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
    // Generate a random number between 0 and 2 inclusively, and store in a
    // variable

    // Based on the random number return a string either containing "rock",
    // "paper", or "scissors"
}

function getHumanChoice() {
    // Prompt human to write what option they choose

    // Clean up input by converting to lowercase and removing any whitespace

    // Check if the response is valid:

        // if yes, then return the cleaned up input

        // if no, then prompt the human again
}

function evaluateChoice(humanChoice, ComputerChoice) {
    // Use map to determine winner of the two choices

    // Return string stating if human won, lost, or tied with the computer
}

// Main game
function playRound() {
    // Call getHumanChoice and getComputerChoice, then evaluate the result
}

function playGame(rounds = 5) {
    for (let i = 0; i < rounds; i++) {
        playRound();
    }

    declareWinner();
}

function declareWinner() {
    // Print score in console of both the computer and the human, and declare
    // the winner
}