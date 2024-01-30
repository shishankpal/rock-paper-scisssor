let userScore = 0;
let compScore = 0;

const click = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
const gameDraw = () => {
    console.log("Game was Draw")
    msg.innerHTML = "Game Draw"
    msg.style.backgroundColor = "#081b31"
}

const showWiner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorepara.innerText = userScore
        msg.innerText = `You win! your ${userChoice} beats  ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorepara.innerText=compScore
        msg.innerText = `You lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const palyGame = (userChoice) =>{
    console.log("user Choice=",userChoice) 
    const compChoice = compgenChoice();
    console.log( "computer Choice=",compChoice); 

    if(userChoice===compChoice){
        gameDraw()
    } else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice=== "paper" ? false : true;
        } else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false : true;

        } else {
            userWin=compChoice==="rock"? false: true
        }

        showWiner(userWin,userChoice,compChoice);
    }
}




const compgenChoice = () =>{
    const option = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx];

}

click.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        palyGame(userChoice);

       
    });

});



