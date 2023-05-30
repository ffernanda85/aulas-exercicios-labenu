/* EXERCÍCIO DE FIXAÇÃO
Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui um 
autor e um text. Abaixo, temos um exemplo de array de posts em JS!

Tendo isso em mente, faça o que se pede:
*/
//1. Crie um type para representar um post;
//2. Utilize o tipo criado acima para fazer a tipagem do array posts;

import { TPost } from "../../types";

const posts: TPost[] = [
  {
    author: "Alvo Dumbledore",
    text: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    author: "Severo Snape",
    text: "Menos 10 pontos para Grifinória",
  },
  {
    author: "Hermione Granger",
    text: "É levi-ô-sa, não levio-sá!",
  },
  {
    author: "Dobby",
    text: "Dobby é um elfo livre!",
  },
  {
    author: "Lord Voldemort",
    text: "Avada Kedavra!",
  },
];

//3. Analise a função buscarPostsPorAutor, escrita em JS:
//a. Quais são as entradas e saídas dessa função?
//b. Faça a tipagem da função.


function buscarPostsPorAutor(posts: TPost[], autorInformado: string): TPost[] {
    return posts.filter(
      (post) => {
        return post.author === autorInformado
      }
    )
  }

console.table(buscarPostsPorAutor(posts, "Lord Voldemort"))