import { CourseDatabase } from "../database/CourseDatabase"
import { CreateCourseInputDTO, CreateCourseOutputDTO } from "../dtos/createCourse.dto"
import { DeleteCourseInputDTO, DeleteCourseOutputDTO } from "../dtos/deleteCourse.dto"
import { EditCourseInputDTO, EditCourseOutputDTO } from "../dtos/editCourse.dto"
import { GetCoursesInputDTO, GetCoursesOutputDTO } from "../dtos/getCourses.dto"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { CourseDB } from "../models/Course"
import { Course } from "../models/Course"

export class CourseBusiness {

  constructor(
    private courseDatabase: CourseDatabase
  ) {}

  public getCourses = async (input: GetCoursesInputDTO): Promise<GetCoursesOutputDTO[]> => {
    
    const { q } = input
    const coursesDB = await this.courseDatabase.findCourses(q)

    const courses: Course[] = coursesDB.map((courseDB) => new Course(
      courseDB.id,
      courseDB.name,
      courseDB.lessons,
      courseDB.created_at
    ))

    const output: GetCoursesOutputDTO[] = courses.map(course => ({
      id: course.getId(),
      name: course.getName(),
      lessons: course.getLessons(),
      createdAt: course.getCreatedAt()
    }))

    return output
  }

  public createCourse = async (input: CreateCourseInputDTO): Promise<CreateCourseOutputDTO> => {
    const { id, name, lessons } = input
    const courseDBExists = await this.courseDatabase.findCourseById(id)

    if (courseDBExists) {
      throw new BadRequestError("'id' já existe")
    }

    const newCourse = new Course(
      id,
      name,
      lessons,
      new Date().toISOString()
    )

    const newCourseDB: CourseDB = {
      id: newCourse.getId(),
      name: newCourse.getName(),
      lessons: newCourse.getLessons(),
      created_at: newCourse.getCreatedAt()
    }

    await this.courseDatabase.insertCourse(newCourseDB)

    const output: CreateCourseOutputDTO = {
      message: "Successfully registered course",
      course: {
        id: newCourse.getId(),
        name: newCourse.getName(),
        lessons: newCourse.getLessons(),
        createdAt: newCourse.getCreatedAt()
      }
    }

    return output
  }

  public editCourse = async (input: EditCourseInputDTO): Promise<EditCourseOutputDTO> => {

    const { idToEdit, id, name, lessons } = input
    const courseToEditDB = await this.courseDatabase.findCourseById(idToEdit)

    if (!courseToEditDB) {
      throw new NotFoundError("'id' para editar não existe")
    }

    const course = new Course(
      courseToEditDB.id,
      courseToEditDB.name,
      courseToEditDB.lessons,
      courseToEditDB.created_at
    )

    id && course.setId(id)
    name && course.setName(name)
    lessons && course.setLessons(lessons)

    const updatedCourseDB: CourseDB = {
      id: course.getId(),
      name: course.getName(),
      lessons: course.getLessons(),
      created_at: course.getCreatedAt()
    }

    await this.courseDatabase.updateCourse(idToEdit, updatedCourseDB)

    const output: EditCourseOutputDTO = {
      message: "Curso editado com sucesso",
      course: {
        id: course.getId(),
        name: course.getName(),
        lessons: course.getLessons(),
        createdAt: course.getCreatedAt()
      }
    }
    return output
  }

  public deleteCourse = async (input: DeleteCourseInputDTO): Promise<DeleteCourseOutputDTO> => {
    const { idToDelete } = input
    const courseToDeleteDB = await this.courseDatabase.findCourseById(idToDelete)

    if (!courseToDeleteDB) {
      throw new NotFoundError("'id' para deletar não existe")
    }

    const course = new Course(
      courseToDeleteDB.id,
      courseToDeleteDB.name,
      courseToDeleteDB.lessons,
      courseToDeleteDB.created_at
    )
    await this.courseDatabase.deleteCourseById(courseToDeleteDB.id)
    const output: DeleteCourseOutputDTO = {
      message: "Curso deletado com sucesso",
      course: {
        id: course.getId(),
        name: course.getName(),
        lessons: course.getLessons(),
        createdAt: course.getCreatedAt()
      }
    }
    return output
  }
}