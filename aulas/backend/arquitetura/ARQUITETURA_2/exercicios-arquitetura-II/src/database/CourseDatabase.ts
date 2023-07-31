import { BaseDatabase } from "./BaseDatabase";

export class CourseDatabase extends BaseDatabase{
    public static TABLE_COURSE = "courses"

    findCourses = async (name: string | undefined) => {
        let coursesDB

        if (name) {
            const result = await BaseDatabase.connection(CourseDatabase.TABLE_COURSE).where("name", "LIKE", `%${name}%`)
            
            coursesDB = result
        } else {
            const result = await BaseDatabase.connection(CourseDatabase.TABLE_COURSE)

            coursesDB = result
        }
        return coursesDB
    }

    createCourse = async () => {
        
    }
}