//======= PRÁTICA GUIADA 1 =============================
const nome = prompt('qual o seu nome').toLowerCase();
const cor = prompt('cor favorita').toLowerCase();

const frase = 'A cor favorita da '+nome+ ' é: ' +cor;

console.log(frase);

console.log(`A cor favorita da ${nome} é: ${cor}`);

//======= PRÁTICA GUIADA 2 =============================
const citacao = prompt('escreva uma citação');
const fraseCitacao = "\"" + citacao + "\"";

console.log(fraseCitacao);

//==========PRÁTICA GUIADA 3 ============================
console.log(`Nome: ${nome} \nCor Favorita: ${cor}`);

//============= PRÁTICA GUIADA 4  ======================
// letra maiuscula
console.log(`Nome: ${nome.toUpperCase()} \nCor Favorita: ${cor}`);

//=============== EXERCÍCIO DE FIXAÇÃO ===================
console.log('EXERCICIO DE FIXAÇÃO');

const nomeUsuario = prompt('login');
const emailUsuario = prompt('email');

//const fraseCadastro = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas Vindas, ${nomeUsuario}! número de caracteres da frase:${nomeUsuario.length}`;
//console.log(fraseCadastro);
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas Vindas, ${nomeUsuario}! número de caracteres do nome: ${nomeUsuario.length}`);

//substituir todas as letras R por L
//console.log(fraseCadastro.replaceAll('r','l'));
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas Vindas, ${nomeUsuario}! número de caracteres do nome:${nomeUsuario.length}`.replaceAll('r','l'));

//verifique se o e-mail possui '@'
console.log("o e-mail contém @?",emailUsuario.includes('@'));