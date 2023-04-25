/* Exercício 3 - Parte 1
Escreva as operações lógicas abaixo em formato de código. Imprima no console 
se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2; (5 > 20) && (5 < 2)
b) 5 é igual a 5 ou é igual a “5”; (5===5) || (5==="5")
c) negação de (vinte é maior que cinquenta)? !(20 > 50)
d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)? !(20 > 50) || !(50 > 60)*/

//console.log('a) 5 é maior que 20 e também é menor que 2?', (5>20)&&(5<2))
//console.log('b) 5 é igual a 5 ou é igual a “5”?', (5===5)||(5==="5"))
//console.log('c) Negação de (vinte é maior que cinquenta)?', !(20>50))
//console.log('d) Negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)?', !(20>50 || 50>60))



/* Exercício 3 - Parte 2
Na aula passada vocês começaram a implementar um sistema para o Rh de uma empresa. 
Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o 
relatório abaixo:**
**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em:
Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, 
recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês 
e entrou na empresa em 2019.**
Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:

a) Auxílio creche por filho:  R$45,50
b) Comissão de 10% sobre o total de vendas mensal
c) Total de vendas dos meses de janeiro a junho:
    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00
d)  Desconto do INSS 5% do salário

Calcule:

1) O salário fixo mais o auxílio creche
2) Quanto Fulano de Silva receberá de comissão em janeiro 
(dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 
(o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as 
comissões e auxílio. */


console.log('RELATÓRIO 1º SEMESTRE')

const nome = "Nome completo:"
let qtdFilhos = "Quantos filhos?"
let salarioFixo = "Salário:"
let comissao = "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero:"
let endereco = "Endereço:"

const respNome = prompt(nome)
let respQtdFilhos = Number(prompt(qtdFilhos))
let respSalarioFixo = Number(prompt(salarioFixo))
let respComissao = Number(prompt(comissao))

console.log(nome, respNome)
console.log(qtdFilhos, respQtdFilhos)
console.log(salarioFixo, respSalarioFixo)
console.log(comissao, respComissao+'%')

//1) O salário fixo mais o auxílio creche

const auxCreche = 45.50 * respQtdFilhos
console.log('Salário Fixo mais Auxílio-Creche equivale a:', auxCreche + respSalarioFixo)


//2) Quanto Fulano de Silva receberá de comissão em janeiro 

const totalVendasJan = 5784.50
const totalVendasFev = 3418.41
const totalVendasMar = 4124.10
const totalVendasAbr = 1874
const totalVendasMai = 7000
const totalVendasJun = 9450

const comissaoJan = (respComissao/100) * totalVendasJan
const comissaoFev = (respComissao/100) * totalVendasFev
const comissaoMar = (respComissao/100) * totalVendasMar
const comissaoAbr = (respComissao/100) * totalVendasAbr
const comissaoMai = (respComissao/100) * totalVendasMai
const comissaoJun = (respComissao/100) * totalVendasJun


console.log('Valor Referente a Comissão de Janeiro:', comissaoJan)


// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 

const descontoInssJan = ((respSalarioFixo + comissaoJan) * 0.05).toFixed(2)
const descontoInssFev = ((respSalarioFixo + comissaoFev) * 0.05).toFixed(2)
const descontoInssMar = ((respSalarioFixo + comissaoMar) * 0.05).toFixed(2)
const descontoInssAbr = ((respSalarioFixo + comissaoAbr) * 0.05).toFixed(2)
const descontoInssMai = ((respSalarioFixo + comissaoMai) * 0.05).toFixed(2)
const descontoInssJun = ((respSalarioFixo + comissaoJun) * 0.05).toFixed(2)

console.log('Valor a Ser Descontado em Janeiro pelo INSS:', descontoInssJan)


//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

const salarioLiquidoJan = (respSalarioFixo + auxCreche + comissaoJan) - descontoInssJan
const salarioLiquidoFev = (respSalarioFixo + auxCreche + comissaoFev) - descontoInssFev
const salarioLiquidoMar = (respSalarioFixo + auxCreche + comissaoMar) - descontoInssMar
const salarioLiquidoAbr = (respSalarioFixo + auxCreche + comissaoAbr) - descontoInssAbr
const salarioLiquidoMai = (respSalarioFixo + auxCreche + comissaoMai) - descontoInssMai
const salarioLiquidoJun = (respSalarioFixo + auxCreche + comissaoJun) - descontoInssJun


console.log('O Salário Líquido Janeiro:', salarioLiquidoJan.toFixed(2))
console.log('O Salário Líquido Fevereiro:', salarioLiquidoFev.toFixed(2))
console.log('O Salário Líquido Março:', salarioLiquidoMar.toFixed(2))
console.log('O Salário Líquido Abril:', salarioLiquidoAbr.toFixed(2))
console.log('O Salário Líquido Maio:', salarioLiquidoMai.toFixed(2))
console.log('O Salário Líquido Junho:', salarioLiquidoJun.toFixed(2))


// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as 
// comissões e auxílio.

const mediaSalarioLiquido = (salarioLiquidoJan+salarioLiquidoFev+salarioLiquidoMar+salarioLiquidoAbr+salarioLiquidoMai+salarioLiquidoJun)/6

console.log('Média de Salário de', respNome, 'é:', mediaSalarioLiquido.toFixed(2))



