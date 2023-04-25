/* 
Exercício 2
Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
**Utilize o for...in para resolver**
Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
``` 
*/
console.log(`EXERCICIO 2`);

let multiplicador = Number(prompt('Informe a tabuada que deseja ver:'));
const numerais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Tabuada de ${multiplicador}`)
for (index in numerais) {
        console.log(`${multiplicador} x ${Number(index) + 1} = ${(Number(index) + 1) * multiplicador}`);
    
};
console.log(`Fim da Tabuada de ${multiplicador}`);