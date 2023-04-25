// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log('teste soma:',soma(10,30));


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

//imprimeMensagem();

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Insira altura do retangulo');
  const largura = prompt('Insira largura do retangulo');
  console.log(altura*largura);
}
//calculaAreaRetangulo();


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Insira ano atual');
  const anoNascimento = prompt('Insira ano de nascimento');
  
  console.log(anoAtual-anoNascimento);
}
//imprimeIdade();


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura);
}
//console.log(calculaIMC());


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Insira seu nome');
  const idade = prompt('Insira sua idade');
  const email = prompt('Insira seu e-mail');
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Insira a primeira cor');
  const cor2 = prompt('Insira a segunda cor');
  const cor3 = prompt('Insira a terceira cor');

  console.log([cor1,cor2,cor3]);
}
//imprimeTresCoresFavoritas();


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}
//console.log(retornaStringEmMaiuscula('eu amo izabela, minha esposa!'));


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso;
}
//console.log(calculaIngressosEspetaculo(5000,20));

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length===string2.length
}
//console.log(checaStringsMesmoTamanho('flavia','izabela'));


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}
//array = [50,2,3];
//console.log(retornaPrimeiroElemento(array));


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const novaArray = array[array.length-1];
  return novaArray;
}
//array = [10,20,30,40,550,100,630,700,22];
//console.log(retornaUltimoElemento(array));


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const arrayInvertida = array.slice();
  arrayInvertida.pop();//apaga o último elemento
  arrayInvertida.shift();//apaga o 1º elemento
  arrayInvertida.push(array[0]);//coloca o 1º elemento na última posição
  arrayInvertida.unshift(array[array.length-1])//coloca o último elemento na 1ª posição
  
  return arrayInvertida;
}
//array = [10,20,30,40,50];
//console.log(trocaPrimeiroEUltimo(array));


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  comparacaoStrings = (string1.toUpperCase() === string2.toUpperCase());//coloca as strings em maiusculo
  return comparacaoStrings;
}
//console.log(checaIgualdadeDesconsiderandoCase('FLAVIA','flavia'));


// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt('Informe o ano atual');
  const anoNascimento = prompt('Informe o ano nascimento');
  const anoEmissaoRg = prompt('Informe o ano de emissão do RG');
  const idade = anoAtual - anoNascimento;//descobre a idade
  const tempoRg = anoAtual - anoEmissaoRg;//descobre o tempo da emissão do RG
  
  const condicaoMenorIgual20 = idade <= 20 && tempoRg >= 5;// verifica condição 1
  const condicaoMenorIgual50 = idade > 20 && idade <= 50 && tempoRg >= 10;// verifica condição 2
  const condicaoMaior50 = idade > 50 && tempoRg >= 15;// verifica condição 3
  
  const renovarRg = condicaoMenorIgual20 || condicaoMenorIgual50 || condicaoMaior50;
  
  console.log(renovarRg);  
}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const restoMultiploDe400 = ano % 400;
  const restoMultiploDe4 = ano % 4;
  const restoMultiploDe100 = ano % 100;

  const verificaCondicao1 = (restoMultiploDe400 === 0);
  const verificaCondicao2 = (restoMultiploDe4 === 0);
  const verificaExcessao = (restoMultiploDe100 !== 0);
  
  const anoBissexto = verificaCondicao1 || verificaCondicao2 && verificaExcessao;

  return anoBissexto;
}
//console.log(checaAnoBissexto(2012));


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDe18 = prompt('Você tem mais de 18 anos?');
  const escolaridade = prompt('Você possui ensino médio completo?');
  const disponibilidadeDeTempo = prompt('Você possui disponibilidade exclusiva durante os horários do curso?');

  const validacaoInscricao = (maiorDe18.toLowerCase() === 'sim') && (escolaridade.toLowerCase() === 'sim') && (disponibilidadeDeTempo.toLowerCase() === 'sim');

  console.log(validacaoInscricao);
}