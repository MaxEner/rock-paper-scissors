// 1. take use input
// 2. make computer choose a random value between: Rock, paper, siccors
// 3. compare computer value with user value
// 4. log the winer
// 5. first to 3 wins



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3); 
    if (computerChoice === 0) {
        return "paper";
    }
    else if (computerChoice === 1) {
        return "rock";
    }
    
    else {
        return "scissors";
    }
}

function getPlayerChoice() {
  let answer = prompt("Choose: paper, rock, scissors"); 
  let properAnswer = answer.toLowerCase();

  return properAnswer;
}

const computerChoice =getComputerChoice();
const playerChoice = getPlayerChoice();

function playRound(computerChoice, playerChoice) {
  if(computerChoice == playerChoice) {
    return ("it's a tie");
  }
  else if (computerChoice == "rock" && playerChoice == "paper"){
    return ("You Won! Paper beats rock.");
  }
  else if (computerChoice == "rock" && playerChoice == "scissors") {
    return ("You Lose! Rock beats Scissors.");
  }
  else if (computerChoice == "paper" && playerChoice == "rock") {
    return ("You Lose! Paper beats rock.");
  }
  else if (computerChoice == "paper" && playerChoice == "scissors") {
    return ("You WOn! Scissors beats paper.");
  }
  else if (computerChoice == "scissors" && playerChoice == "rock") {
    return ("You WOn! Rock beats scissors.");
  }
  else if (computerChoice == "scissors" && playerChoice == "paper") {
    return ("You Lose! Scissors beats paper.");
  }

  else return ("You did not chose one of the three options, please try again");
}

console.log(playRound(computerChoice, playerChoice));