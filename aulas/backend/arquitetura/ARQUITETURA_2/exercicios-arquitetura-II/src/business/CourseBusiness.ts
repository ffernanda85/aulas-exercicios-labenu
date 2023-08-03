import { CourseDatabase } from "../database/CourseDatabase"
import { BadRequestError } from "../errors/BadRequestError"
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

    createCourse = async (input: CourseDB): Promise<Course> => {
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
        return newCourse
    }

    
}