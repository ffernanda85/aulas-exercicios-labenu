
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
    
    if (qtdeCarrosVendidos <= 0) {
        comissao = 0
    } else {
        valorCarro = valorTotalVendas / qtdeCarrosVendidos
        comissao = qtdeCarrosVendidos * (100 + (valorCarro * 0.05))
    }
    
    valorSalario = 2000 + comissao
    return valorSalario
}
   
console.log(calculaSalario(0, 0))