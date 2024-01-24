let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () =>{
   msg.innerText = "Game was Draw. Play again.";
   msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userChoice) =>{
    const compChoice = gencompchoice();

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice ==="paper" ? false : true;
        } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});