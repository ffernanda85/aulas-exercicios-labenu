let computerChoice;
let result;
const userChoice = process.argv[2];


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const numberComputer = getRandomArbitrary(1, 4);

switch (numberComputer) {
    case 1:
        computerChoice = "pedra"

        if (computerChoice === userChoice) {
            result = "Empate!"
        } else if (userChoice === "papel") {
            result = "Você ganhou!"
        } else {
            result = "Você perdeu!"
        }

        break;
    
    case 2:
        computerChoice = "papel"

        if (computerChoice === userChoice) {
            result = "Empate!"
        } else if (userChoice === "tesoura") {
            result = "Você ganhou!"
        } else {
            result = "Você perdeu!"
        }
       
        break;

    default:
        computerChoice = "tesoura"

        if (computerChoice === userChoice) {
            result = "Empate!"
        } else if (userChoice === "pedra") {
            result = "Você ganhou!"
        } else {
            result = "Você perdeu!"
        }
        
        break;
}

console.log(`Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. ${result}`);