//1) Analise o programa abaixo e diga o que será impresso no console, 
//SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b)// será impresso o number 10

b = 5
console.log(a, b)// será impresso 10 e 5

//==========================================================================
//2) Analise o programa abaixo e diga o que será impresso no console, 
//SEM EXECUTAR o programa.

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)// imprime 10 10 10

//===========================================================================
//3) Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes 
//para as variáveis. Lembre-se que devemos escolher nomes significativos, usar 
//o padrão camelCase. Alem disso, os nomes não podem começar com números ou 
//caracteres especiais.

/* let horaTrabalhadaDia = prompt("Quantas horas você trabalha por dia?");
let pgtDiario = prompt("Quanto você recebe por dia?");
alert(`Voce recebe ${horaTrabalhadaDia/pgtDiario} por hora`);//mostra caixa de alerta ao invés de imprimir no console */

//=============================================================================
//=============== EXERCICIO DE ESCRITA DE CÓDIGO ==============================
//1. Construa um programa, seguindo os seguintes passos:
//a) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nome  


//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idade 


//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o 
//comando `typeof`.

console.log(typeof nome, typeof idade);


//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário
// de código.

// A variavel declarada para o "nome" ficou como string devido as "" já a idade
// Fica como undefined pois não pudemos atribuir valores a mesma para que o typeof conseguisse identificar seu tipo 


//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às 
//variáveis que acabou de criar.

const nomeUsuario = prompt("Insira seu nome");
const idadeUsuario = Number(prompt("Insira sua idade"));
nome = nomeUsuario;
idade = idadeUsuario;

console.log(`${nome.toUpperCase()}, ${idade} anos`);


//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? 
//Escreva em um comentário de código.

console.log(typeof nome, typeof idade);

// Notasse que os 2 typeof se tornam string a não ser que insiramos o Number a 
//frente do prompt da idade para especificar que o mesmo se trata de um number 
//e não aceite valores diferentes de numbers


//g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` 
//anos". Onde `nome` e `idade` são os valores que o usuário inseriu

console.log(`Olá ${nome}, você tem ${idade} anos.`);

//==============================================================================
// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma 
//variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga 
//os passos:
//a) Crie três novas variáveis, contendo as respostas
//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

const pergunta1 = "Já estudou programação?";
const pergunta2 = "Gostaria de estudar programação?";
const pergunta3 = "Aceitaria ter uma aula experimental?";

const resposta1 = prompt(pergunta1);
const resposta2 = prompt(pergunta2);
const resposta3 = prompt(pergunta3);

console.log(`${pergunta1} ${resposta1} \n${pergunta2} ${resposta2} \n${pergunta3} ${resposta3}`);

//==============================================================================
//3. Suponha que temos duas variáveis `cao` e `gato`, cada uma com um valor inicial   

//let cao = "Mingau"
//let gato = "Bidu"

//Agora, queremos trocar os valores delas, de forma que `cao` passe a ter o valor 
//de `gato` e `gato` passe a ter o valor de `cao.` 
//Ou seja, no caso desse exemplo acima, `cao` passaria a ser `“Bidu”` e `gato` 
//passaria a ser `Mingau.`
// Aqui faremos uma lógica para trocar os valores
// Depois de trocados, teremos o seguinte resultado:
//console.log("O novo valor de cao é", cao) // O novo valor de cao é Bidu
//console.log("O novo valor de gato é", gato) // O novo valor de gato é Mingau
//Crie a lógica que deve ser inserida no código para que os valores de `cao` e`gato`
//sejam trocados, independente de qual valor essas variáveis assumam inicialmente 
//(ou seja: não basta dizer que `cao = "Bidu"` e `gato = "Mingau"` porque se os 
//valores iniciais mudarem, a lógica do seu programa teria que mudar também).

let salarioAtual = 2000;
let salarioFuturo 
let salarioTransicao = 10000;

console.log(`O salário Atual é: ${salarioAtual}.`);
console.log(`O salário de Transição é: ${salarioTransicao}.`);



salarioFuturo = salarioAtual;
salarioAtual = salarioTransicao;
salarioTransicao = salarioFuturo;

console.log(`\nO salário Atual foi atualizado e agora é: ${salarioAtual}.`);
console.log(`O salário de Transição foi atualizado e agora é: ${salarioTransicao}.`);

//=================================================================================
//4) Escreva um programa que pergunte ao usuário se ele gostaria de ser redirecionado 
//para a página da Labenu. Use para isso um confirm e imprima a variável no console.
// Observe qual o valor recebido pela variável  quando apertamos o botão de ok e o 
//de cancelar

const irParaPagLabenu = confirm("Deseja ser redirecionado para página da Labenu");
console.log(irParaPagLabenu);

//Ao apertar o "OK" temos o return "True" e ao apertar o "CANCELAR" recebemos "False"


//5) Agora avise o usuário que ele está no site da Labenu usando um alert. 
//A mensagem deverá estar guardada em uma variável e esta variável deverá ser 
//colocada dentro do alert.

const alertaUsuarioPag = "Você está no site Labenu";
alert(alertaUsuarioPag);


//6) Agora crie mais três variáveis, uma para nomeDoUsuario,uma para ideiaDoDia e 
//outra para dataAtual . Considerando que é um aplicativo que será usado sempre pela
//mesma pessoa,  pense em quais dados serão constantemente atualizados e quais 
//permanecerão os mesmos na hora de declarar as variáveis.

const nomeDoUsuario = "Flávia";
let ideiaDoDia = "\"Que hoje eu seja melhor do que eu fui ontem\"";
let dataAtual = "09/11/2022";


//Imprima no console a frase : Olá  nomeDoUsuario a sua ideia para o dia dataAtual 
//é ideiaDoDia. Depois mude as variáveis dataAtual e ideiaDoDia e imprima outra vez
//a mesma frase com novas variáveis

console.log(`Olá ${nomeDoUsuario}, a sua ideia para o dia ${dataAtual} é: \n${ideiaDoDia}.`);

dataAtual = "10/11/2022";
ideiaDoDia = "\"Que cada dia seja um novo dia de conquistas e sonhos realizados\"";

console.log(`Olá ${nomeDoUsuario}, a sua ideia para o dia ${dataAtual} é: \n${ideiaDoDia}.`);


//==============================================================================================
//========================= DESAFIO ==================================================

//Faça um programa que receba dois números do usuário e faça as seguintes operações,
//imprimindo os resultados no console da seguinte forma:

//1. O primeiro número somado ao segundo número resulta em: x.
//2. O primeiro número multiplicado pelo segundo número resulta em: y.

const number1 = Number(prompt("Insira um n°"));
const number2 = Number(prompt("Insira outro n°"));

const soma = number1 + number2;
const multiplicacao = number1 * number2;

console.log(`O primeiro número somado ao segundo número resulta em: ${soma}.`);
console.log(`O primeiro número multiplicado ao segundo número resulta em: ${multiplicacao}.`);


