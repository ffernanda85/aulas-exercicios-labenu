import { pratica3 } from '../src/pratica3'

describe("Testing Practice 3", () => {
    
    test("check if it receives 2 numbers and returns an object with 2 sum and multiplication properties", () => {
        const result = pratica3(3, 5)
        const expectedResult = {
            soma: 8,
            mult: 15
        }
        expect(result).toEqual(expectedResult)
    })

    test("check type number", () => {
        
    })

})