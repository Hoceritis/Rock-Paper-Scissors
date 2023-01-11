// mettre les event listener en fin de doc ?
// + Pointer vers le choix du lixk, plutot que l'user input"


//create the main div

let div = document.createElement('div');
let mainDiv = div.setAttribute('id', 'main-div');

// append the div to body

document.body.appendChild(div);

// create 3 buttons

const rock = document.createElement('BUTTON')
rock.setAttribute('value', 'rock')

const paper = document.createElement('BUTTON')
paper.setAttribute('value', 'paper')

const scissors = document.createElement('BUTTON')
scissors.setAttribute('value', 'scissors')

// add text into the button

rock.textContent = "rock"
paper.textContent = "paper"
scissors.textContent = "scissors"

// append the buttons to main div

div.append(rock, paper, scissors)

// game's logic

const choices = ["rock", "paper", "scissors"]

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

    // take the player input via a click instead of a prompt
    //let playerSelection = playerSelection(choices);
    let playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase();
    let result = playRound(playerSelection, computerSelection);

    if(result == win){
      ++playerScore
      console.log(playerScore + " points for the player")
    } else if(result == lose){
      ++computerScore
      console.log(computerScore + " points for the computer");
    } else {
      console.log("It's a draw, no points given");
    }
   
    // why can I not call the function getComputerChoice(randomChoice), instead of updating the variable ?
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

// add event listener to buttons

// create a function that iterate through an array of choices
// return the choice - via click

const elements = [rock, paper, scissors];
elements.forEach(el => el.addEventListener('click', playerChoice));

function playerChoice(event) {
  let clickedElement = event.target;
  let value = clickedElement.value;
  console.log(value)
}