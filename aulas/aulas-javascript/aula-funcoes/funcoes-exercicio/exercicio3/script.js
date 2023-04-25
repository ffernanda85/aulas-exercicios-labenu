/* # Exercício 3
a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos 
e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos 
do usuário.
d) Por fim, crie variáveis para receber o retorno de cada uma das funções 
e imprima o resultado das operações no console.
 */

//=========================EXERCICIO 3======================================
console.log("EXERCICIO 3")


const somar = (num1,num2) => {
    soma = num1 + num2
    return `1) Função Soma: ${num1} + ${num2} = ${soma};`
}


const subtrair = (num1,num2) => {
    subtracao = num1 - num2
    return `2) Função Subtração: ${num1} - ${num2} = ${subtracao};`
}


const multiplicar = (num1,num2) => {
    multiplicacao = num1 * num2
    return `3) Função Multiplicação: ${num1} x ${num2} = ${multiplicacao};`
}


const dividir = (num1,num2) => {
    divisao = num1 / num2
    return `4) Função Divisão: ${num1} / ${num2} = ${divisao}.`
}

//const num1 = Number(prompt('Digite um número'));
//const num2 = Number(prompt('Digite outro número'));

const num1 = 50
const num2 = 10

//const resultadoSoma = somar(num1,num2);
//const resultadoSubtracao = subtrair(num1,num2);
//const resultadomultiplicacao = multiplicar(num1,num2);
//const resultadoDivisao = dividir(num1,num2);

console.log(somar(num1,num2));
console.log(subtrair(num1,num2));
console.log(multiplicar(num1,num2));
console.log(dividir(num1,num2));






