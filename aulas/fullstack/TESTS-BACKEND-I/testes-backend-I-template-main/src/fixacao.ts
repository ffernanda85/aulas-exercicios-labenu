export const fixacao = (a: string): null | Array<string> => {
    if (typeof a !== "string") {
        return null
    }
    const result = a.split("")
    return result
}