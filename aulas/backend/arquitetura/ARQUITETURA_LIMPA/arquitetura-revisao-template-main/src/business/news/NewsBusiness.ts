import { NewsDatabase } from "../../database/news/NewsDatabase"
import { CreateNewsInputDTO, CreateNewsOutputDTO } from "../../dtos/news/createNews.dto"
import { DeleteNewsOutput } from "../../dtos/news/deleteNews.dto"
import { EditNewsInputDTO, EditNewsOutputDTO } from "../../dtos/news/editNews.dto"
import { NotFoundError } from "../../errors/NotFoundError"
import { News, NewsDBModel } from "../../models/news/News"

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

    createNews = async (input: CreateNewsInputDTO): Promise<CreateNewsOutputDTO> => {
        const { title, description, author } = input
        /* Criando números aleatórios para inserir como id */
        let num = Math.floor(Math.random() * (255 - 1) + 1)
        /* modelando os números aleatórios para utilizar como id */
        const id: string = num >= 10 ? 'n0' + num.toString() : num >= 100 ? 'n' + num.toString() : 'n00' + num.toString()
        
        const newsDB: NewsDBModel = {
            id,
            title,
            description,
            published_at: new Date().toISOString(),
            author
        }
        const newsView: News = new News(
            newsDB.id,
            newsDB.title,
            newsDB.description,
            newsDB.published_at,
            newsDB.author
        )
        await this.newsDatabase.insertNews(newsDB)

        const output: CreateNewsOutputDTO = {
            message: 'created news',
            news: newsView
        }
        return output
    }

    editNews = async (input: EditNewsInputDTO): Promise<EditNewsOutputDTO> => {
        const { id, title, description, author } = input
        /* dando select em todos os news */
        const newsDB: NewsDBModel[] = await this.newsDatabase.getAllNews()
        /* verificando se o id já existe */
        const newsDBExists = newsDB.find(item => item.id === id)
        if (!newsDBExists) {
            throw new Error("Id not found");
        }

        const updateNewsDB: NewsDBModel = {
            id,
            title: title || newsDBExists.title,
            description: description || newsDBExists.description,
            published_at: new Date().toISOString(),
            author: author || newsDBExists.author
        }
        await this.newsDatabase.updateNews(updateNewsDB)
       
        const output: EditNewsOutputDTO = {
            message: 'updated news',
            news: {
                id: updateNewsDB.id,
                title: updateNewsDB.title,
                description: updateNewsDB.description,
                publishedAt: updateNewsDB.published_at,
                author: updateNewsDB.author 
            }
        }
        return output
    }

    deleteNews = async (id: string): Promise<DeleteNewsOutput> => {
        
        const newsDB: NewsDBModel[] = await this.newsDatabase.getAllNews()
        const newsDBExists: NewsDBModel | undefined = newsDB.find(item => item.id === id)
        if (!newsDBExists) {
            throw new NotFoundError('ID delete not found');
        }
        await this.newsDatabase.deleteNews(id)

        const output: DeleteNewsOutput = {
            message: 'deleted news',
            news: new News(
                newsDBExists.id,
                newsDBExists.title,
                newsDBExists.description,
                newsDBExists.published_at,
                newsDBExists.author
            )
        }
        return output
    }
}