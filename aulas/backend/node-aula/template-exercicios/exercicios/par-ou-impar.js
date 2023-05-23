const typeUser = process.argv[2]
const number = process.argv[3]
let numberComputer;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

numberComputer = getRandomArbitrary(0, 10)

const typeComputer = numberComputer % 2 === 0 ? "par" : "impar"

const game = (typeUser, number) => {
    const sum = + number + numberComputer
    let resultType;

    if (sum % 2 === 0) {
        resultType = "par"
    } else {
        resultType = "impar"
    }

    if (typeUser === resultType) {
        return console.log(`Você escolheu ${typeUser} e o computador escolheu ${typeComputer}. O resultado foi ${sum}. Você ganhou!`);
    } else {
        return console.log(`Você escolheu ${typeUser} e o computador escolheu ${typeComputer}. O resultado foi ${sum}. Você perdeu!`);
    }
}

console.log(numberComputer)
game(typeUser, number);


//console.log(`Você escolheu ${typeUser} e o computador escolheu ${typeComputer}. O resultado foi ${}. Você ${}!`);