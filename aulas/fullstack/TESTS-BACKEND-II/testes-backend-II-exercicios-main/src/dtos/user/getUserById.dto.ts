import z from "zod"
import { UserModel } from "../../models/User"

export interface GetUserByIdInputDTO {
    id: string,
    token: string
}

export type GetUserByIdOutputDTO = UserModel

export const GetUserByIdSchema = z.object({
    id: z.string().min(2),
    token: z.string().min(2)
}).transform(data => data as GetUserByIdInputDTO)