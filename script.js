console.log("Hello, world")

// create a function that will randomly choose between 3 choices (orck, paper, scissors)


let randNumber = Math.floor(Math.random() * 3);

function getComputerChoice(choice){
    if(choice === 0){
        console.log("Rock")
    } else if(choice === 1){
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}

console.log(getComputerChoice(randNumber));