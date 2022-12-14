// pseudo code : Create a function to run the game, while keeping track of the score and calling
// a winner a the end of the 5th round

/* function game(fetchResult){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        //prompt("Rock, Paper, or Scissors?");
        if(fetchResult == win){
            playerScore++;
            console.log(playerScore + " points for the player");
        } else if(fetchResult == lose){
            computerScore++;
            console.log(computerScore + " points for the computer");
        } else {
            console.log("It's a draw")
        }
     }
}

*/

//game(playRound(playerSelection, computerSelection));


// get a random choice

choices = ["rock", "paper", "scissors"]

randomChoice = choices[Math.floor(Math.random() * choices.length)];

function getComputerChoice(choice){
    return choice;
}

console.log(getComputerChoice(randomChoice));


// Play a round

function playRound(playerSelection, computerSelection) {
  if( playerSelection === "rock" && computerSelection === "paper" ||
      playerSelection === "paper" && computerSelection === "scissors" ||
      playerSelection === "scissors" && computerSelection === "rock"
  ) {
      return `You Lose! ${computerSelection} beats ${playerSelection}`

  } else if ( playerSelection === "paper" && computerSelection === "rock" ||
              playerSelection === "scissors" && computerSelection === "paper" ||
              playerSelection === "rock" && computerSelection === "scissors" 
  ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`

  } else
      return `It's a Draw ! ${playerSelection} is equal to ${computerSelection}`
} 


const playerSelection = prompt("Rock, Paper or Scissors ?");
const computerSelection = getComputerChoice(randomChoice);
console.log(playRound(playerSelection, computerSelection));

// 1 Generate computer's choice - OK
// 2 generae player's choice - OK
// 3 Generate a round - OK
// 4 Generate multiple round
// 5 Keep track of the result
// 6 Call a winner