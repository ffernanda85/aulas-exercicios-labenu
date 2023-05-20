/* # Exercício 2

Com os arrays criados, agora vamos observar os arrays. 
Faça o que se pede abaixo, utilizando `console.log()`:
- Imprima a quantidade de itens de cada array 
(utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, 
o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e 
depois no terceiro array e imprima o resultado destas 
verificações no console.log(). 
A primeira impressão deve retornar um booleano true e a 
segunda deve retornar um booleano false.  */
//==============================================================================
console.log("EXERCÍCIO 2");

array1 = [37,5000,3,2023];
array2 = ["Flávia", "Fernanda", "da", "Silva", "Santos"];
array3 = [7000,"salário",true];
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) Imprima a quantidade de itens de cada array
//(utilize um console.log() para cada impressão);
console.log("Resolução letra a)");

console.log("O array 1 possui",array1.length, "itens");
console.log("O array 2 possui",array2.length, "itens");
console.log("O array 3 possui",array3.length, "itens");

//b) Imprima o primeiro item do primeiro array, 
//o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("Resolução letra b)");

console.log("O 1º item do array 1 é:",array1[0]);
console.log("O 2º item do array 2 é:",array2[1]);
console.log("O 3º itam do array 3 é:",array3[2]);

/* - Verifique se um item está incluído no primeiro array e 
depois no terceiro array e imprima o resultado destas 
verificações no console.log(). 
A primeira impressão deve retornar um booleano true e a 
segunda deve retornar um booleano false. */
console.log("Resolução letra c)");

console.log("5000 está incluido no array 1?",array1.includes(5000));
console.log("5000 está incluido no array 3?",array3.includes(5000));