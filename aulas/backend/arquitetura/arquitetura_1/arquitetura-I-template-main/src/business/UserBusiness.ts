import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { UserDB } from "../types"

export class UserBusiness {

    getUsers = async (input: any) => {
        const userDatabase = new UserDatabase()
        const { q } = input

        const usersDB = await userDatabase.findUsers(q)

        const users: User[] = usersDB.map(user =>
            new User(
                user.id,
                user.name,
                user.email,
                user.password,
                user.created_at
            )    
        )
        return users
    }

    createUser = async (input: any) => {
        const userDatabase = new UserDatabase()
        const { id, name, email, password } = input

        if (typeof id !== "string") {
            throw new Error("'id' deve ser string")
        }
        if (typeof name !== "string") {
            throw new Error("'name' deve ser string")
        }
        if (typeof email !== "string") {
            throw new Error("'email' deve ser string")
        }
        if (typeof password !== "string") {
            throw new Error("'password' deve ser string")
        }

        const userDBExists = await userDatabase.findUserById(id)
        if (userDBExists) {
            throw new Error("ID already exists");
        }
        const newUser = new User(
            id,
            name,
            email,
            password,
            new Date().toISOString()
        )
        const newUserDB: UserDB = {
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            created_at: newUser.getCreatedAt()
        }
        await userDatabase.insertUser(newUserDB)
        const output = {
            message: "Registered user",
            newUser: newUser
        }
        return output
    }

}