/* 
================== **Exercícios de escrita de código**==================
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em 
seguida, Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), 
`nomeDoUsuario`! 
*/
const nome = prompt("Insira seu nome");
const email = prompt("Insira seu email");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), 
${nome}!`);


//2. Faça um programa que pergunte ao usuário sua senha. Em seguida verifique
// quantos caracteres tem a senha.

const senhaUsuario = prompt("Insira sua senha");

console.log(senhaUsuario.length);

//3. Verifique se o email do usuário inclui @

console.log("O email do usuário possui @?", email.includes("@"));

//4. Faça com que o nome do usuário seja guardado em outra variável contendo
//apenas letras minúsculas.

const nomeMinusculo = nome.toLowerCase();

console.log(nomeMinusculo);

//5. A mail.com  foi comprada pela labenu.com faça com que uma nova variável
//armazene o novo email do usuário substituindo o antigo endereço por
//labenu.com

const emailNovo = email.replace(/mail.com/gi, "labenu.com");

console.log(emailNovo);
