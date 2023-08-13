import { Request, Response } from "express";
import { getAuthorInputDTO } from "../dtos/getAuthors.dto";
import { AuthorBusiness } from "../business/AuthorBusiness";
import { ZodError } from "zod";
import { BaseError } from "../errors/BaseError";

export class AuthorController{
    constructor(
        private authorBusiness: AuthorBusiness
    ){}

    getAuthors = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: getAuthorInputDTO = {
                q: req.query.q as string | undefined
            }
            const result = await this.authorBusiness.getAuthors(input)
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
    
}