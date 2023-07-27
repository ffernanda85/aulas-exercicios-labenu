import { Request, Response } from "express";
import { CharacterDatabase } from "../database/CharacterDatabase";
import { Character } from "../models/Character";
import { CharacterDB } from "../types";

export class CharacterController {

    async getCharacters(req: Request, res: Response): Promise<void> {
        try {
            const characterDatabase = new CharacterDatabase()
            const charactersDB: CharacterDB[] = await characterDatabase.findCharacters()

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

    async createNewCharacter(req: Request, res: Response): Promise<void> {
        try {
            const characterDatabase = new CharacterDatabase()
            const { id, name, series_name, age } = req.body

            const checkIdExist = await characterDatabase.findCharacterById(id)
            if (checkIdExist) {
                res.status(400)
                throw new Error("'ID' exists");
            }

            if (id !== undefined) {
                if (typeof id !== "string") {
                    res.status(400)
                    throw new Error("'id' deve ser string")
                }
            } else {
                res.status(400)
                throw new Error("Insira um 'ID")
            }

            if (name !== undefined) {
                if (typeof name !== "string") {
                    res.status(400)
                    throw new Error("'NAME' deve ser string")
                }
            } else {
                res.status(400)
                throw new Error("Insira um 'NAME")
            }

            if (series_name !== undefined) {
                if (typeof series_name !== "string") {
                    res.status(400)
                    throw new Error("'NOME DA SÉRIE' deve ser string")
                }
            } else {
                res.status(400)
                throw new Error("Insira um 'NOME DA SÉRIE")
            }

            if (age !== undefined) {
                if (typeof age !== "number") {
                    res.status(400)
                    throw new Error("'IDADE' deve ser number")
                }
            } else {
                res.status(400)
                throw new Error("Insira um 'IDADE")
            }

            const newCharacter = new Character(
                id,
                name,
                series_name,
                age
            )

            await characterDatabase.insertCharacter(newCharacter)

            console.log(newCharacter);

            res.status(200).send({ message: "Registered Character" })

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
            const characterDatabase = new CharacterDatabase()
            const idToUpdate = req.params.id
            const { name, series_name, age } = req.body

            const characterExist = await characterDatabase.findCharacterById(idToUpdate)

            if (!characterExist) {
                res.status(404)
                throw new Error("'ID' not found");
            }

            if (name !== undefined) {
                if (typeof name !== "string") {
                    res.status(400)
                    throw new Error("'NAME' precisa ser uma string");
                }
            }

            if (series_name !== undefined) {
                if (typeof series_name !== "string") {
                    res.status(400)
                    throw new Error("'NOME DA SÉRIE' precisa ser uma string");
                }
            }

            if (age !== undefined) {
                if (typeof age !== "number") {
                    res.status(400)
                    throw new Error("'IDADE' precisa ser um number");
                }
            }

            const newCharacter = new Character(
                idToUpdate,
                name || characterExist.name,
                series_name || characterExist.series_name,
                age || characterExist.age
            )
            await characterDatabase.updateCharacter(newCharacter)
            res.status(201).send({ message: "Updated character" })

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
            const idToDelete = req.params.id
            const characterDatabase = new CharacterDatabase()

            const characterExist = await characterDatabase.findCharacterById(idToDelete)
            if (!characterExist) {
                res.status(404)
                throw new Error("'ID' not Found");
            }

            await characterDatabase.deleteCharacter(idToDelete)
            console.log(characterExist);
            res.status(200).send({ message: "Deleted character" })

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