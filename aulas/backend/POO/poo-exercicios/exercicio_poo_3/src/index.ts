import express, { Request, Response } from 'express'
import cors from 'cors'
import { CharacterDatabase } from './database/CharacterDatabase'
import { CharacterDB } from './types'
import { Character } from './models/Character'
import { CharacterController } from './controller/CharacterController'

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

const characterController = new CharacterController()

app.get("/characters", characterController.getCharacters)

app.post("/characters", characterController.createNewCharacter)

app.put("/characters/:id", characterController.updateCharacterById)

app.delete("/characters/:id", characterController.deleteCharacterById)




/* app.get("/videos", async (req: Request, res: Response) => {
    try {
        const videoDatabase = new VideoDatabase()
        const videosDB = await videoDatabase.findVideos()

        const videos = videosDB.map(video => 
            new Video(
                video.id,
                video.title,
                video.duration,
                video.date_upload
            )
        )
        res.status(200).send(videos)
    } catch (error: unknown) {
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

app.post("/videos", async (req: Request, res: Response) => {
    try {
        
        const { id, title, duration } = req.body
        const videoDatabase = new VideoDatabase()
        
        if (id !== undefined) {
            if (typeof id !== "string") {
                res.status(400)
                throw new Error("'id' deve ser string")
            }
        } else {
            res.status(400)
            throw new Error("Insira um 'ID")
        }

        if (title !== undefined) {
            if (typeof title !== "string") {
                res.status(400)
                throw new Error("'TITLE' deve ser string")
            }
        } else {
            res.status(400)
            throw new Error("Insira um 'TITLE")
        }

        if (duration !== undefined) {
            if (typeof duration !== "number") {
                res.status(400)
                throw new Error("'DURATION' deve ser number")
            }
        } else {
            res.status(400)
            throw new Error("Insira um 'DURATION")
        }
        
        const idExistDB = await videoDatabase.findVideoById(id)
        if (idExistDB) {
            res.status(400)
            throw new Error("'id' já existe")
        }

        const newVideo = new Video(
            id,
            title,
            duration,
            new Date().toISOString()
        )
        await videoDatabase.insertVideo(newVideo)
        const videoDB = await videoDatabase.findVideoById(id)

        res.status(201).send(videoDB)
    } catch (error: unknown) {
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

app.put("/videos/:id", async (req: Request, res: Response) => {
    try {
        const idToUpdate = req.params.id 
        const { title, duration, date_upload } = req.body
        const videoDatabase = new VideoDatabase()

        const idExistDB = await videoDatabase.findVideoById(idToUpdate)
        if (!idExistDB) {
            res.status(404)
            throw new Error("'ID' não encontrado!");
        }

        if (title !== undefined) {
            if (typeof title !== "string") {
                res.status(400)
                throw new Error("'TITLE' precisa ser uma string");
            }
        }

        if (duration !== undefined) {
            if (typeof duration !== "number"){
                res.status(400)
                throw new Error("'DURATION' precisa ser um number");
            }
        }

        const videoUpdate = new Video(
            idToUpdate,
            title || idExistDB.title,
            duration || idExistDB.duration,
            date_upload || new Date().toISOString()
        )
        
        await videoDatabase.updateVideoById(idToUpdate, videoUpdate)
        
        res.status(200).send(videoUpdate)

    } catch (error: unknown) {
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

app.delete("/videos/:id", async (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id
        const videoDatabase = new VideoDatabase()

        const idExistDB = await videoDatabase.findVideoById(idToDelete)
        if (!idExistDB) {
            res.status(404)
            throw new Error("'ID' not found!");
        }

        await videoDatabase.deleteVideoById(idToDelete)
        res.status(200).send(idExistDB)
    } catch (error: unknown) {
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
}) */