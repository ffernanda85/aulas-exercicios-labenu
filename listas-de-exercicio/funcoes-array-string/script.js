
//================== ESTUDOS FUNÇÕES ========================


//================= MÉTODO ARROW FUNCTION ===================

//Arrow function com utilização de console ao invés de return
const calcularArea = (altura,largura) => {
    const area = altura*largura;
    console.log('Área do retângulo de lados (3 e 2):', area);
}

calcularArea(3,2)


//Arrow function com utilização de return ao invés de console
const calcularArea2 = (altura,largura) => {
    const area = altura*largura;
    return area;
}
console.log('Área do retângulo de lados (3 e 3):', calcularArea2(3,3))

//========================//======================//=========    


//=============== FUNÇÃO UTILIZANDO PROMPT ===================
//console.log('CALCULO DA AREA COM USO DO PROMPT')

//function calculoArea(a,l) {
//    const area2 = a*l;
//      console.log('ÁREA DO RETÂNGULO É:', area2);
//}
//const a = Number(prompt('Digite o valor da altura'))
//const l = Number(prompt('Digite o valor da largura'))

//calculoArea(a,l)

// Se na função já usamos o console, então para imprimir o
// resultado da função só precisamos chamar a função, como 
// visto acima.


//===========================================================



const minhaFuncao = () =>{ 
    console.log("Olá, mundo!") 
}

console.log(minhaFuncao); //Fica incorreto, pois a função não está sendo chamada 
//corretamente...Nesse caso é como se estivessemos chamando uma constante 
//minhaFuncao e não a função. Para chamar a função precisamos inserir os () 
//dos parâmetros, como mostrado abaixo!

minhaFuncao(); 

//==============================//============================//================
// Mais exemplos de funções:

// Arrow Function - com return =================================================
const minhaFuncao3 = () => {  
    return (1+1)*2 
}
console.log(minhaFuncao3());

//Arrow Function - com console ==================================================
function minhaFuncao2(){
    console.log("Olá Turma Ozemela!");
}
minhaFuncao2();

//=============================================//===============================

/* const nome1 = prompt('Insira o primeiro nome:')
const nome2 = prompt('Insira o segundo nome:')
const nome3 = prompt('Insira o terceiro nome:')

function listaNomes (nome1, nome2, nome3) {
    console.log('Olá', nome1);
    console.log('Olá', nome2);
    console.log('Olá', nome3);
}

listaNomes(nome1, nome2, nome3);*/

//====================================================================================

function listaNomes (nome){
   console.log('Olá,', nome);
}

listaNomes('Flávia')
listaNomes('Izabela')
listaNomes('Helaine')

//====================================================================================

function listaNomes1 (nome){
    console.log('Olá,', nome)
}
listaNomes1('Anna')


//======================================================================================
// Função não-nomeada (A função é declarada dentro de uma variável)

const listaNomes2 = function(nome){
    console.log('Olá,',nome)
}

listaNomes2('Flávia') //Chamamos a variável ao invés da função e inserimos o argumento.
listaNomes2('Fernanda')
listaNomes2('Silva')
//listaNomes2(prompt('Digite seu nome:'))

// Função não-nomeada utilizando prompt para inserir dados no parâmetro nome

const listaNomes3 = function(nome){
    console.log('Olá,', nome)
}

//Forma direta de solicitar dados pelo prompt
//listaNomes3(prompt('Diga seu nome:')) 

//Criando variável para se utilizar prompt
//const oiNome = prompt('Diga mais um nome:')
//listaNomes3(oiNome)

//=======================================================================================
// Crie uma função que receba 02 valores e retorne a soma entre eles;
// Guarde o retorno dessa função em uma variável e imprima no console;
// Refaça o exercício com a sintaxe arrow function.

function somaNum(num1,num2){
    const soma = num1+num2
    console.log('A soma dos 02 número é:',soma);
}

somaNum(30,20);

// Arrow Function:
const somaNum2 = (valor1,valor2) => {
    const soma2 = valor1+valor2
   return soma2
}
console.log('A soma dos 02 número é:', somaNum2(50,20));


//=======================================================================================
//FUNÇÃO COM ARRAYS
// Crie uma função
//que receba um array de números
// e retorne um novo array apenas com o primeiro e último números.

const imprimeNNumeros = (array) => {
    const novoArray = []
    novoArray.push(array[0],array[array.length-1])
    return novoArray
}

arrayTeste = [1,2,3,4,5,6,7,8,9,10]
console.log(imprimeNNumeros(arrayTeste))

//==================================================================================
// Utilizando aspas dento de aspas numa string.

const frase = "Vamos seguindo \"sempre\" confiando no processo";
console.log(frase);

//===================================================================================
// Quebra de linha numa string

const frase2 = "Eu estou numa linha, \nAgora eu não estou mais na mesma linha.";
console.log(frase2);

//==================================================================================
// Convertendo Maiúscula e Minuscula

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log('GLÓRIA A DEUS!'.toLowerCase());
console.log('glória a deus!'.toUpperCase());

//==================================================================================
// Método trim(), retira os espaços antes e depois da string.
const email = '  f.fernanda85@gmail.com  ';
console.log(email);
console.log(email.trim());

//==================================================================================
// Método replace() e replaceAll()
const frase1 = 'Hoje eu comi batata, adoro batata';
const novaFrase1 = frase1.replace('batata','ovo com queijo');//replace()
const novaFrase2 = frase1.replaceAll('batata','ovo com queijo');//replaceAll()
console.log('frase original:',frase1);
console.log('frase com replace():',novaFrase1);
console.log('Frase com replaceAll():',novaFrase2);

//==================================================================================

const nome = prompt('Insira seu nome');
const cor = prompt('sua cor favorita');
const citacao = "\"Confia no processo, meu camarada!\"";

console.log('A cor favorita de '+nome.toUpperCase()+' é: '+cor+ '\ne sua citação preferida é: '+citacao);
console.log(`Nome: ${nome.toUpperCase()} \nCor Favorita: ${cor}`);
console.log(`Quantas caracteres possui ${nome}: ${nome.length}`);
console.log(`O ${nome} possui a letra "a"? ${nome.includes('a')}`);
console.log('replaceAll(r,l):',citacao.replaceAll('r','l'));

//===================================================================================
const nomeDeUsuario = prompt('nome de usuário');
const emailUsuario = prompt('e-mail');

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDeUsuario}! ${nomeDeUsuario.length}`);
console.log('o e-mail possui \"@\"?',emailUsuario.includes('@'));

//====================================================================================
// Outra forma de usar o replaceAll é o replace(/string/g,valor)

const teste = "askhajsd5h268j3902m";
console.log(teste);
let testeReplace = teste.replace(/a/g,'');
console.log(testeReplace);

//===================================================================================
// Mais testes replace, removendo número de uma string

testeReplace = teste.replace(/[\d]/g,'');// \d = todos os valores numéricos e o 'g' = indica o All
console.log(testeReplace);

//==================================================================================
// Removendo letras de uma string

testeReplace = teste.replace(/[^\d]/g,'');
console.log(testeReplace);

//==================================================================================
// Fazendo substituição com Case-insesitive

testeReplace = "Substituindo JavaScript, Javascript e javascript por JS";
resultadoTesteReplace = testeReplace.replace(/javascript/gi,"JS");// 'i' = remove o case-sensitive

console.log(testeReplace);
console.log(resultadoTesteReplace);
