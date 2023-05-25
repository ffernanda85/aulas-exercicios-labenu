import { TCarro, frota } from "./frota"


function buscarCarrosPorMarca(frota: TCarro[], marca?: string) {
    if (marca === undefined) {
      return frota
    }
  
    return frota.filter(
      (carro) => {
        return carro.marca === marca
      }
    )
}

console.log(buscarCarrosPorMarca(frota, "Fiat"));
console.log(buscarCarrosPorMarca(frota));