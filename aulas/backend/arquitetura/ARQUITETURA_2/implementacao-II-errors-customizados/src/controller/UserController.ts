import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { BaseError } from "../errors/BaseError"

export class UserController {
    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: any = {
              q: req.query.q as string | undefined
            }

            const userBusiness = new UserBusiness()
            const output = await userBusiness.getUsers(input)
    
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
                    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try {
            const input: any = {
              id: req.body.id,
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const output = await userBusiness.createUser(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)
                    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}
