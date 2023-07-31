import { CourseDatabase } from "../database/CourseDatabase"
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
}