


const meuArray = [6, 25, 12, 13, 97, 312, -12];
console.log("exemplo com for of")
for(let elemento of meuArray){
  console.log(elemento);
}

console.log("exemplo com for in")
for(let indice in meuArray){
    console.log(`${indice} - ${meuArray[indice]}`)
    //console.log(indice);
    //console.log(meuArray[indice])
}

console.log("Usando for in com objetos");

const meuObj={
  nome: "Charmander",
  tipo: "Fire",
  hp: 40
}
for(let chave in meuObj){
    console.log(chave);
  }

  
//Crie um programa que deseje parabéns para os aniversariantes do dia.
//Você pode utilizar while primeiro e depois for

const aniversariantes = ["Flávia", "Izabela", "Fernanda"];

for (i = 0; i < aniversariantes.length; i++) {
    console.log(`Parabéns, ${aniversariantes[i]}`);
};

for (index in aniversariantes) {
    console.log(`Parabéns, ${aniversariantes[index]}`);
};

let j = 1;

for (aniversario of aniversariantes) {
    console.log(`${j} - Parabéns, ${aniversario}`);
    j++;
};








// A Jessica recebe 100 reais de mesada todo mês, mas sempre gasta tudo.
// Ela quer comprar um novo celular que custa R$ 1000 reais, mas seus pais disseram
// que ela precisa guardar sua mesada até atingir o valor do celular.
// - Crie uma variavel somaTotal recebendo o valor 0
// - Use o while para fazer um loop e atigir 3 mil, guardando 100 reais por vez.
// - Mostre o valor a cada rodada do loop e fora do loop mostre uma mensagem dizendo que o valor total foi atingido

let mesada = 0;

while (mesada < 1000) {
    mesada += 100;
    console.log("valor temporário =", mesada);
};
console.log('Parabéns, você conseguiu juntar os', mesada);


//Você abriu conta-poupança Labebank e quer guardar valores nessa conta.
//Utilize o While para fazer o programa abaixo!
//Crie uma variavel saldo com o valor de R$ 10, 00 e mostre no console
//Pergunte ao usuário quanto ele(a) quer depositar na conta.
// Mostre no console o valor depositado
// Mostre no console o valor a soma total - saldo + deposito
//Pergunte ao usuário se ele quer depositar mais algum valor, se sim, digitar o valor, se não, clique em cancelar no próprio prompt
//mostre fora do escopo o novo extrado com o saldo total


let saldo = 10;

let deposito = Number(prompt('Quanto deseja depositar?'));

while (deposito) {
    saldo += deposito
    console.log(`Valor depósito = R$${deposito}`);
    console.log(`Saldo Atual = R$${saldo}`);
    deposito = Number(prompt('Deseja depositar?'));
}
console.log(`Saldo Atualizado = R$${saldo}`);