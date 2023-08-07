import { UserDatabase } from "../database/UserDatabase"
import { CreateUserInputDTO, CreateUserOutputDTO } from "../dtos/createUser.dto"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { User, UserDB } from "../models/User"

export class UserBusiness {
  public createUser = async (input: CreateUserInputDTO): Promise<CreateUserOutputDTO> => {
    const { id, name, email, password } = input
    const userDatabase = new UserDatabase()
    const userDBExists = await userDatabase.findUserById(id)

    if (userDBExists) {
      throw new BadRequestError("'id' already exists")
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

    const output: CreateUserOutputDTO = {
      message: "Successful registration",
      user: {
        id: newUser.getId(),
        name: newUser.getName(),
        email: newUser.getEmail(),
        createdAt: newUser.getCreatedAt()
      }
    }

    return output
  }

  public getUsers = async (input: any) => {
    const { q } = input

    const userDatabase = new UserDatabase()
    const usersDB = await userDatabase.findUsers(q)

    const users: User[] = usersDB.map((userDB) => new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.created_at
    ))

    const output = users

    return output
  }

  public editUser = async (input: any) => {
    const { idToEdit, id, name, email, password } = input

    if (typeof idToEdit !== "string") {
      throw new BadRequestError("id a ser editado é obrigatório e deve ser string")
    }

    if (id !== undefined) {
      if (typeof id !== "string") {
        throw new BadRequestError("'id' deve ser string")
      }

      if (id.length < 1) {
        throw new BadRequestError("'id' deve possuir pelo menos 1 caractere")
      }
    }

    if (name !== undefined) {
      if (typeof name !== "string") {
        throw new BadRequestError("'name' deve ser string")
      }

      if (name.length < 2) {
        throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
      }
    }

    if (email !== undefined) {
      if (typeof email !== "string") {
        throw new BadRequestError("'email' deve ser string")
      }

      if (!email.includes('@')) {
        throw new BadRequestError("'email' inválido")
      }
    }

    if (password !== undefined) {
      if (typeof password !== "string") {
        throw new BadRequestError("'password' deve ser string")
      }

      if (password.length < 4) {
        throw new BadRequestError("'password' deve possuir pelo menos 4 caracteres")
      }
    }

    const userDatabase = new UserDatabase()
    const userDB = await userDatabase.findUserById(idToEdit)

    if (!userDB) {
      throw new NotFoundError("id a ser editado não existe")
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.created_at
    ) // yyyy-mm-ddThh:mm:sssZ

    id && user.setId(id)
    name && user.setName(name)
    email && user.setEmail(email)
    password && user.setPassword(password)

    const updatedUserDB: UserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      created_at: user.getCreatedAt()
    }

    await userDatabase.updateUser(idToEdit, updatedUserDB)

    const output = {
      message: "Edição realizada com sucesso",
      user: {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        created_at: user.getCreatedAt()
      }
    }

    return output
  }

  public deleteUser = async (input: any) => {
    const { idToDelete } = input

    if (typeof idToDelete !== "string") {
      throw new BadRequestError("id a ser deletado é obrigatório e deve ser string")
    }

    const userDatabase = new UserDatabase()
    const userDB = await userDatabase.findUserById(idToDelete)

    if (!userDB) {
      throw new NotFoundError("id a ser deletado não existe")
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.created_at
    ) // yyyy-mm-ddThh:mm:sssZ

    await userDatabase.deleteUserById(idToDelete)

    const output = {
      message: "Deleção realizada com sucesso",
      user: {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        created_at: user.getCreatedAt()
      }
    }

    return output
  }
}
