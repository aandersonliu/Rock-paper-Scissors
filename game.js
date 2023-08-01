const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (!choices.includes(playerChoice)) {
    return "Invalid choice! Please choose rock, paper, or scissors.";
  }

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return "You win! " + playerChoice + " beats " + computerChoice + ".";
  } else {
    return "You lose! " + computerChoice + " beats " + playerChoice + ".";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(`Round ${round}: Enter your choice (rock, paper, or scissors):`);
    const computerSelection = getComputerChoice();

    console.log(`Round ${round}:`);
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  console.log("Final Score:");
  console.log(`You: ${playerScore} points`);
  console.log(`Computer: ${computerScore} points`);

  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry! You lose the game.");
  } else {
    console.log("It's a tie! The game ends in a draw.");
  }
}

game();
