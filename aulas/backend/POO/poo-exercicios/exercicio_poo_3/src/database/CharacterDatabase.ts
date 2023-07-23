import { BaseDatabase } from "./BaseDatabase";

export class CharacterDatabase extends BaseDatabase{

    

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