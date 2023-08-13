import { News } from "../models/News"
import z from 'zod'

export interface EditNewsInputDTO {
    id: string
    title?: string
    description?: string
    author?: string
}

export interface EditNewsOutputDTO {
    message: string,
    news: {
        id: string,
        title: string,
        description: string,
        publishedAt: string,
        author: string
    }
}

export const EditNewsSchema = z.object({
    id: z.string().min(2),
    title: z.string().min(2).optional(),
    description: z.string().min(5).optional(),
    author: z.string().min(2).optional()
}).transform(data => data as EditNewsInputDTO)