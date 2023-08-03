import { CourseDatabase } from "../database/CourseDatabase"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { Course } from "../models/Course"
import { CourseDB } from "../types"

export class CourseBusiness{
    getCourses = async (name: string | undefined): Promise<Course[]>=> {
        const courseDatabase = new CourseDatabase()
        const coursesDB: CourseDB[] = await courseDatabase.findCourses(name)

        const courses = coursesDB.map(courseDB => new Course(
            courseDB.id,
            courseDB.name,
            courseDB.lessons
        ))
        return courses        
    }

    createCourse = async (input: CourseDB): Promise<{}> => {
        const { id, name, lessons } = input
        const courseDatabase = new CourseDatabase()

        if (typeof id !== "string") {
            throw new BadRequestError("id must be string")
        }
        if (typeof name !== "string") {
            throw new BadRequestError("name must be string")
        }
        if (typeof lessons !== "number" || lessons < 1) {
            throw new BadRequestError("lessons must be number and more than 1")
        }

        const courseExistDB: CourseDB | undefined = await courseDatabase.findCourseById(id)
        if (courseExistDB) {
            throw new BadRequestError("ID already exists");
        }

        const newCourse = new Course(
            id,
            name,
            lessons
        )
        const newCourseDB: CourseDB = {
            id: newCourse.getId(),
            name: newCourse.getName(),
            lessons: newCourse.getLessons()
        }

        await courseDatabase.insertCourse(newCourseDB)

        const output = {
            message: "registered course",
            course: newCourse
        }
        return output
    }

    deleteCourseById = async (id: string): Promise<{}> => {
        const courseDatabase = new CourseDatabase()
        
        const courseExistDB = await courseDatabase.findCourseById(id)
        if (!courseExistDB) {
            throw new NotFoundError("course ID not found");
        }
        const courseDeleted = new Course(
            id,
            courseExistDB.name,
            courseExistDB.lessons
        )
        await courseDatabase.deleteCourse(id)

        const output = {
            message: "deleted course",
            courseDeleted
        }
        return output
    }

    updateCourseById = async (input: CourseDB ): Promise<{}> => {
        const { id, name, lessons } = input
        const courseDatabase = new CourseDatabase()

        const courseExistDB = await courseDatabase.findCourseById(id)
        if (!courseExistDB) {
            throw new NotFoundError("course ID not found");
        }

        if (name !== undefined && typeof name !== "string") {
            throw new BadRequestError("name must be string");
        }
        if (lessons !== undefined && typeof lessons !== "number") {
            throw new BadRequestError("lessons must be number");
        }

        const updatedCourse = new Course(
            id,
            name || courseExistDB.name,
            lessons || courseExistDB.lessons
        )
        const updatedCourseDB: CourseDB = {
            id: updatedCourse.getId(),
            name: updatedCourse.getName(),
            lessons: updatedCourse.getLessons()
        }
        await courseDatabase.updateCourse(updatedCourseDB)

        const output = {
            message: "updated course",
            updatedCourse
        }
        return output
    }
}