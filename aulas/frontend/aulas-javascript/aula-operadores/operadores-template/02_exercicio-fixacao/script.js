// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
let comparacao = minhaIdade > idadeAmiga
let diferencaIdades = minhaIdade - idadeAmiga

console.log('Sua idade é maior do que a do seu melhor amigo?', comparacao)
console.log('A diferença entre nossas idades é de:', diferencaIdades, 'anos.') 



// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d
b && a && !d
a || d
c && !d