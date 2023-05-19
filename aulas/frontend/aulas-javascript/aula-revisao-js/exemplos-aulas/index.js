// REVISÃO AULA COMPARADORES - EXERCICIO 3
// Sorteie um número aleatório entre 1 e 10, peça para o usuário inserir um número de 1 a 10. Imprima no console os dois números dizendo se o que foi digitado pelo usuário é menor, maior ou igual ao sorteado.



const functionGenerationNumber = (randonNumber, numberUser) => {
    randonNumber = Math.floor(Math.random() * 10 + 1);
    numberUser = Number(prompt("Insira um número entre 1 e 10"));

    if (numberUser === randonNumber) {
        console.log(`Número Sorteado: ${randonNumber} \nNúmero do Usuário: ${numberUser} \nVOCÊ ACERTOU!!! Os valores são iguais!`);
    
    } else if (numberUser > randonNumber) {
        console.log(`Número Sorteado: ${randonNumber} \nNúmero do Usuário: ${numberUser} \nO NÚMERO INSERIDO É MAIOR DO QUE O SORTEADO!`);
    
    } else {
        console.log(`Número Sorteado: ${randonNumber} \nNúmero do Usuário: ${numberUser} \nNÚMERO INSERIDO É MENOR DO QUE O SORTEADO!`);
    };

};
//functionGenerationNumber();

//==========================================================================================
// REVISÃO OPERADORES LÓGICOS - EXERCICIO 4
// Um parque de diversão te contratou para fazer um sistema que permite ou proíbe a entrada de pessoas em um brinquedo.
// Para entrar, é necessário:
/* 
a) Ter mais de 18 anos
b) Termais de 1, 60m de altura
c) Não ter problemas cardiacos 
Faça essas perguntas ao usuário e diga o resultado no console.
*/

const sistemaParqueDiversoes = (idade, altura, saude) => {
    idade = Number(prompt('Qual sua idade?'));
    altura = Number(prompt('Qual sua altura?'));
    saude = prompt('Tem problemas cardiacos? \nDigite N - para Não \nDigite S - para Sim').toUpperCase();

    if (idade > 18 && altura > 1.6 && saude === "N") {
        console.log(`Entrada Permitida!`);

    } else {
        console.log(`Entrada Proibida!`);
    };
};
//sistemaParqueDiversoes();

//============================================================================
// REVISÃO STRING - EXERCICIO 5
// Dada a frase: "  Hoje eu vou comer cenoura, ebaaa" realize as seguintes operações:
/* 
a) Imprima a frase inicial juntamente com seu tamanho
b) Retire os espaços do inicio e do fim 
c) Faça com que possua apenas letras minusculas
d) Verifique se as palavras comer e batata estão presentes
e) Substitua cenoura por batata
f) verifique novamente se possui as palavras comer e batata
*/

const frase = "  Hoje eu vou comer cenoura, ebaaa!";

/* console.log(`${frase} \n  tamanho: ${frase.length} `);
console.log(`${frase} \n  tamanho: ${frase.trim().length} `);
console.log(`${frase.toLowerCase()}`);
console.log(`${frase.includes("comer")} \n${frase.includes("batata")} `);
console.log(`${frase.replace(/cenoura/gi, 'batata')}`);
console.log(`${frase.replace(/cenoura/gi, 'batata').includes("comer")} \n${frase.replace(/cenoura/gi, 'batata').includes("batata")} `); */


//=======================================================================
// REVISÃO ARRAY - EXERCICIO 6
// Dada a lista ["batata", "cenoura", "beterraba"] realize as operações:
/* 
a) Imprima o segundo item da lista
b) Imprima o tamanho da lista
c) Adicione o item "mandioca"
d) Verifique se há um item chamado "cenoura"
e) Remova o item de indice 1
 */

const arrayLista = ["batata", "cenoura", "beterraba"];

const functionArrayLista = (array) => {
    console.log(array[1]);
    console.log(array.length);
    array.push("mandioca");
    console.log(`Tem cenoura na minha lista? ${array.includes("cenoura")}`)
    array.splice(1, 1);// removendo o item "cenoura"
    console.log(array)
};
//functionArrayLista(arrayLista);

