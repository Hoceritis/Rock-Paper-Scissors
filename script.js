// mettre les event listener en fin de doc ?
// + Pointer vers le choix du lixk, plutot que l'user input"


//create the main div

let div = document.createElement('div');
let mainDiv = div.setAttribute('id', 'main-div');

document.body.appendChild(div);

// create sub div for buttons
// create 3 buttons for choices

let buttonDiv = document.createElement('div')
buttonDiv.setAttribute('id', 'button-div')

const rock = document.createElement('img')
rock.setAttribute('value', 'rock')
rock.setAttribute('id', 'rock')
rock.src = "https://icon-library.com/images/spock-icon/spock-icon-4.jpg"

const paper = document.createElement('img')
paper.setAttribute('value', 'paper')
paper.setAttribute('id', 'paper')
paper.src = "https://icon-library.com/images/spock-icon/spock-icon-3.jpg"

const scissors = document.createElement('img')
scissors.setAttribute('value', 'scissors')
scissors.setAttribute('id', 'scissors')
scissors.src = "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-5.jpg"


div.append(buttonDiv)
buttonDiv.append(rock, paper, scissors)

// create the messages div

let message = document.createElement('div')
message.setAttribute('id','message')
div.append(message)

// game's logic

const choices = ["rock", "paper", "scissors"]

const win = 1;
const lose = -1;
const draw = 0;
let playerScore = [];
let computerScore = [];
const elements = [rock, paper, scissors];

// create the divs to display the scores

let scores = document.createElement('div')
scores.setAttribute('id', 'scores')

let playerScoreDiv = document.createElement('div')
let computerScoreDiv = document.createElement('div')
let divPunctuation = document.createElement('div')
playerScoreDiv.setAttribute('id', 'playerScore')
computerScoreDiv.setAttribute('id', 'computerScore')
divPunctuation.setAttribute('id', 'punctuation')

div.append(scores)
scores.append(playerScoreDiv, divPunctuation, computerScoreDiv)

playerScoreDiv.textContent = "Player score " + 0
computerScoreDiv.textContent = 0 + " Computer score"
divPunctuation.textContent = ':'

// functions

function getComputerChoice(choice){
  return choice[Math.floor(Math.random() * choices.length)];  
}

function playRound(playerSelection, computerSelection) {
  if( playerSelection === "rock" && computerSelection === "paper" ||
      playerSelection === "paper" && computerSelection === "scissors" ||
      playerSelection === "scissors" && computerSelection === "rock"
  ) {
    message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      return lose;

  } else if ( playerSelection === "paper" && computerSelection === "rock" ||
              playerSelection === "scissors" && computerSelection === "paper" ||
              playerSelection === "rock" && computerSelection === "scissors" 
  ) {
    message.textContent =`You Win! ${playerSelection} beats ${computerSelection}`;
      return win;

  } else
    message.textContent =`It's a Draw ! ${playerSelection} is equal to ${computerSelection}. No points given`;
      return draw;
} 

function game(){

    let playerSelection = playerChoice(event);
    let computerSelection = getComputerChoice(choices);
    console.log('computer choice : ' + computerSelection);

    let result = playRound(playerSelection, computerSelection);

    if(result == win){
      playerScore.push(1)
      playerScoreDiv.textContent = playerScore.length
      document.getElementById(playerSelection).classList.add('winDisplay');
      setTimeout(function(){ document.getElementById(playerSelection).classList.remove('winDisplay')}, 1000);
    } else if(result == lose){
      computerScore.push(1)
      computerScoreDiv.textContent = computerScore.length
      document.getElementById(playerSelection).classList.add('loseDisplay');
      setTimeout(function(){ document.getElementById(playerSelection).classList.remove('loseDisplay')}, 1000);
    }
}

function playerChoice(event) {
  let clickedElement = event.target;
  let value = clickedElement.getAttribute('value')
  console.log('This is the player choice :' + value)
  return value
}

function winner(playerScore, computerScore){
  if(playerScore.length === 5){
    message.textContent = 'You won !'
    resetScore()
    
  } else if (computerScore.length === 5){
    message.textContent = 'You lose !'
    resetScore()
  }
}

function resetScore(){
    playerScore.length = 0;
    computerScore.length = 0;
    computerScoreDiv.textContent = computerScore.length
    playerScoreDiv.textContent = playerScore.length
}


elements.forEach(el => el.addEventListener('click', function(event) {
  // 1. get player's choice
  playerChoice(event);
  // 2. get comp's choice
  getComputerChoice(choices);
  // 3. run a round
  game();
  // 4. check for winner
  winner(playerScore, computerScore);
}));




// display final result ?
// refactor the choices name ? (Capitalize the first letter ?)
