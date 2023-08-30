/* Crie uma lista de usuários (você decide quais propriedades existem na sua tipagem) e desenvolva um teste garantindo que o Astrodev está presente nessa lista.
Crie pelo menos um teste que valida sua implementação. */

export interface User {
    name: string,
    age: number
}

export const exercicio3 = (users: User[]): boolean => {
    
    const findUser: User | undefined = users.find(user => user.name === "Astrodev")

    return findUser === undefined ? false : true
}
