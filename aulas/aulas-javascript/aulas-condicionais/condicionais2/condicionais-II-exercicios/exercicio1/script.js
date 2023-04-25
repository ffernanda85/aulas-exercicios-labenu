/*
============================# Exercício 1===================================
``` */
console.log("teste 1")

//1.Crie um código que receba um número por **prompt** e verifique se um 
//número é divisível por 2 **ou** por 3
// Faça isso Utilizando ifs aninhados

const number = Number(prompt('insira um número'));

/* if (number % 2 === 0) {
    //console.log(`${number} é divisivel por 2!`);
    if (number % 3 === 0) {
        console.log(`${number} é divisivel por 2 e 3!`);
    } else {
        console.log(`${number} é divisivel por 2, porém não é divisivel por 3!`);
    }
} else if (number % 3 === 0) {
    console.log(`${number} não é divisivel por 2, porém é divisivel por 3!`);
} else {
    console.log(`${number} não é divisivel por 2 e nem por 3!`);
}; */


/*
2. Crie um código que receba um número por **prompt** e verifique se um 
número é divisível por 2 **ou** por 3
Faça isso utilizando um operador lógico para unir duas operações 
relacionais.
*/

if (number % 2 === 0 || number % 3 === 0) {
    console.log(`${number} é divisivel por 2 ou por 3!`);
} else {
    console.log(`${number} não é divisivel por 2 e nem por 3!`);
};
