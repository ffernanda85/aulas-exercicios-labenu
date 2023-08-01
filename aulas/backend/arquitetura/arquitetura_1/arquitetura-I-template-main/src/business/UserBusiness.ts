import { UserDatabase } from "../database/UserDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { User } from "../models/User"
import { UserDB, UserDBPost } from "../types"

export class UserBusiness {

    getUsers = async (q: string | undefined): Promise<User[]> => {
        const userDatabase = new UserDatabase()
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

    createUser = async (input: UserDBPost): Promise<UserDB> => {
        const userDatabase = new UserDatabase()
        const { id, name, email, password } = input

        if (typeof id !== "string") {
            throw new BadRequestError("'id' must be string")
        }
        if (typeof name !== "string") {
            throw new BadRequestError("'name' must be string")
        }
        if (typeof email !== "string") {
            throw new BadRequestError("'email' must be string")
        }
        if (typeof password !== "string") {
            throw new BadRequestError("'password' must be string")
        }

        const userDBExists = await userDatabase.findUserById(id)
        if (userDBExists) {
            throw new BadRequestError("ID already exists");
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
        
        return newUserDB
    }
}