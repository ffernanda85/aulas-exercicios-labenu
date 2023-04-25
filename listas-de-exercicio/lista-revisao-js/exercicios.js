// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const verificarPar = array.filter((numero) => numero % 2 === 0)
    return verificarPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numParElevadoDois = array.filter((numero) => numero % 2 === 0).map((numero) => numero = numero * numero)
    return numParElevadoDois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {// resolução com array.reduce()
    const maior = array.reduce((a, b) => Math.max(a, b), -Infinity)
    return maior

    /* let maior = -Infinity //Resolução usando for
    for (numero of array) {
        if (numero > maior) {
            maior = numero
        }
    return maior
    } */
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    maiorNumero = Math.max(num1, num2);
    menorNumero = Math.min(num1, num2);
    maiorDivisivelPorMenor = (maiorNumero % menorNumero === 0);
    diferenca = Math.abs(num1 - num2);

    const objValores = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    };
    return objValores;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPar = []
    let i = 0;

    while (n > 0) {
        const verificarPar = i % 2 === 0
        if (verificarPar) {
            arrayPar.push(i)
        }

        i += 2
        n--
    }
    return arrayPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    const verificarAb = ladoA === ladoB;
    const verificarAc = ladoA === ladoC;
    const verificarBc = ladoB === ladoC;

    if (verificarAb) {
        if (verificarAc) {
            return "Equilátero"
        } else {
            return "Isósceles"
        }
    } else if (verificarAc) {
        return "Isósceles"
    } else if (verificarBc) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    newArray = [];
    array.sort((a, b) => a - b);
    secondLarger = array[array.length - 2];
    secondMinor = array[1];
    newArray.push(secondLarger, secondMinor);

    return newArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    /* atores = [];
    for (i = 0; i < filme.atores.length; i++) {
        atores.push(` ${filme.atores[i]}`);
    };
 */
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    newObject = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return newObject
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5
    }).filter((pessoa) => {
        return pessoa.idade > 14 && pessoa.idade < 60
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    /* for (element of contas) { // utilizando dois for of
        for (values of element.compras) {
            element.saldoTotal -= values
        }
        element.compras = []
    }
    return contas */

    contas.map((element) => { //Utilizando o map
        for (values of element.compras) {
            element.saldoTotal -= values
        }     
        element.compras = []    
    })
    return contas 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const newArrayOrder = consultas.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1;
        } else {
            return true;
        }
    });
    
    return newArrayOrder
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
       
    const newArrayOrderData = consultas.sort((a, b) => {
        const dateA = a.dataDaConsulta.split("/").reverse()//essa variavel irá entrar em dataDaConsulta, através do split transformar a string em array e o reverse irá inverter a ordem do ano pela data
        const dateB = b.dataDaConsulta.split("/").reverse()
        
        if (dateA > dateB) {//verifica se a data de a é maior que a de b, caso sim retorna 1 informando que o item a precisa trocar com b, pois é maior.
            return 1;

        } else if (dateA < dateB) {//verifica se a data de a é menor que b, caso sim retorna -1 informando que o item a precisa estar na frente, pois é menor.   return -1;
            return -1
            
        } else {
            return 0
        
        }
    });
    return newArrayOrderData
}
//console.log(retornaArrayOrdenadoPorData())


