let randomNum = 0;
    
let playerSelection = '';
let computerSelection = '';
let result = '';

// Prompt user for choice and generate computer choice
playerSelection = prompt("Maker your choice! (Rock, Paper, or Scissors)").toLowerCase();
computerSelection = 'rock' //getComputerChoice();

// Test that choice and display a message

console.log(testAnswer())

// Loop back through and track wins and losses
// Update the message and ticker with wins and losses

function testAnswer() {
    if (playerSelection === computerSelection) {
        return "You both chose " + playerSelection + ", try again!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You suck and therefore you lose, try again.."
    } else if (playerSelection ==='rock' && computerSelection ==='scissors' || playerSelection ==='paper' && computerSelection ==='rock' || playerSelection ==='scissors' && computerSelection ==='paper') {
        return "You have hella rizz, keep it up"
    }
}

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

