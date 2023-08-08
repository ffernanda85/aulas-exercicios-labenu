import { Request, Response } from "express"
import { CourseBusiness } from "../business/CourseBusiness"
import { BaseError } from "../errors/BaseError"
import { CreateCourseOutputDTO, CreateCourseSchema } from "../dtos/createCourse.dto"
import { ZodError } from 'zod'
import { EditCourseOutputDTO, EditCourseSchema } from "../dtos/editCourse.dto"
import { DeleteCourseOutputDTO, DeleteCourseSchema } from "../dtos/deleteCourse.dto"
import { GetCoursesOutputDTO, GetCoursesSchema } from "../dtos/getCourses.dto"

export class CourseController {

  constructor(
    private courseBusiness: CourseBusiness
  ) {}

  public getCourses = async (req: Request, res: Response) => {
    try {
      const input = GetCoursesSchema.parse({
        q: req.query.q
      })
      
      const output: GetCoursesOutputDTO[] = await this.courseBusiness.getCourses(input)

      res.status(200).send(output)
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("Erro inesperado")
      }
    }
  }

  public createCourse = async (req: Request, res: Response) => {
    try {

      const input = CreateCourseSchema.parse({
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons
      })

      const output: CreateCourseOutputDTO = await this.courseBusiness.createCourse(input)

      res.status(201).send(output)
    } catch (error) {
      console.log(error)
      
      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("unexpected error")
      }
    }
  }

  public editCourse = async (req: Request, res: Response) => {
    try {

      const input = EditCourseSchema.parse({
        idToEdit: req.params.id,
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons
      })
      const output: EditCourseOutputDTO = await this.courseBusiness.editCourse(input)

      res.status(200).send(output)
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("unexpected error")
      }
    }
  }

  public deleteCourse = async (req: Request, res: Response) => {
    try {

      const input = DeleteCourseSchema.parse({
        idToDelete: req.params.id
      })

      const output: DeleteCourseOutputDTO = await this.courseBusiness.deleteCourse(input)

      res.status(200).send(output)
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("unexpected error")
      }
    }
  }
}