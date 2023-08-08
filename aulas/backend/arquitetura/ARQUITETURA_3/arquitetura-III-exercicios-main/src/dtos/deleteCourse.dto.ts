import z from 'zod'

export interface DeleteCourseInputDTO {
    idToDelete: string
}

export interface DeleteCourseOutputDTO {
    message: string
    course: {
        id: string
        name: string
        lessons: number
        createdAt: string
    }
}

export const DeleteCourseSchema = z.object({
    idToDelete: z.string().min(1)
}).transform(data => data as DeleteCourseInputDTO)