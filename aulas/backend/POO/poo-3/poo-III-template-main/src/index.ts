import express, { Request, Response } from 'express'
import cors from 'cors'
import { AccountDB, UserDB } from './types'
import { User } from './models/User'
import { Account } from './models/Account'
import { UserDatabase } from './database/UserDatabase'
import { AccountDatabase } from './database/AccountDatabase'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/users", async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string | undefined

        const userDatabase = new UserDatabase()
        const usersDB = await userDatabase.findUsers(q)

        const users: User[] = usersDB.map((userDB) => new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.created_at
        ))

        res.status(200).send(users)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.post("/users", async (req: Request, res: Response) => {
    try {
        const { id, name, email, password } = req.body

        if (typeof id !== "string") {
            res.status(400)
            throw new Error("'id' deve ser string")
        }

        if (typeof name !== "string") {
            res.status(400)
            throw new Error("'name' deve ser string")
        }

        if (typeof email !== "string") {
            res.status(400)
            throw new Error("'email' deve ser string")
        }

        if (typeof password !== "string") {
            res.status(400)
            throw new Error("'password' deve ser string")
        }

        const userDatabase = new UserDatabase()
        const userDBExists = await userDatabase.findUserById(id)

        if (userDBExists) {
            res.status(400)
            throw new Error("'id' já existe")
        }

        const newUser = new User(
            id,
            name,
            email,
            password,
            new Date().toISOString()
        ) // yyyy-mm-ddThh:mm:sssZ

        const newUserDB: UserDB = {
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            created_at: newUser.getCreatedAt()
        }

        await userDatabase.insertUser(newUserDB)

        res.status(201).send(newUser)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/accounts", async (req: Request, res: Response) => {
    try {
        const accountDatabase = new AccountDatabase()
        const accountsDB: AccountDB[] = await accountDatabase.findAccounts()

        const accounts = accountsDB.map((accountDB) => new Account(
            accountDB.id,
            accountDB.balance,
            accountDB.owner_id,
            accountDB.created_at
        ))

        res.status(200).send(accounts)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/accounts/:id/balance", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const accountDatabase = new AccountDatabase()
        const accountDB= await accountDatabase.findAccountById(id)

        if (!accountDB) {
            res.status(404)
            throw new Error("'id' não encontrado")
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

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})


app.post("/accounts", async (req: Request, res: Response) => {
    try {
        const { id, ownerId } = req.body

        if (typeof id !== "string") {
            res.status(400)
            throw new Error("'id' deve ser string")
        }

        if (typeof ownerId !== "string") {
            res.status(400)
            throw new Error("'ownerId' deve ser string")
        }

        const accountDatabase = new AccountDatabase()
        const accountDBExists = await accountDatabase.findAccountById(id)

        if (accountDBExists) {
            res.status(400)
            throw new Error("'id' já existe")
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

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.put("/accounts/:id/balance", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const value = req.body.value

        if (typeof value !== "number") {
            res.status(400)
            throw new Error("'value' deve ser number")
        }

        const accountDatabase = new AccountDatabase()
        const accountDB = await accountDatabase.findAccountById(id)

        if (!accountDB) {
            res.status(404)
            throw new Error("'id' não encontrado")
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

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})