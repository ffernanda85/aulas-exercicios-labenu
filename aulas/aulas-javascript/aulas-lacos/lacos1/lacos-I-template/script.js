//ELEMENTOS NECESSÁRIOS
/* Inicialização de váriável*/
/* Condição de continuação*/
/* Um conjunto de ações*/
/* Uma alteração que mude a condição de continuação*/

console.log('PRÁTICA GUIADA I')

/* let numero = Number(prompt('Insira um número'));
let soma = 0;

while (numero !== 0) {
    soma = soma + numero;
    numero = Number(prompt('Insira outro número'));
};

console.log("Saiu do laço!");
console.log(soma); */

console.log('PRÁTICA GUIADA II')

/* let numero = Number(prompt('Insira um número'));

for (let i = 0; i <= numero; i++){
    console.log(i);
} */

console.log('PRÁTICA GUIADA II')

/* const numeros = [2, 4, 6, 8, 10];

for (indice = 0; indice < numeros.length; indice++){
    console.log(`“O número do índice ${indice} é ${numeros[indice]}”`);
};
console.log(`Fim do for array`); */

console.log('EXERCICIO DE FIXAÇÃO I');

/* let tipoUsuario = prompt('Escolha seu tipo de usuário \nA- Administrador \nB- Usuário Comum \nC- Usuário Assinante').toUpperCase();

while (tipoUsuario !== "A") {
    //console.log('Acesso negado!');
    alert('Acesso Negado!');
    tipoUsuario = prompt('Escolha um tipo válido de usuário \nA- Administrador \nB- Usuário Comum \nC- Usuário Assinante').toUpperCase();
};
console.log("Boas-Vindas, Admin!"); */

console.log('EXERCICIO DE FIXAÇÃO II');

/* let valorTabuada = Number(prompt('Insira Valor da Tabuada a ser calculada'));

console.log(`Tabuada de ${valorTabuada}`);

for (i = 1; i <= 10; i++) {
    console.log(`${valorTabuada} x ${i} = ${valorTabuada * i}`);
}
console.log(`Fim da Tabuada de ${valorTabuada}.`)
 */

console.log('EXERCICIO DE FIXAÇÃO III');

arrayString = ["Flávia", "Izabela", "Helaine", "Fábio"];

for (i = 0; i < arrayString.length; i++) {
    console.log(arrayString[i].toUpperCase());
};

