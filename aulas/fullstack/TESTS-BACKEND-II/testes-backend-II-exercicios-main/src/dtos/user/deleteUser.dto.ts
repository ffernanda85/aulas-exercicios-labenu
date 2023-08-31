import z from "zod"
import { UserModel } from "../../models/User"

export interface DeleteUserInputDTO {
    id: string,
    token: string
}

export interface DeleteUserOutputDTO {
    message: string,
    user: UserModel
}

export const DeleteUserSchema = z.object({
    id: z.string().min(2),
    token: z.string().min(2)
}).transform(data => data as DeleteUserInputDTO)