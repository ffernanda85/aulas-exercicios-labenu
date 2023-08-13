import z from 'zod'
import { News } from '../models/News'

export interface CreateNewsInputDTO {
    title: string,
    description: string,
    author: string
}

export interface CreateNewsOutputDTO {
    message: string,
    news: News 
}

export const CreateNewsSchema = z.object({
    title: z.string().min(2),
    description: z.string().min(5),
    author: z.string().min(2)
}).transform(data => data as CreateNewsInputDTO)