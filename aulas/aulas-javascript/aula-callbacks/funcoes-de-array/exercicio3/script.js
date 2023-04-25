//==============================Exercício 3=============================
//Dado um array de produtos, onde cada produto é um objeto com nome, preço e categoria, retorne um novo array com o nome dos produtos da categoria Limpeza.

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

const produtosLimpeza = produtos.filter((item, index, array) => {
    return item.categoria === "Limpeza"
    
});

console.log(`\n---------- ONLY CLEAR PRODUCTS -------------`)
console.log(produtosLimpeza);


console.log(`\n---------- ONLY PRODUCTS VALUES > R$ 7.00 -------------`)
const productsValues = produtos.filter((item) => {
    return item.preco > 7.00
})
console.log(productsValues);


console.log(`\n---------- ONLY THIS NAMES -------------`)
const productsNames = produtos.map((item) => {
    return item.nome
});
console.log(productsNames);


console.log(`\n---------- ONLY PRODUCTS VALUES < R$ 7.00 ----------`)
const productsValues2 = produtos.filter((item) => item.preco < 7)

console.log(productsValues2);


console.log(`\n---------- ONLY THIS NAMES AND VALUES ----------`)
const namesAndValues = produtos.map((item) => {
    return (`name: ${item.nome} - values: R$${item.preco}`)
});
console.log(namesAndValues);


//===========================================================================

const mostrarIdade = (idade) => {
    console.log("Sua idade é", idade)
}

const calcularIdade = (anoAtual, AnoNascimento, callback) => {
    idade = anoAtual - AnoNascimento;
    callback(idade)
}

calcularIdade(2022, 1985, mostrarIdade)


//===========================================================================

/* const mostrarJogador = (jogador) => {
    console.log(`O melhor jogador da seleção é ${jogador}`)
}

/* const mostrarCallBackJogador = (name, callback) => {
    const result = name
    callback(result)
} */

/* const mostrarCallBackJogador = (callback) => {
    name = prompt('Qual o melhor jogador da seleção?')
    callback(name)
}

mostrarCallBackJogador(mostrarJogador); */


//===========================================================================

/* const cantor = (name) => {
    console.log(`O cantor do momento pra você é: ${name}`)
}

const mostrarCantor = (callback) => {
    name = prompt('Qual seu cantor favorito?')
    callback(name)
}

mostrarCantor(cantor); */


// ==========================================================================

/* const verificarAtividade = (hora) => {
    
    if (hora === 7) {
        return "Agora é hora de Trabalhar!"
    } else if (hora === 12) {
        return "Agora é hora de Almoçar!"
    } else if (hora === 23) {
        return "Agora é hora de Dormir!"
    } else {
        return "Agora é hora de Estudar!"
    };
};


const imprimirAtividade = (callback) => {
    hora = Number(prompt('Que horas são?'));
    return callback(hora)
};
console.log(imprimirAtividade(verificarAtividade)); */