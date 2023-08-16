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

    /* Validando token recebido - chamamos o método getPayload e enviamos o token recebido e ele irá verificar se o token está no DB */
    const payload: TokenPayload | null = this.tokenManager.getPayload(token)

    if (payload === null) {
      throw new BadRequestError("invalid token");
    }
    /* Garantindo que apenas ADMIN tenha acesso a esse endpoint */
    if (payload.role !== USER_ROLES.ADMIN) {
      throw new BadRequestError("ADMIN only access");
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

  public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {
    const { name, email, password } = input
    /* Gerando id pelo UUID */
    const id = this.idGenerator.generate()
    /* Verificando se o ID já existe no banco de dados, esse recurso só é necessário em aplicações muito robustas, pois o UUID gera IDs praticamente únicos */
    const userDBExists = await this.userDatabase.findUserById(id)
    if (userDBExists) {
      throw new BadRequestError("'id' já existe")
    }

    const hashedPassword = await this.hashManager.hash(password)

    const newUser = new User(
      id,
      name,
      email,
      hashedPassword,
      USER_ROLES.NORMAL, // só é possível criar users com contas normais
      new Date().toISOString()
    )

    const newUserDB = newUser.toDBModel()
    await this.userDatabase.insertUser(newUserDB)

    const payload: TokenPayload = {
      id: newUser.getId(),
      name: newUser.getName(),
      role: newUser.getRole()
    }

    const token = this.tokenManager.createToken(payload)

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

    const userDB = await this.userDatabase.findUserByEmail(email)
    if (!userDB) {
      throw new NotFoundError("'email' não encontrado")
    }

    //const hashedPassword = userDB.password
    const loginValidation = await this.hashManager.compare(password, userDB.password)

    /* if (password !== userDB.password) {
      throw new BadRequestError("'email' ou 'password' incorretos")
    } */
    if (!loginValidation) {
      throw new BadRequestError("invalid login");
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
      userDB.created_at
    )
    const payload: TokenPayload = {
      id: user.getId(),
      name: user.getName(),
      role: user.getRole()
    }
    const token = this.tokenManager.createToken(payload)

    const output: LoginOutputDTO = {
      message: "Login realizado com sucesso",
      token
    }

    return output
  }
}