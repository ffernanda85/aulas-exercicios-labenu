import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserInputDTO } from "../../src/dtos/user/deleteUser.dto"
import { GetUserByIdInputDTO } from "../../src/dtos/user/getUserById.dto"
import { USER_ROLES, UserModel } from "../../src/models/User"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe("Testing GetUserById", () => {
    
    test("Caso de sucesso", async () => {
        const input: GetUserByIdInputDTO = {
            id: "id-mock-fulano",
            token: "token-mock-fulano"
        }

        const output = await userBusiness.getUserById(input)

        expect(output).toEqual({
            id: "id-mock-fulano",
            name: "Fulano",
            email: "fulano@email.com",
            role: USER_ROLES.NORMAL,
            createdAt: expect.any(String)
        })
    })

})