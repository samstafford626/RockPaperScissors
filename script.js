let randomNum = 0;
let playerSelection = '';
let computerSelection = '';
let winsTotal = 0;
let lossesTotal = 0;

// select DOM items
const buttons = document.querySelectorAll('.container>div');
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const memo = document.querySelector('.memo');

// addEventListeners
buttons.forEach(btn => btn.addEventListener('click',playRound));

// Function playRound. Each round it prompts an answer, generates a computer answer
// and tests the answer.
function playRound(e) {
    // Assign user choice and generate computer choice
    playerSelection = e.target.className;
    computerSelection = getComputerChoice();

    // Returns a string with message
    if (playerSelection === computerSelection) {
        memo.innerText = "You both chose " + playerSelection + ", try again!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        lossesTotal++;
        losses.innerText = `Losses: ${lossesTotal}`;
        memo.innerText = "You suck and therefore you lose, try again..";
        checkWin();
    } else if (playerSelection ==='rock' && computerSelection ==='scissors' || playerSelection ==='paper' && computerSelection ==='rock' || playerSelection ==='scissors' && computerSelection ==='paper') {
        winsTotal++;
        wins.innerText = `Wins: ${winsTotal}`;
        memo.innerText = "You have hella rizz, keep it up";
        checkWin();
    }
}

// if wins or losses equals 5, stop event listener, display message in memo
function checkWin() {
    if (winsTotal === 3) {
        buttons.forEach(btn => btn.removeEventListener('click',playRound));
        memo.innerText = "Great fight out there, you are the victor!"
    } else if (lossesTotal === 3) {
        buttons.forEach(btn => btn.removeEventListener('click',playRound));
        memo.innerText = "Good effort, we'll get'em next time \n -Soap"
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

