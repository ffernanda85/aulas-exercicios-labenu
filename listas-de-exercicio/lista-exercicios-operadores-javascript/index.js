//1.Leia o código abaixo. Indique todas as mensagens impressas no console,
//SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
//console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado)

//console.log("d. ", typeof resultado)

//2.Seu colega se aproxima de você falando que o código dele não funciona 
//como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que 
//será impresso no console? 

//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero

//console.log(soma)

// no console não será impressa a soma, e sim a concatenação dos numeros
//se precisamos efetuar a soma, no prompt temos que converter para Number
// utilizando o Number().


//3. Para o exercício anterior, sugira ao seu colega uma solução para que
//o valor impresso no console seja, de fato, a soma dos dois números.


//primeiroNumero = Number(prompt("Digite um numero!"));
//segundoNumero = Number(prompt("Digite outro numero!"));

//const soma2 = primeiroNumero + segundoNumero

//console.log(soma2)

//1. Faça um programa que:
//a) Pergunte a idade do usuário
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a 
//do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
//d) Imprima na console a diferença de idade (não tem problema se sair 
//um número negativo).

/* let idade = Number(prompt("Qual a sua idade?"));
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));

console.log(`Sua idade é maior do que a do seu amigo? ${idade > idadeMelhorAmigo}.`);
console.log(`${idade - idadeMelhorAmigo}`);
 */

//2. Faça um programa que:
//a) Peça ao usuário que insira um número **par**
//b) Imprima na console **o resto da divisão** desse número por 2.
//c) Teste o programa com diversos números pares. Você notou um padrão?
//Escreva em um comentário de código.
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um
//comentário de código

//let numPar = Number(prompt("Insira um número par"));
//console.log(numPar % 2);

//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, 
//imprima no console 
//a) A idade do usuário em meses
//b) A idade do usuário em dias
//c) A idade do usuário em horas

/* let idade = Number(prompt("insira sua idade"));
const idadeEmMeses = idade * 12;
const idadeEmDias = idade * 365;
const idadeEmHoras = idade * 8760;

console.log(`Sua idade em meses é: ${idadeEmMeses}`);
console.log(`Sua idade em dias é: ${idadeEmDias}`);
console.log(`Sua idade em horas é: ${idadeEmHoras}`); */


//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça
//as operações e imprima no console as seguintes mensagens seguidas pelo
//true ou false:

/* 
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das
operações.
 */

/* const number1 = Number(prompt('Insira um nº'));
const number2 = Number(prompt('Insira outro nº'));

console.log(`O primeiro numero é maior que segundo? ${number1 > number2}`);
console.log(`O primeiro numero é igual ao segundo? ${number1 === number2}`);
console.log(`O primeiro numero é divisível pelo segundo? ${number1 % number2 === 0}`);
console.log(`O segundo numero é divisivel pelo primeiro? ${number2 % number1 === 0}`); */


/* 
================================= DESAFIO 1 =======================================
a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter 
*/


const fahrenheitParaKelvin = (fahrenheit) => {
    kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    console.log (`${fahrenheit}°F equivalem a ${kelvin}K.`);
};
fahrenheitParaKelvin(77);

const CelsiusParaFahrenheit = (Celsius) => {
    fahrenheit = (Celsius * 9/5) + 32;
    console.log (`${Celsius}°C equivalem a ${fahrenheit}°F.`);
};
CelsiusParaFahrenheit(80);

const CelsiusParaFahrenheitEkelvin = (Celsius) => {
    Celsius = Number(prompt("Insira a temperatura em celsius que deseja converter"));
    fahrenheit = (Celsius * 9/5) + 32;
    kelvin = Celsius + 273.15;

    console.log(`${Celsius}°C equivalem a ${fahrenheit}°F e ${kelvin}k.`);
};
//CelsiusParaFahrenheitEkelvin();


/* 
====================================== DESAFIO 2 ==========================================
Quilowatt-hora é uma unidade de energia; e é muito utilizada para se 
determinar o consumo de energia elétrica em residências. Sabe-se que o 
quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade
de quilowatts consumida por uma residência.
a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 khw/h
b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15%
de desconto
 */

