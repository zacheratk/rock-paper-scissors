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

// Collect human choice with button
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.id))
})

function evaluateChoice(humanChoice, computerChoice) {
    // Use map to determine winner of the two choices
    let result;
    if (humanChoice == "rock") result = rock.get(computerChoice);
    if (humanChoice == "paper") result = paper.get(computerChoice);
    if (humanChoice == "scissors") result = scissors.get(computerChoice);
    // Return string stating if human won, lost, or tied with the computer
    return result;
}

// Update title
function updateTitle(result) {
    const title = document.querySelector("#title");
    switch (result) {
        case "win":
            title.textContent = "You won!";
            title.style.color = "#9CEC5B"
            break;
        case "loss":
            title.textContent = "You lost..."
            title.style.color = "#CC3F0C"
            break;
        case "tie":
            title.textContent = "You tied."
            title.style.color = "#F4E04D"
            break;
        default:
            throw new Error(`updateTitle was provided an unknown value. (${result})`);
    }
}

// Change human icon to their selection
function updateHumanIcon(choice) {
    const humanIcon = document.querySelector("#human-choice");

    switch (choice) {
        case "rock":
            humanIcon.textContent = "🪨";
            break;
        case "paper":
            humanIcon.textContent = "📄";
            break;
        case "scissors":
            humanIcon.textContent = "✂️";
            break;
        default:
            throw new Error(`updateHumanChoice was provided an unknown value. (${choice})`);
    }
}

// Update score on page
function updateScore() {
    const humanScoreCount = document.querySelector("#human-score");
    const computerScoreCount = document.querySelector("#computer-score")

    humanScoreCount.textContent = `Your Score: ${humanScore}`;
    computerScoreCount.textContent = `Computer Score: ${computerScore}`;
    
}

// Change computer icon to their selection
function updateComputerIcon(choice) {
    const computerIcon = document.querySelector("#computer-choice");

    switch (choice) {
        case "rock":
            computerIcon.textContent = "🪨";
            break;
        case "paper":
            computerIcon.textContent = "📄";
            break;
        case "scissors":
            computerIcon.textContent = "✂️";
            break;
        default:
            throw new Error(`updateComputerIcon was provided an unknown value. (${choice})`);
    }
}

// Main game
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    console.log("You picked: " + humanChoice);
    console.log("Your opponent picked: " + computerChoice);
    updateHumanIcon(humanChoice);
    updateComputerIcon(computerChoice);

    switch (evaluateChoice(humanChoice, computerChoice)) {
        case "win":
            console.log("You won!");
            humanScore++;
            updateTitle("win");
            break;
        case "loss":
            console.log("You lost...");
            computerScore++;
            updateTitle("loss")
            break;
        case "tie":
            console.log("You tied.");
            updateTitle("tie")
            break;
        default:
            throw new Error("evaluateChoice returned unknown value");
    }
    updateScore();
}
