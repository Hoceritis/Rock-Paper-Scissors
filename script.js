// mettre les event listener en fin de doc ?
// + Pointer vers le choix du lixk, plutot que l'user input"

// create the header-div + game title

let headerDiv = document.createElement('div')
headerDiv.setAttribute('id','header')

document.body.appendChild(headerDiv)

let title = document.createElement('div')
title.setAttribute('id','title')

headerDiv.append(title)

title.textContent = 'Rock Paper Scissors'

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

// create the rules button

let rulesButton = document.createElement('button')
rulesButton.setAttribute('id', 'rules')

div.append(rulesButton)

rulesButton.textContent = 'Rules'

//modal

let modal = document.createElement('div')
modal.setAttribute('id','modal')

let modalContent = document.createElement('div')
modalContent.setAttribute('id','modalContent')

let closeModal = document.createElement('span')
closeModal.setAttribute('class','close')
closeModal.textContent ='x'

modalText = document.createElement('p')
modalText.textContent = 'Some rules :'

modalText2 = document.createElement('p')
modalText2.textContent = '_ Rock beats scissors, scissors beat paper, and paper beats rock.'

modalText3 = document.createElement('p')
modalText3.textContent = '_ The first to reach 5 points wins !'

modalText4 = document.createElement('p')
modalText4.textContent = 'GL HF !'


document.body.append(modal)
modal.append(modalContent)
modalContent.append(closeModal,modalText, modalText2, modalText3, modalText4)

let modalJs = document.getElementById('modal')
let modalBtn = document.getElementById('rules')
let closeModalBtn = document.getElementsByClassName('close')[0]

rulesButton.addEventListener('click', function(){
  modalJs.style.display = 'block'
})

closeModalBtn.addEventListener('click', function(){
  modalJs.style.display = 'none'
})

window.addEventListener('click',function(event){
  if(event.target == modalJs){
    modalJs.style.display = 'none'
  }
})

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

playerScoreDiv.textContent = "Player " + 0
computerScoreDiv.textContent = 0 + " Computer "
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
      playerScoreDiv.textContent = "Player " + playerScore.length
      document.getElementById(playerSelection).classList.add('winDisplay');
      setTimeout(function(){ document.getElementById(playerSelection).classList.remove('winDisplay')}, 1000);
    } else if(result == lose){
      computerScore.push(1)
      computerScoreDiv.textContent = computerScore.length + " Computer"
      document.getElementById(playerSelection).classList.add('loseDisplay');
      setTimeout(function(){ document.getElementById(playerSelection).classList.remove('loseDisplay')}, 1000);
    } else {
      document.getElementById(playerSelection).classList.add('drawDisplay');
      setTimeout(function(){ document.getElementById(playerSelection).classList.remove('drawDisplay')}, 1000);
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
