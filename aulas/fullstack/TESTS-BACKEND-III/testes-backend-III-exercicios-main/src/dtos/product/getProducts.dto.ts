import z from "zod"
import { ProductModel } from "../../models/Product"

export interface GetProductsInputDTO {
  q: string,
  token: string
}

export type GetProductsOutputDTO = ProductModel[]

export const GetProductsSchema = z.object({
  q: z.string().min(1).optional(),
  token: z.string().min(1)
}).transform(data => data as GetProductsInputDTO)