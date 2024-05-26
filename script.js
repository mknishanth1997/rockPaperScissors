const rock = document.querySelector(".rps1");
const paper = document.querySelector(".rps2");
const sciccors = document.querySelector(".rps3");
const myScore = document.querySelector(".score-my-side");
const displayBoard = document.querySelector(".win-or-not");
const pcScore = document.querySelector(".score-pc-side");
const imgUpdateSection = document.querySelector(".img-section");
const userSide = document.querySelector(".user-side");
const pcSide = document.querySelector(".pc-side");
const container = document.querySelector(".container");
console.log(imgUpdateSection);
rock.addEventListener("click", () => playTheRound(rock));
paper.addEventListener("click", () => playTheRound(paper));
sciccors.addEventListener("click", () => playTheRound(sciccors));
let computerScore = 0;
let humanScore = 0;


function playTheRound(button) {
    const userChoice = button.value;
    console.log(userChoice);
    if (userChoice === "rock")
        {
            userSide.src = "img/stone.png";
        }
    else if (userChoice === "paper")
        {
            userSide.src = "img/paper.png";
        }
    else 
        {
            userSide.src = "img/scissors (1).png";   
        }



    const ComputerChoice = getCompterChoice();
    console.log(ComputerChoice);


    if (ComputerChoice === "rock")
        {
            pcSide.src = "img/stone.png";
        }
    else if (ComputerChoice === "paper")
        {
            pcSide.src = "img/paper.png";
        }
    else 
        {
            pcSide.src = "img/scissors (1).png";
        }

    const whoIsTheWinner = decideTheWinner(userChoice, ComputerChoice);
    console.log(whoIsTheWinner);
    let a = decidingTheWinner(whoIsTheWinner);
    console.log(a);
    if (humanScore + computerScore === 5)
        {
            rock.remove();
            paper.remove();
            sciccors.remove();
            imgUpdateSection.remove();
            const gameOverText = document.createElement("h1");
            gameOverText.textContent = "Game Over";
            gameOverText.classList.add("game-over");
            container.appendChild(gameOverText);
            if (computerScore > humanScore)
                {
                    
                    displayBoard.textContent = `You lost by ${computerScore} points`;
                }
            else
                {
                    displayBoard.textContent = `You won by ${humanScore} points`;
                }
        }
}



// Get Computer choice

function getCompterChoice ()
{
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        {
            return "rock";
        }
    else if (choice === 1)
        {
            return "paper";
        }
    else if (choice === 2)
        {
            return "scissors";
        }
} 


// Decide the winner 
function decideTheWinner (humanSelection, computerSelection)
{
    if ( computerSelection === humanSelection)
        {
            return "tie"
        }
    else if (humanSelection === "rock")
        {
            if (computerSelection === "scissors")
                {
                    return "human";
                }
            else
            {
                return "computer";
            }
        }
    else if (humanSelection === "paper")
        {
            if (computerSelection === "rock")
                {
                    return "human";
                }
            else 
                {
                    return "computer";
                }
        }
    else if (humanSelection === "scissors")
        {
            if (computerSelection === "paper")
                {
                    return "human";
                }
            else 
                {
                    return "computer";
                }
        }
}

// Who is the winner

function decidingTheWinner (whoIsTheWinner) 
{
    if(whoIsTheWinner === "tie")
        {
            displayBoard.textContent = "It's a Tie";
            return "tie";
        }
    else if (whoIsTheWinner === "computer")
        {
            displayBoard.textContent = "Computer Wins";
            pcScore.textContent = computerScore;
            computerScore = computerScore + 1; // updating the global variable
            pcScore.textContent = computerScore;
            return "not tie";
        }
    else if (whoIsTheWinner === "human")
        {
            displayBoard.textContent = "You Won";
            humanScore = humanScore + 1; // updating the global variable
            myScore.textContent = humanScore;
            return "not tie";
        }      
}


