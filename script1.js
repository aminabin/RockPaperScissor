let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const compChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("The game is draw");
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("you win");
    }else{
        console.log("you lose;");
    }
};

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const comChoice = compChoice();
    console.log(comChoice);
    if(userChoice == comChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice=="rock"){
            userWin = comChoice==="paper"?false: true;
        } else if(userChoice=="paper"){
            userWin = comChoice === "scissor"?false: true;
        }else{
            userWin = comChoice === "rock"?false: true;
        }
        showWinner(userWin);
    }
    
};

choices.forEach((choice) => {
        choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        });
});