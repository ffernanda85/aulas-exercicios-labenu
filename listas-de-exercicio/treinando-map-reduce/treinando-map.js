
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

const produtosHortiFrutiComDesconto = produtos.map((produto, indice, array) => {
   return {...produto, preco: (produto.preco*0.9).toFixed(2)}
}).filter((hortiFrutiComDesconto) => {
    return hortiFrutiComDesconto.categoria === "Hortifruti"
})
//console.log(produtosHortiFrutiComDesconto);

//Não altera o array original:
const produtosEmReal = produtos.map(p => {
    return {...p, preco: p.preco*4}
})
//console.log("Preços multiplicados por 4")
//console.log(produtosEmReal)

//Alterando o array original:
produtos.map(p => p.preco = (p.preco * 10).toFixed(2))
//console.log("Array Original Alterado")
//console.log(produtos)

//=======================================================================
const produtos2 = [
    {
        nome: "notebook",
        preco: 2100
    },
    {
        nome: "smartphone",
        preco: 400
    }
]
//Adicionando propriedades com map sem alterar original
const adicionarProp = produtos2.map(p => {
    return {...p, cor: "preto"}
})
//console.log(adicionarProp)

//alterando array original com map
produtos2.map(p =>  {
    if (p.nome === "smartphone") {
        p.nome = "SmarTV 60'"
        p.preco = 2000
        p.qtd = 3
    } else {
        p.qtd = 10
    }
})
//console.log(produtos2)


//======================== MAP() ======================================


const numeros = [1, 2, 3, 4, 5]; //vetor original
//console.log(numeros)
//inserindo map dentro de uma função que recebe um array e eleva todos seus valores a 4 potência
const numQuadrado = (array) => {
   return array.map((e => e**4))
}
//console.log(numQuadrado(numeros))

//elevando um array a potência utilizando map e Math.pow(item, pot)
const numQuadrado2 = (array) => {
    return array.map((e => Math.pow(e, 4)))
}
//console.log(numQuadrado2(numeros))

const number = numeros.map((e => Math.pow(e, 3)))
//console.log(number)

const mult = numeros.map(e => {
    return e = e**2
})
//console.log(mult)

//=======================================================================
const produtos4 = [
    {
        nome : "Smartphone 5' Android",
        preco : 1200
    },
    {
        nome : "Notebook 4GB Windows 10",
        preco : 2100
    },
    {
        nome : "SmartTV 50' LED",
        preco : 8700
    }
];
 
const ajustarPreco = produtos4.map((p) => {
    p.preco = p.preco * 1.15
    return p
})
//console.log(ajustarPreco)

//=======================================================================
const copas = [1958, 1962, 1970, 1994, 2002];

//map se utilizando de 2 parametros (item e index)
const leagueChampions = copas.map((item, indice) => {
    return `Copa ${indice+1}: ${item}`
})
//console.log(leagueChampions.join("\n"))

//=======================================================================




















//=====================================================================
// =========================== REDUCE () ==============================
//O reduce() executa uma função para cada elemento do array, resultando num único valor de retorno.

const produtos3 = [
    {
        nome: "notebook",
        preco: 2100
    },
    {
        nome: "smartphone",
        preco: 400
    },
    {
        nome: "carregador",
        preco: 100
    }
]
//atribuindo o reduce a uma variável, pode ser impresso direto no console se chamarmos a variável
const valuesProdct = produtos3.reduce((acc, vAtual) => acc += vAtual.preco, 0)
//console.log(valuesProdct)//função reducer antes de acrescentar o elemento carregador


//colocando o reduce dentro de uma função
function soma(array) {
    return array.reduce((acc, vAtual) => acc += vAtual.preco, 0)
}
//console.log(soma(produtos2))//chamando a função inserindo os produtos como parametro

//chamando o reduce como parametro de uma função
function soma2(callback) {
    return callback
}
//console.log(soma2(valuesProdct))

//======================= MAP() E REDUCE() ============================
//map e reduce aninhados (transformando os valores de dolar para real com o map e retornando a soma deles através do reduce)
const somaValuesProdctReal = produtos2.map((e => e.preco*4)).reduce((acc, vAtual) => acc += vAtual, 0)//retiramos o .preco de vAtual já que o map já irá retornar apenas os valores já convertidos em real
//console.log(somaValuesProdctReal)



