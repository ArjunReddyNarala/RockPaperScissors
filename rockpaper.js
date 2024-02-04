const choices=document.querySelectorAll(".choice");
//the below function is for userchoice , considering user click for 

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//for each of the abve selected choice by user ,we will call the play game function , where the computer generates its choice and 
//depending on the choices by user and computer , we decide whether comp won or user won , and according to that we will update the result on html page and update scores as well on the html page
const playGame=(userChoice)=>{
    
    //console.log("user choice =",userChoice);
    const compChoice=genRandomChoice();
    // console.log("computer choice =",compChoice);

    if(userChoice===compChoice)
    {
        //DrawGame
        drawGame();
    }
    else
    {
        let userWin=true;
        //we will consider user won in the start,later depending upon the choices of user and computer we will update it
        if(userChoice==="paper")
        {
            //scissors , rock
            userWin = compChoice==="scissors" ? false:true;
        }
        else if(userChoice==="scissors")
        {
            //rock , paper
            userWin = compChoice==="rock" ? false:true;
        }
        else
        {
            //scissors , paper
            userWin = compChoice==="paper" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);//once we decided the result we will display the result with the help of showWinner function
    }
};


const msg=document.querySelector("#msg");//to display result on the screen
let userScoreDisplay=document.querySelector("#user-score");
let compScoreDisplay=document.querySelector("#computer-score");
let userScore=0;
let compScore=0;
//to display updated scores and result message , we used the below function
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScoreDisplay.innerText=userScore;
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } 
    else
    {
        compScore++;
        compScoreDisplay.innerText=compScore;
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const drawGame=()=>{
    console.log("The game was draw.Play again.")
    msg.innerText=`The game was draw.Play again.`;
    msg.style.backgroundColor="black";
};

//the below function is for computer , as it needs to generate some random choice from the three options
//so to generate a random option from the three options ,if we store the options in the form an array , then
//by using math.random()*3 we will get an index , and hence we can return the computer option
function genRandomChoice() {
    const options = ["rock", "paper", "scissors"];
    const rdmIndex = Math.floor(Math.random() * 3);
    return options[rdmIndex];
}
