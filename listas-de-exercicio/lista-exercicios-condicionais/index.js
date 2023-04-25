
//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
let idade;

const funcaoVerificarMaiorIdade = (idade) => {
    idade = Number(prompt('qual sua idade?'));
    while (idade) {
        if (idade >= 18) {
            console.log(`Você pode dirigir`);
        } else if (idade < 18 && idade > 0) {
            console.log(`Você não pode dirigir`);
        } else {
            alert(`Dados inválidos!`);
        } break;
    };
};
//funcaoVerificarMaiorIdade(idade);

// ======================================================================
//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

//let turno = prompt('Insira a letra referente ao seu turno: \nM - para turno da manhã \nT - para turno da tarde \nN - para turno da noite').toUpperCase();

/* while (turno) {

    if (turno === "M") {
        console.log(`Bom Dia!`);

    } else if (turno === "T") {
        console.log(`Boa Tarde!`);

    } else if (turno === "N") {
        console.log(`Boa Noite!`);
  
    } else {
        console.log(`Dado Inválido!`);
  
    } break;
}; */

// ======================================================================
//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

/* switch (turno) {
    case "M":
        console.log(`Bom Dia!`);
        break;
    
    case "T":
        console.log(`Boa Tarde!`);
        break;
    
    case "N":
        console.log(`Boa Noite!`);
        break;
    
    default:
        console.log(`Dado Inválido!`);
        break;
};

 */

//=======================================================================
//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

/* const genero = prompt("genero do filme?").toLowerCase();
let preco; 

switch (genero) {

    case "fantasia":
        preco = Number(prompt("valor ingresso?"));
        if (preco < 15) {
            console.log(`Genero escolhido: ${genero} \nValor do ingresso: R$ ${preco.toFixed(2)} reais \nBom Filme!`);
        } else {
            console.log(`Valor do ingresso acima de R$ 15.00, escolha outro Filme :(`);
        };
        break;
    
    default:
        console.log(`O genero do filme é: ${genero}, escolha outro Filme :(`);
        break;
}; */


// ======================== DESAFIO 1 ===================================
//1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

/* const genero = prompt("genero do filme?").toLowerCase();
let preco; 
let lanchinho;

switch (genero) {

    case "fantasia":
        preco = Number(prompt("valor ingresso?"));
        if (preco < 15) {

            lanchinho = prompt("Qual lanchinho você vai comprar?").toLowerCase();
            console.log(`Genero escolhido: ${genero} \nValor do ingresso: R$ ${preco.toFixed(2)} reais \nAproveite a(o) ${lanchinho}! \nBom Filme!`);

        } else {
            console.log(`Valor do ingresso acima de R$ 15.00, escolha outro Filme :(`);
        };
        break;
    
    default:
        console.log(`O genero do filme é: ${genero}, escolha outro Filme :(`);
        break;
};
 */


// ============================== DESAFIO 2 =========================================
//2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
/* 
- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10) 
*/

const nome = prompt("informe nome completo");
const tipoDeJogo = prompt("Tipo do Jogo: \n(Escolha uma das 02 opções!) \nIN - Internacional \nNA - Nacional").toUpperCase();
let etapaDoJogo;
let categoria; 
let qtdIngressos;
let valorIngresso;

