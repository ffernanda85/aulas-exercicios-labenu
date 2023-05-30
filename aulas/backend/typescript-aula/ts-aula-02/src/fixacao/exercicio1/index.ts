/* EXERCÍCIO DE FIXAÇÃO
*/
//1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
//a. nome, que é uma string;
//b. idade, que é um número;
//c. corFavorita, que é uma string.

import { COLORS, TPerson01 } from "../../types";

//forma manual de tipagem de objeto
const person:{name: string, age: number, favoriteColor: string} = {
  name: "person",
  age: 30,
  favoriteColor: "blue"
}

const person01: TPerson01 = {
  name: "person01",
  age: 32,
  favoriteColor: COLORS.AMARELO
}

const person02: TPerson01 = {
  name: "person02",
  age: 33,
  favoriteColor: COLORS.ANIL
}

const person03: TPerson01 = {
  name: "person03",
  age: 34,
  favoriteColor: COLORS.AZUL
}

console.table(person);
console.table([person01, person02, person03]);
