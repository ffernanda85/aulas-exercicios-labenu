import z from "zod"
import { ProductModel } from "../../models/Product"

export interface CreateProductInputDTO {
  name: string,
  price: number,
  token: string
}

export interface CreateProductOutputDTO {
  message: string,
  product: ProductModel
}

export const CreateProductSchema = z.object({
  name: z.string().min(2),
  price: z.number().gt(0),
  token: z.string().min(1)
}).transform(data => data as CreateProductInputDTO)