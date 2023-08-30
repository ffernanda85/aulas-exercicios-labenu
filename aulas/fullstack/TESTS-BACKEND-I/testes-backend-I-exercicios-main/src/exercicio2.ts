/* Crie uma função que recebe uma data no formato "aaaa/mm/dd" e retorna outra string no formato "dd/mm/aaaa".
Exemplo: a entrada "2022/09/26" gera a saída "26/09/2022"
Crie pelo menos um teste que valida sua implementação. */

export const exercicio2 = (date: string): string | null => {
    
    if (typeof date !== "string") return null

    const dateRegex = /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/
    
    if (dateRegex.exec(date) !== null) {
        
        /* if (
            date[5] === "0" &&
            date[6] === "2" &&
            date[8] === "3" &&
            date[9] === "0" ||
            date[9] === "1"
        ) return null */
        
        
        const newDate = new Date(date)
        return newDate.toLocaleDateString("pt-BR")
    } 
    return null
}