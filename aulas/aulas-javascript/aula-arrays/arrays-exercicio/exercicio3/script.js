/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. 
Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
e faça o que se pede abaixo nas cópias dos arrays originais;
- Adicione um item `number` ao início do primeiro array. 
Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` 
para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` 
para exibir o original e a cópia; */

//========================================================================
console.log("EXERCICIO 3");

const arrayOriginal1 = [29,8,1985,37,27,10,2022];
const arrayOriginal2 = ['Flávia','Fernanda','da','Silva','Santos'];
const arrayOriginal3 = ['Flávia','Fernanda',7000,3,2023,true];

const copiaArrayOriginal1 = arrayOriginal1.slice();
const copiaArrayOriginal2 = arrayOriginal2.slice();
const copiaArrayOriginal3 = arrayOriginal3.slice();

//a) Adicione um item `number` ao início do primeiro array. 
//Utilize `console.log()` para exibir o original e a cópia;
console.log("a) Adicionando um Number ao inicio do array:");

copiaArrayOriginal1.unshift(7000);
console.log("Array 1 original:",arrayOriginal1);
console.log("Cópia Array 1:",copiaArrayOriginal1);

//b) Remova o último item do segundo array. Utilize `console.log()` 
//para exibir o original e a cópia;
console.log("b) Removendo o último item:");

copiaArrayOriginal2.pop();
console.log("Array 2 original:",arrayOriginal2);
console.log("Cópia array 2 sem o último item:",copiaArrayOriginal2);

//c) Remova o segundo item do terceiro array. Utilize `console.log()` 
//para exibir o original e a cópia;
console.log("c) Removendo 2º item:");

copiaArrayOriginal3.splice(1,1);
console.log("Array 3 original:",arrayOriginal3);
console.log("Cópia array 3 sem o 2º item:",copiaArrayOriginal3);