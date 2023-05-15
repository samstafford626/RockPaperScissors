let randomNum = 0;
    

function getComputerChoice() {
    randomNum = Math.floor(Math.random()*3)+1;
    if (randomNum === 1) {
        return "Rock"
    } else if (randomNum === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}