import { Request, Response } from "express";
import { NewsBusiness } from "../business/NewsBusiness";

export class NewsController{
    constructor(
        private newsBusiness: NewsBusiness
    ) {}
    
    getNews = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.newsBusiness.getAllNews()
            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}