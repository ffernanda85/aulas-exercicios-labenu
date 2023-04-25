/* let i = 0;

while (i < 10) {
    console.log(i);
    i++;
};


for (let i = 0; i < 10; i++) {
    console.log(i);
}; */

/* const numeros = [14, 67, 89, 15, 23];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}; */

/* let resposta = prompt('Qual nome da fruta citrica verde e azeda?');

while (resposta !== "limão") {
    console.log('Resposta incorreta,  vamos tentar mais uma vez?');
    resposta = prompt('Qual nome da fruta citrica verde e azeda?');
};
console.log('Exato, é um limão!'); */

/* const valorTabuada = Number(prompt("Escolha o valor da tabuada?"));


for (let i = 1; i <= 10; i++) {
    console.log(`${valorTabuada}x${i} = ${valorTabuada * i}`);
};

for (let i = 0; i < 10; i++) {
    console.log(`${valorTabuada}x${i+1} = ${valorTabuada * (i+1)}`);
}; */

let number = Number(prompt('Insira valores'));

while (number !== 0) {
    number = number + number;
    number = Number(prompt('Insira valores'));
}
console.log(`A soma dos valores de number é: ${number}`);