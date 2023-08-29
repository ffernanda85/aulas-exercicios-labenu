import { pratica2 } from "../src/pratica2"
//Primeiro criamos o describe que vai conter os testes dentro de sua callback

describe("Testing Practice 2", () => {
    
    test("se for par retorna true", () => { 
        expect(pratica2(10)).toBe(true)
    })

    test("se impar retorna false", () => {
        expect(pratica2(11)).toBe(false)
    })

    test("se não inteiro retorna null", () => {
        expect(pratica2(10.2)).toBeNull()
    })

    test("se não for number retorna null", () => {
        expect(pratica2("10" as any)).toBeNull()
    })

    test("se receber um array ou um objeto retorna null", () => {
        expect(pratica2([1, 2, 3] as any || {})).toBe(null)
    })
})