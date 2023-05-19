//===================== EXERCÍCIO 1 =====================================

console.log('EXERCÍCIO 1');
//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function digaOla (name){
    console.log('a) Function: Olá,', name);
}
digaOla('Flávia Fernanda');

//================= ARROW FUNCTION =====================================
const digaOlaArrow = (nome) => {
    console.log('a) Arrow Function: Olá,', nome);
}
digaOlaArrow('Flávia Fernanda');

//================== FUNÇÃO ANÔNIMA =====================================
const digaOlaAnonima = function (nome){
    console.log('a) Função Anônima: Olá,', nome);
}
digaOlaAnonima('Flávia Fernanda');

//=======================================================================
//b) Declare uma função que imprima a tabuada do 6. Chame esta função.
console.log('b) TABOADA DE SEIS: ARROW FUNCTION') // ARROW FUNCTION

const imprimeTabuada = (taboada) =>{
    
return `${taboada} x 1 = ${taboada}
${taboada} x 2 = ${taboada*2}
${taboada} x 3 = ${taboada*3}
${taboada} x 4 = ${taboada*4}
${taboada} x 5 = ${taboada*5}
${taboada} x 6 = ${taboada*6}
${taboada} x 7 = ${taboada*7}
${taboada} x 8 = ${taboada*8}
${taboada} x 9 = ${taboada*9}
${taboada} x 10 = ${taboada*10}`
}
//const taboada = Number(prompt('Qual taboada você deseja imprimir'));
//console.log(imprimeTabuada(taboada));
console.log(imprimeTabuada(6));

//c) Declare uma função que imprima a tabuada do 6. Chame esta função.
console.log('c) TABOADA DE SEIS: FUNÇÃO ANÔNIMA') // FUNÇÃO ANÔNIMA

const imprimeTaboada2 = function (taboada) {
    
    return `${taboada} x 1 = ${taboada}
${taboada} x 2 = ${taboada*2}
${taboada} x 3 = ${taboada*3}
${taboada} x 4 = ${taboada*4}
${taboada} x 5 = ${taboada*5}
${taboada} x 6 = ${taboada*6}
${taboada} x 7 = ${taboada*7}
${taboada} x 8 = ${taboada*8}
${taboada} x 9 = ${taboada*9}
${taboada} x 10 = ${taboada*10}`
}
console.log(imprimeTaboada2(6));