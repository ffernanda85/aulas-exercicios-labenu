import { ProductBusiness } from "../../../src/business/ProductBusiness"
import { CreateProductInputDTO } from "../../../src/dtos/product/createProduct.dto"
import { BadRequestError } from "../../../src/errors/BadRequestError"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { ProductDatabaseMock } from "../../mocks/ProductDatabaseMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"

describe("Testando createProduct", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("deve retornar uma mensagem e o produto", async () => {
        const input: CreateProductInputDTO = {
            name: "fone de ouvido",
            price: 20,
            token: "token-mock-astrodev"
        }

        const output = await productBusiness.createProduct(input)
        
        expect(output).toEqual({
            message: "Produto cadastrado com sucesso",
            product: {
                id: "id-mock",
                name: "fone de ouvido",
                price: 20,
                createdAt: expect.any(String)
            }
        })
    })

    test("erro token inválido", async () => {
        expect.assertions(3)
        
        try {
            const input: CreateProductInputDTO = {
                name: "notebook",
                price: 5000,
                token: "lelele"
            }
            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error).toBeInstanceOf(BadRequestError)
            if (error instanceof BadRequestError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("token inválido")
            }
        }
    })

    test("erro de autorização", async () => {
        expect.assertions(3)

        try {
            const input: CreateProductInputDTO = {
                name: "Caneta Touch",
                price: 100,
                token: "token-mock-fulano"
            }
            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error).toBeInstanceOf(BadRequestError)
            if (error instanceof BadRequestError) {
                expect(error.message).toBe("somente admins podem acessar")
                expect(error.statusCode).toBe(400)
            }
        }
    })

})