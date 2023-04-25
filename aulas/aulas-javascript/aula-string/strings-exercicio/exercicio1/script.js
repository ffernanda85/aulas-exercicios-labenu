/* # Exercício 1
Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. 
Em seguida, Imprima no console a seguinte mensagem:
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
Você deve usar apenas um `console.log()` para isso
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE 
      ao invés de aspas ⇒ ````)
    - Adicionar um  `\n` na string coloca uma **quebra de linha** no texto. */
//==============================================================================
console.log('EXERCÍCIO 1');

const nomeUsuario = prompt('nome usuario');
const comidaFavorita1 = prompt('comida 1');
const comidaFavorita2 = prompt('comida 2');
const comidaFavorita3 = prompt('comida 3');

console.log(`Estas são as comidas favoritas de ${nomeUsuario.toUpperCase()}: \n- ${comidaFavorita1} \n- ${comidaFavorita2} \n- ${comidaFavorita3}`);
