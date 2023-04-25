// ================= EXERCICIO 1 ARRAYS =================================
//a) Crie um array vazio e guarde-o em uma variável, chamada
//`listaDeTarefas`

//const listaDeTarefas = [];

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e
//armazene-as, uma por uma, no array.

/* const userTask1 = prompt("Qual 1ª tarefa que você precisa fazer no dia?");
const userTask2 = prompt("Qual 2ª tarefa que você precisa fazer no dia?");
const userTask3 = prompt("Qual 3ª tarefa que você precisa fazer no dia?");
 
listaDeTarefas.push(userTask1);
listaDeTarefas.push(userTask2);
listaDeTarefas.push(userTask3);
*/

//c) Imprima o array no console:

//console.log(`Array de tarefas Original: ${listaDeTarefas}`);


//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já
//realizou: 0, 1 ou 2

//const indiceTarefa = prompt(`Informe o indice referente a tarefa que você já fez: \n0 - ${userTask1} \n1 - ${userTask2} \n2 - ${userTask3}`);


//e) Remova da lista o item de índice que o usuário escolheu.

//listaDeTarefas.splice(indiceTarefa, 1);


//f) Imprima o array no console

//console.log(`O Array de tarefas final: ${listaDeTarefas}`);

//========================EXERCICIO 2 =====================================
/* 
2.Faça um programa que contenha um array com 5 das suas comidas 
preferidas, armazenado em uma variável. Em seguida, siga os passos:
*/

//let comidasFavoritas = ["lasanha", "peixe", "yakissoba", "empadão", "sopa"];

//a) Imprima no console o array completo:

//console.log(`Array Original: ${comidasFavoritas}`);

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas":
 //seguida por cada uma das comidas, **uma embaixo da outra**.

/* console.log(`\nEssas são as minhas comidas preferidas (console):
\n1- ${comidasFavoritas[0]}
2- ${comidasFavoritas[1]}
3- ${comidasFavoritas[2]}
4- ${comidasFavoritas[3]}
5- ${comidasFavoritas[4]}`);

console.log('\nEssas são minhas comidas preferidas (laços):');
for (i = 0; i < comidasFavoritas.length; i++) {
    console.log(`${i+1} - ${comidasFavoritas[i]}`);
}; */


//c) Imprima no console o tamanho do array

//console.log("tamanho do array:", comidasFavoritas.length);


//d) guarde em uma variável uma outra comida e adicione ao fim do array,
//depois  imprima no console ( use um método de array para adicionar)

/* const novaComida = "cozido";
comidasFavoritas.push(novaComida);

console.log(`Array comidas favoritas com a nova comida: ${comidasFavoritas}`); */


//e) verifique se essa comida  está incluida neste array

//console.log("cozido está incluso?", comidasFavoritas.includes("cozido"));


//f) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
//Troque a segunda comida da sua lista pela inserida pelo usuário.
//Imprima no console a nova lista **ordenada**

/* const userFavoriteFood = prompt("Qual sua comida favorita?");
const newArrayFood = [];

newArrayFood.push(comidasFavoritas[0], userFavoriteFood, comidasFavoritas[2], comidasFavoritas[3], comidasFavoritas[4], comidasFavoritas[5]);

comidasFavoritas = [...newArrayFood];
console.log(comidasFavoritas);

for (i = 0; i < comidasFavoritas.length; i++) {
    console.log(`${i+1} - ${comidasFavoritas[i]}`);
}; */

//g) Agora troque a ordem da lista e imprima

//console.log(comidasFavoritas.reverse());


//======================== DESAFIO 1 ========================================

//Receba uma frase e retorne um array onde cada elemento é uma das
//palavras da frase, ignorando os espaços

/* let frasePart = prompt("insira 1ª palavra de uma frase");
let arrayFrase = []

while (frasePart !== ".") {
    arrayFrase.push(frasePart);
    frasePart = prompt("insira a proxima palavra da frase, quando terminar coloque apenas o '.' (ponto)");
};
console.log(arrayFrase);
console.log(arrayFrase.join(" ")); */// ao colocar as "" ele retira as virgulas
                                // E se dermos espaço entre as "" ele espaça entre as palavras




// DESAFIO 1 usando o split(" ") e join (" ")
const minhaFrase = prompt('Insira um frase')
const minhaFraseArray = minhaFrase.split(" ")//.splite(' ') divide um string
console.log(minhaFraseArray)                //em uma lista ordenada de substrings
console.log(minhaFraseArray.join(" "))     //em um array, e retorna o array.


//====================== DESAFIO 2 ==========================================
//Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"],
//faça um programa que acha o índice da palavra Abacaxi e imprima tanto o
//índice quanto o tamanho do array

const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

let index = arrayFrutas.indexOf("Abacaxi");

console.log("O indice da palavra abacaxi é:",index, "\nO tamanho do array é:", arrayFrutas.length);



