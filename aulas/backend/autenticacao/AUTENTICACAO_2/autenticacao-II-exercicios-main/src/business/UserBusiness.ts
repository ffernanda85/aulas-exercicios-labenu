import { UserDatabase } from "../database/UserDatabase"
import { GetUsersInputDTO, GetUsersOutputDTO } from "../dtos/getUsers.dto"
import { LoginInputDTO, LoginOutputDTO } from "../dtos/login.dto"
import { SignupInputDTO, SignupOutputDTO } from "../dtos/signup.dto"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { TokenPayload, USER_ROLES, User } from "../models/User"
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

    const payload: TokenPayload | null = this.tokenManager.getPayload(token)

    if (payload === null) {
      throw new BadRequestError("invalid TOKEN");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new BadRequestError("not authorization");
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
    // const { id, name, email, password } = input
    const { name, email, password } = input
    /* hasheando o password enviado */
    const hashedPassword = await this.hashManager.hash(password)
    /* Verificando se o email já está cadastrado */
    const userDBExists = await this.userDatabase.findUserByEmail(email)
    if (userDBExists) {
      throw new BadRequestError("'email' already exists")
    }
    /* Gerando ID aleatório */
    const id = this.idGenerator.generate()
    /* Criando o novo usuário */
    const newUser = new User(
      id,
      name,
      email,
      hashedPassword,
      USER_ROLES.NORMAL, // só é possível criar users com contas normais
      new Date().toISOString()
    )
    /* Modelando o novo usuário para o DB */
    const newUserDB = newUser.toDBModel()
    /* Inserindo o novo usuário, já modelado, dentro do DB */
    await this.userDatabase.insertUser(newUserDB)

    // modelagem do payload do token
    const tokenPayload: TokenPayload = {
      id: newUser.getId(),
      name: newUser.getName(),
      role: newUser.getRole()
    }

    // criação do token
    const token = this.tokenManager.createToken(tokenPayload)

    const output: SignupOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token
    }

    return output
  }

  public login = async (
    input: LoginInputDTO
  ): Promise<LoginOutputDTO> => {
    const { email, password } = input

    /* Verificando se o usuário existe no DB pelo email (unique) */
    const userDB = await this.userDatabase.findUserByEmail(email)
    if (!userDB) {
      throw new NotFoundError("'email' não encontrado")
    }

    /* Atribuindo a uma variável o valor da senha hasheada do usuário que se encontra no DB */
    const hash = userDB.password

    /* Verificando se a senha enviada confere com a do DB, através do método compare da class HashManager */
    const isPasswordMatch = await this.hashManager.compare(password, hash)
    if (!isPasswordMatch) {
      throw new BadRequestError("Email and Password don't match");
    }
    
    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
      userDB.created_at
    )

    // modelagem do payload do token
    const tokenPayload: TokenPayload = {
      id: user.getId(),
      name: user.getName(),
      role: user.getRole()
    }

    // criação do token
    const token = this.tokenManager.createToken(tokenPayload)

    const output: LoginOutputDTO = {
      message: "Login realizado com sucesso",
      token
    }

    return output
  }
}