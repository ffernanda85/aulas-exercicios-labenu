import { UserDatabase } from "../database/UserDatabase"
import { DeleteUserInputDTO, DeleteUserOutputDTO } from "../dtos/user/deleteUser.dto"
import { GetUserByIdInputDTO, GetUserByIdOutputDTO } from "../dtos/user/getUserById.dto"
import { GetUsersInputDTO, GetUsersOutputDTO } from "../dtos/user/getUsers.dto"
import { LoginInputDTO, LoginOutputDTO } from "../dtos/user/login.dto"
import { SignupInputDTO, SignupOutputDTO } from "../dtos/user/signup.dto"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { TokenPayload, USER_ROLES, User, UserDB } from "../models/User"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private tokenManager: TokenManager,
    private hashManager: HashManager
  ) { }

  public getUsers = async (
    input: GetUsersInputDTO
  ): Promise<GetUsersOutputDTO> => {
    const { q, token } = input

    const payload = this.tokenManager.getPayload(token)

    if (payload === null) {
        throw new BadRequestError("token inválido")
    } 

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new BadRequestError("somente admins podem acessar")
    }

    const usersDB = await this.userDatabase.findUsers(q)

    const users = usersDB.map((userDB) => {
      const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role,
        userDB.created_at
      )

      return user.toBusinessModel()
    })

    const output: GetUsersOutputDTO = users

    return output
  }

  public signup = async (
    input: SignupInputDTO
  ): Promise<SignupOutputDTO> => {
    const { name, email, password } = input

    const id = this.idGenerator.generate()
    const hashedPassword = await this.hashManager.hash(password)

    const newUser = new User(
      id,
      name,
      email,
      hashedPassword,
      USER_ROLES.NORMAL,
      new Date().toISOString()
    )

    const newUserDB = newUser.toDBModel()
    await this.userDatabase.insertUser(newUserDB)

    const tokenPayload: TokenPayload = {
      id: newUser.getId(),
      name: newUser.getName(),
      role: newUser.getRole()
    }

    const token = this.tokenManager.createToken(tokenPayload)

    const output: SignupOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token: token
    }

    return output
  }

  public login = async (
    input: LoginInputDTO
  ): Promise<LoginOutputDTO> => {
    const { email, password } = input

    const userDB = await this.userDatabase.findUserByEmail(email)

    if (!userDB) {
      throw new NotFoundError("'email' não encontrado")
    }

    const hashedPassword = userDB.password

    const isPasswordCorrect = await this.hashManager.compare(password, hashedPassword)

    if (!isPasswordCorrect) {
      throw new BadRequestError("'email' ou 'password' incorretos")
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
      userDB.created_at
    )

    const tokenPayload: TokenPayload = {
      id: user.getId(),
      name: user.getName(),
      role: user.getRole()
    }

    const token = this.tokenManager.createToken(tokenPayload)

    const output: LoginOutputDTO = {
      message: "Login realizado com sucesso",
      token: token
    }

    return output
  }

  public deleteUser = async (input: DeleteUserInputDTO): Promise<DeleteUserOutputDTO> => {
    const { id, token } = input

    const payload: TokenPayload | null = this.tokenManager.getPayload(token)
    if(payload === null) throw new BadRequestError("Invalid token");
    
    const userDB: UserDB | undefined = await this.userDatabase.findUserById(id)
    if (!userDB) throw new NotFoundError("ID not found");

    if(payload.id !== userDB.id && payload.role !== USER_ROLES.ADMIN) throw new BadRequestError("unauthorized user");
    
    const userDeleted = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
      userDB.created_at
    )
    await this.userDatabase.deleteUserById(id)
    const user = userDeleted.toBusinessModel()
    
    const output: DeleteUserOutputDTO = {
      message: "Deleted user",
      user
    }

    return output
  }

  public getUserById = async (input: GetUserByIdInputDTO): Promise<GetUserByIdOutputDTO> => {
    const { id, token } = input

    const payload: TokenPayload | null = this.tokenManager.getPayload(token)
    if(payload === null) throw new BadRequestError("Invalid token");
    
    const userDB: UserDB | undefined = await this.userDatabase.findUserById(id)
    if (!userDB) throw new NotFoundError("ID not found");
    
    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
      userDB.created_at
    )
    const output: GetUserByIdOutputDTO = user.toBusinessModel()
    
    return output
  }
}