
const bool1 = false;
const bool2 = true;
const bool3 = true;

/* if (bool1){
    alert("Verdade!")
}else{
    alert("é false!")
}; */
/* 
if(bool1===bool2){
    alert("Bool1 e Bool2 são iguais!")
}else if(bool2===bool3){
    alert("Bool2 e Bool3 são iguais!")
}else if(bool1===bool3){
    alert("Bool1 e Bool3 são iguais!")
}else{
    alert("Nenhum dos valores são iguais!")
}; */

//Vamos verificar se o usuario já pode tirar seu título
// de eleitor!

const idade = Number(prompt("Qual sua idade?"));

if ( idade >= 60 || idade >= 16 && idade < 18) {
    alert("Seu título é facultativo")
} else if( idade >= 18 && idade < 60 ){
    alert("Você está apto a emitir seu titulo de eleitor!")
} else {
    alert ("Você ainda não pode emitir o titulo!")
};