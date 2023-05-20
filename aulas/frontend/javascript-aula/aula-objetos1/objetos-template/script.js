
const estudante = {
    nome: "Flávia", //string
    sobrenome: "Fernanda", //string
    numeroMatricula: 1234, //number
    notasDoSemestre: [8,10] //array
};

estudante.modulo = "JavaScript";

/* console.log(estudante.nome);
console.log(estudante.notasDoSemestre[1]);
console.log(estudante.modulo[0]);
 */

const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasDoSemestre: [...estudante.notasDoSemestre, 9],
    modulo: "HTML"
};

//console.log(estudante);
//console.log(novoEstudante);


//criando um array e colocando os objetos diretamente nele:
//const estudantesLabenu = [estudante, novoEstudante];

//criando um array e se utilizando do push para inserir
//os objetos dentro dessa array:
const estudantesLabenu = [];
estudantesLabenu.push(estudante);
estudantesLabenu.push(novoEstudante);

/* console.log(estudantesLabenu);//Objetos dentro de um array
console.log(estudantesLabenu[0]);//Imprimindo 1º objeto do array
console.log(estudantesLabenu[1]);//Imprimindo 2º objeto do array
console.log(estudantesLabenu[1].nome);//Imprimindo o valor do nome do 1º array
console.log(estudantesLabenu[0].nome); */

const meuObjeto = {
    nome:"Flávia",
    idade: 37,
    carros: [
        {marca: "fiat", modelo:"uno vivace"},
        {marca: "fiat", modelo:"toro"},
        {marca: "bmw", modelo:"x6"},
    ]
}

//console.log(meuObjeto.carros[0].modelo+',', meuObjeto.carros[1].modelo+",", meuObjeto.carros[2].modelo);

const carrinho = {
    nome: "Flávia",
    formaPagamento: "crédito",
    endereco: "rua Belo Horizonte,42 - ap 101"
};

carrinho.compras = [
    {nome:"Smart TV 60'", preco: 3000, quantidade:1},
    {nome:"Fiat toro", preco: 80000, quantidade:1},
    {nome:"Mix", preco: 250, quantidade:3}
];

console.log(carrinho.compras.length);

carrinhoPresente = {
    ...carrinho,
    nome: "Izabela",
    formaPagamento: "Cartão Presente"
};
console.log(carrinhoPresente);
console.log(carrinhoPresente.nome);
console.log(carrinhoPresente.compras[1].nome,',',carrinhoPresente.compras[1].preco);