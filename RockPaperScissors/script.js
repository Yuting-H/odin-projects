//This is a Rock-Paper-Scissor game

let rounds = 0;

let humanScore = 0;

let computerScore = 0;

const input = document.querySelector("#input");

const computer = document.querySelector("#computer");

const status = document.querySelector("#status");

const buttons = document.querySelectorAll("button");

//listens to any human input
input.addEventListener("click", playGame);

//returns either "Rock", "Paper" or "Scissor"
function getComputerChoice() {
  randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "Rock";
  } else if (randomNumber < 0.66) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

//Fires when player clicks on a choice
function getHumanChoice(event) {
  console.log(event.target.innerText);
  return event.target.innerText;
}

//updates the score and round counter
function updateStatus() {
  status.innerHTML = `<h3>Score: ${humanScore}</h3> <h3>Round: ${rounds}</h3>`;
}

//main logic determining winner
function playRound(computerChoice, humanChoice) {
  rounds++;

  let choices = `<h3>CPU choice: ${computerChoice} <br> Your choice: ${humanChoice}</h3>`;

  //determines if draw
  if (computerChoice == humanChoice) {
    console.log("draw");
    choices = choices + "Round ends in a draw";
  } else {
    //not draw, determine winner

    if (
      (computerChoice == "Rock" && humanChoice == "Scissor") ||
      (computerChoice == "Scissor" && humanChoice == "Paper") ||
      (computerChoice == "Paper" && humanChoice == "Rock")
    ) {
      choices = choices + `You Lose! ${computerChoice} beats ${humanChoice}!`;
      computerScore++;
    } else {
      choices = choices + `You Win! ${humanChoice} beats ${computerChoice}!`;
      humanScore++;
    }
  }

  computer.innerHTML = choices;
  updateStatus();
}

function playGame() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice(event);

  playRound(computerChoice, humanChoice);

  if (rounds >= 5) {
    endGame();
  }
}

function endGame() {
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore == computerScore) {
    console.log("Game ends in a draw!");
  } else {
    console.log("You lost the game!");
  }

  for (const button of buttons) {
    button.disabled = true;
  }
}
