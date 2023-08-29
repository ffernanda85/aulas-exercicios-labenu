import { exercicio1 } from '../src/exercicio1'

describe("Testando Função do Exercício 1", () => {
    
    test("se entrada não for string retorna null", () => {
        expect(exercicio1(10 as any || {} || ["1","2","3"])).toBe(null)
    })

    test("se entrada não for string de number retorna NaN", () => {
        expect(exercicio1("ola")).toBe(NaN)
    })

    test("se entrada for string, retorna number", () => {
        expect(exercicio1("50")).toBe(50)
    })

})