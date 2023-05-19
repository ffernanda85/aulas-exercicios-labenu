const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// Crie um laço for para exibir o titulo, o ano e diretor dos filmes como uma string.

/* for (i = 0; i < filmes.length; i++) {

  for (j = 0; j < filmes[i].elenco.length; j++) {
      
    console.log(`${filmes[i].titulo}, ${filmes[i].ano}, ${filmes[i].diretor} \nTem no elenco: ${filmes[i].elenco}`);
    
  }
}; */


for (prop in filmes) {

  console.log(`${filmes[prop].titulo}, ${filmes[prop].ano}, ${filmes[prop].diretor}`)
  
  for (valor of filmes) {
    console.log(`Tem no elenco: ${filmes[prop].elenco}`)
    
  };
};

// como acessar apenas um elemento do objeto com o for in

const conta = 10;

const obj = {
  nome:'ju',
  idade: 35,
  altura:'160'
}

for(let i in obj){
  console.log(obj['idade']+conta)
}


























// =========== EXERCICIO DE FIXAÇÃO 1 ==================

const resultado1 = [2, 4, 6, 8];
const resultado2 = [1, 3, 5, 7];
const resultado3 = [0, 8, 10, 12];
const resultado4 = [9, 11, 13, 15];

const megaSena = [resultado1, resultado2, resultado3, resultado4];

if (megaSena.length === 4) {

  for (i = 0; i < megaSena.length; i++) {
 
    //for (j = 0; j < megaSena[i].length; j++) {
     // console.log(`Sorteio ${i+1}: ${megaSena[i]}`)
 
  }

} else {
 // console.log(`É necessário alterar o número de itens do array!`)
};


// =========== EXERCICIO DE FIXAÇÃO 2 ==================

if (megaSena.length === 4) {
 
  for (prop in megaSena) {
    
   // console.log(prop)
   // console.log(megaSena[prop])
    //console.log(`Sorteio ${Number(i) + 1}: ${megaSena[prop]}`)
  };
};


// =============== EXERCICIO DE FIXAÇÃO 3 =====================

if(megaSena.length === 4) {

  for (i = 0; i < megaSena.length; i++) {

    for (j of megaSena[i]) {
    //  console.log(`Sorteio ${i+1}: ${megaSena[i]}`)
    }
  }
};

// ================ PRA GUARDAR NA CABEÇA ===================