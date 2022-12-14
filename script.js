// pseudo code : Create a function to run the game, while keeping track of the score and calling
// a winner a the end of the 5th round

// get a random choice

choices = ["rock", "paper", "scissors"]

randomChoice = choices[Math.floor(Math.random() * choices.length)];

function getComputerChoice(choice){
    return choice;
}

console.log(getComputerChoice(randomChoice));

const win = 1;
const lose = -1;
const draw = 0;
let playerSelection;
const computerSelection = getComputerChoice(randomChoice);

// Play a round

function playRound(playerSelection, computerSelection) {
  if( playerSelection === "rock" && computerSelection === "paper" ||
      playerSelection === "paper" && computerSelection === "scissors" ||
      playerSelection === "scissors" && computerSelection === "rock"
  ) {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      return lose;

  } else if ( playerSelection === "paper" && computerSelection === "rock" ||
              playerSelection === "scissors" && computerSelection === "paper" ||
              playerSelection === "rock" && computerSelection === "scissors" 
  ) {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      return win;

  } else
      console.log(`It's a Draw ! ${playerSelection} is equal to ${computerSelection}`);
      return draw;
} 

function game(){

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase()
    const result = playRound(playerSelection, computerSelection);
    if(result == win){
      ++playerScore
      console.log(playerScore + " points for the player")
    } else if(result == lose){
      ++computerScore
      console.log(computerScore + " points for the computer");
    } else {
      console.log("It's a draw, no points given");
    }
 } 
   console.log(playerScore, computerScore);
}

game();

// 1 Generate computer's choice - OK
// 2 generae player's choice - OK
// 3 Generate a round - OK
// 4 Generate multiple round - OK
// 5 Keep track of the result
// 6 Call a winner