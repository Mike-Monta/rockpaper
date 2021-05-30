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

 function playRound (playerSelection, computerSelection){
    //let winner = "";
    
    playerSelection = window.prompt("Choose one: rock, scissors, or paper");
    playerSelect = playerSelection.toLowerCase();
    console.log("User: " + playerSelect + " -  Computer: "+ computerSelection)
    console.log(playerSelect);
    if  (playerSelection === "rock"){
        computerSelection === "rock" ? winner = "Tie"
        : computerSelection === "scissors"? winner= "User"
        : winner = "Computer";
        
        
    }else if (playerSelection === "paper"){
        computerSelection === "rock" ? winner = "User"
        : computerSelection === "scissors"? winner= "Computer"
        : winner = "Tie";
        
       
    } else {
        computerSelection === "paper" ? winner = "User"
        : computerSelection === "scissors"? winner= "Tie"
        : winner = "Computer";
        
        
        
    }    
        
    //console.log(winner);
    return winner;

 }
 // Function  that plays n rounds of playRound()
 function game(n){
   let userScore= 0;
   let computerScore = 0;
   let ties = 0;
   let finalWinner ="";
    for (i=1; i<n+1; i++){
        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        winner === "User"? userScore +=1
        : winner ==="Computer" ? computerScore +=1
        : ties +=1;
        console.log(playerSelection);
        console.log("Round "+ i + "- User: " + playerSelect + "  - Computer: "+ computerSelection + "   winner: " +winner); 
        console.log( "User: "+ userScore + "   Computer: "+ computerScore+ "   Ties: "+ ties);
    }


}
 let winner ="";
 const nveces= 5;
 const playerSelection = "";
 let playerSelect ="";
 //window.prompt("Choose one: rock, scissors, or paper");
 const computerSelection = computerPlay();
 //console.log(playRound(playerSelection, computerSelection));