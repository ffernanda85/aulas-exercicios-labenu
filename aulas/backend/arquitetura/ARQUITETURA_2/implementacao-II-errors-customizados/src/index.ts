import express from 'express'
import cors from 'cors'
import { UserController } from './controller/UserController'
import { AccountController } from './controller/AccountController'
import { userRouter } from './router/userRouter'
import { accountRouter } from './router/accountRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.use("/users", userRouter)
app.use("/accounts", accountRouter)
