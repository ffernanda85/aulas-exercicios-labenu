/* const nome = process.argv[2]
const sobrenome = process.argv[3]

console.log(`O primeiro nome é ${nome} e o sobrenome é ${sobrenome}`) */

//======================== PRATICA GUIADA 01 ==========================

import { countries } from "./countries.js";

const countryWanted = process.argv[2]

if (!countryWanted) {
    const error = "Informe um nome de país a pesquisar!"
    console.log(error);
} else {
    const resultSearch = countries.filter(country => country.name.toLowerCase().includes(countryWanted.toLowerCase()))
    resultSearch.length > 0 ? console.log(resultSearch) : console.log("País não encontrado!")
}