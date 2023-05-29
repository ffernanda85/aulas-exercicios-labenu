/* EXERCÍCIO DE FIXAÇÃO
*/
//1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
//a. nome, que é uma string;
//b. idade, que é um número;
//c. corFavorita, que é uma string.

const person:{name: string, age: number, favoriteColor: string} = {
  name: "person",
  age: 30,
  favoriteColor: "blue"
}

//2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
//que todos os objetos tenham as mesmas propriedades.

type TPerson = {
  name: string
  age: number
  favoriteColor: COLORS
}

//3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.

enum COLORS {
  VIOLETA = "violeta",
  ANIL = "anil",
  AZUL = "azul",
  VERDE = "verde",
  AMARELO = "amarelo",
  LARANJA = "laranja",
  VERMELHO = "vermelho"
}

const person01: TPerson = {
  name: "person01",
  age: 32,
  favoriteColor: COLORS.AMARELO
}

const person02: TPerson = {
  name: "person02",
  age: 33,
  favoriteColor: COLORS.ANIL
}

const person03: TPerson = {
  name: "person03",
  age: 34,
  favoriteColor: COLORS.AZUL
}

console.log(person);
console.log(person01);
console.log(person02);
console.log(person03);
