import { pratica2 } from "../src/pratica2"
//Primeiro criamos o describe que vai conter os testes dentro de sua callback

describe("Testing Practice 2", () => {
    
    test("retorna true para números pares e inteiros", () => { 
        expect(pratica2(10)).toBe(true)
        expect(pratica2(11)).toBe(false)
        
    })
})