//============================================================================
// REVISÃO FUNÇÕES - EXERCICIO 7
// Crie uma função que:
/* 
a) Receba um array de números
b) Retorne um novo array com o último e o primeiro número do array recebido divididos por 2
 */

arrayNumbers = [20, 30, 40, 50, 60, 70, 80, 90, 100];

const functionNewArray = (array) => {
    newArray = []
    firstNumber = (array[0]) / 2
    lastNumber = (array[array.length - 1]) / 2
    newArray = [firstNumber, lastNumber]

    console.log(newArray);
};
//functionNewArray(arrayNumbers);

//============================================================================
// REVISÃO OBJETOS - EXERCICIO 8
//Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade e genero musical preferido. Imprima no console as propriedades desse objeto seguindo o modelo abaixo:
/* 
"O nome da pessoa é ________, ela tem ______ anos  e gosta muito de ________."

Crie uma nova pessoa, com mesma idade e genero musical, mas nome diferente.
*/

const objPerson = {
    nome: "Flávia",
    idade: 37,
    generoMusical: "pagode"
};

const functionNewPerson = (obj) => {
    console.log(`O nome da pessoa é ${obj.nome} , ela tem ${obj.idade} anos  e gosta muito de ${obj.generoMusical}.`);

    const objNewPerson = {
        ...obj,
        nome: "Izabela",
        idade: 39,
        generoMusical: "Brega"
    };

    console.log(`O nome da pessoa é ${objNewPerson.nome} , ela tem ${objNewPerson.idade} anos  e gosta muito de ${objNewPerson.generoMusical}.`);
};
//functionNewPerson(objPerson);

//============================================================================
// REVISÃO CONDICIONAIS - EXERCICIO 9
// Receba um número do usuário. Se for Par, imprima: é par!. Se for impar, imprima: É impar!


const functionImparPar = (numberUser) => {
    numberUser = Number(prompt('Insira um número!'));

    if (numberUser % 2 === 0) {
        console.log(`${numberUser} É Par!`);
    } else {
        console.log(`${numberUser} É Ímpar!`);
    };
};
//functionImparPar()

const functionImparParCase = (numberUser) => {
    numberUser = Number(prompt('Insira um número!'));
    verification = numberUser % 2

    switch (verification) {
        case 0:
            console.log(`${numberUser} É Par!`);
            break
        
        default:
            console.log(`${numberUser} É Ímpar!`);
            break
    };
};
//functionImparParCase();

//============================================================================
// EXERCICIO 10
// Receba do usuário o nome de um bichinho:
/* 
a) Se for um cachorro, retorne: Au au
b) Se for um gato, retorne: Miau
c) Se for uma vaca, retorne: Muuu
d) Se for outro bichinho, retorne: sem barulho reconhecido! :( 
*/
//exemplo utilizando switch case
const functionPet = (pet) => {
    pet = prompt('Qual seu bichinho de estimação?').toLowerCase();

    switch (pet) {
        case "cachorro":
            console.log(`Seu bicnhinho faz: Au Au!`);
            break
        
        case "gato":
            console.log(`Seu bicnhinho faz: Miau!`);
            break
        
        case "vaca":
            console.log(`Seu bicnhinho faz: Muuu!`);
            break
        
        default:
            console.log(`Sem barulho reconhecido! :(`);
            break
    };
};
//functionPet();


//exemplo utilizando if/else
const functionPet2 = (pet) => {
    pet = prompt('Qual seu bichinho de estimação?').toLowerCase();

    if (pet === "cachorro") {
        console.log(`Seu bicnhinho faz: Au Au!`);
    
    } else if (pet === "gato") {
        console.log(`Seu bicnhinho faz: Miau!`);   
    
    } else if (pet === "vaca") {
        console.log(`Seu bicnhinho faz: Muuu!`);
    
    } else {
        console.log(`Sem barulho reconhecido! :(`);
    }
};
//functionPet2();

//=========================================================================
// REVISÃO LAÇOS - EXERCICIO 11
// Receba um array com números e devolva qual o maior dentro dele.
//Ex: Para o array [11, 15, 18, 14, 12, 13], a saida deve ser: "O número maior é 18." - Faça utilizando as 3 estruturas de loop (while / for / for of)

const numeros = [11, 15, 18, 14, 12, 13, 24];

