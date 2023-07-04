import express, { Request, Response } from 'express'
import cors from 'cors'
import { db } from './database/knex'


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/bands", async (req: Request, res: Response) => {
    try {
        
        const result = await db(`bands`)
        res.status(200).send(result)

    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.post("/bands", async (req: Request, res: Response) => {
    try {
        
        const { id, name } = req.body

        //validação dos dados
        if (!id || !name) {
            res.status(400)
            throw new Error('Dados incompletos, insira o nome e o id')
        } else if (typeof id !== 'string' || typeof name !== 'string') {
            res.status(400)
            throw new Error('Dados inválidos, o id e o name precisam ser string')
        }

        await db.raw(`
            INSERT INTO bands (id, name)
            VALUES ("${id}", "${name}")
        `)
        res.status(200).send({ message: 'Banda adicionada!' })

    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})