// mettre les event listener en fin de doc ?
// + Pointer vers le choix du lixk, plutot que l'user input"


//create the main div

let div = document.createElement('div');
let mainDiv = div.setAttribute('id', 'main-div');

document.body.appendChild(div);

// create 3 buttons for choices

const rock = document.createElement('BUTTON')
rock.setAttribute('value', 'rock')

const paper = document.createElement('BUTTON')
paper.setAttribute('value', 'paper')

const scissors = document.createElement('BUTTON')
scissors.setAttribute('value', 'scissors')

rock.textContent = "rock"
paper.textContent = "paper"
scissors.textContent = "scissors"

div.append(rock, paper, scissors)

// create the 'start' game button

const start = document.createElement('button')
start.setAttribute('value', 'start')
start.textContent = "start"
div.append(start)

// game's logic

const choices = ["rock", "paper", "scissors"]

randomChoice = choices[Math.floor(Math.random() * choices.length)];

const win = 1;
const lose = -1;
const draw = 0;
let computerSelection = getComputerChoice(randomChoice);
let playerScore = [];
let computerScore = [];

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

  console.log(getComputerChoice('This is the first computer choice : ' + randomChoice));

    let playerSelection = playerChoice(event);
    let result = playRound(playerSelection, computerSelection);

    if(result == win){
      playerScore.push(1)
      console.log(playerScore.length + " points for the player")
    } else if(result == lose){
      computerScore.push(1)
      console.log(computerScore.length + " points for the computer");
    } else {
      console.log("It's a draw, no points given");
    }
}

function getComputerChoice(choice){
  return choice;
}

const elements = [rock, paper, scissors];

function playerChoice(event) {
  let clickedElement = event.target;
  let value = clickedElement.value;
  console.log('This is the player choice :' + value)
  return value
}

function winner(playerScore, computerScore){
  if(playerScore.length == 5){
    console.log('You won !')
    playerScore.length = 0;
    computerScore.length = 0;
  } else if (computerScore.length == 5){
    console.log('You lose')
    playerScore.length = 0;
    computerScore.length = 0;
  }
}

elements.forEach(el => el.addEventListener('click', function(event) {
  // 1. get player's choice
  playerChoice(event);
  // 2. get comp's choice
  getComputerChoice(randomChoice);
  // 3. run a round
  game();
  // 4. check for winner
  winner(playerScore, computerScore);
}));