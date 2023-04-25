/* 
Exercício 3
Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

**Utilize o for...of para resolver**
```jsx
//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
``` 
*/
console.log("EXERCICIO 3");

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

console.log(`\nUtilizando for of e for in:\n`);
for (i in maioresPaises) {
    for (element of maioresPaises) {
        console.log(`${Number(i) + 1} - ${maioresPaises[i]}`);
    };
};

console.log(`\nUtilizando for in:\n`);
for (i in maioresPaises) {
    console.log(`${Number(i) + 1} - ${maioresPaises[i]}`);
};

console.log(`\nUtilizando for comum:\n`);
for (i = 0; i < maioresPaises.length; i++) {
    console.log(`${i + 1} - ${maioresPaises[i]}`);
};



