import z from "zod"

export interface CreateProductInputDTO {
    id: string,
    name: string,
    price: number
}

export interface CreateProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export const CreateProductSchema = z.object({
    id: z.string({
        required_error: "Id is required",
        invalid_type_error: "Id must be of type string"
    }).min(1, "Id must be at least 01 character"),
    name: z.string({
        required_error: "name is required",
        invalid_type_error: "name must be of type string"
    }).min(2, "name must be at least 02 characters"),
    price: z.number({
        required_error: "price is required",
        invalid_type_error: "price must be of type number"
    }).positive("Price must be greater than 0")
}).transform(data => data as CreateProductInputDTO)