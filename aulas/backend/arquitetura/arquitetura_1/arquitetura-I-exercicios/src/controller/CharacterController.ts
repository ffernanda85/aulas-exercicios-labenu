import { Request, Response } from "express";
import { CharacterBusiness } from "../business/CharacterBusiness";

export class CharacterController {

    async getCharacters(req: Request, res: Response) {
        try {
            const input: any = {
                name: req.query.name
            }
            const characterBusiness = new CharacterBusiness()
            const output = await characterBusiness.getCharacters(input)
            console.log(output);
            
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

    async createNewCharacter(req: Request, res: Response): Promise<void> {
        try {
            const input: any = {
                id: req.body.id,
                name: req.body.name,
                series_name: req.body.series_name,
                age: req.body.age
            }
            const characterBusiness = new CharacterBusiness()
            const output = await characterBusiness.createNewCharacter(input)

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

    async updateCharacterById(req: Request, res: Response): Promise<void> {
        try {
            const input: any = {
                id: req.params.id,
                name: req.body.name as string | undefined,
                series_name: req.body.series_name as string | undefined, 
                age: req.body.age as number | undefined
            }
            const characterBusiness = new CharacterBusiness()
            const output = await characterBusiness.updateCharacterById(input)
            
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

    async deleteCharacterById(req: Request, res: Response): Promise<void> {
        try {
            const input: any = {
                id: req.params.id
            }
            const characterBusiness = new CharacterBusiness()
            const output = await characterBusiness.deleteCharacterById(input)

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