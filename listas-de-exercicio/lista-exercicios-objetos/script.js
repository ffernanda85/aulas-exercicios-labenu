
//1. Resolva os passos a seguir:
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

const pessoa = {
    nome: "Flávia",
    apelidos: ["Flávinha", "Vinha", "Vitão"]
};

const funcaoApelidos = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`);
};
//funcaoApelidos(pessoa);


//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const newObject = {
    ...pessoa,
    apelidos: ["Benhê", "Filha", "Amor"]
};

//funcaoApelidos(newObject);


//=======================================================================

//2. Resolva os passos a seguir:
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const dadosPessoais = {
    nome: "Flávia",
    idade: 37,
    profissao: "Estudante"
};

const dadosPessoais2 = {
    nome: "Izabela",
    idade: 39,
    profissao: "Empresária"
};

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//    1. O valor de `nome`
//    2. O numero de caracteres do valor `nome`
//    3. O valor de `idade`
//    4. O valor de `profissão`
//    5. O numero de caracteres do valor `profissão`

const funcaoDadosPessoais = (objeto1, objeto2) => {
    array1 = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length];
    array2 = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length];

    return (`${array1} \n${array2}`);
};

//console.log(funcaoDadosPessoais(dadosPessoais, dadosPessoais2));

//=======================================================================

//3. Resolva os passos a seguir:
//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = [];

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const frutaSacolao1 = {
    nome: "melancia",
    disponibilidade: false
};

const frutaSacolao2 = {
    nome: "banana",
    disponibilidade: true
};

const frutaSacolao3 = {
    nome: "manga",
    disponibilidade: true
};

//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

/* const funcaoFrutas = (objetoFruta) => {
    carrinho.push(objetoFruta);
};

funcaoFrutas(frutaSacolao1);
funcaoFrutas(frutaSacolao2);
funcaoFrutas(frutaSacolao3);
 */
//d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

console.log(carrinho)

for (i in carrinho) {
    console.log(Number(i) + 1, carrinho[i].nome, carrinho[i].disponibilidade);
};

//======================== DESAFIO 1 ===================================
//1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

const userData = () => {
    nomeUser = prompt('qual seu nome?');
    idadeUser = Number(prompt('qual sua idade?'));
    profissaoUser = prompt('qual sua profissão?');

    objUserData = {
        nome: nomeUser,
        idade: idadeUser,
        profissao: profissaoUser
    };

    console.log(objUserData);
    console.log(typeof objUserData);
};
//userData();



// ========================= DESAFIO 2 =================================
//2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

//O primeiro filme foi lançado antes do segundo? false
//O primeiro filme foi lançado no mesmo ano do segundo? true

const funcaoObjFilmes = (objeto1, objeto2) => {

    return (`${objFilmes1.nome} foi lançado antes do ${objFilmes2.nome}? ${objeto1.anoDelancamento - objeto2.anoDelancamento < 0} \n${objFilmes1.nome} foi lançado no mesmo ano do ${objFilmes2.nome}? ${objeto1.anoDelancamento === objeto2.anoDelancamento}`);
};

const objFilmes1 = {
    nome: "A morte da bezerra",
    anoDelancamento: 1985
};

const objFilmes2 = {
    nome: "A ida dos que não foram",
    anoDelancamento: 2010
};

console.log(funcaoObjFilmes(objFilmes1, objFilmes2));

// ====================== DESAFIO 3 =====================================
//3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido.

const funcaoFrutas = (objetoFruta) => {
    objetoFruta.disponibilidade = !objetoFruta.disponibilidade;
    return objetoFruta;
};

console.log(funcaoFrutas(frutaSacolao1));



