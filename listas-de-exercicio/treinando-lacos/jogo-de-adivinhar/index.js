
let novaRodada = confirm('Deseja iniciar o jogo?');


if (novaRodada) {

    let sair = 'c';
    const numberSort = 70;
    let numberUser = Number(prompt('insira um número'));

    while (sair === 'c') {
        
        if (numberUser < numberSort) {
            const maisCinco = confirm('Seu número é menor, deseja somar 5?');

            if (maisCinco) {
                numberUser += 5;
            }

        } else if (numberUser > numberSort) {
            const menosDois = confirm('Seu número é maior, deseja subtrair 2?');

            if (menosDois) {
                numberUser -= 2;
            }
        }

        if (numberUser ==! numberSort) {
            confirm(`Infelizmente você não acertou, deseja tentar novamente?`)
        }

    }

} else {
    console.log(`Jogo Encerrado!`);
}
