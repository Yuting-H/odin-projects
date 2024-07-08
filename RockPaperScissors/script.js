//This is a rock-paper-scissor game

let humanScore = 0;

let computerScore = 0;

playGame();

function getComputerChoice() {
  randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let input = prompt("enter input");
  input = input.toLowerCase();
  return input;
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) {
    console.log("Draw");
  }

  if (computerChoice == "rock") {
    if (humanChoice == "scissor") {
      console.log("You Lose! Rock beats Scissor!");
      computerScore++;
    } else if (humanChoice == "paper") {
      console.log("You Win! Paper beats Rock!");
      humanScore++;
    }
  } else if (computerChoice == "paper") {
    if (humanChoice == "rock") {
      console.log("You Lose! Paper beats Rock!");
      computerScore++;
    } else if (humanChoice == "scissor") {
      console.log("You Win! scissor beats paper!");
      humanScore++;
    }
  } else if (computerChoice == "scissor") {
    if (humanChoice == "paper") {
      console.log("You Lose! Scissor beats Paper!");
      computerScore++;
    } else if (humanChoice == "rock") {
      console.log("You Win! Rock beats Scissor!");
      humanScore++;
    }
  }
}

function playGame() {
  for (let index = 0; index < 5; index++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    playRound(computerChoice, humanChoice);
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore == computerScore) {
    console.log("Game ends in a draw!");
  } else {
    console.log("You lost the game!");
  }
}
