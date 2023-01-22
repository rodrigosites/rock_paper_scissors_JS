const WEAPON = ["Rock","Paper","Scissors"];
const buttons = document.querySelectorAll('button');
const gameTextDiv = document.querySelector('.game-container');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  return WEAPON[parseInt(Math.random()*3)];
}

function getPlayerChoice(weaponIndex) {
  return WEAPON[weaponIndex];
}

function addGameText(text) {
  const p = document.createElement('p');
  p.textContent = text;
  p.className = round;
  gameTextDiv.appendChild(p);  
}

function clearRoundText() {
  const lastRound = document.getElementsByClassName(round);
  if (lastRound.length > 0) {
    while (lastRound.length > 0) {
      lastRound[0].parentNode.removeChild(lastRound[0]);
    }
  }
}

function playRound(playerSelection, computerSelection) {
  addGameText(`Round #${++round}!`);
  addGameText(`You choose ${playerSelection} and Computer choose ${computerSelection}`);
  if (playerSelection === WEAPON[0]) {
    if (computerSelection === WEAPON [0]) {
      addGameText("It's a draw!");
    } else if (computerSelection === WEAPON[1]) {
      computerScoreText.innerText = `Computer: ${++computerScore}`;
      addGameText(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      playerScoreText.innerText = `Player: ${++playerScore}`;
      addGameText(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  }
  if (playerSelection === WEAPON[1]) {
    if (computerSelection === WEAPON [1]) {
      addGameText("It's a draw!");
    } else if (computerSelection === WEAPON[2]) {
      computerScoreText.innerText = `Computer: ${++computerScore}`;
      addGameText(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      playerScoreText.innerText = `Player: ${++playerScore}`;
      addGameText(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  }
  if (playerSelection === WEAPON[2]) {
    if (computerSelection === WEAPON [2]) {
      addGameText("It's a draw!");
    } else if (computerSelection === WEAPON[0]) {
      computerScoreText.innerText = `Computer: ${++computerScore}`;
      addGameText(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      playerScoreText.innerText = `Player: ${++playerScore}`;
      addGameText(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    clearRoundText();
    playRound(getPlayerChoice(event.target.value), getComputerChoice());
    if (playerScore === 5) addGameText('Player won the game!');
    if (computerScore === 5) addGameText('The Computer won the game!');
  });
});