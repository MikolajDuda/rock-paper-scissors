const resultPara = document.querySelector('#result');
const roundResultPara = document.querySelector('#round-result');
const resultsContainer = document.querySelector('#results-container');
const endResultPara = document.createElement('p');
const restartButton = document.createElement('button');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let playerWins = 0; 
let computerWins = 0;


endResultPara.setAttribute('id', 'end-result'); 
restartButton.setAttribute('class', 'btn');
restartButton.textContent = 'RESTART';

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click',  playRound);
restartButton.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    roundResultPara.textContent = '-';
    resultPara.textContent = '-';
    endResultPara.textContent = '';
    restartButton.style.display = 'none';
});


// FUNCTIONS
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay (){
    let moves = ['rock', 'paper', 'scissors'];
    return moves[random(0, 2)];
}

function getResult(playerSelection, computerSelection){
    const computerWon = (playerSelection === 'scissors' && computerSelection === 'rock') || 
            (playerSelection === 'rock' && computerSelection ==='paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissors');
    const tie = playerSelection === computerSelection;

    if (computerWon){
        return 'computer won';
    } else if (tie) {
        return 'tie';
    } else {
        return 'player won';
    }
}

function playRound(){
    if (playerWins >= 5 || computerWins >= 5) { return; }
    const playerSelection = this.id;
    const result = getResult(playerSelection, computerPlay());

    if (result === 'computer won') { 
        computerWins++; 
    } else if (result === 'player won'){ 
        playerWins++; 
    }

    resultPara.textContent = result.toUpperCase();
    roundResultPara.textContent = `PLAYER      ${playerWins} - ${computerWins}      COMPUTER`;
    
    if (playerWins === 5) {
        endResultPara.textContent = 'PLAYER WON';
        resultsContainer.appendChild(endResultPara);
        resultsContainer.appendChild(restartButton);
    } else if (computerWins === 5){
        endResultPara.textContent = 'COMPUTER WON';
        resultsContainer.appendChild(endResultPara);
        resultsContainer.appendChild(restartButton);
    }
}
