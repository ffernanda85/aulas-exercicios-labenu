import { pratica2 } from "../src/pratica2"
//Primeiro criamos o describe que vai conter os testes dentro de sua callback

describe("Testing Practice 2", () => {
    
    test("testing insert type is number", () => { //verifica o type de entrada, se for diferente de number ele retorna null
        const result = pratica2(" dl´l´dlasd" as any)
        //expect(result).toBeNull()// verifica se é null
        //expect(result).toBe(null)
        expect(result).toEqual(null)
    })

    test("testing if input data is even", () => { //verificando paridade, caso retorne false dará erro, informando que o teste não passou na questão de paridade da função chamada dentro do result
        const result = pratica2(10)
        expect(result).toBe(true)
    })
    
})