let i = 0;
let maior = -Infinity;

while (i < numeros.length) {// identificando o maior nº com o while

    if (numeros[i] > maior) {
        maior = numeros[i]
    };
    
    i++
};
//console.log(`O número maior é ${maior}`);

for (let i = 0; i < numeros.length; i++) {// identificando o maior nº com for
    
    if (numeros[i] > maior) {
        maior = numeros[i]
    };
};
//console.log(`O número maior é ${maior}`);

for (let element of numeros) {// identificando o maior nº com for of
    if (element > maior) {
        maior = element
    };
};
//console.log(`O número maior é ${maior}`);

//=======================================================================
// EXERCICIO 12 -  LAÇOS
// Dado o objeto, imprima:
/* 
frase: "Oi! Eu me chamo _______ e tenho _______anos. Dou/não dou aula de front e dou/não dou aula de back. 
Meus jogos favoritos são: 
1) Chrono Trigger
2) Undertale
3) Hollow Knight
Tenho uma cachorrinha chamada Polly que gosta de comer maçã."

Faça a Chijo contar uma piada ruim.
*/

const prof = {
    nome: "Leticia Chijo",
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
    contaPiada: () => console.log("É pave ou pacume?"),
    pet: {
        nome: "Polly",
        especie: "cachorrinha",
        raca: "Lhasa Apso",
        snakcsFavoritos: ["biscoito", "maçã", "frango"]
    }
};

/* Fazendo a verificação de aula back e aula front utilizando o if
if (prof.aulasFront) {
   front = "Dou"
} else {
   front = "Não dou"
};

if (prof.aulasBack) {
   back = "dou"
} else {
   back = "não dou"
}; 
*/

//Fazendo a verificação de aula back e aula front utilizando função
const verificarAulas = (aula) => {
    if (aula) {
        return "Dou"
    } else {
        return "Não dou"
    };
};

const front = verificarAulas(prof.aulasFront);
const back = verificarAulas(prof.aulasBack);

//Fazendo os jogos através do for
const jogos = [] //Criei um array vazio e atraves do for fui dando o push em cada jogo

for (let i = 0; i < prof.jogosFavoritos.length; i++) {
    jogos.push(`${i+1}) ${prof.jogosFavoritos[i]}\n`);
}

const frase2 = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos. \n${front} aula de front e ${back} aula de back. 
\nMeus jogos favoritos são: 
${jogos}
\nTenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snakcsFavoritos[1]}.`


//Fazendo os jogo diretamente pelo console
/* const frase2 = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos. \n${front} aula de front e ${back} aula de back. 
\nMeus jogos favoritos são: 
\n1) ${prof.jogosFavoritos[0]}
\n2) ${prof.jogosFavoritos[1]}
\n3) ${prof.jogosFavoritos[2]}
\nTenho uma cachorrinha chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snakcsFavoritos[1]}.`
 */
//console.log(frase2);
//prof.contaPiada();

//============================================================================
//REVISÃO MAP() E FILTER() - EXERCICIO 13
//Dado um array de produtos onde cada produto possui um nome, categoria e preço:
/* 
a) Retorne um novo array com todos os produtos, porém com 10% de desconto no preço.
b) Retorne um array apenas com os itens da categoria hortifruti.
c) Retorne um array apenas com os itens de hortifruti e com 10% de desconto.
*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

const produtosComDesconto = produtos.map((produto) => {
    return {...produto, preco:(produto.preco * 0.9).toFixed(2)}
});
//console.log("Letra a) ", produtosComDesconto);


const produtosHortifruti = produtos.filter((horti) => {
    return horti.categoria === "Hortifruti"
})
//console.log(produtosHortifruti)


/* const produtosHortiComDesconto = produtosHortifruti.map((element) => {
    return {...element, preco:(element.preco*0.9).toFixed(2)}    
})
console.log(produtosHortiComDesconto) */

const hortifrutiComDesconto = produtos.map((produto) => {
    return {...produto, preco:(produto.preco * 0.9).toFixed(2)}
}).filter((horti) => {
    return ((horti.categoria === "Hortifruti") && horti.preco < 8)
})/* .filter((prod) => {
    return prod.preco < 8
}) */
console.log(hortifrutiComDesconto)
