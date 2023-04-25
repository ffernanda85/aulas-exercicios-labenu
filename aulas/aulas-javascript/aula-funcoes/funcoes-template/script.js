//================== PRÁTICA GUIADA 1 ============================
console.log('PRÁTICA GUIADA 1')

//======= FUNCTION NOMEADA =====================
function digaOla (name){
    console.log('Function: Olá,', name);
}
digaOla('Flávia Fernanda!');

//========== EXPRESSÃO DE FUNÇÃO ===================
const digaOlaExpressaoFuncao = function (nome) {
    return ` Olá ${nome} `
    
    //console.log('Expressao de Função: Olá,', nome);
}
//digaOlaExpressaoFuncao('Flávia Fernanda!')
console.log(digaOlaExpressaoFuncao('Edna Maria!'));

//=========== ARROW FUNCTION ====================
const digaOlaArrowFunction = (nome) => {
    console.log('Arrow Function: Olá,', nome);
}
digaOlaArrowFunction('Izabela Alves!')

//================== OUTROS EXEMPLOS ==================

const imprimirNome = (nome) => {
    return `Olá, ${nome}`
}

const meuNome = 'Rosa'
console.log(imprimirNome(meuNome))

//======================================================
function calcularArea (altura, largura) {
    const area = altura * largura
    console.log(area)
}

calcularArea(3,2)

//============== PRÁTICA GUIADA 2 ====================
console.log('PRÁTICA GUIADA 2')

const numeroPar = (num) => {
    const par = num % 2 
    const verificaPar = par === 0
    
    const soma = num+10
    
    const mult = num*num
    
    return `O número é ${num}, ele é par? ${verificaPar}. 
    Somando com 10 o resultado é ${soma} e ele multiplicado por 
    ele mesmo é ${mult}.`
}

const resultado = numeroPar(2)
console.log(resultado)
console.log(numeroPar(3))

//================= EXPRESSÃO ANÔNIMA =====================

const numPar = function (num) {
    const par = num % 2
    const verificaPar = par == 0
    const soma = num + 10
    const mult = num * num

    return `O número é ${num}, ele é par? ${verificaPar}.
    Somando com 10 o resultado é ${soma}, e ele multiplicado por ele mesmo é ${mult}.`
}

const resultado2 = numPar(4)
console.log(resultado2)

//================== PRÁTICA GUIADA 3 ========================
console.log('PRÁTICA GUIADA 3')

const autenticar = (login,senha) => {
    const loginArmazenado = "flaviafernanda"
    const senhaArmazenada = "1234"
    
    const loginVerificado = login === loginArmazenado
    const senhaVerificado = senha === senhaArmazenada

    const logar = loginVerificado && senhaVerificado

    return logar
}

//const login = prompt('Insira o login')
//const senha = prompt('Insira a senha')

//console.log('login:', autenticar(login, senha))

//================= EXERCÍCIO DE FIXAÇÃO 1 =================

const usuarioMaiorIdade = (nome,anoNasc,anoAtual) => {
    const idade = anoAtual - anoNasc;
    const verificarIdade = idade >= 18;
    
    console.log('A idade atual de',nome, 'é', idade);
    return `${nome} é maior de idade? ${verificarIdade}`;
}

const nomeUsuario = prompt('insira seu nome');
const AnoNasc = prompt('ano de nascimento');
const anoAtual = prompt('insira o ano atual');

console.log(usuarioMaiorIdade(nomeUsuario, AnoNasc, anoAtual));



