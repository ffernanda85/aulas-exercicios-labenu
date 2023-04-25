//Exercicio 3

const nome = "Nome completo:"
const dataNascimento = "Data de nascimento:"
const cpf = "CPF:"
const escolaridade = "Escolaridade:"
const cnh = "Possui CNH?"
const anoAdmissao = "Informe o ano de Admissão:"
let cargoAtual = "Cargo Atual:"
let qtdFilhos = "Quantos filhos?"
let salario = "Salário:"
let comissao = "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero:"
let endereco = "Endereço:"

const respostaNome = prompt(nome)
const respostaDataNascimento = prompt(dataNascimento)
const respostaCpf = Number(prompt(cpf))
const respostaEscolaridade = prompt(escolaridade)
const respostaCnh = prompt(cnh)
const respostaAnoAdmissao = prompt(anoAdmissao)
let respostaCargoAtual = prompt(cargoAtual)
let respostaQtdFilhos = Number(prompt(qtdFilhos))
let respostaSalario = Number(prompt(salario))
let respostaComissao = Number(prompt(comissao))
let respostaEndereco = prompt(endereco)

console.log(nome, respostaNome)
console.log(dataNascimento, respostaDataNascimento)
console.log(cpf, respostaCpf)
console.log(escolaridade, respostaEscolaridade)
console.log(cnh, respostaCnh)
console.log(anoAdmissao, respostaAnoAdmissao)
console.log(cargoAtual, respostaCargoAtual)
console.log(qtdFilhos, respostaQtdFilhos)
console.log(salario, respostaSalario)
console.log(comissao, respostaComissao)
console.log(endereco, respostaEndereco)

console.log("nome:", typeof respostaNome)
console.log("Data Nascimento:", typeof respostaDataNascimento)
console.log("CPF:", typeof respostaCpf)
console.log("Escolaridade:", typeof respostaEscolaridade)
console.log("CNH:", typeof respostaCnh)
console.log("Ano de Admissão:", typeof respostaAnoAdmissao)
console.log("Cargo Atual:", typeof respostaCargoAtual)
console.log("Quantos Filhos:", typeof respostaQtdFilhos)
console.log("Salário:", typeof respostaSalario)
console.log("Comissão:", typeof respostaComissao)
console.log("Endereço:", typeof respostaEndereco)


















