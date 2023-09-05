import { any } from 'zod'
import { ProductBusiness } from '../../../src/business/ProductBusiness'
import { GetProductsInputDTO } from '../../../src/dtos/product/getProducts.dto'
import { IdGeneratorMock } from '../../mocks/IdGeneratorMock'
import { ProductDatabaseMock } from '../../mocks/ProductDatabaseMock'
import { TokenManagerMock } from '../../mocks/TokenManagerMock'
import { BadRequestError } from '../../../src/errors/BadRequestError'

describe("Testando getProducts", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock()
  )

  test("deve retornar uma lista de produtos", async () => {
    const input: GetProductsInputDTO = {
      q:'',
      token: 'token-mock-fulano'
    }

    const output = await productBusiness.getProducts(input)
    expect(output).toHaveLength(2)
    expect(output).toEqual([
      {
        id: 'p001',
        name: 'Mouse',
        price: 50,
        createdAt: expect.any(String)
      },
      {
        id: 'p002',
        name: 'Teclado',
        price: 80,
        createdAt: expect.any(String)
      }
    ])
  })

  test("deve retornar uma lista de produtos filtrados", async () => {
    const input: GetProductsInputDTO = {
      q:'t',
      token: 'token-mock-fulano'
    }
    const output = await productBusiness.getProducts(input)
    expect(output).toHaveLength(1)
    expect(output).toEqual([
      {
        id: 'p002',
        name: 'Teclado',
        price: 80,
        createdAt: expect.any(String)
      }
    ])
  })

  test("retorna erro de token inválido", async () => {
    expect.assertions(3)

    try {
      const input: GetProductsInputDTO = {
        q: '',
        token: 'token-mock-'
      }
      await productBusiness.getProducts(input)
      
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestError)
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("token inválido")
      }
    }
  })
  
})