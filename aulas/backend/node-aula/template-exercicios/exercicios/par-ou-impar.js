const typeUser = process.argv[2]
const number = process.argv[3]
let numberComputer;
let typeComputer;

numberComputer = Math.floor(Math.random() * (10 - 0))

const game = (typeUser, number) => {
    const sum = + number + numberComputer
    let resultType;

    typeComputer = typeUser === "impar" ? "par" : "impar"
        
    resultType = sum % 2 === 0 ? "par" : "impar"
    
    if (typeUser === resultType) {
        return console.log(`Você escolheu ${typeUser} e o computador escolheu ${typeComputer}. O resultado foi ${sum}. Você ganhou!`);
    } else {
        return console.log(`Você escolheu ${typeUser} e o computador escolheu ${typeComputer}. O resultado foi ${sum}. Você perdeu!`);
    }
}

console.log("número Computador: ", numberComputer)
game(typeUser, number);