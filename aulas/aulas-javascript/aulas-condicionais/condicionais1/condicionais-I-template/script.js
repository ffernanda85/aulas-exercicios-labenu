
const bool1 = false;
const bool2 = true;
const bool3 = true;

/* if(bool1) {
    alert("entrou no if!. A variavel é true!")
}else {
    alert("entrou no else. a variavel é false!")
}; */

/* if (bool1 === bool2) {
    alert("bool1 e bool2 são iguais!")
}else if (bool2 === bool3) {
    alert("bool2 e bool3 são iguais!")
}else if (bool1 === bool3){
    alert("bool1 e bool3 são iguais!")
}else {
    alert("Nenhuma das variaveis são iguais!")
}; */

/* const idade = Number(prompt("Insira sua idade"));

if (idade >= 18 && idade < 60){
    alert("Pode emitir seu titulo de eleitor!")
} else if (idade < 18 && idade >= 16 || idade >= 60){
    alert("Sua emissão é facultativa!")
}else {
    alert("Você não pode emitir seu título!")
}; */


const media = Number(prompt("insira um valor entre 0 e 10"));

if (media >= 5 && media <= 10){
    console.log("Aprovado!")
}else if(media >= 3 && media < 5){
    console.log("Recuperação!")
}else if(media >= 0 && media < 3){
    console.log("Reprovado!")
}else{
    console.log("Dado Inválido!")
};