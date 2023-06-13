import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './database'
import { ACCOUNT_TYPE, TAccount } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

app.get("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const findAccount = accounts.find(account => account.id === id)

    if (!findAccount) {
        return res.status(400).send("Account not found!")
    }
    res.status(200).send(findAccount)
})

app.delete("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const findIndexAccount = accounts.findIndex(account => account.id === id)

    if (findIndexAccount >= 0) {//O valor zero é considerado como false, por isso precisamos tratar o findIndex como >= 0
        accounts.splice(findIndexAccount, 1)
        return res.status(200).send("Account deletado com sucesso!")
    }
    res.status(400).send("Account not found")
})

app.put("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const { id: newId, ownerName, balance, type } = req.body as TAccount | undefined
    
    const findAccount = accounts.find(account => account.id === id)

    if (!findAccount) {
        return res.status(400).send("Account not found!")
    }

    

    findAccount.id = newId || findAccount.id
    findAccount.ownerName = ownerName || findAccount.ownerName
    findAccount.balance = balance || findAccount.balance
    findAccount.type = type !== ACCOUNT_TYPE.BLACK &&
                       type !== ACCOUNT_TYPE.BRONZE &&
                       type !== ACCOUNT_TYPE.GOLD &&
                       type !== ACCOUNT_TYPE.PLATINUM &&
                       type !== ACCOUNT_TYPE.SILVER ? findAccount.type : type

    res.status(200).send("Atualização realizada com sucesso!")
})
