/*
==========================Exercício 1====================================
Utilizando o laço `while`, escreva um código que recebe um `prompt` 
perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar 
“sim”, e “N” deve representar “não”. Crie também uma `let conta` para 
guardar o valor total.
Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos 
adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, 
devemos imprimir o valor total da conta. 
*/
 console.log(`EXERCICIO 1`);

//let coxinha = confirm("Deseja comer uma coxinha? Caso não pressione 'Cancelar'");
let coxinha = prompt('Deseja comer coxinha? \nDigite "S" para Sim \nDigite "N" para Não').toUpperCase();
let conta = 0;
let qtdCoxinhas = 0;

/* while (coxinha) {
    conta += 2.50
    coxinha = confirm("Deseja mais uma coxinha? Caso não pressione 'Cancelar'");
    qtdCoxinhas++
};
console.log(`Consumo: ${qtdCoxinhas} Coxinha(s) -------- R$ 2.50/unid \nTotal = R$${conta} reais`);

 */

 while (coxinha) {

    if (coxinha === "S") {
        conta += 2.5;
        coxinha = prompt('Deseja comer mais coxinha? \nDigite "S" para Sim \nDigite "N" para Não').toUpperCase();

    } else if (coxinha === "N") {
        console.log(`Você comeu ${conta / 2.5} coxinha(s), o valor total da conta = R$ ${conta.toFixed(2)}`);
        break;

    } else {
        alert("Por gentileza, insira um item válido!");
        coxinha = prompt('Deseja comer coxinha? Digite apenas \n"S" - para Sim \n"N" - para Não').toUpperCase();
        
    };
};

