import { ZodError } from "zod"
import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserSchema } from "../../src/dtos/user/deleteUser.dto"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { assert } from "console"

describe("Testando deleteUser", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("deve deletar user", async () => {
    const input = DeleteUserSchema.parse({
      idToDelete: "id-mock-fulano",
      token: "token-mock-fulano"
    })
    const output = await userBusiness.deleteUser(input)
    expect(output).toEqual({
      message: "Deleção realizada com sucesso"
    })
  })

  test("erro com token vazio", async () => {
    expect.assertions(2)
   
    try {
      const input = DeleteUserSchema.parse({
        idToDelete: "id-mock-fulano",
        token: ""
      })
      await userBusiness.deleteUser(input)
    } catch (error) {
      console.log(error);
      expect(error).toBeDefined()
      expect(error instanceof ZodError).toBe(true)
    }
  })

  test("erro com token inválido", async () => {
    expect.assertions(3)
    
    try {
      const input = DeleteUserSchema.parse({
        idToDelete: "id-mock-fulano",
        token: "lalala"
      })
      await userBusiness.deleteUser(input)
    } catch (error) {
      console.log(error);
      expect(error).toBeDefined()
      expect(error instanceof BadRequestError).toBe(true)
      if (error instanceof BadRequestError)
        expect(error.message).toBe("token inválido")
    }
  })

  test("usuário inválido", async () => {
    expect.assertions(4)
    
    try {
      const input = DeleteUserSchema.parse({
        idToDelete: "id-mock-fulano",
        token: "token-mock-astrodev"
      })
      await userBusiness.deleteUser(input)
    } catch (error) {
      expect(error).toBeDefined()
      expect(error instanceof BadRequestError).toBe(true)
      if (error instanceof BadRequestError) {
        expect(error.message).toBe("somente quem criou a conta pode deletá-la")
        expect(error.statusCode).toBe(400)
      }
    }
  })
})
