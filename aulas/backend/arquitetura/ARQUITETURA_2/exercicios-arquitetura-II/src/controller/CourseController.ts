import { Request, Response } from "express"
import { BaseError } from "../errors/BaseError"
import { CourseBusiness } from "../business/CourseBusiness"
import { Course } from "../models/Course"
import { CourseDB } from "../types"

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

    createCourse = async (req: Request, res: Response) => {
        try {
            const input: CourseDB = {
                id: req.body.id,
                name: req.body.name,
                lessons: req.body.lessons
            } 
            const courseBusiness = new CourseBusiness()
            const newCourse = await courseBusiness.createCourse(input)
            const output = {
                message: "registered course",
                course: newCourse
            }
            res.status(201).send(output)
        } catch (error: unknown) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("unexpected error")
            }
        }
        
    }

    deleteCourseById = async (req: Request, res: Response) => {
        try {
            
            const id: string = req.params.id
            const courseBusiness = new CourseBusiness()
            const courseDeleted = await courseBusiness.deleteCourseById(id)
            const output = {
                message: "deleted course",
                courseDeleted
            }
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