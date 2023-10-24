// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b
// Exemplo:

function checarDesigualdade(a, b) {
  return `No comparador de desigualdade ${a} !== ${b} é ${a !== b}`;
}
// console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
  return `No comparador de igualdade ${a} === ${b} é ${a === b}`;
}
// console.log(checarIgualdade(2, 20));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {
  return `No verifica se é maior ${a} > ${b} é ${a > b}`;
}
// console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

/* const cadastro = () => {
  const usuario = [];

  const nomeDoUsuario = prompt("nome");
  const anoDeNascimento = prompt("ano de nascimento");
  const password = prompt("senha");
  const nacionalidade = prompt("nacionalidade");

  if (new Date().getFullYear() - anoDeNascimento <= 18)
    return `Usuário menor de 18 anos`;
  if (password.length < 6)
    return `senha inválida, insira pelo menos 6 caracteres`;
  if (nacionalidade.toLowerCase() !== "brasileira")
    return `nacionalidade inválida`;

  usuario.push(nomeDoUsuario);
  usuario.push(anoDeNascimento);
  usuario.push(password);
  usuario.push(nacionalidade);

  return usuario;
}; */
// console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

/* const login = () => {
  const login = "labenu";
  const password = prompt("senha");

  if (password !== login) return `Senha Inválida`;
  return `Usuário Logado`;
}; */

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

/* const primeiraDose = () => {
  const nome = prompt("nome");
  const vacinaTomada = prompt("vacina");
  let tempo;
  let data = new Date();

  if (vacinaTomada.toLowerCase() === "coronavac") tempo = 28;
  if (
    vacinaTomada.toLowerCase() === "astrazenica" ||
    vacinaTomada.toLowerCase() === "pfizer"
  )
    tempo = 90;

  data.setDate(data.getDate() + tempo);
  const newDate = new Date(data).toLocaleString();

  return `Olá ${nome}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${newDate}.`;
};
 */ // console.log(primeiraDose())
// console.log(new Date().setUTCDate(28));
// console.log(new Date().setDate(new Date().getDay() + 28));

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

/* const segundaDose = (nomeDoUsuario) => {
  const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "incompleta" },
    { nome: "Carlos", imunizacao: "incompleta" },
  ];

  usuarios.filter((usuario) => {
    usuario.nome === nomeDoUsuario ? (usuario.imunizacao = "completa") : null;
  });

  return usuarios;
}; */
// console.log(segundaDose("Artur"));

// Exercício 7 --------------------------------------------------------------------------------------

/* const avisoAosAtrasados = () => {
  const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "completa" },
    { nome: "Carlos", imunizacao: "incompleta" },
  ];

  return usuarios
    .filter((usuario) => usuario.imunizacao === "incompleta")
    .map(
      (user) =>
        `Olá ${user.nome}! Sua imunização está ${user.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
    );
}; */
// console.log(avisoAosAtrasados());

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
  {
    nome: "Artur",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "pfizer",
    imunizacao: "incompleta",
  },
  {
    nome: "Bárbara",
    ano: 1984,
    nacionalidae: "brasileira",
    senha: "labenu",
    vacina: "astrazenica",
    imunizacao: "completa",
  },
  {
    nome: "Carlos",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "coronavac",
    imunizacao: "incompleta",
  },
];

const cadastro = () => {
  const nomeDoUsuario = prompt("nome");
  const anoDeNascimento = prompt("ano de nascimento");
  const password = prompt("senha");
  const nacionalidade = prompt("nacionalidade");

  if (new Date().getFullYear() - anoDeNascimento <= 18)
    return `Usuário menor de 18 anos`;
  if (password.length < 6)
    return `senha inválida, insira pelo menos 6 caracteres`;
  if (nacionalidade.toLowerCase() !== "brasileira")
    return `nacionalidade inválida`;

  const usuario = usuarios.find(
    (usuario) => usuario.nome.toLowerCase() === nomeDoUsuario.toLowerCase()
  );
  usuario.ano = anoDeNascimento;
  usuario.senha = password;
  usuario.nacionalidae = nacionalidade;

  return usuarios;
};
// console.log(cadastro());

const login = () => {
  const password = prompt("senha");
  const login = usuarios.find((user) => user.senha === password);

  if (!login) return `Senha Inválida`;

  return `Usuário Logado`;
};
// console.log(login());

const primeiraDose = () => {
  const result = usuarios.map((usuario) => {
    let data = new Date();
    let tempo = 0;

    if (usuario.vacina.includes("coronavac")) {
      tempo = 28;
    } else if (
      usuario.vacina.includes("astrazenica") ||
      usuario.vacina.includes("pfizer")
    ) {
      tempo = 90;
    }
    usuario.imunizacao = "incompleta";

    data.setDate(data.getDate() + tempo);
    const newDate = new Date(data).toLocaleString();

    return `Olá ${usuario.nome}! A próxima dose da ${usuario.vacina} é daqui a ${tempo} dias. Compareça no posto na data ${newDate}.`;
  });

  return result;
};
console.log(primeiraDose())

const segundaDose = (nomeDoUsuario) => {
  const user = usuarios.find((user) => {
    return user.nome.toLowerCase() === nomeDoUsuario.toLowerCase();
  });

  if (!user) {
    return `Usuário não encontrado`;
  }
  user.imunizacao = "completa";
  return usuarios;
};
console.log(segundaDose("Artur"));

const avisoAosAtrasados = () => {
    return usuarios
    .filter((usuario) => usuario.imunizacao === "incompleta")
    .map(
      (user) =>
        `Olá ${user.nome}! Sua imunização está ${user.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
    );
}
console.log(avisoAosAtrasados());
