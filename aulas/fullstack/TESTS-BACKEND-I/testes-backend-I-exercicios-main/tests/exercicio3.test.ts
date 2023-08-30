import { User, exercicio3 } from "../src/exercicio3"


describe("", () => {

    const users: User[] = [
        { name: "Flávia", age: 38 },
        { name: "Izabela", age: 39 },
        { name: "Astrodev", age: 48 }
    ]

    const users2: User[] = [
        { name: "Flávia", age: 38 },
        { name: "Izabela", age: 39 }
    ]
    
    test("if user input contains Astrodev returns true", () => {
        expect(exercicio3(users)).toBe(true)
    })

    test("if user input don't contains Astrodev returns false", () => {
        expect(exercicio3(users2)).toBe(false)
    })

})