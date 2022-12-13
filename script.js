console.log("Hello, world")

// create a function that will randomly choose between 3 choices (rock, paper, scissors)

let randNumber = Math.floor(Math.random() * 3);

function getComputerChoice(choice){
    if(choice === 0){
        console.log("Rock")
    } else if(choice === 1){
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
    return choice
}

// console.log(getComputerChoice(randNumber));  // why is this returning 'undefined' / a number ?


function playRound(playerSelection, computerSelection) {
    let result;
    
        if(playerSelection == "rock" && computerSelection === 0){
            return result = "It's a draw ! Rock doesn't beat Rock";
        } else if(playerSelection == "rock" && computerSelection === 1){
            return result = "You Lose! Paper beats Rock";
        } else {
            return result = "You won ! Rock beats Scissors";
        }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice(randNumber);
  console.log(playRound(playerSelection, computerSelection));
  