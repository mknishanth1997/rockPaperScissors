let computerScore = 0;
let humanScore = 0;
// Global Area

playRound();
playRound();
playRound();
playRound();
playRound();

if (humanScore + computerScore === 5)
    {
        if (computerScore > humanScore)
            {
                console.log(`You Lost! Computer won by ${computerScore} Points`);
            }
        else
            {
                console.log(`you Won The Game by ${humanScore} Points.`)
            }
    }

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
function getHumanChoice ()
{
    const userChoice = prompt("Rock or Paper or scissors");
    const choice = userChoice.toLowerCase();
    if (choice === "rock")
        {
            return "rock";
        }
    else if (choice === "paper")
        {
            return "paper";
        }
    else if (choice === "scissors")
        {
            return "scissors";
        }
    else
        {
            return "error";
        }
}
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
function playRound ()
{
    let humanSelection = getHumanChoice();
    if (humanSelection === "error")
        {
            playRound();// recusively call's this function when user input's the wrong value
        }
    const computerSelection = getCompterChoice();
    const whoIsTheWinner = decideTheWinner(humanSelection,computerSelection); 
    if(whoIsTheWinner === "tie")
        {
            console.log(`TIE! Both Selected ${humanSelection}`);
            playRound(); // recursive call again if the round is a tie.
        }
    else if (whoIsTheWinner === "computer")
        {
            console.log(`You Lost! ${computerSelection} beat's the ${humanSelection}`);
            computerScore = computerScore + 1; // updating the global variable
        }
    else if (whoIsTheWinner === "human")
        {
            console.log(`You Won! ${humanSelection} beat's the ${computerSelection}`);
            humanScore = humanScore + 1; // updating the global variable
        }      
}



