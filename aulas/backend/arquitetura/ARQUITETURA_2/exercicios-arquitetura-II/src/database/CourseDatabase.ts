import { CourseDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CourseDatabase extends BaseDatabase{
    public static TABLE_COURSE = "courses"

    findCourses = async (name: string | undefined): Promise<CourseDB[]> => {
        let coursesDB

        if (name) {
            const result: CourseDB[] = await BaseDatabase.connection(CourseDatabase.TABLE_COURSE).where("name", "LIKE", `%${name}%`)
            
            coursesDB = result
        } else {
            const result: CourseDB[] = await BaseDatabase.connection(CourseDatabase.TABLE_COURSE)

            coursesDB = result
        }
        return coursesDB
    }

    findCourseById = async (id:string): Promise<CourseDB | undefined> => {
        const [courseDB]: CourseDB[] | undefined = await BaseDatabase.connection(CourseDatabase.TABLE_COURSE).where({ id })
       
        return courseDB
    }

    insertCourse = async (input: CourseDB): Promise<void> => {
        await BaseDatabase.connection(CourseDatabase.TABLE_COURSE).insert(input)
    }
}