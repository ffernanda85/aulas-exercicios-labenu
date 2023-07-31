import { Character } from "../models/Character";
import { CharacterDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CharacterDatabase extends BaseDatabase {
    static TABLE_CHAR = "characters"

    async findCharacters(name: string | undefined): Promise<CharacterDB[]> {
        let charactersDB

        if (name) { 
            const result = await BaseDatabase.connection(CharacterDatabase.TABLE_CHAR).where("name", "LIKE", `%${name}%`)
            charactersDB = result
        } else {
            const result = await BaseDatabase.connection(CharacterDatabase.TABLE_CHAR)
            charactersDB = result
        }

        return charactersDB
    }

    async findCharacterById(id: string) {
        const [characterDB]: CharacterDB[] | undefined = await BaseDatabase.connection(CharacterDatabase.TABLE_CHAR).where({ id })
        return characterDB
    }

    async insertCharacter(newCharacter: Character): Promise<void> {
        await BaseDatabase.connection(CharacterDatabase.TABLE_CHAR).insert({
            id: newCharacter.getId(),
            name: newCharacter.getName(),
            series_name: newCharacter.getSeriesName(),
            age: newCharacter.getAge()
        })
    }

    async updateCharacter(newCharacter: Character): Promise<void> {
        await BaseDatabase.connection(CharacterDatabase.TABLE_CHAR).update({
            id: newCharacter.getId(),
            name: newCharacter.getName(),
            series_name: newCharacter.getSeriesName(),
            age: newCharacter.getAge()
        }).where({ id: newCharacter.getId() })
    }

    async deleteCharacter(id: string): Promise<void> {
        await BaseDatabase.connection(CharacterDatabase.TABLE_CHAR).del().where({ id })
    }

}





















/* async findVideos(): Promise<TVideo[]> {
        const videosDB: TVideo[] = await BaseDatabase.connection("videos")
        return videosDB
    }

    async findVideoById(id: string): Promise<TVideo> {
        const [videoDB] = await BaseDatabase.connection("videos").where({ id: id })
        return videoDB
    }

    async insertVideo(newVideo: Video): Promise<void> {
        await BaseDatabase.connection("videos").insert(
            {
                id: newVideo.getId(),
                title: newVideo.getTitle(),
                duration: newVideo.getDuration(),
                date_upload: newVideo.getDateUpload()
            }
        )
    }

    async updateVideoById(id: string, videoUpdate: Video): Promise<void> {
        await BaseDatabase.connection("videos").update({
            id: videoUpdate.getId(),
            title: videoUpdate.getTitle(),
            duration: videoUpdate.getDuration(),
            date_upload: videoUpdate.getDateUpload()
        }).where({id: id})
    }

    async deleteVideoById(id: string): Promise<void> {
        await BaseDatabase.connection("videos").del().where({ id : id })
    } */