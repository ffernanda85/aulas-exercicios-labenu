import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, students } from './database'
import { COURSE_STACK, TCourse, TStudent } from './types'

//criação do servidor express
const app = express()

//configura a saida com o formato JSON
app.use(express.json())

//habilita o cors no servidor
app.use(cors())

//vai startar nosso servidor e coloca ele para escutar a porta 3003
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

//ping
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

//getAllCourses
app.get("/courses", (req: Request, res: Response) => {
    res.status(200).send(courses)
})

//getSearchCoursesByName
app.get("/courses/search", (req: Request, res: Response) => {
    const name = req.query.name
    const result = courses.filter(course => {
        return course.name.toLowerCase().includes(name.toString().toLowerCase())
    })

    res.status(200).send(result)
})

//createNewCourse
app.post("/courses", (req: Request, res: Response) => {
    const {id, name, lessons, stack} = req.body
    
//fazendo validação do enum para STACK
    if (stack.toLowerCase() !== COURSE_STACK.BACK.toLowerCase() && stack.toLowerCase() !== COURSE_STACK.FRONT.toLowerCase()) {
        res.status(400).send("Stack Inválida!")
    }

    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack
    }
    courses.push(newCourse)

//ordenando pelo id, logo após o push
    courses.sort((a, b) => {
        if (a.id < b.id) {
            return -1
        } else if (a.id > b.id) {
            return 1
        } else {
            return 0
        }
    })

    res.status(201).send("Curso Registrado Com Sucesso!")
})

//getAllStudents
app.get("/students", (req: Request, res: Response) => {
    res.status(200).send(students)
})

//getStudentByName
app.get("/students/search", (req: Request, res: Response) => {
    const name = req.query.name

    const result = students.filter(student => {
        return student.name.toLowerCase().includes(name.toString().toLowerCase())
    })
    
    res.status(200).send(result)
})

//createStudent
app.post("/students", (req: Request, res: Response) => {
    const { id, name, age } = req.body
    
    const newStudent: TStudent = {
        id,
        name,
        age
    }
    students.push(newStudent)

    students.sort((a, b) => {
        if (a.id < b.id) {
            return -1
        } else if (a.id > b.id) {
            return 1
        } else {
            return 0
        }
    })

    res.status(201).send("Estudante Cadastrado com Sucesso!")
})
