
//const idadeDependente = Number(prompt('Solicitação de dependente \n Qual a idade do dependente?'));

//um ifs dentro de ifs (aninhada)

/* if(idadeDependente >= 13){
    if(idadeDependente < 18){
        console.log('Seu dependente já pode ter um cartão vinculado ao seu.');
    }else {
        console.log('O dependente já pode ter o seu próprio cartão!');
    }

}else {
    console.log('Consulte outras possibilidade do Labank');
};
 */


/* ifs dentro de ifs utilizando operadores lógicos:

if(idadeDependente >= 13 && idadeDependente < 18){
    console.log('Seu dependente já pode ter um cartão vinculado ao seu.');
}else if (idadeDependente > 17){
    console.log('O dependente já pode ter seu próprio cartão!')
}else {
    console.log('Consulte outras possibilidades do Labank!')
}
 */


/* idadeDependente === 13 ?
    console.log('A idade do dependente é 13 e ele já pode ter um cartão.') 
    : 
    console.log('Consulte outras possibilidades!'); */



/* const escolhaCartao = Number(prompt('Solicitação de Cartão de Crédito \nDigite a opção desejada: \n1- Fácil \n2- Black \n3- Platinum \n4- MasterGold'));

switch (escolhaCartao) {
    case 1:
        console.log('cartão facil adquirido!')
        break
    case 2:
        console.log('cartão black adquirido!')
        break
    case 3:
        console.log('cartão Platinum adquirido!')
        break
    case 4:
        console.log('cartão MasterGold adquirido!')
        break
    default:
        console.log('Escolha apenas uma das quatro opções disponiveis!')

} */

/* const idade = prompt('idade');

if (idade >= 18) {

    const escolhaCartao = Number(prompt('Solicitação de Cartão de Crédito \nDigite a opção desejada: \n1- Fácil \n2- Black \n3- Platinum \n4- MasterGold'))

    switch (escolhaCartao){
        case 1:
            console.log('cartão facil adquirido!')
            break
        case 2:
            console.log('cartão black adquirido!')
            break
        case 3:
            console.log('cartão Platinum adquirido!')
            break
        case 4:
            console.log('cartão MasterGold adquirido!')
            break
        default:
            console.log('Escolha apenas uma das quatro opções disponiveis!')
    }
        
}else {
    console.log('Usuário menor de idade, consulte outras possibilidades!');
} */

const num = Number(prompt('Insira um número'));

/* if (num % 2 === 0){
    //console.log('num é divisivel por 2')
    if (num % 3 === 0){
        console.log('num é divisivel por 2 e por 3')
    }else {
        console.log('num é divisivel por 2, mas não é divisivel por 3')
    }
}else {
    console.log('num não é divisivel por 2');
} */

if ((num % 2 === 0) && (num % 3 === 0)) {
    console.log(`${num} é divisivel por 2 e 3.`)
    /* num === 30 ? 
    console.log('UFA ACERTEI!') 
    :
    console.log('Não foi dessa vez :(') */
    switch (num) {
        case 6:
            console.log('O número inserido é 6!');
            break;
        case 12:
            console.log('O número inserido é 12!');
            break;
        case 18:
            console.log('O número inserido é 18!');
            break;
        case 24:
            console.log('O número inserido é 24!');
            break;
        case 30:
            console.log('O número inserido é 30!');
            break;
        default:
            console.log('O número inserido é maior que 30!');
    }
} else {
    console.log(`${num} não é divisivel por 2 e 3!`);
};