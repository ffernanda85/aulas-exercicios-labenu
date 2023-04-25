//==================== EXERCICIO 2 =============================================================

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
//=========================================================================================

console.log('RESOLUÇÃO EXERCICIO 2');
console.log('\nLetra a)');


//a) Qual o código para imprimir o nome do **primeiro** 
//ator/atriz?

console.log(`Código acessar 1º ator é: console.log(filme.elenco[0]);`)
console.log(`\nO 1º ator é: ${filme.elenco[0]}`);

//========================================================================================
console.log('\nLetra b)');
//b) Qual o código para imprimir o nome do **último** ator/atriz?

//acessando o ultimo elemento do array dentro do objeto atribuindo a uma constante
//const ultimoAtor = filme.elenco.length-1;
//console.log(filme.elenco[ultimoAtor])

//fazendo de forma direta
console.log(`Código acessar último ator: console.log(filme.elenco[filme.elenco.length-1])`);
console.log(`\nO último ator é: ${filme.elenco[filme.elenco.length-1]}`);

//========================================================================================
console.log('\nLetra c)');
//c) Qual código para exibir o array com **todas** as transmissões 
//de hoje?

console.log(filme.transmissoesHoje);

//========================================================================================
console.log('\nLetra d)');
//d) Qual o código para exibir o **horário** de transmissão do filme 
//no `Canal Brasil`?

console.log(filme.transmissoesHoje[1].horario);
