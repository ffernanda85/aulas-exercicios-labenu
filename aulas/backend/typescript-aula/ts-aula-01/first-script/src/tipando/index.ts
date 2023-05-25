function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
      return frota
    }
  
    return frota.filter(
      (carro) => {
        return carro.marca === marca
      }
    )
  }