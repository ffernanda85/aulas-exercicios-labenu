import { fixacao } from '../src/fixacao'

describe("testing fixation", () => {
    const a: string = "Deus"
    const expectedResult: string[] = ["D", "e", "u", "s"]
    test("testing if return null if input is not a string", () => {
        expect(fixacao(2 as any)).toBe(null)
    })

    test("testing if the function returns as array of strings", () => {
        expect(fixacao(a)).toEqual(expectedResult)
    })

})