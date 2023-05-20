/* # Exercício 3
Crie uma função que receba do usuário sua nacionalidade, utilize um
**prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor 
da resposta em uma const `nacionalidade`.
Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;
Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade
guardada na const `nacionalidade` é igual a cada uma das nacionalidades 
acima, e caso seja, imprima a nacionalidade no console. O último `else` 
deve imprimir "nacionalidade não encontrada" caso o valor de 
`nacionalidade` não corresponda a nenhum dos valores.
> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 
 */

let nacionalidade;

/* const funcaoNacionalidade = (nacionalidade) => {
    nacionalidade = prompt("Qual sua nacionalidade?").toUpperCase();
    
    if (nacionalidade === "BRASILEIRA"){
        console.log(`A sua Nacionalidade é ${nacionalidade}`)
    }else if (nacionalidade === "ARGENTINA"){
        console.log(`A sua Nacionalidade é ${nacionalidade}`)
    }else if (nacionalidade === "URUGUAIA"){
        console.log(`A sua Nacionalidade é ${nacionalidade}`)
    }else if (nacionalidade === "CHILENA"){
        console.log(`A sua Nacionalidade é ${nacionalidade}`)
    }else if(nacionalidade === "COLOMBIANA"){
        console.log(`A sua Nacionalidade é ${nacionalidade}`)
    }else {
        console.log(`NACIONALIDADE NÃO ENCONTRADA!`)
    }
};
funcaoNacionalidade(nacionalidade); */


// Utilizando array para guardar as nacionalidades e enxugar o código
/* let arrayNacionalidades = ["BRASILEIRA", "ARGENTINA", "URUGUAIA", "CHILENA", "COLOMBIANA"];

const funcaoNacionalidade = (nacionalidade) => {
    nacionalidade = prompt('Insira sua nacionalidade').toUpperCase();
    
    if (arrayNacionalidades.includes(nacionalidade)) {
        console.log(`A sua nacionalidade é ${nacionalidade}`);
    }else {
        console.log('NACIONALIDADE NÃO ENCONTRADA!');
    }
};
funcaoNacionalidade(nacionalidade); */



// checando nacionalidade usando o switch-case
const checkNacionalidade = (nacionalidade) => {
    nacionalidade = prompt('Insira sua nacionalidade').toUpperCase();
    
    switch (nacionalidade) {
        case "BRASILEIRA":
            console.log(`A sua nacionalidade é ${nacionalidade}`);
            break;
        case "ARGENTINA":
            console.log(`A sua nacionalidade é ${nacionalidade}`);
            break;
        case "URUGUAIA":
            console.log(`A sua nacionalidade é ${nacionalidade}`);
            break;
        case "CHILENA":
            console.log(`A sua nacionalidade é ${nacionalidade}`);
            break;
        case "COLOMBIANA":
            console.log(`A sua nacionalidade é ${nacionalidade}`);
            break;
        default:
            console.log('NACIONALIDADE NÃO ENCONTRADA');

    };
};
checkNacionalidade(nacionalidade);