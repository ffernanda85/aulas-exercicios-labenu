//=========== EXERCÍCIO 1 ================================
console.log('RESOLUÇÃO EXERCICIO 1');
console.log('\nLetra a)');

//Crie um array vazio chamado `sacolao`
sacolao = [];

/*a) Crie 03 objetos que vão representar frutas do sacolão.
Os objetos devem ter as seguintes propriedades: 
nome: string;
preco: number;
disponibilidade: boolean; */

const fruta1 = {
    nome:"laranja",
    preco: 5.00,
    disponibilidade: true
};
const fruta2 = {
    nome:"banana",
    preco: 4.00,
    disponibilidade: true
};
const fruta3 = {
    nome:"melancia",
    preco: 2.98,
    disponibilidade: true
};
//console.log(fruta1.nome+', '+fruta2.nome+', '+fruta3.nome);
console.log(`Os 3 objetos criados para as frutas são: ${fruta1.nome}, ${fruta2.nome} e ${fruta3.nome}`);

//=========================================================================================================
//b) Adicione os objetos ao array `sacolao` utilizando 
//o método **`push()`**
console.log('\nLetra b)');

sacolao.push(fruta1,fruta2,fruta3);//adicionando os objetos com push
console.log(sacolao);

//=========================================================================================================
console.log('\nLetra c)');
//c) Imprima o array `sacolao`, e certifique-se de que agora 
//ela seja um array **com três objetos** */
console.log(`Quantos itens tem no sacolão? ${sacolao.length}`);

