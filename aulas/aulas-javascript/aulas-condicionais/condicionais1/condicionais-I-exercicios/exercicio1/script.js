
/* # Exercício 1
Crie uma função que receba uma const numérica qualquer. Crie um `if` para 
verificar se o número guardado na const é **par**. Caso seja, a função deve 
retornar a mensagem: "o número é par". Após imprima o retorno no console.
 */

const num = Number(prompt("Insira um número"));
const verificaPar = num % 2;

if(verificaPar === 0){
    console.log("o número inserido é par")
}else {
    console.log("o número inserido é ímpar")
};