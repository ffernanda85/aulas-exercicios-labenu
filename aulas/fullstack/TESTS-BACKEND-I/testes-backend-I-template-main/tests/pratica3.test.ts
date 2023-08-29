import { pratica3 } from '../src/pratica3'

describe("Testing Practice 3", () => {
    
    test("check if it receives 2 numbers and ", () => {
        expect(pratica3("abc" as any, "def" as any)).toBe(null)
    })

    test("check if returns an object with 2 sum and multiplication properties", () => {
        expect(pratica3(2, 4)).toEqual({ sum: 6, mult: 8 })
    })
   
})