import { NewsDatabase } from "../database/NewsDatabase"
import { News, NewsDBModel } from "../models/News"

export class NewsBusiness {
    constructor( 
        private newsDatabase: NewsDatabase
    ){}

    getAllNews = async (): Promise<News[]> => {
        const newsData = await this.newsDatabase.getAllNews()
        const news: News[] = newsData.map(item => 
            new News(
                item.id,
                item.title,
                item.description,
                item.published_at,
                item.author
            )    
        )
        return news
    }
}