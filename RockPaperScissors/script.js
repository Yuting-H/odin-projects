//This is a Rock-Paper-Scissor game

let humanScore = 0;

let computerScore = 0;

const input = document.querySelector("#input");

const result = document.querySelector("#result");

//listens to any human input
input.addEventListener("click", playGame);

//playGame();

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

//main logic determining winner
function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) {
    console.log("Draw");
  }

  //determines which side won this round

  if (computerChoice == "Rock") {
    if (humanChoice == "Scissor") {
      console.log("You Lose! Rock beats Scissor!");
      computerScore++;
    } else if (humanChoice == "Paper") {
      console.log("You Win! Paper beats Rock!");
      humanScore++;
    }
  } else if (computerChoice == "Paper") {
    if (humanChoice == "Rock") {
      console.log("You Lose! Paper beats Rock!");
      computerScore++;
    } else if (humanChoice == "Scissor") {
      console.log("You Win! Scissor beats Paper!");
      humanScore++;
    }
  } else if (computerChoice == "Scissor") {
    if (humanChoice == "Paper") {
      console.log("You Lose! Scissor beats Paper!");
      computerScore++;
    } else if (humanChoice == "Rock") {
      console.log("You Win! Rock beats Scissor!");
      humanScore++;
    }
  }
}

function playGame() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice(event);

  playRound(computerChoice, humanChoice);
}

function endGame() {
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore == computerScore) {
    console.log("Game ends in a draw!");
  } else {
    console.log("You lost the game!");
  }
}
