//Write a function that allows the computer to select from rock, paper, or scissors randomly;
function getComputerChoice(){
    const select = ["rock", "paper", "scissors"];
    return select [Math.floor (Math.random() * select.length)];
}

//write a game() function and call playRound inside to play 5 round game that can keep score
//and report a winner and loser at the end. 
//play 5 round game that keeps score and reports winner or loser at the end.

let playScore = 0  // keeps score, reports winner write out.
let computerScore = 0; // keeps score, reports winner write out.
let draw = 0; //starts out as this, which it does currently.
//const game = function   

//console.log((playScore,computerScore));
//console.log(playScore);
//console.log(computerScore);


//Player selection string "rock, paper, scissors";
//const playerSelection = prompt("rock, paper, scissors");
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

//Write a function that plays a single round of rock paper scissors;
//The function should take two parameters, playerSelection and computerSelection;
//return a string that declares the winner of the round example: "You Lose! computerSelection beats playersSelection";
function playRound(playerSelection,computerSelection) {
      if (playerSelection === "rock" && computerSelection === "scissors") {
    //    console.log(`Winner rock beats scissors` && playScore++);
        ++playScore
        return `Winner rock beats scissors`;   
    } else if (playerSelection === "paper" && computerSelection === "rock") {
    //    console.log(`Winner paper beats rock` && playScore++);
        ++playScore
        return `Winner paper beats rock`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
    //    console.log(`Winner scissors beat paper` && playScore++)
        ++playScore
        return `Winner scissors beat paper`;
    } else if (playerSelection === computerSelection) {
    //    console.log(`draw`);
        return `draw ${playerSelection} && ${computerSelection}`;
    } else { 
    //    console.log(`You lose! ${computerSelection} beats ${playerSelection}` && computerScore++);
        ++computerScore
        return`You lose! ${computerSelection} beats ${playerSelection}`;
}    
}
//console.log(playerSelection, computerSelection);
//ABOVE ISSUE WRITING IS NOT PRINTING OUT NOW MAYBE CHANGE ++ TO OLD WAY TO SEE IF THAT RESOLVES IT.



function game() {
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("rock, paper, scissors");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    } 
}

//console.log(++playScore);
//console.log(++computerScore);

game();
//"Think about where to ask the player and the computer to give us our selection for the round"
