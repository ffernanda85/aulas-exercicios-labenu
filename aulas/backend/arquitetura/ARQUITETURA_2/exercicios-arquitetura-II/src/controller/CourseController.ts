import { Request, Response } from "express"
import { BaseError } from "../errors/BaseError"
import { CourseBusiness } from "../business/CourseBusiness"
import { Course } from "../models/Course"

export class CourseController{
    getCourses = async (req: Request, res: Response) => {
        try {
            const name = req.query.name as string | undefined
            
            const courseBusiness = new CourseBusiness()
            const output: Course[] = await courseBusiness.getCourses(name)

            res.status(200).send(output)
        } catch (error: unknown) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("unexpected error")
            }
        }
    }
}