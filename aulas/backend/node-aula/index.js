/* const nome = process.argv[2]
const sobrenome = process.argv[3]

console.log(`O primeiro nome é ${nome} e o sobrenome é ${sobrenome}`) */

//======================== PRATICA GUIADA 01 PARTE A ==========================

import { countries } from "./countries.js";

/* const countryWanted = process.argv[2]

if (!countryWanted) {
    const error = "Informe um nome de país a pesquisar!"
    console.log(error);
} else {
    const resultSearch = countries.filter(country => country.name.toLowerCase().includes(countryWanted.toLowerCase()))
    resultSearch.length > 0 ? console.log(resultSearch) : console.log("País não encontrado!")
} */

//======================== PRATICA GUIADA 01 PARTE B ==========================

/* const countryWanted = process.argv[2]

if (!countryWanted) {
    const error = "Informe um nome de país a pesquisar!"
    console.log(error);
} else {
    const resultSearch = countries.filter(country => country.name[0].toLowerCase().includes(countryWanted.toLowerCase()))
    resultSearch.length > 0 ? console.log(resultSearch) : console.log("País não encontrado!")
}  */

//======================== PRATICA GUIADA 01 PARTE C ==========================

const name = process.argv[2]
const code = process.argv[3]

if (!(name || code)) {
    console.log("Informe todos os dados necessários: nome e código do país");
} else {
    const newCoutry = {
        name,
        code
    }

    countries.push(newCoutry)

    countries.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
           return -1
        }else if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
    
    console.log("novo país",newCoutry)
    console.log(countries)
}





