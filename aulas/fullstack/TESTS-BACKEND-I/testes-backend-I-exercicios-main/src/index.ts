import { User } from "./exercicio3";

const users2: User[] = [
    { name: "Flávia", age: 38 },
    { name: "Izabela", age: 39 }
]

export const exercicio3 = (users: User[]): boolean => {
    
    const findUser: User | undefined = users.find(user => user.name === "Astrodev")

    return findUser === undefined ? false : true
}


console.log(exercicio3(users2))