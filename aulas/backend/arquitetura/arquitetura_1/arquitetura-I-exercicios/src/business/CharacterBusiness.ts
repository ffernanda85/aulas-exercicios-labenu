import { CharacterDatabase } from "../database/CharacterDatabase"
import { Character } from "../models/Character"
import { CharacterDB } from "../types"

export class CharacterBusiness{
    getCharacters = async (input: any) => {
        const { name } = input
        const characterDatabase = new CharacterDatabase()
        const charactersDB: CharacterDB[] = await characterDatabase.findCharacters(name)

        const characters = charactersDB.map(character =>
            new Character(
                character.id,
                character.name,
                character.series_name,
                character.age
            ))
        return characters
    }

    createNewCharacter = async (input: any) => {
        const { id, name, series_name, age } = input
        const characterDatabase = new CharacterDatabase()

        const characterDBExist: CharacterDB = await characterDatabase.findCharacterById(id)
        if (characterDBExist) {
            throw new Error("'ID' already exists");
        }
        if (id !== undefined) {
            if (typeof id !== "string") {
              throw new Error("'id' deve ser string")
            }
        } else {
            throw new Error("Insira um 'ID")
        }
        if (name !== undefined) {
            if (typeof name !== "string") {
                throw new Error("'NAME' deve ser string")
            }
        } else {
            throw new Error("Insira um 'NAME")
        }
        if (series_name !== undefined) {
            if (typeof series_name !== "string") {
                throw new Error("'NOME DA SÉRIE' deve ser string")
            }
        } else {
            throw new Error("Insira um 'NOME DA SÉRIE")
        }
        if (age !== undefined) {
            if (typeof age !== "number") {
                throw new Error("'IDADE' deve ser number")
            }
        } else {
            throw new Error("Insira um 'IDADE")
        }

        const newCharacter = new Character(
            id,
            name,
            series_name,
            age
        )
        /* const newCharacterDB: CharacterDB = {
            id: newCharacter.getId(),
            name: newCharacter.getName(),
            series_name: newCharacter.getSeriesName(),
            age: newCharacter.getAge()
        } */
        await characterDatabase.insertCharacter(newCharacter)
        const output = {
            message: "created character",
            newCharacter
        }
        return output
    }

    updateCharacterById = async (input: any) => {
        const { id, name, series_name, age } = input
        const characterDatabase = new CharacterDatabase()
        const characterDBExist = await characterDatabase.findCharacterById(id)
        if (!characterDBExist) {
            throw new Error("ID not found");
        }
        if (name !== undefined) {
            if (typeof name !== "string") {
                throw new Error("'NAME' precisa ser uma string");
            }
        }
        if (series_name !== undefined) {
            if (typeof series_name !== "string") {
                throw new Error("'NOME DA SÉRIE' precisa ser uma string");
            }
        }
        if (age !== undefined) {
            if (typeof age !== "number") {
                throw new Error("'IDADE' precisa ser um number");
            }
        }
        const newCharacter = new Character(
            id,
            name || characterDBExist.name,
            series_name || characterDBExist.series_name,
            age || characterDBExist.age
        )
        await characterDatabase.updateCharacter(newCharacter)
        const output: {} = {
            message: "updated character",
            newCharacter
        }
        return output  
    }

    deleteCharacterById = async (input: any) => {
        const { id } = input
        const characterDatabase = new CharacterDatabase()
        const characterDBExist = await characterDatabase.findCharacterById(id)
        if (!characterDBExist) {
            throw new Error("'ID' not found");
        }
        await characterDatabase.deleteCharacter(id)
        const output: {} = {
            message: "deleted character",
            characterDBExist
        }
        return output
    }
}