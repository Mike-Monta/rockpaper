// Computer gameplay
let compGameplay = "";
function computerPlay(){
    let alea = Math.floor(Math.random()*3) +1;
    if (alea === 1) {
        compGameplay= "rock";
    }else if (alea === 2){
        compGameplay = "scissors";
    }else compGameplay = "paper";
    //console.log(compGameplay);
    return compGameplay;
    
}
 // Play a single round with User seleccion and computer gameplay

 function playRound (playerSelection){
    winner = "";
    let computerSelection= computerPlay();
    
    console.log("User: " + playerSelection + " -  Computer: "+ computerSelection)
    
    if (playerSelection === computerSelection){
        ties += 1;
        document.getElementById("ties").innerHTML= ties;
    }else if  (playerSelection === "rock"){
          if (computerSelection === "scissors"){
            userScore += 1;
            document.getElementById("userResult").innerHTML= userScore;
          }else{
            computerScore += 1;
            document.getElementById("computerResult").innerHTML= computerScore;
          }
    }else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            userScore += 1;
            document.getElementById("userResult").innerHTML= userScore;
          }else{
            computerScore += 1;
            document.getElementById("computerResult").innerHTML= computerScore;
          }
    } else {
        if (computerSelection === "paper"){
            userScore += 1;
            document.getElementById("userResult").innerHTML= userScore;    
        }else {
            computerScore += 1;
            document.getElementById("computerResult").innerHTML= computerScore;
        }
    } 
     
    //console.log(winner);
    //return winner;
 }
 
 // Function  that plays n rounds of playRound()
 function game(n){
    userScore = 0;
    computerScore = 0;
    ties = 0;
    document.getElementById("userResult").innerHTML= 0;
    document.getElementById("computerResult").innerHTML= 0;
    document.getElementById("ties").innerHTML= 0;
   let finalWinner ="";
   while(userScore <= 5 || computerScore <=5 || ties <=5){
        if (userScore = 5){
            alert("YOU WIN");
        }else if (computerScore =5){
            alert("COMPUTER WINS");
        }else if( ties = 5){
            alert("IT'S a TIE");
        }
    }
        
        console.log(playerSelection);
        console.log("Round "+ i + "- User: " + playerSelect + "  - Computer: "+ computerSelection + "   winner: " +winner); 
        console.log( "User: "+ userScore + "   Computer: "+ computerScore+ "   Ties: "+ ties);
    }




function getWinner(){
    console.log(winner);
}
let userScore= 0;
let computerScore = 0;
let ties = 0;
 let winner ="";
 const nveces= 5;
// const playerSelection = "";
 let playerSelect ="";
 const userWinOne = document.getElementById("userResult");
 const computerWinOne = document.getElementById("computerResult");

 //window.prompt("Choose one: rock, scissors, or paper");
 //const computerSelection = computerPlay();
 //console.log(playRound(playerSelection, computerSelection));