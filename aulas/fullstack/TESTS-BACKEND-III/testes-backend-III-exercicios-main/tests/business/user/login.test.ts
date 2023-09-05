import { UserBusiness } from "../../../src/business/UserBusiness"
import { LoginInputDTO, LoginSchema } from "../../../src/dtos/user/login.dto"
import { BadRequestError } from "../../../src/errors/BadRequestError"
import { NotFoundError } from "../../../src/errors/NotFoundError"
import { HashManagerMock } from "../../mocks/HashManagerMock"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../../mocks/UserDatabaseMock"

describe("Testando login", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("deve gerar token ao logar", async () => {
    const input = LoginSchema.parse({
      email: "fulano@email.com",
      password: "fulano123"
    })

    const output = await userBusiness.login(input)

    expect(output).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-fulano"
    })
  })

  test("retorna erro email não encontrado", async () => {
    expect.assertions(4)
    try {
      const input: LoginInputDTO = {
        email: "fulano2@email.com",
        password: "fulano123"
      }
  
      await userBusiness.login(input)
    } catch (error) {
      expect(error).toBeDefined()
      expect(error).toBeInstanceOf(NotFoundError)
      if (error instanceof NotFoundError) {
        expect(error.message).toBe("'email' não encontrado")
        expect(error.statusCode).toBe(404)
      }
    }
  })

  test("retorna erro email ou password incorretos", async () => {
    expect.assertions(4)
    try {
      const input: LoginInputDTO = {
        email: "fulano@email.com",
        password: "fulano1230"
      }
      await userBusiness.login(input)
    } catch (error) {
      expect(error).toBeDefined()
      expect(error).toBeInstanceOf(BadRequestError)
      if (error instanceof BadRequestError) {
        expect(error.message).toBe("'email' ou 'password' incorretos")
        expect(error.statusCode).toBe(400)
      }
    }
  })

})