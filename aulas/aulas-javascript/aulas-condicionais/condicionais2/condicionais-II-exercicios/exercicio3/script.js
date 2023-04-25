console.log("teste 3")
/* 
=========================# Exercício 3===================================
Reescreva os códigos do arquivo script.js utilizando o if ternário.
**Relembrando o if ternário**
```jsx
condição ? expr1 : expr2
```
Onde :
`condição` é uma expressão que é avaliada como `true` ou `false`.
`expr1`, `expr2` são expressões com valores de qualquer tipo.
 */
//código a ser reescrito

let nome = prompt('insira seu nome').replace(/josé/gi, "José").replace(/jose/gi, "José");
let idade = Number(prompt('insira sua idade'));

/* if (nome === "José") {
	console.log("Oi, Zé!");
} else {
	console.log("Olá, " + nome);
};

if (idade >= 18) {
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}; */


nome === "José" ?
	console.log(`Oi, Zé!`)
	:
	console.log(`Olá, ${nome}!`);

idade >= 18 ?
	console.log('Pode tirar carteira de motorista!')
	:
	console.log('Ainda não pode tirar carteira de motorista!');


