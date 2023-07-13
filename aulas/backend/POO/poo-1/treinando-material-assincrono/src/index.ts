import { User } from "./types";

const user1 = new User(
    "u001",
    "Flávia Fernanda da Silva Santos",
    "flavia@email",
    "flavia123"
)

const user2 = new User(
    "u002",
    "Izabela Alves Rodrigues da Silva",
    "iza@email",
    "iza123"
)

console.table([user1, user2])