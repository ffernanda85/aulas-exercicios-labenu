import { Request, Response } from "express"
import { AccountBusiness } from "../business/AccountBusiness"
import { BaseError } from "../errors/BaseError"

export class AccountController {
    public getAccounts = async (req: Request, res: Response) => {
        try {
            const accountBusiness = new AccountBusiness()
            const output = await accountBusiness.getAccounts()

            res.status(200).send(output)
        } catch (error) {
            console.log(error)
        
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("unexpected error")
            }
        }
    }

    public getAccountBalance = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.params.id
            }
            const accountBusiness = new AccountBusiness()
            const balance = await accountBusiness.getAccountBalance(input)

            res.status(200).send({ balance })
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("unexpected error")
            }
        }
    }

    public createAccount = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.body.id,
                ownerId: req.body.ownerId
            }
            const accountBusiness = new AccountBusiness()
            const output = await accountBusiness.createAccount(input)
    
            res.status(201).send(output)
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("unexpected error")
            }
        }
    }

    public editAccountBalance = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.params.id,
                value: req.body.value
            }
            const accountBusiness = new AccountBusiness()
            const output = await accountBusiness.editAccountBalance(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("unexpected error")
            }
        }
    }
}