import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, students } from './database'
import { COURSE_STACK, TCourse, TStudent } from './types'

const app = express()

app.use(express.json())
app.use(cors())

//aponta para a porta 3003 para rodar o servidor
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

//pegar todos os cursos
app.get("/courses", (req: Request, res: Response) => {
    res.status(200).send(courses)
});

//pegar por name (query params)
app.get("/courses/search", (req: Request, res: Response) => {
    //pegando params

    const q = req.query.q as string

    const result = courses.filter(course => {
       return course.name.toLowerCase().includes(q.toLowerCase())
    })

       res.status(200).send(result)
})

//post criando um novo curso
app.post("/courses", (req: Request, res: Response) => {

    const id = req.body.id as string
    const name = req.body.name as string
    const lessons = req.body.lessons as number
    const stack = req.body.stack as COURSE_STACK

    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack
    }

    courses.push(newCourse)

    res.status(201).send("Curso registrado com sucesso")

})

app.get("/students", (req: Request, res: Response) => {
    res.status(200).send(students)
})

app.get("/students/search", (req: Request, res: Response) => {
    const q = req.query.q 

    const result = students.filter(student => {
        return student.name.toLowerCase().includes(q.toString().toLowerCase())
    })

    res.status(200).send(result)
})

app.post("/students", (req: Request, res: Response) => {
    const name = req.body.name as string
    const id = req.body.id as string
    const age = req.body.age as number

    const newStudent: TStudent = {
        id,
        name,
        age
    }

    students.push(newStudent)
    res.status(201).send("Estudante Registrado com Sucesso!")
})