import { Request, Response } from "express";
import { CharacterDatabase } from "../database/CharacterDatabase";
import { Character } from "../models/Character";

export class CharacterController {

    async getCharacters(req: Request, res: Response) {
        try {
            const characterDatabase = new CharacterDatabase()
            const charactersDB: Character[] = await characterDatabase.findCharacters()

            console.log(charactersDB);

            res.status(200).send(charactersDB)
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
    }
}