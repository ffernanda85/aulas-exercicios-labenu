import { ZodError } from "zod"
import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginSchema } from "../../src/dtos/user/login.dto"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { NotFoundError } from "../../src/errors/NotFoundError"

describe("Testando login", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("deve gerar um token ao logar", async () => {
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

  test("erro email não é string", async () => {
    expect.assertions(2)

    try {
      const input = LoginSchema.parse({
        email: 123,
        password: "fulano123"
      })
      await userBusiness.login(input)
      
    } catch (error) {
      expect(error).toBeDefined()
      expect(error).toBeInstanceOf(ZodError)
    }
  })

  test("erro email não encontrado", async () => {
    expect.assertions(3)

    try {
      const input = LoginSchema.parse({
        email: "fulano7@email.com",
        password: "fulano123"
      })
      await userBusiness.login(input)
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundError)
      
      if (error instanceof NotFoundError) {
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("'email' não encontrado")
      }
    }
  })

})
