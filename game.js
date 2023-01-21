let WEAPON = ["Rock","Paper","Scissors"];

function getComputerChoice() {
  return WEAPON[parseInt(Math.random()*3)];
}

function getPlayerChoice() {
  let weapon = prompt(`Choose your weapon: ${WEAPON[0]}, ${WEAPON[1]} and ${WEAPON[2]} are accepted values`);
  weapon = weapon[0].toUpperCase() + weapon.substring(1).toLowerCase();
  switch (weapon) {
    case WEAPON[0]:
      return weapon;
    case WEAPON[1]:
      return weapon;
    case WEAPON[2]:
      return weapon;
    default:
      console.log(`${weapon} is not a valid choice`);
  }
  getPlayerChoice();
}

function playRound(playerSelection, computerSelection) {
  console.log(`You choose ${playerSelection} and Computer choose ${computerSelection}`);
  if (playerSelection === WEAPON[0]) {
    if (computerSelection === WEAPON [0]) {
      console.log("It's a draw!");
    } else if (computerSelection === WEAPON[1]) {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  }
  if (playerSelection === WEAPON[1]) {
    if (computerSelection === WEAPON [1]) {
      console.log("It's a draw!");
    } else if (computerSelection === WEAPON[2]) {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  }
  if (playerSelection === WEAPON[2]) {
    if (computerSelection === WEAPON [2]) {
      console.log("It's a draw!");
    } else if (computerSelection === WEAPON[0]) {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  }
}

function game() {
  console.log("Welcome to the Rock Paper Scissors game!")
  for (let i=0; i < 5; i++) {
    console.log(`Round ${i+1}`);
    playRound(getPlayerChoice(), getComputerChoice());
  }
  console.log("Game ended.");
}

game();