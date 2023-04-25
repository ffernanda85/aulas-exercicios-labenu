//=============== EXERCICIO 1 - LISTA FUNÇÕES DE ARRAY ==================
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]
//A função map contida em novoArray irá imprimir cada elemento do array, ou seja cada obj seguido de seus indices e abaixo de cada um o array original.
const novoArrayA = usuarios.map((item, index, array) => {
    // console.log(item, index, array)
})

//======EXERCICIO 2 - INTERPRETAÇÃO DE ESCRITA DE CODIGO ==============  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
//O console irá imprimir: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
//console.log(novoArrayB)

//=========== EXERCICIO 3 - INTERPRETAÇÃO DE ESCRITA DE CODIGO =========

const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
})
  
//console.log(novoArrayC)//[{ nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" },]

//=============== EXERCICIO 1 - ESCRITA DE CODIGO ===================
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
//a) Crie um novo array que contenha apenas o nome dos doguinhos
const petsNames = pets.map((item) => {
    return item.nome
})
//console.log(petsNames)

//b) Crie um novo array apenas com os cachorros salsicha
const petsSalsicha = pets.filter((item) => item.raca === "Salsicha")
//console.log(petsSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const mensagem = pets.filter((item) => item.raca === "Poodle").map((element) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${element.nome}!`)

//console.log(mensagem)
//======================= EXERCICIO 2 ===============================
//Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

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
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item
const productsName = produtos.map((item) => item.nome)
//console.log(productsName)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const productDiscount = produtos.map((item) => {
    return {...item, preco: (item.preco * 0.95).toFixed(2)}
}).map((element) => {
    return `Produto:${element.nome} / Preço:${element.preco}`
})
//console.log(productDiscount)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas = produtos.filter((item) => item.categoria === "Bebidas")
//console.log(bebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const newArrayYpe = produtos.filter((item) => item.nome.includes("Ypê"))
//console.log(newArrayYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const arrayMensagem = newArrayYpe.map((element) => {
    return `Compre ${element.nome} por ${element.preco}`
})
//console.log(arrayMensagem)

//======================== DESAFIO ======================================
//Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const nomesPokemon = pokemons.map((item) => {
    return item.nome
})
//console.log(`Nomes pokemon antes da ordenação`)
//console.log(nomesPokemon)

nomesPokemon.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0
})
//console.log(`Nomes pokemon em ordem alfabetica`)
//console.log(nomesPokemon)

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const typesPokemons = pokemons.map((item) => {
    return item.tipo
})
console.log(typesPokemons)

const typesPokemons2 = []

typesPokemons.find((element) => {
    if (element === "grama") {

        if (!(typesPokemons2.includes("grama"))) {
            typesPokemons2.push(element)
        } 
    } else if (element === "fogo") {
        if (!(typesPokemons2.includes("fogo"))) {
            typesPokemons2.push(element)
        }
        
    } else if (element === "água") {
        if (!(typesPokemons2.includes("água"))) {
            typesPokemons2.push(element)
        }
    }
})
console.log(typesPokemons2)
