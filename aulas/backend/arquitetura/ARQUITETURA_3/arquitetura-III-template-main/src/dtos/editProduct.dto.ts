import z from "zod"

export interface EditProductInputDTO {
    idToEdit: string,
    id?: string,
    name?: string,
    price?: number
}

export interface EditProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export const EditProductSchema = z.object({
    idToEdit: z.string({
        required_error: "IdToEdit is required",
        invalid_type_error: "IdToEdit must be of type string"
    }).min(1, "IdToEdit must be at least 01 character"),
    id: z.string({
        invalid_type_error: "Id must be of type string"
    }).min(1, "Id must be at least 01 character").optional(),
    name: z.string({
        invalid_type_error: "Name must be of type string"
    }).min(2, "Name must be at least 01 character").optional(),
    price: z.number({
        invalid_type_error: "Price must be of type number"
    }).positive("Price must be greater than 0").optional()
}).transform(data => data as EditProductInputDTO)