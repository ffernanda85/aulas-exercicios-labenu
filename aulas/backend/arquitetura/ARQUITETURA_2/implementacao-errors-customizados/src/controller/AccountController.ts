import { Request, Response } from "express"
import { AccountDatabase } from "../database/AccountDatabase"
import { Account } from "../models/Account"
import { AccountDB } from "../types"
import { BaseError } from "../errors/BaseError"
import { NotFoundError } from "../errors/NotFoundError"
import { BadRequestError } from "../errors/BadRequestError"
import { AccountBusiness } from "../business/AccountBusiness"

export class AccountController {
    public getAccounts = async (req: Request, res: Response) => {
        try {
            /* const accountDatabase = new AccountDatabase()
            const accountsDB: AccountDB[] = await accountDatabase.findAccounts()
    
            const accounts = accountsDB.map((accountDB) => new Account(
                accountDB.id,
                accountDB.balance,
                accountDB.owner_id,
                accountDB.created_at
            )) */
            const accountBusiness = new AccountBusiness()
            const output = await accountBusiness.getAccounts()
                console.log(output)
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
        
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public getAccountBalance = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
    
            const accountDatabase = new AccountDatabase()
            const accountDB = await accountDatabase.findAccountById(id)
    
            if (!accountDB) {
                throw new NotFoundError("'id' não encontrado")
            }
    
            const account = new Account(
                accountDB.id,
                accountDB.balance,
                accountDB.owner_id,
                accountDB.created_at
            )
    
            const balance = account.getBalance()
    
            res.status(200).send({ balance })
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public createAccount = async (req: Request, res: Response) => {
        try {
            const { id, ownerId } = req.body
    
            if (typeof id !== "string") {
                throw new BadRequestError("'id' deve ser string")
            }
    
            if (typeof ownerId !== "string") {
                throw new BadRequestError("'ownerId' deve ser string")
            }
    
            const accountDatabase = new AccountDatabase()
            const accountDBExists = await accountDatabase.findAccountById(id)
    
            if (accountDBExists) {
                throw new BadRequestError("'id' já existe")
            }
    
            const newAccount = new Account(
                id,
                0,
                ownerId,
                new Date().toISOString()
            )
    
            const newAccountDB: AccountDB = {
                id: newAccount.getId(),
                balance: newAccount.getBalance(),
                owner_id: newAccount.getOwnerId(),
                created_at: newAccount.getCreatedAt()
            }
    
            await accountDatabase.insertAccount(newAccountDB)
            res.status(201).send(newAccount)
        } catch (error) {
            console.log(error)
   
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public editAccountBalance = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const value = req.body.value
    
            if (typeof value !== "number") {
                throw new BadRequestError("'value' deve ser number")
            }
    
            const accountDatabase = new AccountDatabase()
            const accountDB = await accountDatabase.findAccountById(id)
    
            if (!accountDB) {
                throw new NotFoundError("'id' não encontrado")
            }
    
            const account = new Account(
                accountDB.id,
                accountDB.balance,
                accountDB.owner_id,
                accountDB.created_at
            )
    
            const newBalance = account.getBalance() + value
            account.setBalance(newBalance)
    
            await accountDatabase.updateBalanceById(id, newBalance)
            res.status(200).send(account)
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}
