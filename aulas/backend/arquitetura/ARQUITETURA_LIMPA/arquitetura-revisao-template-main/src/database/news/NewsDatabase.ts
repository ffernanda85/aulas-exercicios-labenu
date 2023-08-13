import { NewsDBModel } from "../../models/news/News";
import { BaseDatabase } from "../BaseDatabase";

export class NewsDatabase extends BaseDatabase{
    private static TABLE_NAME = 'news'
    
    getAllNews = async (): Promise<NewsDBModel[]> => {
        const result: NewsDBModel[] = await BaseDatabase.connection(NewsDatabase.TABLE_NAME)
        return result
    }

    insertNews = async (input: NewsDBModel): Promise<void> => {
        await BaseDatabase.connection(NewsDatabase.TABLE_NAME).insert(input)
    }

    updateNews = async (input: NewsDBModel): Promise<void> => {
        await BaseDatabase.connection(NewsDatabase.TABLE_NAME).update(input).where({id: input.id})
    }

    deleteNews = async (id: string): Promise<void> => {
        await BaseDatabase.connection(NewsDatabase.TABLE_NAME).del().where({id:id})
    }
}