function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3 + 1)
    if(selection == 1) {
        return "rock"
    }
    else if(selection == 2) {
        return "paper"
    }
    else{
        return "scissors"
    }
}
function playRound(playerselection, computerChoice) {
    if(playerselection == "rock" && computerChoice == "rock"){
        return "Tie"
    }
    else if(playerselection == "rock" && computerChoice == "paper"){
        return "You lose!"
    }
    else if(playerselection == "rock" && computerChoice == "scissors"){
        return "You win!"
    }
    else if(playerselection == "paper" && computerChoice == "scissors"){
        return "You lose!"
    }
    else if(playerselection == "paper" && computerChoice == "rock"){
        return "You win!"
    }
    else if(playerselection == "paper" && computerChoice == "paper"){
        return "Tie"
    }
    else if(playerselection == "scissors" && computerChoice == "scissors"){
        return "Tie!"
    }
    else if(playerselection == "scissors" && computerChoice == "paper"){
        return "You win!"
    }
    else if(playerselection == "scissors" && computerChoice == "rock"){
        return "You lose!"
    }
    else {
        return "Please enter a correct name"
    }
}
let a;
let computer_score = 0;
let your_score = 0;
function playGame() {
    const playerSelection = prompt("Enter your choice: ")
    const computerChoice = getComputerChoice()
    let selection = playerSelection.toLowerCase()
    a = playRound(selection, computerChoice)
    console.log(a)
   
    if(a == "You win!") {
        your_score++
    }
    else if(a == "You lose!") {
        computer_score++
    }
  
}
for(let i = 0;i < 5;i++) {
    playGame()
}
if(your_score > computer_score) {
    console.log("Your Score: " + your_score)
    console.log("Computer Score: " + computer_score)
    console.log("You won!")

}
else if(your_score < computer_score) {
    console.log("Your Score: " + your_score)
    console.log("Computer Score: " + computer_score)
    console.log("You won!")
   
}
else {
   
    console.log("Your Score: " + your_score)
    console.log("Computer Score: " + computer_score)
    console.log("Tie!")
}