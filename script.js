let randomNum = 0;
let playerSelection = '';
let computerSelection = '';
let wins = 0;
let losses = 0;



// Function playGame runs 5 rounds. Each round it prompts an answer, generates a computer answer
// and tests the answer.
function playGame() {
    // Initialize wins and losses so the game can be played multiple times
    wins = 0;
    losses = 0;


    for (i = 0; i < 5; i++) {
        // Prompt user for choice and generate computer choice
        playerSelection = prompt("Maker your choice! (Rock, Paper, or Scissors)").toLowerCase();
        computerSelection = 'rock' //getComputerChoice();

        // Test that choice and display a message
        console.log(testAnswer())
        
    }

    // After five rounds, this displays a message based on whether or not you won
    if (wins > losses) {
        console.log("It is a miracle, against all odds you have won!")
    } else if (wins === losses) {
        console.log("It's a draw, we'll get'em next time \n -Soap")
    } else {
        console.log("You suck at this, just stop")
    }
}


// Function testAnswer tests the answer from the prompt against the computer using the global
// variables (playerSelection and computerSelection) and returns a message and tallies wins or losses
function testAnswer() {
    if (playerSelection === computerSelection) {
        return "You both chose " + playerSelection + ", try again!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        losses++;
        return "You suck and therefore you lose, try again.."
    } else if (playerSelection ==='rock' && computerSelection ==='scissors' || playerSelection ==='paper' && computerSelection ==='rock' || playerSelection ==='scissors' && computerSelection ==='paper') {
        wins++;
        return "You have hella rizz, keep it up"
    }
}

// Function getComputerChoice provides rock paper or scissors at random
function getComputerChoice() {
    randomNum = Math.floor(Math.random()*3)+1;
    if (randomNum === 1) {
        return "rock"
    } else if (randomNum === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

