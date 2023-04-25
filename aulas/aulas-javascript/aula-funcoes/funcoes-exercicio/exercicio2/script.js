
//====================Exercício 2==========================================
console.log('Exercício 2')

//a) Uma função que receba 2 números como parâmetros, 
//e, dentro da função, faça a soma das duas entradas e imprima o resultado. 

const soma = (num1,num2) => {
    //console.log('A soma de', num1, '+', num2, '=', num1+num2)
    return `a) A soma de ${num1} + ${num2} = ${num1+num2}`
}
console.log(soma(5,30));

//=============================================================================
//b) Uma função que recebe 2 números e imprime um booleano que informa 
//se o primeiro número é **maior ou igual** ao segundo.

const numMaiorIgual = (num1,num2) => {
    //console.log(num1>=num2)
    return `b) O número ${num1} é maior ou igual ao ${num2}? ${num1>=num2}`
}
//const num1 = Number(prompt('Insira um número'));
//const num2 = Number(prompt('Insira outro número'));
//console.log(numMaiorIgual(num1,num2));

//numMaiorIgual(5,10);
console.log(numMaiorIgual(5,10));

//==============================================================================
//c) Uma função que receba um número e imprima se ele é par ou não

const numPar = (num) => {
    const par = num % 2
    const verificaParidade = par === 0
    return `c) O número ${num} é par? ${verificaParidade}`
}
console.log(numPar(4))

//===============================================================================
//d) Uma função que recebe uma mensagem (`string`) como parâmetro e 
//imprima o tamanho dessa mensagem, juntamente com uma versão dela 
//contendo apenas letras maiúsculas.

const tamanhoMensagem = (mensagem) => {
    const qtdCaracteres = mensagem.length
    return `d) O tamanho da mensagem é ${qtdCaracteres}`
}

//const mensagem = 'confia no processo'
const mensagem = prompt('Digite uma mensagem')

console.log(tamanhoMensagem(mensagem));
console.log('Mensagem:', mensagem .toUpperCase());

//=======================================================================
//e) Uma função que receba um valor de salário e retorne o valor 
//com o desconto 10% referente ao INSS.

const salario = prompt('Digite seu salário');

const salarioComDesconto = (salario) => {
    const descontoInss = salario - (salario*0.1);
    return `e) O seu salário com o desconto do INSS (10%) é:R$ ${descontoInss}`
}
console.log(salarioComDesconto(salario));