const valorContaEnergia = (consumo) => {
    valorPagar = consumo * 0.05
    valorPagarComDesconto = valorPagar * 0.85
    console.log(`O valor da sua conta é R$${(valorPagar).toFixed(2)} reais.
    Aplicando o desconto fica por R$${(valorPagarComDesconto).toFixed(2)} reais.`)
};
valorContaEnergia(280);



//============================ DESAFIO 3 ==================================================
/* 
Um grande problema que o mundo tem atualmente é a quantidade de unidades que 
existem para representar a mesma coisa. Por exemplo, para representar a Massa 
de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para 
representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para 
volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa 
introdução, faça o que se pede:






 
*/
//a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um
//programa que converta 20lb para kg. Imprima  a resposta no console da seguinte
//forma: `20lb equivalem a X kg`

const functionConvertionLibraKg = (libra) => {
    kilo = libra / 2.205
    console.log(`${libra}lb equivalem a ${kilo.toFixed(2)}kg`);
};
functionConvertionLibraKg(20);


//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um
//programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte
//forma: `10.5oz equivalem a X kg`

const functionConvertionOzParaKg = (oz) => {
    kilo = oz / 35.274
    console.log(`${oz}oz equivalem a ${kilo.toFixed(2)}kg`);
};
functionConvertionOzParaKg(10.5);


//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um
//programa que converta 100mi para m. Imprima  a resposta no console da seguinte
//forma: `100mi equivalem a X m`

const functionConvertionMiMetros = (mi) => {
    m = mi / 1609
    console.log(`${mi}mi equivalem a ${m.toFixed(2)}m`);
};
functionConvertionMiMetros(100);


//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa
//que converta 50ft para m. Imprima  a resposta no console da seguinte forma:
//`50ft equivalem a X m`

const functionConvertionFtParaMetros = (ft) => {
    m = ft / 3.281
    console.log(`${ft}ft equivalem a ${m.toFixed(2)}m`);
}
functionConvertionFtParaMetros(50);


//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um
//programa que converta 103.56gal para litro. Imprima  a resposta no console da
//seguinte forma: `103.56gal equivalem a X l`

const functionConvertionGalParaLitro = (gal) => {
    l = gal * 3.785
    console.log(`${gal}gal equivalem a ${l.toFixed(2)}l`);
};
functionConvertionGalParaLitro(103.56);


//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um
//programa que converta 450xic para litro. Imprima  a resposta no console da
//seguinte forma: `450 xic equivalem a X l`

const functionConvertionXicParaLitro = (xic) => {
    l = xic / 3.52
    console.log(`${xic}xic equivalem a ${l.toFixed(2)}l`);
}
functionConvertionXicParaLitro(450);


//g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que
//ele peça ao usuário o valor da unidade original antes de converter

let unidadeOriginal = prompt('Insira o número da conversão desejada: \n1- libras(lb) -> Kg \n2- onça(oz) -> Kg \n3- milhas(mi) -> metros \n4- pés(ft) -> metros \n5- galão(gal) -> litro \n6- xícara(xíc) -> litro');
let valorParaConverter = Number(prompt('Insira o valor que deseja converter'));


const functionConvertion = (unidadeOriginal, valorParaConverter) => {
    
    switch (unidadeOriginal) {
        case "1":
            kilo = valorParaConverter / 2.205;
            console.log(`${valorParaConverter}lb equivalem a ${kilo.toFixed(2)}kg`);
            break;
        case "2":
            kilo = valorParaConverter / 35.274;
            console.log(`${valorParaConverter}oz equivalem a ${kilo.toFixed(2)}kg`);
            break;
        case "3":
            m = valorParaConverter * 1609;
            console.log(`${valorParaConverter}mi equivalem a ${m.toFixed(2)}m`);
            break;
        case "4":
            m = valorParaConverter / 3.281;
            console.log(`${valorParaConverter}ft equivalem a ${m.toFixed(2)}m`);
            break;
        case "5":
            l = valorParaConverter * 3.785;
            console.log(`${valorParaConverter}gal equivalem a ${l.toFixed(2)}l`);
            break;
        case "6":
            l = valorParaConverter / 3.52;
            console.log(`${valorParaConverter}xic equivalem a ${l.toFixed(2)}l`);
            break;
        default:
            console.log('Seleção inexistente, por favor escolha uma opção válida!');
    };
};
functionConvertion(unidadeOriginal,valorParaConverter)