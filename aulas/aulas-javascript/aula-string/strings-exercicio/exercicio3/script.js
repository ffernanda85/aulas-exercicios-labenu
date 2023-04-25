//===================== # Exercício 3 ==================================
console.log("EXERCICIO 3");

//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
console.log("\nResposta letra a)");

const frase = "\nJorge tem uma casa verde e com portão azul, com os dizeres: \n\"BOAS VINDAS, mas não deixe o gato sair\"";
console.log('String Original:',frase);

//==============================================================================

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, 
//e **azul** por **laranja**;
console.log('\nResposta letra b)');

let novaFrase = frase.replace('verde','rosa').replace('azul','laranja');
console.log('Nova String:',novaFrase);

//========================================================================

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log('\nResposta letra c)');

const verificarCorVerde = novaFrase.includes('verde');
const verificarCorLaranja = novaFrase.includes('laranja');
//verificando cores através de variáveis
console.log('A nova string inclui "verde"?',verificarCorVerde);
console.log('A nova string inclui "laranja"?',verificarCorLaranja);

//utilizando o includes direto pelo console
//console.log('A nova string inclui "verde"?',fraseFinal.includes('verde'));
//console.log('A nova string inclui "laranja"?',fraseFinal.includes('laranja'));

//========================================================================

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, 
//assim como o “BOAS VINDAS” */
//Jorge tem uma casa verde e com portão azul, com os dizeres: 
//"BOAS VINDAS, mas não deixe o gato sair"
console.log("\nResposta EXTRA");

//utilizando replace
novaFrase = novaFrase.replace("mas não deixe o gato sair","mas não deixe o gato sair".toUpperCase());
console.log(novaFrase);

//utilizando concatenação
const fraseInicio = "Jorge tem uma casa verde e com portão azul, com os dizeres:";
const frasePortao = "\"boas vindas, mas não deixe o gato sair\"".toUpperCase();
console.log(fraseInicio+"\n"+frasePortao);

