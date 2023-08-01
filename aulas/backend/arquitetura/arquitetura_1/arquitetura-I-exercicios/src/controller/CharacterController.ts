import { Request, Response } from "express";
import { CharacterBusiness } from "../business/CharacterBusiness";
import { CharacterDB } from "../types";

export class CharacterController {

    async getCharacters(req: Request, res: Response) {
        try {
            const name = req.query.name as string | undefined
            
            const characterBusiness = new CharacterBusiness()
            const output = await characterBusiness.getCharacters(name)
            
            res.status(200).send(output)
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

    async createNewCharacter(req: Request, res: Response) {
        try {
            const input: CharacterDB = {
                id: req.body.id,
                name: req.body.name,
                series_name: req.body.series_name,
                age: req.body.age
            }
            const characterBusiness = new CharacterBusiness()
            const character = await characterBusiness.createNewCharacter(input)
            const output = {
                message: "created character",
                character
            }

            res.status(200).send(output)
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

    async updateCharacterById(req: Request, res: Response) {
        try {
            const input: CharacterDB | undefined = {
                id: req.params.id,
                name: req.body.name,
                series_name: req.body.series_name, 
                age: req.body.age
            }
            const characterBusiness = new CharacterBusiness()
            const character = await characterBusiness.updateCharacterById(input)

            const output = {
                message: "updated character",
                character
            }
            
            res.status(201).send(output)
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

    async deleteCharacterById(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const characterBusiness = new CharacterBusiness()
            const deletedCharacter = await characterBusiness.deleteCharacterById(id)

            const output = {
                message: "deleted character",
                deleted: deletedCharacter
            }
            res.status(200).send(output)
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