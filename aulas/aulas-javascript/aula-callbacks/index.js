/*  
arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2];


const multiplicarPorTres = (array) => {
    const novoArray = []

    for (element of array) {
        novoArray.push(element * 3)
    }
    return novoArray    
};
//console.log(multiplicarPorTres(arrayNumeros));

//====================================================================================================

const retornarPar = (array) => {
    const novoArray = [];

    for (element of array) {
        if (element % 2 === 0) {
            novoArray.push(element)
        }
    }
    return novoArray;
};
//console.log(retornarPar(arrayNumeros));


const imprimir = (callback, array) => {
    const resultado = callback(array)
    console.log(resultado)
};
//imprimir(multiplicarPorTres, arrayNumeros);
//imprimir(retornarPar, arrayNumeros);

//====================================================================================================
// somar mais 2

const somar = (num) => {
    return num +2
};
//console.log(somar(10));

// usando a função somar como callback:
const imprimirNoConsole = (funcao, num) => {
    console.log(funcao(num))
};
//imprimirNoConsole(somar,20);

//====================================================================================================


const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2];

const resultadoMultTres = arrayNumeros.map((cadaElemento) => cadaElemento * 3)

//console.log(resultadoMultTres)

//====================================================================================================


/* const arrayFiltradoPar = arrayNumeros.filter((cadaElemento) => {
    if (cadaElemento % 2 === 0) {
        return cadaElemento
    }
}) */

/*const arrayFiltradoPar = arrayNumeros.filter((cadaElemento) => cadaElemento % 2 === 0)

//console.log(arrayFiltradoPar)


//====================================================================================================

const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
    { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
    { nome: 'Charmander', tipo: 'fogo', vida: 35 },
    { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
    { nome: 'Squirtle', tipo: 'água', vida: 45 },
    { nome: 'Psyduck', tipo: 'água', vida: 25 },
  ]
//letra a - crie a função que receba como parametro o objeto pokemon, e que defina a propriedade vida como 100

/* const funcaoVidaPokemon = (objeto) => {
    objeto.vida = 100
    return objeto

};

console.log(funcaoVidaPokemon(pokemons)) */


//====================================================================================================

/* const funcaoVidaPokemon = (objeto) => {
    const novoObj = {
        ...objeto,
        vida: 100
    }
    return novoObj
}; */
//console.log(funcaoVidaPokemon(pokemons))


//====================================================================================================

/* const aumentarVida = (objeto) => {
    const novoObj = {
        ...objeto,
        vida: 100
    }
    return novoObj
} */
//console.log(aumentarVida(pokemons))


// letra b - crie uma constante pokemonsVidaCheia e utilize a função de array map passando a letra a como parametro da função

//const pokemonsVidaCheia = pokemons.map(funcaoVidaPokemon)
//console.log(pokemonsVidaCheia)


//====================================================================================================
// letra c -

/* const pokemonsDeFogo = pokemons.filter((obj)=>{
    return obj.tipo === "fogo"
})
  */
//console.log(pokemonsDeFogo) */

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//====================================================================================================
//usando o filter()

/* const pokemonsDeFogo = pokemons.filter((pokemon) => {
    return pokemon.tipo === "fogo"
})
console.log(pokemonsDeFogo) */


//====================================================================================================
//usando o map()

/* const nomeDosPokemons = pokemons.map((pokemon) => {
    pokemon.vida = 100
    return pokemon
});
console.log(nomeDosPokemons); */


//====================================================================================================
// usando callback e map()

/* function pokemonsFunction (pokemon) {
    pokemon.vida = 100
    return pokemon
};
const nomeDosPokemons = pokemons.map(pokemonsFunction)

console.log(nomeDosPokemons) */


//====================================================================================================
//map()

/* const nomeDosPokemons = pokemons.map ( function (element) {
    element.vida = 100
    return element
})

console.log(nomeDosPokemons) */

const nomeDosPokemons = pokemons.map( valor => valor )

//console.log(nomeDosPokemons)


//====================================================================================================
// convertendo fahrenheit em celcius

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celcius = fahrenheit.map((temperatura) => {
    conversao = (temperatura - 32) * 5 /9
    return conversao.toFixed(2)
} )
//console.log(celcius)