switch (tipoDeJogo) {
    case "NA":
        etapaDoJogo = prompt("Etapa do Jogo: \n(Escolha uma das 03 opções!) \nSF - Semi-Final \nDT - Decisão de Terceiro Lugar \nFI - Final").toUpperCase();
        
        switch (etapaDoJogo) {
            case "SF":
                categoria = prompt("Escolha a Categoria: \n(Escolha uma das 04 opções!) \n1 - Categoria 1 \n2 - Categoria 2 \n3 - Categoria 3 \n4 - Categoria 4");

                switch (categoria) {
                    case "1":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 1320;

                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Semi-Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "2":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 880;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Semi-Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "3":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 550;
        
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Semi-Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "4":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 220;
        
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Semi-Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    default:
                        console.log(`categoria Inválida!`)
                        break;
                };
                break;
            
            case "DT":
                categoria = prompt("Escolha a Categoria: \n(Escolha uma das 04 opções!) \n1 - Categoria 1 \n2 - Categoria 2 \n3 - Categoria 3 \n4 - Categoria 4");
    
                switch (categoria) {
                    case "1":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 660;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Decisão Terceiro Lugar \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "2":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 440;
        
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Decisão Terceiro Lugar \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "3":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 330;
        
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Decisão Terceiro Lugar \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "4":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 170;
        
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Decisão Terceiro Lugar \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    default:
                        console.log(`categoria inválida!`)
                        break;
                    
                };
                break;
            
            case "FI":
                categoria = prompt("Escolha a Categoria: \n(Escolha uma das 04 opções!) \n1 - Categoria 1 \n2 - Categoria 2 \n3 - Categoria 3 \n4 - Categoria 4");
        
                switch (categoria) {
                    case "1":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 1980;
        
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "2":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 1320;
            
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "3":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 880;
            
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "4":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 330;
            
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Nacional \nEtapa do Jogo: ${etapaDoJogo} - Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: R$ ${valorIngresso.toFixed(2)} \nValor Total: R$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    default:
                        console.log(`Categoria Inválida!`);
                        break;
                };
                break;
            default:
                console.log(`Etapa do Jogo inválida!`);
                break;
            
        };
        break;
    
    case "IN":
        etapaDoJogo = prompt("Etapa do Jogo: \n(Escolha uma das 03 opções!) \nSF - Semi-Final \nDT - Decisão de Terceiro Lugar \nFI - Final").toUpperCase();
        
        switch (etapaDoJogo) {
            case "SF":
                categoria = prompt("Escolha a Categoria: \n(Escolha uma das 04 opções!) \n1 - Categoria 1 \n2 - Categoria 2 \n3 - Categoria 3 \n4 - Categoria 4");
            
                switch (categoria) {
                    case "1":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 1320 / 4.10;

                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Semi-Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "2":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 880 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Semi-Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "3":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 550 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Semi-Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "4":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 220 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Semi-Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    default:
                        console.log(`Categoria Inválida!`);
                        break;
                };
                break;

            case "DT":
                categoria = prompt("Escolha a Categoria: \n(Escolha uma das 04 opções!) \n1 - Categoria 1 \n2 - Categoria 2 \n3 - Categoria 3 \n4 - Categoria 4");

                switch (categoria) {
                    case "1":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 660 / 4.10;

                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Disputa do Terceiro Lugar \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "2":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 440 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Disputa do Terceiro Lugar \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "3":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 330 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Disputa do Terceiro Lugar \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "4":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 170 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Disputa do Terceiro Lugar \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    default:
                        console.log(`Categoria Inválida!`);
                        break;
                };    
                break;
            
            case "FI":
                categoria = prompt("Escolha a Categoria: \n(Escolha uma das 04 opções!) \n1 - Categoria 1 \n2 - Categoria 2 \n3 - Categoria 3 \n4 - Categoria 4");

                switch (categoria) {
                    case "1":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 1980 / 4.10;

                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "2":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 1320 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "3":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 880 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                    
                    case "4":
                        qtdIngressos = Number(prompt("informe a quantidade de ingressos desejados"));
                        valorIngresso = 330 / 4.10;
    
                        console.log(`---- DADOS DA COMPRA ---- \nNome do Cliente: ${nome} \nTipo do Jogo: ${tipoDeJogo} - Internacional \nEtapa do Jogo: ${etapaDoJogo} - Final \nCategoria: ${categoria} \nQuantidade de Ingressos: ${qtdIngressos} \n\n---- VALORES ---- \nValor do Ingresso: U$ ${valorIngresso.toFixed(2)} \nValor Total: U$ ${(valorIngresso * qtdIngressos).toFixed(2)}`);
                        break;
                                      
                    default:
                        console.log(`Categoria Inválida!`);
                        break;
                };    
                break;
            
        };
        break;
    
    default:
        console.log(`Tipo de Jogo inválido!`);
        break;
};
