function DarkMode() {
    var element1 = document.body;
    element1.classList.toggle("dark");
    const element2 = document.querySelectorAll('.link');
    for(let el of element2)
        el.classList.toggle('dlink');
}

function Temperature(){
    var test = prompt("Temperature(Ex.: 54f) ")
    var forc = test.slice(-1)
    var temp = parseInt(test.slice(0,-1))
    
    if(forc == "f" || forc == "F"){
        temp = ((temp-32)*5)/9
        alert("The Temperature is " + temp + " Celsium")
    }
    else if(forc == "c" || forc == "C"){
        alert("The Temperature is " + temp + " Celsium")
    }
    else{
        alert("Something went Wrong!")
    }
    
}

//Rock Paper Scissors Game:

function startGame() {
    cm = Math.floor(Math.random() * 3);
  
    input = prompt("Enter your Choice! (Read the rules before playing!)");
  
    pm = parseInt(input);
     // Rock = 0   Paper = 1   Scissors = 2
     
     //Computer is Rock
    if (cm == 0){ 
        if(pm == 0 || pm == "Rock" || pm == "rock"){
            alert("It's a tie. You both picked Rock");
        }

        else if(pm == 1 || pm == "Paper" || pm == "paper"){
            alert("You beat Computer with Paper against Rock");
        }
        else if(pm == 2 || pm == "Scissors" || pm == "scissors"){
            alert("Computer Beat you with Rock");
        }
        else alert("Something went Wrong!Rock")
    }
    
    

    //  Computer is Paper
    if (cm == 1){
        if(pm == 0 || pm == "Rock" || pm == "rock"){
            alert("Computer Beat you with Rock against Paper");
        }

        else if(pm == 1 || pm == "Paper" || pm == "paper"){
            alert("It's a tie. You both picked Paper");
        }
        else if(pm == 2 || pm == "Scissors" || pm == "scissors"){
            alert("You beat Computer with Scissors against Paper");
        }
        else alert("Something went Wrong! Pap")
    }
    
    
    //  Computer is Scissors
    if (cm == 2){
        if(pm == 0 || pm == "Rock" || pm == "rock"){
            alert("You beat Computer with Rock against Scissors");
        }
        
        else if(pm == 1 || pm == "Paper" || pm == "paper"){
            alert("Computer Beat you with Scissors");
        }
        else if(pm == 2 || pm == "Scissors" || pm == "scissors"){
            alert("It's a tie. You both picked Scissors");
        }
        else alert("Something went Wrong! Sc")
    }
    
    
  }

  //Another Version
  
var playerChoice = 0;

function pickRock(){
     var playerChoice = 0;
     alert("You picked Rock!")
}
function pickPaper(){
    var playerChoice = 1;
    alert("You picked Paper!")
}
function pickScissors(){
    var playerChoice = 2;
    alert("You picked Scissors!")
}

function startGameV2() {
    cm = Math.floor(Math.random() * 3);

     //Computer is Rock
    if (cm == 0){ 
        if(playerChoice == 0){
            alert("It's a tie. You both picked Rock");
        }

        else if(playerChoice == 1){
            alert("You beat Computer with Paper against Rock");
        }
        else if(playerChoice == 2){
            alert("Computer Beat you with Rock");
        }
        else alert("Something went Wrong!Rock")
    }
    
    

    //  Computer is Paper
    if (cm == 1){
        if(playerChoice == 0){
            alert("Computer Beat you with Rock against Paper");
        }

        else if(playerChoice == 1){
            alert("It's a tie. You both picked Paper");
        }
        else if(playerChoice == 2){
            alert("You beat Computer with Scissors against Paper");
        }
        else alert("Something went Wrong! Pap")
    }
    
    
    //  Computer is Scissors
    if (cm == 2){
        if(playerChoice == 0 ){
            alert("You beat Computer with Rock against Scissors");
        }
        
        else if(playerChoice == 1){
            alert("Computer Beat you with Scissors");
        }
        else if(playerChoice == 2){
            alert("It's a tie. You both picked Scissors");
        }
        else alert("Something went Wrong! Sc")
    }
    
    
  }