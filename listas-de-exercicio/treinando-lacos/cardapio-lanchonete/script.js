/*
Montando cardápio de uma lanchonete utilizando If - If Else - While
*/

let pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
let pedidoBebida;

let conta = 0;
let coxinha = 0;
let enroladinho = 0;
let pastel = 0;
let bolo = 0;
let cachorroQuente = 0;
let batataFrita = 0;
let cocaCola = 0;
let fanta = 0;
let sprite = 0;
let guaranaAntartica = 0;
let sucoLaranja = 0;


while (pedidoComida) {

    if (pedidoComida === "1") {
        conta += 8.00;
        pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
        coxinha++;

    } else if (pedidoComida === "2") {
        contador = 0;
        conta += 7.00;
        pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
        enroladinho++;

    } else if (pedidoComida === "3") {
        conta += 8.30;
        pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
        pastel++

    } else if (pedidoComida === "4") {
        conta += 5.50;
        pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
        bolo++;

    } else if (pedidoComida === "5") {
        conta += 11.00;
        pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
        cachorroQuente++;

    } else if (pedidoComida === "6") {
        conta += 10.90;
        pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
        batataFrita++;

    } else if (pedidoComida === "0") {
        break;

    } else if (pedidoComida === "9") {
        pedidoBebida = prompt("Deseja pedir alguma bebida? \n0- PARA ENCERRAR O PEDIDO \n1- coca-cola \n2- fanta \n3-sprite  \n4- guaraná antartica \n5- suco de laranja");

        while (pedidoBebida) {
            
            if (pedidoBebida === "1") {
                conta += 9.00;
                cocaCola++;
                pedidoBebida = prompt("Deseja pedir mais alguma bebida? \n0- PARA ENCERRAR O PEDIDO \n1- coca-cola \n2- fanta \n3-sprite  \n4- guaraná antartica \n5- suco de laranja");

            } else if (pedidoBebida === "2") {
                conta += 8.00;
                fanta++;
                pedidoBebida = prompt("Deseja pedir mais alguma bebida? \n0- PARA ENCERRAR O PEDIDO \n1- coca-cola \n2- fanta \n3-sprite  \n4- guaraná antartica \n5- suco de laranja");

            } else if (pedidoBebida === "3") {
                conta += 8.00;
                sprite++;
                pedidoBebida = prompt("Deseja pedir mais alguma bebida? \n0- PARA ENCERRAR O PEDIDO \n1- coca-cola \n2- fanta \n3-sprite  \n4- guaraná antartica \n5- suco de laranja");

            } else if (pedidoBebida === "4") {
                conta += 8.00;
                guaranaAntartica++;
                pedidoBebida = prompt("Deseja pedir mais alguma bebida? \n0- PARA ENCERRAR O PEDIDO \n1- coca-cola \n2- fanta \n3-sprite  \n4- guaraná antartica \n5- suco de laranja");

            } else if (pedidoBebida === "5") {
                conta += 10.00;
                sucoLaranja++;
                pedidoBebida = prompt("Deseja pedir mais alguma bebida? \n0- PARA ENCERRAR O PEDIDO \n1- coca-cola \n2- fanta \n3-sprite  \n4- guaraná antartica \n5- suco de laranja");

            } else if (pedidoBebida === "0") {
                    break;
    
            } else {
                alert("Por gentileza, insira um item válido!");
                pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
            };
        };
    } else {
        alert("Por gentileza, insira um item válido!");
        pedidoComida = prompt("Deseja pedir algo mais? \n0- PARA ENCERRAR O PEDIDO  \n1- coxinha \n2- enroladinho \n3- pastel \n4- bolo \n5- cachorro-quente \n6- batata frita \n9- Escolher Bebidas");
    };
};
console.log("=============== CONSUMO CLIENTE ==================")
if (coxinha > 0) {
    console.log(`\n${coxinha} coxinha(s) --------------------- R$8.00(cada)`);
};
if (enroladinho > 0) {
    console.log(`${enroladinho} enroladinho(s) ------------------ R$7.00(cada)`);
};
if (pastel > 0) {
    console.log(`${pastel} pastel(s) ----------------------- R$8.30(cada)`);
};
if (bolo > 0) {
    console.log(`${bolo} bolo(s) ------------------------- R$5.50(cada)`);
};
if (cachorroQuente > 0) {
    console.log(`${cachorroQuente} cachorro-quente(s) -------------- R$11.00(cada)`);
};
if (batataFrita > 0) {
    console.log(`${batataFrita} batata frita(s) ------------------ R$10.90(cada)`);
};
if (cocaCola > 0) {
    console.log(`${cocaCola} coca-cola(s) ------------------- R$9.00(cada)`);
};
if (fanta > 0) {
    console.log(`${fanta} fanta(s) ------------------ R$8.00(cada)`);
};
if (sprite > 0) {
    console.log(`${sprite} sprite(s) ----------------------- R$8.00(cada)`);
};
if (guaranaAntartica > 0) {
    console.log(`${guaranaAntartica} guaraná antártica(s) ------------------ R$8.00(cada)`);
};
if (sucoLaranja > 0) {
    console.log(`${sucoLaranja} suco de laranja(s) ------------- R$10.00(cada)`);
};
console.log(`\nO valor total da sua conta -------- R$ ${conta.toFixed(2)} reais`);



//if (pedidoComida !== "1" || "2" || "3" || "4" || "5" || "6" || "0" || "N") 