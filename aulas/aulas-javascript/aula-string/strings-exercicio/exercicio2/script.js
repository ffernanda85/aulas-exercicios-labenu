//===================# Exercício 2 #================================================
//==================================================================================
console.log('EXERCÍCIO 2');

//a) Remova o excesso de espaços no final da string;
console.log('Resolução letra a)');

const minhaString = "Eu não sou supersticioso, mas sou um pouco _________.      ";
const minhaStringSemEspacos = minhaString.trim();

console.log(minhaStringSemEspacos);//usando o trim() a partir de uma variável
//console.log(minhaString.trim());//Usando o trim() direto no console

//==================================================================================

//b) exiba, em um console.log() a quantidade de caracteres da string, 
//antes e depois da remoção dos espaços;
console.log('Resolução letra b)');

console.log('Qtd caracteres string com os espaços:',minhaString.length);
console.log('Qtd caracteres string SEM os espaços:',minhaString.trim().length);
console.log('Qtd caracteres string SEM os espaços:',minhaStringSemEspacos.length);

//====================================================================================

//c) Substitua os traços `________` por “sticioso”.
console.log('Resolução letra c)');

const minhaStringReplace = minhaString.replace('_________','sticioso');
console.log('Usando replace com constante:\n',minhaStringReplace);

//usando replace() diretamente no console para substituição
console.log('Replace direto no console:\n',minhaString.replace('_________','sticioso'));
