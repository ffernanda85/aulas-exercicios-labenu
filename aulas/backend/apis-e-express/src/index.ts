import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses } from './database'
import { TCourse } from './types'

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

    const id = req.body.id
    const name = req.body.name
    const lessons = req.body.lessons
    const stack = req.body.stack

    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack
    }

    courses.push(newCourse)

    res.status(201).send("Curso registrado com sucesso")

})