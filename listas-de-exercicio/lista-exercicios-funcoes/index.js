//1. Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma
//mensagem falando algumas informações sobre você, como:
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações
//sobre você.Lembrando que a função não possui entradas, apenas imprime
//essa mensagem.

const imprimiDados = () => {
    console.log(`Eu sou Flávia, tenho 37 anos, moro em Paulista e sou estudante.`);
};
//imprimiDados();

// b) Agora escreva uma função que receba 4 parâmetros que correspondem
//às informações de uma pessoa: o nome(`string`), a idade(`number`), a
//cidade(`string`) e uma profissão(`string`).Ela deve retornar uma string
//que unifique todas as informações da pessoa em uma só mensagem com o
//template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

const imprimiDados2 = (nome, idade, cidade, profissao) => {
    nome = prompt('Insira seu nome').toUpperCase();
    idade = prompt('sua idade');
    cidade = prompt('Insira sua cidade').toUpperCase();
    profissao = prompt('Insira sua profissão').toUpperCase();
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`);
};
//imprimiDados2();

// 2. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

const funcaoOperacoes = (num1, num2) => {
    num1 = Number(prompt('Insira um número'));
    num2 = Number(prompt('Insira outro número'));
    
    soma = num1 + num2;
    subt = num1 - num2;
    mult = num1 * num2;
    div = num1 / num2;

    console.log(`Os valores escolhidos para as operações são: ${num1} e ${num2}
    soma: ${soma}
    subtração: ${subt}
    multiplicação: ${mult}
    divisão: ${div.toFixed(2)}`);
};
//funcaoOperacoes();

// ====================== DESAFIO 1 ==============================
//1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
//a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

const parametro = (argumento) => {
    console.log(argumento);
};
//parametro("Flávia");

//b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

const funcaoSoma = (parametro1, parametro2) => {
    parametro1 = Number(prompt("digite um valor"));
    parametro2 = Number(prompt("digite outro valor"));
    return soma = parametro1 + parametro2;
};
//parametro(funcaoSoma());


// ======================== DESAFIO 2 ===================================
//2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console.


const funcaoHipotenusa = (cateto1, cateto2) => {
    cateto1 = Number(prompt('Insira o valor do cateto'));
    cateto2 = Number(prompt('Insira o valor do outro cateto'));

    hipotenusa = (cateto1 ** 2 + cateto2 ** 2) ** 0.5;

    return hipotenusa.toFixed(2);
};
console.log(funcaoHipotenusa());
