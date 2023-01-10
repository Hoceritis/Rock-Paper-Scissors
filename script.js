//create the main div

let div = document.createElement('div');
let mainDiv = div.setAttribute('id', 'main-div');

// append the div to body

document.body.appendChild(div);
const node = document.createTextNode("This is a new paragraph.");
div.appendChild(node)

// create 3 buttons

const rock = document.createElement('BUTTON')
rock.setAttribute('div', 'rock')

const papper = document.createElement('BUTTON')
papper.setAttribute('div', 'paper')

const scissors = document.createElement('BUTTON')
scissors.setAttribute('div', 'scissors')

// add text into the button

rock.textContent = "Rock"
papper.textContent = "paper"
scissors.textContent = "scissors"

// append the buttons to div

div.append(rock, papper, scissors)

choices = ["rock", "paper", "scissors"]

function playerInput(choices) {
  for(i = 0 ;i < choices.length ; i++){
    //console.log(choices[i])
  }
  return choices[i];
}

playerInput(choices);

randomChoice = choices[Math.floor(Math.random() * choices.length)];

function getComputerChoice(choice){
    return choice;
}

const win = 1;
const lose = -1;
const draw = 0;
let computerSelection = getComputerChoice(randomChoice);

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

  console.log(getComputerChoice(randomChoice));
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {

    let playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase();
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
   
    // pourquoi ne je peux pas appeler la fonction  getComputerChoice(randomChoice) ? Pour avoir un nouveau choix
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection)
  
 } 
    if(playerScore > computerScore){
      console.log(playerScore + " points for the player", computerScore + " points for the computer" + " -- YOU WON !");
    } else if(computerScore > playerScore){
      console.log(playerScore + " points for the player", computerScore + " points for the computer" + " -- YOU LOSE !");
    } else {
      console.log(playerScore + " points for the player", computerScore + " points for the computer" + " -- IT'S A TIE !");
    }
}

//game();

// 1 Generate computer's choice - OK
// 2 generae player's choice - OK
// 3 Generate a round - OK
// 4 Generate multiple round - OK
// 6 Keep track of the result - OK
// 7 Call a winner - OK