import { exercicio2 } from "../src/exercicio2"

describe("", () => {
    
    test("if input isn't string returns null", () => {
        expect(exercicio2(202329 as any)).toBeNull()
    })

    test("if input don't match with regex returns null", () => {
        expect(exercicio2("aloha")).toBeNull()
    })

    test("if sucess returns date in format: dd/mm/aaaa", () => {
        expect(exercicio2("2023/08/29")).toBe("29/08/2023")
    })
})