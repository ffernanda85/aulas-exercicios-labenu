import express from 'express'
import cors from 'cors'
import { userRouter } from './router/userRouter'
import { accountRouter } from './router/accountRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

//UTILIZANDO MEDDLEWARES ROOUTER
app.use("/users", userRouter)
//app.get("/users", userController.getUsers)
//app.post("/users", userController.createUser)
app.use("/accounts", accountRouter)
//app.get("/accounts", accountController.getAccounts)
//app.get("/accounts/:id/balance", accountController.getAccountBalance)
//app.post("/accounts", accountController.createAccount)
//app.put("/accounts/:id/balance", accountController.editAccountBalance)
