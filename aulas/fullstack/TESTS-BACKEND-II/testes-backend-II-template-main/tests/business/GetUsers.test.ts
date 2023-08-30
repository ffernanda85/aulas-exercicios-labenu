import {UserBusiness} from "../../src/business/UserBusiness"
import {UserDatabaseMock} from "../mocks/UserDatabaseMock"
import {IdGeneratorMock} from "../mocks/IdGeneratorMock"
import {TokenManagerMock} from "../mocks/TokenManagerMock"
import {HashManagerMock} from "../mocks/HashManagerMock"
import { LoginInputDTO } from "../../src/dtos/user/login.dto"
import { GetUsersInputDTO } from "../../src/dtos/user/getUsers.dto"
import { USER_ROLES } from "../../src/models/User"


const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe("GetAllUsers Test", () => {
    
    test("Caso de sucesso", async () => {
        const input: GetUsersInputDTO = {
            q: "",
            token: "token-mock-astrodev"
        }

        const output = await userBusiness.getUsers(input)
        expect(output).toHaveLength(2)//verificando se o tamanho do array (output) é de 2

        expect(output).toContainEqual({//verifica se contém astrodev
            id: "id-mock-astrodev",
            name: "Astrodev",
            email: "astrodev@email.com",
            createdAt: expect.any(String),
            role: USER_ROLES.ADMIN
          })
    })
    
})