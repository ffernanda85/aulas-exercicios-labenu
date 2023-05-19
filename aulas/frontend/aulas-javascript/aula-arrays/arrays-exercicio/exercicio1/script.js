// Exercício 1
//No primeiro exercício vamos praticar a criação de arrays. 
//Crie 3 arrays diferentes:
//- O primeiro deve possuir apenas **números**, e estes 
//números não devem seguir nenhuma ordem específica;
//- O segundo array deve possuir apenas **strings**;
//- O terceiro array deve possuir **números**, **strings** e **booleanos**.
//Imprima cada um dos arrays acima, utilizando `console.log()`
console.log("EXERCÍCIO 1 - ARRAY")

array1 = [37,5000,3,2023];
array2 = ["Flávia", "Fernanda", "da", "Silva", "Santos"];
array3 = [7000,"salário",true];


console.log("a) Impressão Array Number:",array1);
console.log("b) Impressão Array String:",array2);
console.log("c) Impressão Array Diversos:",array3);

array1.sort((a,b)=>a-b);//teste utilização do sort() para ordenar números
console.log("testando sort() ordenar valores:",array1);
console.log("Testando o join():",array2.join(' '));//teste utilização do join()
