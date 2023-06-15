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
    try {
        
        const id = req.params.id
        const findAccount = accounts.find(account => account.id === id)
        
        if (!findAccount) {
            res.statusCode = 404
            throw new Error("Account not found!")
        }
        res.status(200).send(findAccount)

    } catch (error) {
        console.log(error)
        
        if (res.statusCode === 200) {
            res.status(500)//erro inesperado do servidor
        }

        if (error instanceof Error) {//verifica se o error é uma instância da classe Error
            res.send(error.message)  //caso sim, retornamos com o error.message
        } else {
            res.send("Unexpected error")//caso não, retornamos com  o erro inesperado
        }
    }
})

app.delete("/accounts/:id", (req: Request, res: Response) => {
    try {
        
        const id = req.params.id

        if (id && id.charAt(0) !== "a") {//verificando se o primeiro caracter do id recebido é "a"
            res.statusCode = 400
            throw new Error("Invalid 'id'. Must start with the letter 'a'!");
        }

        const findIndexAccount = accounts.findIndex(account => account.id === id)
    
        if (findIndexAccount >= 0) {//O valor zero é considerado como false, por isso precisamos tratar o findIndex como >= 0
            accounts.splice(findIndexAccount, 1)
            return res.status(200).send("Account deleted!")
        } else {
            res.statusCode = 404
            throw new Error("Account not found");
        }

    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error")
        }
    }
})

app.put("/accounts/:id", (req: Request, res: Response) => {
    try {
        
        const id = req.params.id

        const { id: newId, ownerName, balance, type } = req.body

        //verificando se o id foi enviado pelo body
        if (newId !== undefined) {
            //verificando se o newId é uma string e se começa com "a"
            if (typeof newId !== "string" || newId[0] !== "a") {
                res.status(400)
                throw new Error("Invalid Id!");
            }
        }
        
        //verificando se o ownerName foi enviado
        if (ownerName !== undefined) {
            //verificando se o ownerName é um string ou maior que dois caracteres
            if (typeof ownerName !== "string" || ownerName.length < 2) {
                res.status(400)
                throw new Error("Invalid OwnerName!");
            }
        }
 
        //verificando se o balance está sendo recebido
        if (balance !== undefined) {
            //verificando se balance é do tipo number
            if (typeof balance !== "number") {
                res.status(422)
                throw new Error("the balance value must be numeric");
            }
            //verificando se o balance é menor que zero
            if (balance < 0) {
                res.status(400)
                throw new Error("the balance value must be equal to or greater than zero");
            }
        } 
        
        //verificando se o type foi recebido
        if (type !== undefined) {
            if (
                type !== ACCOUNT_TYPE.BLACK &&
                type !== ACCOUNT_TYPE.GOLD &&
                type !== ACCOUNT_TYPE.PLATINUM
            ) {
                res.statusCode = 400
                throw new Error("Invalid value of type!");
            }
        }

        const findAccount = accounts.find(account => account.id === id)
    
        if (!findAccount) {
            res.statusCode = 404
            throw new Error("Account not found!");
        }
                    
        findAccount.id = newId || findAccount.id
        findAccount.ownerName = ownerName || findAccount.ownerName
        findAccount.balance = balance >= 0 ? balance : findAccount.balance
        findAccount.type = type || findAccount.type 

        accounts.sort((a, b) => {
            if (a.id < b.id) {
                return -1
            } else if (a.id > b.id) {
                return 1
            } else {
                return 0
            }
        })
        res.status(200).send("Update performed successfully!")

    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error")
        }
    }
})

app.post("/accounts", (req: Request, res: Response) => {
    const { id, ownerName, balance, type } = req.body as TAccount
    
    const newAccount: TAccount = {
        id,
        ownerName,
        balance,
        type
    }

    accounts.push(newAccount)
    accounts.sort((a, b) => {
        if (a.id < b.id) {
            return -1
        } else if (a.id > b.id) {
            return 1
        } else {
            return 0
        }
    })
    res.status(201).send("Registration done successfully!")
})
