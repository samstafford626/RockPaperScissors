let randomNum = 0;
    
let playerSelection = prompt("Maker your choice! (Rock, Paper, or Scissors)").toLowerCase()
let computerChoice = 'scissors';

let result = testAnswer();

console.log("You played " + playerSelection + " and the computer played " + computerChoice);
console.log(result);

function testAnswer() {
    if (playerSelection === computerChoice) {
        return "It's a draw, try again!"
    } else if (playerSelection === 'rock' && computerChoice === 'paper' || playerSelection === 'paper' && computerChoice === 'scissors' || playerSelection === 'scissors' && computerChoice === 'rock') {
        return "You suck and therefore you lose, try again.."
    } else if (playerSelection ==='rock' && computerChoice ==='scissors' || playerSelection ==='paper' && computerChoice ==='rock' || playerSelection ==='scissors' && computerChoice ==='paper') {
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

