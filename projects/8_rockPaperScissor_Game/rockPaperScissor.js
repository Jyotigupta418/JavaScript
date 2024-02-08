const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");

choices.forEach((choice) => {
  choice.addEventListener("click", handlePlay);
});

function handlePlay(event) {
  const playerChoice = event.currentTarget.id;
  const computerChoice = getComputerChoice();

  const outcome = determineOutcome(playerChoice, computerChoice);
  result.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${outcome}`;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineOutcome(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lose!";
    } else {
      return "You win!";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lose!";
    } else {
      return "You win!";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lose!";
    } else {
      return "You win!";
    }
  }
}
function restartGame() {
  result.textContent = "";
}
