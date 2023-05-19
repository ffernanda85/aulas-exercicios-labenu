//==================== Exercício 3 ================================
//========================================================================
//Observe o objeto abaixo e, utilizando o espalhamento resolva 
// os exercícios a seguir:
console.log('EXERCÍCIO 1');

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//===================================================================
//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas 
//trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const pokemonCopia = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
};


//===================================================================
//b) No objeto original, adicione mais uma propriedade, chamada 
//`ataques`. Esta propriedade deve guardar um **array** que deve 
//começar vazio.

pokemon1.ataques = [];


//===================================================================
//c) crie um objeto de `ataque` com a estrutura abaixo e o adicione 
//no array `ataques` utilizando `**push()**`
/*  nome: Investida,
    dano: 40,
    tipo: Normal,
    precisao: 100, */
    
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
};

pokemon1.ataques.push(ataque);


//===================================================================
//d) Na cópia do objeto original, adicione a propriedade `ataques` 
//a partir do **espalhamento** da propriedade de mesmo nome criada 
//para o objeto original;

pokemonCopia.ataques = [...pokemon1.ataques];


//================================================================
//e) para o objeto original, adicione o ataque “Folha Navalha”,
//com 45 de dano, 100 de precisão, e de tipo “Grama”; no array de 
//`ataques`

pokemon1.ataques = [
    ...pokemon1.ataques,
    {
        nome:"Folha Navalha",
        dano: 45,
        precisao: 100,
        tipo: "Grama"
    }
];


//=================================================================
//f) para a cópia, crie o `ataque` “Jato de Água”, com 40 de dano,
//100 de precisão, e do tipo “Água”; e adicione no array.

pokemonCopia.ataques = [
    ...pokemonCopia.ataques,
    {
        nome: "Jato de Água",
        dano: 40,
        precisao: 100,
        tipo: "Água"
    }
];


//=================================================================
//g) Imprima os dois objetos  do tipo pokemon no console.

console.log(pokemon1);
console.log(pokemonCopia);

