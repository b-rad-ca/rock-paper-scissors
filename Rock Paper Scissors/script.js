function game(){
    function computerPlay () {
        var computerSelection;
        const computerNumber = Math.floor(Math.random() * 3) + 1;
        if (computerNumber == 1){
            computerSelection = "Rock";
        } else if (computerNumber == 2){
            computerSelection = "Paper";
        } else {
            computerSelection = "Scissors";
        }
        return computerSelection;
    }
    function playRound (playerSelection, computerSelection){
        var result;
        if (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors"){
            var result = "Invalid input"
        } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
            var result = "Tie game";
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase == "rock"){
            var result = "Computer wins";
        } else{
            var result = "Player wins";
        }
        console.log(`computer ${computerSelection}`);
        console.log(`player ${playerSelection}`);
        return result;
    }

    const playerSelection = window.prompt("Rock, Paper, or Scissors");
    const computerSelection = computerPlay();
    return result = playRound(playerSelection, computerSelection);
}

var computerScore = 0;//set variable for computer score
var playerScore = 0;//set variable for player score
var roundsPlayed = 0;//set variable for number of rounds
while (roundsPlayed != 5){
    roundsPlayed++;
    console.group();
    console.log(`game ${roundsPlayed}`)
    var result = game();
    if (result == "Computer wins"){
        console.log("Computer wins");
        computerScore++;
        console.log(`Computer Score ${computerScore}`);
        console.log(`Player Score ${playerScore}`);
    }else if (result == "Player wins") {
        console.log("Player wins");
        playerScore++;
        console.log(`Computer Score ${computerScore}`);
        console.log(`Player Score ${playerScore}`);
    }else if (result == "Invalid input"){
        console.log("Invalid input, try again");
        roundsPlayed--;
        if(computerScore > playerScore){
            console.log(`${computerScore} to ${playerScore} for Computer`);
        }else if (computerScore < playerScore){
            console.log(`${playerScore} to ${computerScore} for Player`);
        }else {
            console.log(`Tie game ${computerScore} ${playerScore}`);
        }
    }else {
        console.log("Tie game");
        console.log(`Computer Score ${computerScore}`);
        console.log(`Player Score ${playerScore}`);
    }
}
if (computerScore > playerScore){
    console.log(`Computer wins ${computerScore} to ${playerScore}`);
    }else if (computerScore < playerScore){
        console.log(`Player wins ${playerScore} to ${computerScore}`);

    }else {
        console.log(`Tied up ${playerScore} to ${computerScore}`);
}