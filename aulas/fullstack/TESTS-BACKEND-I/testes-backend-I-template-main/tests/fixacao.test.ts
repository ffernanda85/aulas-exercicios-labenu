import { fixacao } from '../src/fixacao'

describe("testing fixation", () => {
    
    test("testing if the function returns as array of strings", () => {
        const result = fixacao("Deus")
        const expectedResult = ["D", "e", "u", "s"]

        expect(result).toEqual(expectedResult)
    })

})