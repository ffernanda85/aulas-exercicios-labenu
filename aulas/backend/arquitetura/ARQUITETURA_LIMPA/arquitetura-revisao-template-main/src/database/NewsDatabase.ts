import { NewsDBModel } from "../models/News";
import { BaseDatabase } from "./BaseDatabase";

export class NewsDatabase extends BaseDatabase{
    private static TABLE_NAME = 'news'
    
    getAllNews = async (): Promise<NewsDBModel[]> => {
        const result: NewsDBModel[] = await BaseDatabase.connection(NewsDatabase.TABLE_NAME)
        return result
    }
}