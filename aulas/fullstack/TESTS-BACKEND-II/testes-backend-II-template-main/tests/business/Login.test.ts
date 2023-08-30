import {UserBusiness} from "../../src/business/UserBusiness"
import {UserDatabaseMock} from "../mocks/UserDatabaseMock"
import {IdGeneratorMock} from "../mocks/IdGeneratorMock"
import {TokenManagerMock} from "../mocks/TokenManagerMock"
import {HashManagerMock} from "../mocks/HashManagerMock"
import { LoginInputDTO } from "../../src/dtos/user/login.dto"


const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe("Login Test", () => {
    
    test("Caso de sucesso", async () => {
        const input: LoginInputDTO = {
            email: "astrodev@email.com",
            password: "astrodev99"
        }
        
        const output = await userBusiness.login(input)
        expect(output).toEqual({
            message: "Login realizado com sucesso",
            token: "token-mock-astrodev"
        })
    })
})