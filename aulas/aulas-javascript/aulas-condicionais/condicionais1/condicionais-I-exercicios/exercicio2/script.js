/* # Exercício 2
Escreva uma função que receba três valores. Uma idade, um booleano que responda se
a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa 
está cursando alguma faculdade.
Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir 
que a afirmacão não é verdadeira.

<details>
<summary>Exemplo</summary>
Caso a primeira pessoa tenha idade >=18:
<b>"A pessoa é maior de idade"</b>
e caso não seja:
<b>"A pessoa é menor de idade"</b>
</details>
 */
let idade;
let ensinoMedioConcluido;
let cursandoFaculdade;


//Ao utilizarmos o prompt não temos como garantir, através do typeof que o usuário irá inserir apenas number
//pois se colocar o cast Number ele reconhecerá toda a informação como Number
// e se não colocarmos o Number, o prompt retornará sempre um string.

/* const funcao1 = (idade,ensinoMedioConcluido,cursandoFaculdade) =>{
    if (typeof idade != "number"){
        console.log("Idade inválida!");
       // return
    }
    if (idade >= 18){
        console.log("Usuário maior de idade");
    } else {
        console.log("Usuário menor de idade!");
    }
    if (ensinoMedioConcluido){
        console.log("Ensino Médio Concluido!");
    } else {
        console.log("Ensino Médio Não concluido!");
    }
    if (!cursandoFaculdade){
        console.log("Não está cursando faculdade!");
    } else {
        console.log("está cursando faculdade!");
    }
} */
//funcao1(idade,ensinoMedioConcluido,cursandoFaculdade);


// ifs aninhados..
const checkInfo = (idade, ensinoMedioConcluido, cursandoFaculdade) => {
    idade = Number(prompt("qual sua idade"));

    if (idade >= 18) {
        ensinoMedioConcluido = confirm("Você conluiu o ensino médio?");
        if (ensinoMedioConcluido) {
            cursandoFaculdade = confirm("Você está cursando alguma faculdade?");
            if (!cursandoFaculdade) {
                console.log('Usuário é Maior de Idade, concluiu Ensino Médio mas não está cursando faculdade!');
            } else {
                console.log('Usuário Maior de Idade, Concluiu o Ensino Médio e Está cursando Faculdade!');
            }
        } else {
            console.log('Usuário Maior de Idade mas Ensino Médio Não concluido!');
        }
    } else {
        console.log('Usuário é menor de idade!');
    }
};
checkInfo(idade, ensinoMedioConcluido, cursandoFaculdade);


