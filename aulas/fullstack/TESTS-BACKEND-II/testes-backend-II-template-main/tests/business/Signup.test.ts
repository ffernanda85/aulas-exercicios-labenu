import {UserBusiness} from "../../src/business/UserBusiness"
import {UserDatabaseMock} from "../mocks/UserDatabaseMock"
import {IdGeneratorMock} from "../mocks/IdGeneratorMock"
import {TokenManagerMock} from "../mocks/TokenManagerMock"
import {HashManagerMock} from "../mocks/HashManagerMock"
import { SignupInputDTO } from "../../src/dtos/user/signup.dto"


const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe("Testando Signup", () => {
    
    test("Caso de sucesso", async () => {
        const input: SignupInputDTO = {
            name: "Ciclano",
            email: "ciclano@email.com",
            password: "ciclano123"
        }

        const output = await userBusiness.signup(input)

        expect(output).toEqual({
            message: "Cadastro realizado com sucesso",
            token: "token-mock"
        })
    })


})