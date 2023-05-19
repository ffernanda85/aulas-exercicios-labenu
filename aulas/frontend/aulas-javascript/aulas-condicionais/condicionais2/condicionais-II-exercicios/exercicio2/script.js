/* 
# Exercício 2

Vamos recriar o exercício Nacionalidade da aula de condicionais I, 
utilizando switch-case. No arquivo `script.js` existe uma versão do 
código já escrita, mas você pode colar o exercício que você fez na 
última prática!

-> Relembrando o enunciado.
Crie uma função que receba do usuário sua nacionalidade, utilize um 
prompt que diga: "Escreva aqui sua nacionalidade" e guarde o valor da 
resposta em uma const nacionalidade.
Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura com o switch-case que verifique se a nacionalidade 
guardada na const nacionalidade, é igual a cada uma das nacionalidades 
acima, e caso seja, imprima a nacionalidade no console. O programa deve 
imprimir "nacionalidade não encontrada" caso o valor de nacionalidade 
não corresponda a nenhum dos valores.
 */

let nacionalidade; 
//const arrayNacionalidades = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"];

const checkNacionalidade = (nacionalidade) => {
    nacionalidade = prompt('Insira sua nacionalidade').toLowerCase(); 
    switch (nacionalidade) {
        case "brasileira":
            console.log(`A sua nacionalidade é ${nacionalidade}!`);
            break;
        case "argentina":
            console.log(`A sua nacionalidade é ${nacionalidade}!`);
            break;
        case "uruguaia":
            console.log(`A sua nacionalidade é ${nacionalidade}!`);
            break;
        case "chilena":
            console.log(`A sua nacionalidade é ${nacionalidade}!`);
            break;
        case "colombiana":
            console.log(`A sua nacionalidade é ${nacionalidade}!`);
            break;
        default:
            console.log(`Nacionalidade não encontrada!`);
    };
};
checkNacionalidade(nacionalidade);