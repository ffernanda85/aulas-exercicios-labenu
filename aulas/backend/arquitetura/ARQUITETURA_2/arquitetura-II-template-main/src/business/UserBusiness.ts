import { UserDatabase } from "../database/UserDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { User } from "../models/User"
import { UserDB } from "../types"

export class UserBusiness {
    public getUsers = async (q: string | undefined) => {
        const userDatabase = new UserDatabase()
        const usersDB = await userDatabase.findUsers(q)

        const users: User[] = usersDB.map((userDB) => new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.created_at
        ))
        return users
    }

    public createUser = async (input: UserDB) => {
        const { id, name, email, password } = input

        if (typeof id !== "string") {
            throw new BadRequestError("id must be string")
        }
        if (typeof name !== "string") {
            throw new BadRequestError("name must be string")
        }
        if (typeof email !== "string") {
            throw new BadRequestError("email must be string")
        }
        if (typeof password !== "string") {
            throw new BadRequestError("password must be string")
        }
        const userDatabase = new UserDatabase()
        const userDBExists = await userDatabase.findUserById(id)

        if (userDBExists) {
            throw new BadRequestError("id already exists")
        }
        const newUser = new User(
            id,
            name,
            email,
            password,
            new Date().toISOString()
        ) // yyyy-mm-ddThh:mm:sssZ
        const newUserDB: UserDB = {
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            created_at: newUser.getCreatedAt()
        }
        await userDatabase.insertUser(newUserDB)
        const output = {
            message: "Cadastro realizado com sucesso",
            user: newUser
        }
        return output
    }
}