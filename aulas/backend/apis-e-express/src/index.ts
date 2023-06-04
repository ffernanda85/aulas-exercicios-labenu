import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses } from './database'

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
