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


let win;
let lose;
let draw;

function playRound(playerSelection, computerSelection) {

  
        if(playerSelection && computerSelection === 0){
            return draw = "It's a draw ! Rock is equal to Rock";
        } else if(playerSelection && computerSelection === 1){
            return lose = "You Lose! Paper beats Rock";
        } else {
            return win = "You won ! Rock beats Scissors";
        }
  }

  const playerSelection = "rock"; // variable needs to be case insensitive
  const computerSelection = getComputerChoice(randNumber);
  const result = playRound(playerSelection, computerSelection)
  console.log(result);



// pseudo code : Create a function to run the game, while keeping track of the score and calling
// a winner a the end of the 5th round


// needs user's input - OK
// prompting this 5 times - OK
// register point (function??)
        // define a winner and distribute point accordingly ??????
// keeping track of the score / round
// calling a winner at the end

function game(fetchResult){
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        //console.log(prompt("Rock, Paper or Scissors ?"))
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

console.log(game(result));