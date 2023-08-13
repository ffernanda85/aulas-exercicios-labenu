import { Request, Response } from "express";
import { NewsBusiness } from "../business/NewsBusiness";
import { ZodError } from "zod";
import { CreateNewsInputDTO, CreateNewsSchema } from "../dtos/createNews.dto";
import { EditNewsOutputDTO, EditNewsSchema } from "../dtos/editNews.dto";
import { BaseError } from "../errors/BaseError";

export class NewsController{
    constructor(
        private newsBusiness: NewsBusiness
    ) {}
    
    getNews = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.newsBusiness.getAllNews()
            res.status(200).send(result)
        } catch (error: unknown) {
            console.log(error)

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send('unexpected error')
            }
        }
    }

    createNews = async (req: Request, res: Response): Promise<void> => {
        try {

            const input = CreateNewsSchema.parse({
                title: req.body.title,
                description: req.body.description,
                author: req.body.author
            })

            const output = await this.newsBusiness.createNews(input)
            res.status(201).send(output)
            
        } catch (error: unknown) {
            console.log(error)

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send('unexpected error')
            }
        }
    }

    editNews = async (req: Request, res: Response): Promise<void> => {
        try {
            const input = EditNewsSchema.parse({
                id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                author: req.body.author
            })

            const output: EditNewsOutputDTO = await this.newsBusiness.editNews(input)
            res.status(200).send(output)
        } catch (error: unknown) {
            console.log(error)

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send('unexpected error')
            }
        }
    }

    deleteNews = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id
            const output = await this.newsBusiness.deleteNews(id)
            res.status(200).send(output)
        } catch (error: unknown) {
            console.log(error)

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send('unexpected error')
            }
        }
    }
}