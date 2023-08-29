export const pratica3 = (a: number, b: number): null | {sum: number, mult: number} => {
    if (typeof a !== "number" || typeof b !== "number") {
        return null
    }
    
    return {
        sum: a + b,
        mult: a * b
    }
}