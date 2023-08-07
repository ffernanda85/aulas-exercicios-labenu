import { z } from "zod"

export interface CreateUserInputDTO {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface CreateUserOutputDTO {
    message: string,
    user: {
        id: string,
        name: string,
        email: string,
        createdAt: string
    }
}

export const CreateUserSchema = z.object({
    id: z.string({
        required_error: "ID is required",
        invalid_type_error: "ID must be of type string"
    }).min(1, "ID must have at least 01 character"),
    name: z.string({
        required_error: "NAME is required",
        invalid_type_error: "NAME must be of type string"
    }).min(2, "NAME must have at least 02 character"),
    email: z.string({
        required_error: "EMAIL is required",
        invalid_type_error: "EMAIL must be of type string"
    }).email("invalid EMAIL"),
    password: z.string({
        required_error: "PASSWORD is required",
        invalid_type_error: "PASSWORD must be of type string"
    }).min(4, "PASSWORD must have at least 04 character")
}).transform(data => data as CreateUserInputDTO)