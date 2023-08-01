import express, { Request, Response } from 'express'
import cors from 'cors'
import { CharacterController } from './controller/CharacterController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

const characterController = new CharacterController()

app.get("/characters", characterController.getCharacters)

app.post("/characters", characterController.createNewCharacter)

app.put("/characters/:id", characterController.updateCharacterById)

app.delete("/characters/:id", characterController.deleteCharacterById)
