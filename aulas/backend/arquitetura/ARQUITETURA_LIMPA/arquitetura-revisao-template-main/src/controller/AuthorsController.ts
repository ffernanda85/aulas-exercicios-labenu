import { Request, Response } from "express";
import { getAuthorInputDTO } from "../dtos/getAuthorInputDTO";
import { AuthorBusiness } from "../business/AuthorBusiness";

export class AuthorController{
    constructor(
        private authorBusiness: AuthorBusiness
    ){}

    getAuthor = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: getAuthorInputDTO = {
                q: req.query.q as string | undefined
            }
            const result = await this.authorBusiness.getAuthor(input)
            res.status(200).send(result)
        } catch (error: any) {
            console.log(error) 
            res.status(400).send(error.message)
        }
    }
}