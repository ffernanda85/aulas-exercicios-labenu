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
            
            res.status(201).send(newCourse)
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
            
            res.status(200).send(courseDeleted)
        } catch (error: unknown) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("unexpected error")
            }
        }
    }

    updateCourseById = async (req: Request, res: Response) => {
        try {
            const input: CourseDB | undefined = {
                id: req.params.id,
                name: req.body.name as string,
                lessons: req.body.lessons as number
            }
            const courseBusiness = new CourseBusiness()
            const output = await courseBusiness.updateCourseById(input)
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

}