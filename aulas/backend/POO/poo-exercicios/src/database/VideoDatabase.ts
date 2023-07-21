import { TVideo } from "../types";
import { BaseDatabase } from "./BaseDatabase";
import { Video } from "../models/Video";

export class VideoDatabase extends BaseDatabase{

    async findVideos(): Promise<TVideo[]> {
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

}