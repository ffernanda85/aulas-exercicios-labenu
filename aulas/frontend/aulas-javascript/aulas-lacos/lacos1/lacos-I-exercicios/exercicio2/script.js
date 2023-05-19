/*
====================== Exercício 2 ==================================

Crie um programa que peça um input de número para o usuário. Com este
número, o código deve imprimir a **tabuada** do número, de 1 a 10.

*/
console.log(`EXERCÍCIO 2`);

let multiplicador = Number(prompt("Insira o valor da tabuada que deseja ver"));

console.log(`Taboada do ${multiplicador}`);

for (i = 1; i <= 10; i++) {
    console.log(`${multiplicador} x ${i} = ${multiplicador * i}`);
};
console.log(`Fim da Taboada do ${multiplicador}`);
